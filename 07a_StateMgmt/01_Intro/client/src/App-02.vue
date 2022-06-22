<template>
  <div id="app">
    <b-container fluid>


      <b-jumbotron>
        <template #header>Lehrlinge Migros Genossenschaftsbund</template>
        <template #lead>
          Informationssystem für Lehrlinge
        </template>
        <hr class="my-4">
        <p>Kontaktdaten:</p>
        <p>
          Lehrmeister/in: {{ $store.getters.trainer }}<br/>
          Zuständigkeit: {{ $store.getters.jobPosition }}
        </p>
          <b-button variant="primary" id="tooltip1" v-b-tooltip.hover>
            Telefon
          </b-button>&nbsp;&nbsp;
          <b-tooltip target="tooltip1" triggers="hover">
            {{ $store.state.vorname }} 041 832 58 68 anrufen?
          </b-tooltip>
        <b-button variant="success" id="tooltip2" v-b-tooltip.hover>Email</b-button>&nbsp;&nbsp;
        <b-tooltip target="tooltip2" triggers="hover">
          an {{ $store.getters.trainerEmail }} schreiben?
        </b-tooltip>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

#tooltip1{
  background: #d16e8d;
}

#tooltip2{
  background: #ee6352;
}

</style>
