<template>
  <!--
   Using v-for to Loop Over an Array of Strings
  -->
  <div>
    <h1>Meine To-Do Liste</h1>
    <!-- Backticks -->

      <!-- Mit v-for deklariere ich einen Bereich, den ich mehrmals ausgeben möchte.
       Mit "n in 5" sage ich wieviel mal und mit ":key="$n" sage ich was der Index ist.-->


    <!-- Unordered list with an array -->
    <ul>
      <li v-for="(item, n) in tasks" :key="n">
        {{ item }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: ['HA machen', 'Zimmer aufräumen', 'Bad putzen', 'LB02 fertig machen', 'Pflanzen giessen', 'für Prüfung lernen', 'Wäsche waschen'],

    }
  },
}
</script>

<style lang="scss" scoped>
li {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 10px;

}

ul {
  background-color: lightgrey;
  padding-bottom: 20px;
  padding-top: 20px;
}

h1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #d16e8d;
  margin-top: 60px;
}
</style>
