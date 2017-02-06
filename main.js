Vue.component('button-img', {
  props: ['img'],
  template: '<button type="button">{{ img.name }}</button>'
})

var app = new Vue({
  el: '#app',
  data: {
    imgs: [
      { name: 'a' },
      { name: 'b' }
    ]
  }
})
