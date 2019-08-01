<template>
    <v-app id="inspire">
        <v-container fluid align-start justify-start row fill-height>
            <v-layout align-start justify-start row fill-height>
                <v-flex>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="#7E57C2">
                            <v-toolbar-title>Mint ERC20 Token</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-tooltip right>
                                <template>
                                </template>
                                <span></span>
                            </v-tooltip>
                        </v-toolbar>
                        <v-card-text>
                            <v-form v-model="valid" ref="form">
                                <v-card-text label="Level">Token Name: {{Token.TName}}</v-card-text> <br>
                                <v-card-text label="Lev-cardel">Token Symbol: {{Token.TSymbol}}</v-card-text><br>
                                <v-card-text label="Lev-cardel">Token Decimals: {{Token.TDecimals}}</v-card-text><br>
                                <v-card-text label="Lev-cardel">Token Current Supply: {{Token.TSupply}}</v-card-text>
                                <v-text-field name="Supply" label="Increase Token Supply" type="number" v-model="value"
                                    :rules="valueRules">
                                </v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
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
            Token: {},
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
            ERC20: null,
            web3: null,
            senderAddress: "0xae3478f55aE21B9139652467D0B73177d6bEc204",
            fullPage: true
        }),
        mounted() {
            this.init()
        },
        watch: {
            Token: async function () {
                this.getTokenInfo()
            }
        },
        methods: {
            init: async function () {
                EmbarkJS.onReady((err) => {
                    this.web3 = EmbarkJS;
                    let This = this
                    this.ERC20 = require("../../embarkArtifacts/contracts/ERC20Detailed").default
                    this.getTokenInfo()
                })
            },
            getTokenInfo() {
                let This=this
                this.ERC20.methods.name().call({
                    gas: 8000000
                }).then((name, err) => {
                    if (err) {

                    } else {
                        This.ERC20.methods.symbol().call({
                            gas: 8000000
                        }).then((symbol, err) => {
                            if (err) {

                            } else {
                                This.ERC20.methods.totalSupply().call({
                                    gas: 8000000
                                }).then((supply) => {
                                    if (err) {

                                    } else {
                                        This.ERC20.methods.decimals().call({
                                            gas: 8000000
                                        }).then((decimals, err) => {
                                            if (err) {

                                            } else {
                                                This.Token = {
                                                    "TName": name,
                                                    "TSymbol": symbol,
                                                    "TSupply": supply,
                                                    "TDecimals": decimals
                                                }
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            },

            mintToken() {
                this.isLoading = true
                this.ERC20.methods.mintNewTokens(this.value).send({
                    gas: 8000000,
                    from: this.senderAddress
                }).then((receipt, error) => {
                    console.log("error: ", error)
                    console.log("receipt: ", receipt)
                    if (error) {
                        error("Something went wrong!!!")
                    } else {
                        console.log("transactionHash: ", receipt.transactionHash)
                    }
                    this.Token={}
                    this.isLoading = false

                }).catch((err) => {
                    this.error("Something went Wrong\n\n" + err)
                    this.isLoading = false
                })
            },
            validate() {
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                    this.valid = true
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
            }
        }
    }
</script>