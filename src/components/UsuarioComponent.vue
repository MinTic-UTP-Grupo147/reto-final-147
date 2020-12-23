<template>
  <div id="app">
    <v-app id="inspire">
      <v-data-table
        :headers="headers"   
        :items="usuarios"   
        sort-by="nombre"
        class="elevation-1"
        :loading="cargando"
        loading-text="Loading.... Please wait"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Usuarios</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  Nuevo Usuario
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          v-model="editedItem.nombre"
                          label="Nombre"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="editedItem.email"
                          label="email"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="editedItem.password"
                          label="Clave"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="editedItem.rol"
                          label="Rol"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="editedItem.estado"
                          label="Estado"
                        ></v-text-field>
                      </v-col>
                      
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                
                <v-card-title class="headline">
                  <template v-if="editedItem.estado">Quieres Desactivar el usuario?</template>
                  <template v-else>Quieres Activar el usuario?</template>
                </v-card-title>
                
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >OK</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon 
          medium 
          @click="deleteItem(item)">
           <template v-if="item.estado">mdi-toggle-switch</template>
           <template v-else>mdi-toggle-switch-off-outline</template>
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
      </v-data-table>
    </v-app>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name:'UsuarioComponent',
  data: () => ({
    dialog: false,
    dialogDelete: false,
    cargando: true,
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: true,
        value: "id",
      },
      { text: "Nombre", value: "nombre" },
      { text: "Correo", value: "email" },
            
      { text: "Rol", value: "rol" }, 
      { text: "Estado", value: "estado" }, 
      { text: "Actions", value: "actions", sortable: false },
    ],
    
    usuarios: [],  /// array vacio para almacenar lo traido de db

    editedIndex: -1,
    editedItem: {
      id: 0,
      nombre: "",
      email: "",
      password:"",
      rol:"",
      estado: 0,
      
    },
    defaultItem: {
      id: 0,
      nombre: "",
      email: "",
      password:"",
      rol:"",
      estado: 0,      
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.list();  // se ejecuta inmediatamente se abre la pagina
  },

  methods: {
   
    list(){
      axios.get('http://localhost:3000/api/usuario/list',{
        headers:{
          token: this.$store.state.token
        }
      })
      .then(response =>{
        this.usuarios = response.data;   // llenar el array de arriba con lo que hay en la db
        this.cargando = false;
      })
      .catch(error =>{
        console.log(error);
      })
    },

    editItem(item) {
      this.editedIndex = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
       if (this.editedItem.estado === 1 ) {
        // ya existe entonces modificar con un put
        axios.put('http://localhost:3000/api/usuario/deactivate',{
          "id": this.editedItem.id,
         
        },{
        headers:{
          token: this.$store.state.token
        }
        })
          .then(response =>{
            this.list();
          })
          .catch(error =>{
            return error;
          })
       
      } else {
        // no existe entonces crear con un post
        axios.put('http://localhost:3000/api/usuario/activate',{       
          "id": this.editedItem.id,
        },{
        headers:{
          token: this.$store.state.token
        }
        })
          .then(response =>{
            this.list();
          })
          .catch(error =>{
            return error;
          })
      }
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        // ya existe entonces modificar con un put
        axios.put('http://localhost:3000/api/usuario/update',{
          "id": this.editedItem.id,
          "nombre": this.editedItem.nombre,
          "email": this.editedItem.email,
          "rol": this.editedItem.rol,
          
        },{
        headers:{
          token: this.$store.state.token
        }
        })
          .then(response =>{
            this.list();
          })
          .catch(error =>{
            return error;
          })
       
      } else {
        // no existe entonces crear con un post
        axios.post('http://localhost:3000/api/usuario/add',{       
          "id": this.editedItem.id,
          "codigo": this.editedItem.codigo,
          "nombre": this.editedItem.nombre,
          "email": this.editedItem.email,
          "password": this.editedItem.password,
          "rol": this.editedItem.rol,
          "estado": this.editedItem.estado,
        },{
        headers:{
          token: this.$store.state.token
        }
        })
          .then(response =>{
            this.list();
          })
          .catch(error =>{
            return error;
          })
      }
      this.close();
    },
  },
};
</script>