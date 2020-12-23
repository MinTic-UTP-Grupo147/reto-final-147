import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import es from 'vuetify/lib/locale/es';
import '@mdi/font/css/materialdesignicons.css' 

Vue.use(Vuetify);

export default new Vuetify({
   theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
      },
    },
  },
    lang: {
      locales: { es },
      current: 'es',
    },
  icons: {
    iconfont: 'md',
    
    },
});
