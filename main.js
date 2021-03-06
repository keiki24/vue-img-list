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
  template: '<span class="box"><p><img v-bind:src="file.filename"></img></p><button type="button" @click="remove">remove</button></span>',
  methods: {
    remove: function () {
      this.$emit('changeview', this)
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    imgs: [
      { name: 'a', filename: './img/sample1.jpg' },
      { name: 'b', filename: './img/sample2.jpg' },
      { name: 'c', filename: './img/sample3.jpg' },
      { name: 'd', filename: './img/sample4.jpg' }
    ],
    files: [
    ],
    show: false
  },
  methods: {
    change: function (img) {
      if (!this.isOverMaxDisp()) {
        this.remove(img)
        this.add(img)
        this.show = false
      } else {
        this.show = true
      }
    },
    remove: function (img) {
      console.log('parent method called.')
      i = this.imgs.indexOf(img)
      this.imgs.splice(i, 1)
    },
    add: function (img) {
      this.files.push(img)
    },
    changeView: function (img) {
      this.removeImage(img)
      this.addName(img)
      if (!this.isOverMaxDisp()) {
        this.show = false
      } else {
        this.show = true
      }
    },
    removeImage: function (img) {
      i = this.files.indexOf(img)
      this.files.splice(i, 1)
    },
    addName: function (img) {
      this.imgs.push(img)
    },
    isOverMaxDisp: function () {
      if (this.files.length >= 2) {
        return true
      } else {
        return false
      }
    }
  },
  computed: {
    fileSorted: function () {
      return _.orderBy(this.files, ['name'], ['asc'])
    },
    imgSorted: function () {
      return _.orderBy(this.imgs, ['name'], ['asc'])
    }
  }
})
