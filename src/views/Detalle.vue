<template>
  <div>
    <h1>Detalle de producto {{productos.price}}</h1>
   
  </div>
</template>

<script>
export default {
  name: 'Detalle',
  props: {
    msg: String
  },
  data(){
      return{
          productos:{},
          parametro:this.$route.params.productoid
      }

  },
  mounted(){
      this.getProductos();
  },
  methods:{
      async getProductos(){
          console.log(this.parametro);
          let response=await this.$http.get("https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products");
          //console.log(response);
          this.productos=response.data.find((producto)=>producto.id==this.parametro);
          console.log(this.productos);

      }
  }
}
</script>