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

var app = new Vue({
  el: '#app',
  data: {
    imgs: [
      { name: 'a' },
      { name: 'b' }
    ]
  },
  methods: {
    remove: function () {
      console.log('parent method called.')
    }
  }
})
