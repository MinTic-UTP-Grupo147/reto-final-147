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
        primary: '#680F75',
        secondary: '#E46AF7',
        accent: '#D71FF5',
        error: '#6C3275',
        info: '#AB19C2',
        success: '#DDC7DD',
        warning: '#D71FC2'
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
