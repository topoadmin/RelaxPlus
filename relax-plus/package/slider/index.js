import element from './slider.vue'

element.install = function (app) {
  app.component(element.name, element)
}

export default element
