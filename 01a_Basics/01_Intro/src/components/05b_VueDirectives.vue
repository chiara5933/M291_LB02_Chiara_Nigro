<template>

  <div>
    <h1 v-if="false" v-text="mytext">Loading...</h1>
    <h2 v-else-if="true" v-html="myhtml" />
    <a
        v-else
        :href="link.url"
        :target="link.target"
        :tabindex="link.tabindex"
        v-text="link.title"
    />
  </div>
</template>

<!-- True und False dinene dazu, gewisse Elemente ein- und auzublenden, wie man das will, ohne gross alles löschen zu müssen. -->

<script>
export default {
  data() {
    return {
      // v-text
      mytext: 'Lernziel 1: Vue-Direktiven sinnvoll anwenden',
      // v-html
      myhtml: 'Demo 5b </br>LB02<br/><b>Nike</b>',
      // v-bind
      link: {
        url: 'https://www.nike.com/offiziell',
        target: '_blank',
        tabindex: '0',
        title: 'Hier zur offiziellen Website von Nike'
      },
    }
  },
}
</script>

<!-- Eigener Titel ausgewählt -->
<!-- Hier Nike Website als Beispiel verwendet -->
<!-- Titel angepasst auf meine Bausteine -->


<style lang="scss" scoped>

h1 {
  margin-left: 20px;
  color: #d16e8d;
}

h2 {
  margin: 40px 0 0;
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
