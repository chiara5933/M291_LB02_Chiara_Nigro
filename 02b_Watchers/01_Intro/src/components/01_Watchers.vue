 <!--
  Using Watchers to Set New Values
-->
<template>
  <div class="container">
    <h1>Discount Watcher LB02</h1>
    <div>
      Black Friday Sale
      <strike v-show="oldDiscount">Was {{ oldDiscount }}%</strike>
      <strong> Now {{ discount }}% OFF</strong><br/>
      <a href="#" @click="updateDiscount">Increase discount by 10%</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      oldDiscount: 5,
      discount: 10,
    }
  },

  watch: {
    discount: {
      handler: function (newVal, oldVal){
        console.log(`actual(${newVal}%) and old(${oldVal}%) discount.`);
        this.oldDiscount = oldVal;
      },
      immediate: false,
      deep: true
    }


  },


  methods: {
    updateDiscount(){
      this.discount = this.discount + 10 ;
    }
  }
}
</script>
 <!--
 Mit dem Watcher kann man Werte beobachten und auf alte Werte zugreiffen und diese anzeigen bei Bedarf.
-->
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: 'Avenir', Helvetica, sans-serif;
  margin: 0;
}

h1{
  color: #d16e8d;
}
a {
  display: inline-block;
  margin-top: 20px;
  background: #d16e8d;
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}
</style>
