import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#121212', // a color that is not in the material colors palette
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  },
})
Vue.filter('timestamp_format', function (value) {
  const timestamp = new Date(value)
  let date = timestamp.toLocaleDateString('en-BD')
  let time = timestamp.toLocaleTimeString('en-BD')
  return date + ' ' + time
})