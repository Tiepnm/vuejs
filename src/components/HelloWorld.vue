<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ message }}</h1>

    <input type="text" v-model="message"/>
    <ul>
      <li v-for="product in products" v-bind:key="product.id">
        {{product.quantity}} {{product.name}}
      </li>
    </ul>
    <ul>
      <li v-for="test in tests" v-bind:key="test">
        {{test}}
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld1',
  data: function () {
    return {
      products: [],
      tests: ['abcd', 'test']
    }
  },
  props: {
    msg: String,
    message: String

  },
  created () {
    fetch('https://api.myjson.com/bins/74l63')
      .then(response => response.json())
      .then(json => {
        this.products = json.products
      })
  },
  mounted () {
    console.log(process.env)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  a {
    color: #42b983;
  }
</style>
