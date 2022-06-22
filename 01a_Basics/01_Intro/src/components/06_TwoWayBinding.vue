<template>
  <!--
   TwoWayBinding Using v-model
  -->
  <section>
    <div>
      <h2 :class="$style.title">{{ title }}</h2>
      <h3 :class="$style.subtitle">{{ subtitle }}</h3>
    </div>
    <div :class="$style.form">
      <label>Dein Name
        <input type="text" v-model="name" />
      </label>
      <label>
        Bevorzugter Kurs
        <select name="kurs" v-model="kurs">
          <option value="Velo_fahren">Velo fahren</option>
          <option value="Surfen">Surfen</option>
          <option value="Schnorcheln">Schnorcheln</option>
          <option value="Tauchen">Tauchen</option>

        </select>
      </label>
      <label>
        Datum wählen
        <select name="datum" v-model="datum">
          <option value="12.07.2022">12.07.2022</option>
          <option value="22.07.2022">22.07.2022</option>
          <option value="03.08.2022">03.08.2022</option>
          <option value="16.08.2022">16.08.2022</option>

        </select>
      </label>
    </div>
    <div :class="$style.overview">
      <h3>Anmeldung</h3>
      <ul>
        <li>Name: {{ name }}</li>
        <li>Bevorzugter Kurs: {{ kurs }}</li>
        <li>Datum: {{ datum }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Sommerferien Kurse',
      subtitle: 'Juli / August 2022',
      name: '',
      kurs: '',
      datum: ''
    }
  },
}
</script>

<style lang="scss" module>
.title {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #f7f7ff;
  margin-top: 60px;
  padding-left: 40px;
  padding-bottom: 20px;
  padding-top: 20px;
  background: #d16e8d;
}

.subtitle {
  color: #d16e8d;
  font-style: italic;
  text-align: center;
}

.form {
  display: flex;
  justify-content: space-evenly;
  max-width: 800px;
  padding: 40px 20px;
  border-radius: 10px;
  margin: 0 auto;
  background: #ececec;
}

.overview {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  border-radius: 10px;
  border: 1px solid #ececec;

  > li {
    list-style: none;


    + li {
      margin-top: 20px;
    }
  }
}

</style>
