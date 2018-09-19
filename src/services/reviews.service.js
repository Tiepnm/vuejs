import Vue from 'vue'

export default {
  getAllReviews () {
    return Vue.http.get('reviews.json')
      .then(response => {
        if (response.ok) {
          return Promise.resolve(response.data)
        } else {
          return Promise.reject(response.data)
        }
      })
      .catch(error => console.log('Error: ', error))
  },
  submitReview (productReview) {
    return Vue.http.post('reviews.json', productReview)
      .then(response => {
        if (response.ok) {
          return Promise.resolve(response.data)
        } else {
          return Promise.reject(response.data)
        }
      })
      .catch(error => console.log('Error: ', error))
  }
}
