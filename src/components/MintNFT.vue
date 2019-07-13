<template>
  <v-app id="inspire">
    <v-container fluid align-start justify-start row fill-height>
      <v-layout align-start justify-start row fill-height>
        <v-flex>
          <v-card class="elevation-12">
            <v-toolbar dark color="#7E57C2">
              <v-toolbar-title>Mint New NFT Token</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-tooltip right>
                <template>
                </template>
                <span></span>
              </v-tooltip>
            </v-toolbar>
            <v-card-text>
              <v-form v-model="valid" ref="form">
                <v-text-field v-model="name" :counter="100" :rules="nameRules" label="Name" required></v-text-field>
                <v-text-field v-model="level" :rules="levelRules" label="Level" type="number" required></v-text-field>
                <v-text-field name="login" label="NFT Value" type="number" v-model="value" :rules="valueRules">
                </v-text-field>
                <v-textarea name="input-7-1" label="NFT Description" auto-grow hint="Description of the Game Item"
                  v-model="description" :rules="descriptionRules">
                </v-textarea>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#7E57C2" @click="register()">Register</v-btn>
              <v-btn color="#7E57C2" :disabled="!valid" @click="mintToken()">Mint</v-btn>
              <v-btn color="#7E57C2" @click="reset()">
                Reset Form
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="fullPage">

      </loading>
    </v-container>
  </v-app>
</template>
<script>
  import EmbarkJS from "../../embarkArtifacts/embarkjs";
  import Loading from 'vue-loading-overlay';
  // Import stylesheet
  import 'vue-loading-overlay/dist/vue-loading.css';
  import Swal from 'sweetalert2'

  export default {
    components: {
      Loading
    },
    data: () => ({
      valid: false,
      isLoading: false,
      level: '',
      levelRules: [
        v => !!v || 'NFT Level is required',
        v => (v && !isNaN(v)) || 'NFT Level must be a valid number'
      ],
      name: '',
      nameRules: [
        v => !!v || 'Name of NFT is required',
        v => (v && v.length >= 3) || 'Name of NFT must be greater than 3 characters'
      ],
      description: '',
      descriptionRules: [
        v => !!v || 'NFT Description is required',
        v => (v && v.length >= 10) || 'NFT Description must be greater than 25 characters'
      ],
      value: null,
      valueRules: [
        v => !!v || 'NFT Value is required',
        v => (v && !isNaN(v)) || 'NFT Value has to be a valid number'
      ],
      checkbox: false,
      CryptoWorldWarContract: null,
      web3: null,
      senderAddress: "0xae3478f55aE21B9139652467D0B73177d6bEc204",
      fullPage: true
    }),
    mounted() {
      this.init()
    },
    methods: {
      init: async function () {
        EmbarkJS.onReady((err) => {
          this.web3 = EmbarkJS;
          this.CryptoWorldWarContract = require("../../embarkArtifacts/contracts/CryptoWorldWar").default
        })
      },
      mintToken() {
        this.isLoading = true
        this.CryptoWorldWarContract.methods.mintNewCollectible(this.value, this.description,
          this.name, new Date().toDateString(), this.level).send({
          gas: 8000000,
          from: this.senderAddress
        }).then((receipt, error) => {
          console.log("error: ", error)
          console.log("receipt: ", receipt)
          if (error) {
            error("Something went wrong!!!")
            this.isLoading = false
          } else {
            console.log("transactionHash: ", receipt.transactionHash)
            console.log("TokenID: ", receipt.events.emitId.returnValues.tokenID)
            console.log("bytes32 TokenID: ", this.web3.Utils.fromAscii(receipt.events.emitId.returnValues.tokenID))
            this.CryptoWorldWarContract.methods.updateCollectibleHash(receipt.transactionHash, receipt.events.emitId
                .returnValues.tokenID)
              .send({
                gas: 8000000,
                from: this.senderAddress
              }).then((receipt, error) => {
                console.log("error: ", error)
                console.log("receipt: ", receipt)
                if (error) {
                  this.error("Something went wrong!!!")
                  this.isLoading = false
                } else {
                  this.success("Successfully minted new Collectible!!!")
                  this.isLoading = false
                }
              })
          }
        }).catch((err) => {
          this.error("Something went Wrong\n\n" + err)
          this.isLoading = false
        })
      },
      validate() {
        if (this.$refs.form.validate()) {
          this.snackbar = true
          this.valid=true
        }
      },
      reset() {
        this.$refs.form.reset()
      },
      resetValidation() {
        this.$refs.form.resetValidation()
      },
      error(message) {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: message,
          allowOutsideClick: true
        })
      },
      success(message) {
        Swal.fire(
          'Success',
          message,
          'success'
        )
      },
      register() {
        this.isLoading = true
        this.CryptoWorldWarContract.methods.registerPlayer().send({
          gas: 8000000,
          from: this.senderAddress
        }).then((receipt, error) => {
          console.log("error: ", error)
          console.log("receipt: ", receipt)
          if (error) {
            this.error("Something went wrong!!! \n Seems like you already registered")
            this.isLoading = false
          } else {
            this.isLoading = false
            this.success("Succesfully Registered!!!")
          }
        }).catch((err) => {
          console.log(err)
            this.error("Something went wrong!!! \n Seems like you already registered")
          this.isLoading = false
        })
      }

    }
  }
</script>