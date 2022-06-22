<template>

  <div>
    <h1 v-show="true" v-text="mytext">Loading...</h1>
    <h2 v-show="true" v-html="myhtml" />
    <a
      :href="link.url"
      :target="link.target"
      :tabindex="link.tabindex"
      v-text="link.title"
    />
  </div>
</template>

<!-- Style angepasst mit Farbe -->
<!-- Text & Link angepasst mit Nike Website -->

<script>
export default {
  data() {
    return {
      // v-text
      mytext: 'Lernziel 1: Vue-Direktiven sinnvoll anwenden',
      // v-html
      myhtml: 'Demo 5a </br>LB02<br/><b>Nike</b>',
      // v-bind
      link: {
        url: 'https://www.nike.com/ch/',
        target: '_blank',
        tabindex: '0',
        title: 'Hier zur offiziellen Website von Nike'
      },
    }
  },
}
</script>

<style lang="scss" scoped>

h1 {
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #d16e8d;
  background-color: lightgrey;
}

h2 {
  margin: 40px;
  font-weight: normal;
  margin-left: 20px;
}
a {
  display: block;
  margin-top: 40px;
  margin-left: 20px;
  color: #d16e8d;
}
</style>
