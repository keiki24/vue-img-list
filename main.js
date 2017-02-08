Vue.component('button-img', {
  props: ['img'],
  template: '<button type="button" @click="removeItem">{{ img.name }}</button>',
  methods: {
    removeItem: function () {
      console.log('child method called.')
      this.$emit('call', this)
    }
  }
})

Vue.component('img-file', {
  props: ['file'],
  template: '<li>{{ file.filename }}</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    imgs: [
      { name: 'a' },
      { name: 'b' }
    ]
  },
  methods: {
    remove: function (img) {
      console.log('parent method called.')
      i = this.imgs.indexOf(img)
      this.imgs.splice(i, 1)
    }
    }
})
