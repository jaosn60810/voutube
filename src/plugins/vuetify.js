import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import '@/scss/index.scss'
import '@/scss/variables.scss'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    dark: true,
    themes: {
      dark: {
        primary: '#202020',
        secondary: '#181818',
        tertiary: '#383838',
        accent: '#ff0000',
        info: '#3EA6FF',
        title: '#FFFFFF',
        subtitle: '#909090',
        primaryDarker: '#121212',
      },
      light: {
        primaryDark: '#040404',
        secondaryDark: '#0c0c0c',
        teritaryDark: '#121212',
        primaryGray: '#282828',
      },
    },
  },
})
