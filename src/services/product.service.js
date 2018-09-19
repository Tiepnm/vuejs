import Vue from 'vue'

export default {
  getAllProducts () {
    return Vue.http.get('products')
      .then(response => {
        if (response.ok) {
          return Promise.resolve(response.body)
        } else {
          return Promise.reject(response.body)
        }
      })
      .catch(error => console.log('Error: ', error))
  },
  exportPdf (author) {
    return Vue.http.post('products/pdf', author)
      .then(response => {
        if (response.ok) {
          return Promise.resolve(response.bodyText)
        } else {
          return Promise.reject(response.body)
        }
      })
  }
}
