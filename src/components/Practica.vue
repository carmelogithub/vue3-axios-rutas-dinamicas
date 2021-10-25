<template>
    <h2>Componente práctica</h2>
    <p>{{unidades}}</p>
    <p>{{token}} <button v-show="token">login</button></p>
    <button @click="getProductos">consultar</button>
    <div v-for="item in productos" :key="item.id">
        <p>{{item.id}}</p>
        <img :src="`${item.imageUrl}`" width="100">
        <router-link :to="{name: 'Detalle', params: { productoid: item.id },}"> Ver detalle </router-link>
    </div>
</template>

<script>
export default {
  name: 'Practica',
  props: {
    unidades: Number,
    token:Boolean
  },
  data(){
      return{
          productos:[]
      }

  },
  methods:{
      async getProductos(){
          let response=await this.$http.get("https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products");
          //console.log(response);
          this.productos=response.data;
          console.log(this.productos);

      }
  }
}
</script>