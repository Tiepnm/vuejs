<template>
  <div>
    <h1>Product List</h1>
    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">ProductID</th>
        <th scope="col">Product Name</th>
        <th scope="col">Quantity</th>
        <th scope="col">Made In</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products" :key="product.id">
        <th scope="row">{{product.id}}</th>
        <td>{{product.name}}</td>
        <td>{{product.quantity}}</td>
        <td>{{product.madeIn}}</td>
      </tr>
      </tbody>
    </table>
    <form method="POST"  v-on:submit.prevent="onSubmit()">
      <label>Author: </label>
      <input type="text" v-model="author">
      <input type="submit" value="Submit"/>
    </form>
  </div>
</template>

<script>
import reviewsService from '../services/reviews.service'
import productService from '../services/product.service'
import {appConstants} from '../services/constants'
export default {
  name: 'product',
  data: function () {
    return {
      products: [],
      author: ''
    }
  },
  created () {
    this.getAllProducts()
  },
  methods: {
    onSubmit () {
      productService.exportPdf(this.author)
        .then(response => {
          window.open(appConstants.apiEndpoint + '/report/product.pdf', '_self')
        })
    },
    exportPdf () {
      window.open('http://localhost:8080/persons/pdf', '_self')
    },
    getAllReviews () {
      reviewsService.getAllReviews()
        .then(response => {
        })
    },
    getAllProducts () {
      productService.getAllProducts()
        .then(response => {
          this.products = response
        })
    }
  }
}
</script>
