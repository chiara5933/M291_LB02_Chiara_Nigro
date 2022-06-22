<!--
  Implementing Computed Data into a Vue Component
-->
<template>
  <div class="container">
    <h1>Provide your personal information:</h1>
    <input v-model="firstName" placeholder="First name" />
    <input v-model="lastName" placeholder="Last name" />
    <input v-model="gender" placeholder="Your gender" />
    <input v-model="birthdate" placeholder="Date of birth" />
    <input v-model="adress" placeholder="Your adress" />


    <h3 class="output">{{ fullName }}</h3>
    <h3 class="output">{{ fullInfo }}</h3>
  </div>

</template>
<!--
  Data Property firstName und lastName bei v-model eingesetzt
-->
<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      birthdate: '',
      gender: '',
      adress: '',
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    fullInfo() {
      return `${this.gender} ${this.birthdate} ${this.adress}`
    },
  },
}
</script>
<!--
  Computet Property ist fullName, das heisst firstName und lastName werden gemeinsam angezeigt
-->
<style>

h1 {

  color: #d16e8d;
}
.container {
  background-color: lightgrey;
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
}
input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;

}
.output {
  font-size: 16px;
  color: #d16e8d;
}
</style>
