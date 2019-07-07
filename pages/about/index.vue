<template>
    <div class="">
      <h1>This is a About page</h1>
       <vue-tel-input v-model="phone"
        @onInput="onInput"
        :preferredCountries="['us', 'gb', 'ua']"
        :selectedCountryCode="true"
        >
        
     </vue-tel-input>
    </div>
</template>

<script>
import '~/assets/css/vue-tel-input.css'
import VueTelInput from '~/components/vue-tel-input'
    export default {
        layout: 'mylayout',
        name: "index",
        components: {
         VueTelInput,
        },
    data() {
        return {
            phone: '',
        }
    },
    methods: {
    /**
     * @param {string} number
     * the phone number inputted by user, will be formatted along with country code
     * // Ex: inputted: (AU) 0432 432 432
     * // number = '+61432421546'
     *
     * @param {Boolean} isValid
     * @param {string} country
     */
     onInput({ number, isValid, country }) {
       console.log(number, isValid, country);
     },
  },
    }
</script>

<style scoped>

</style>
