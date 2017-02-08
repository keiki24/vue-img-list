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
      { name: 'a', filename: 'fileA' },
      { name: 'b', filename: 'fileB' }
    ],
    files: [
    ]
  },
  methods: {
    change: function (img) {
      this.remove(img)
      this.add(img)
    },
    remove: function (img) {
      console.log('parent method called.')
      i = this.imgs.indexOf(img)
      this.imgs.splice(i, 1)
    },
    add: function (img) {
      this.files.push(img)
    }
  }
})
