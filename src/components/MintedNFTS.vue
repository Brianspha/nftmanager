<template>
    <v-app id="inspire">
        <v-container align-start justify-start row fill-height>
            <v-layout>
                <v-dialog v-model="dialog" width="100%" align-start justify-center row fill-height>
                    <v-card>
                        <v-card-title>
                            <span class="headline">Collectible Description</span>
                        </v-card-title>
                        <v-card-text>{{selectedNFTDescription}} <br>

                            TranasctionHash: {{selectedNFTtransactionHash}}
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="#7E57C2" flat="flat" @click="dialog = false">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-flex>
                    <v-card class="elevation-12">
                        <v-toolbar color="#7E57C2" dark>
                            <v-toolbar-title>Minted Tokens</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-list two-line v-if="CollectiblesNFTS.length>0">
                            <template v-for="(item, index) in CollectiblesNFTS">
                                <v-list-tile :key="item.title" avatar ripple>
                                    <v-list-tile-avatar>
                                        <img src="../images/tokenicon.png">
                                    </v-list-tile-avatar>
                                    <v-list-tile-content>
                                        <v-list-tile-title>{{ item.dateCreated }}</v-list-tile-title>
                                        <v-list-tile-sub-title class="text--primary">{{ item.headline }}
                                        </v-list-tile-sub-title>Name
                                        <v-list-tile-sub-title>{{ item.name }}</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                    <v-list-tile-action>
                                        <v-list-tile-action-text class="font-weight-black"> {{ item.value }} Eth
                                        </v-list-tile-action-text>
                                        <v-card-actions>
                                            <v-divider></v-divider>
                                            <v-btn icon x-smal ripple>
                                                <v-icon color="grey lighten-1"
                                                    @click="selectedNFTDescription=item.description; selectedNFTtransactionHash=item.transactionHash;dialog=true">
                                                    info
                                                </v-icon>
                                            </v-btn>
                                            <v-spacer></v-spacer>
                                            <v-divider></v-divider>
                                            <v-btn icon x-small ripple>
                                                <v-icon color="grey lighten-1" @click="transferNFT(item.index)">
                                                    arrow_forward
                                                </v-icon>
                                            </v-btn>
                                            <v-btn icon x-small ripple>
                                                <v-icon color="grey lighten-1" @click="burnNFT(item.indexMain)">
                                                    delete_sweep
                                                </v-icon>
                                            </v-btn>
                                        </v-card-actions>

                                    </v-list-tile-action>
                                </v-list-tile>
                                <v-divider v-if="index + 1 < CollectiblesNFTS.length" :key="index"></v-divider>
                            </template>
                        </v-list>
                        <v-card v-else>
                            <v-card-text>No NFTS Minted Yet...</v-card-text>
                        </v-card>
                    </v-card>
                </v-flex>
            </v-layout>
            <InfiniteLoading @infinite="loadMintedNFTS" spinner="waveDots">
            </InfiniteLoading>
            <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="fullPage">
            </loading>
        </v-container>
    </v-app>
</template>

<script>
    import Swal from 'sweetalert2'
    import EmbarkJS from "../../embarkArtifacts/embarkjs";
    import {
        async
    } from 'q';
    import InfiniteLoading from 'vue-infinite-loading';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import Loading from 'vue-loading-overlay';

    export default {
        components: {
            Loading,
            InfiniteLoading
        },
        data() {
            return {
                defaultAvatar: "../images/tokenicon.png",
                isLoading: false,
                selectedNFTDescription: null,
                dialog: false,
                web3: null,
                senderAddress: "0xae3478f55aE21B9139652467D0B73177d6bEc204",
                CryptoWorldWarContract: null,
                CollectiblesNFTS: [],
                fullPage: true,
                selectedNFTtransactionHash: null
            }
        },
        mounted() {
            this.init()
            this.loadMintedNFTS()
        },
        computed: {
            filterCollectibles() {

            }
        },
        methods: {
            loadMintedNFTS: async function () {
                this.CryptoWorldWarContract.methods.getAllCollectibleKeys().call({
                    gas: 8000000,
                    from: this.senderAddress
                }).then((keys, error) => {
                    console.log("error: ", error)
                    console.log("keys: ", keys)
                    if (error) {
                        error("Something went wrong!!!")
                        //$state.complete();
                    } else {
                        for (var i = 0; i < keys.length; i++) {
                            var collectibleId = keys[i]
                            this.CryptoWorldWarContract.methods.getCollectibelDetails(collectibleId).call({
                                gas: 8000000,
                                from: this.senderAddress
                            }).then((collectibleDetails, error) => {
                                console.log("error: ", error)
                                console.log("collectibleDetails: ", collectibleDetails)
                                console.log("dateCreated: ", collectibleDetails.date)
                                console.log("name: ", collectibleDetails.name)
                                console.log("value: ", collectibleDetails.value),
                                    console.log("transactionHash: ", collectibleDetails.thash)
                                console.log("Description: ", collectibleDetails.description)
                                if (error) {
                                    this.error("Something went wrong!!!")
                                    //$state.complete();
                                } else {
                                    //$state.loaded();
                                    this.CollectiblesNFTS.push({
                                        index: collectibleId,
                                        name: collectibleDetails.name,
                                        dateCreated: collectibleDetails.date,
                                        value: collectibleDetails.value,
                                        transactionHash: collectibleDetails.thash,
                                        description: collectibleDetails.description,
                                        indexMain: collectibleDetails.indexMain
                                    })
                                }
                            }).catch((err) => {
                                this.error("Something went Wrong\n\n" + err)
                                this.isLoading = false
                            })
                        }
                    }
                })
            },
            init: async function () {
                EmbarkJS.onReady((err) => {
                    this.web3 = EmbarkJS;
                    this.CryptoWorldWarContract = require("../../embarkArtifacts/contracts/CryptoWorldWar")
                        .default
                })
            },
            burnNFT: async function (index) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "The token will be removed from the smart contract storage and cannot be recovered!!!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, burn token!'
                }).then((result) => {
                    if (result.value) {
                        this.isLoading = true
                        this.CryptoWorldWarContract.methods.burnCollectible(index).send({
                            gas: 8000000,
                            from: this.senderAddress
                        }).then((results, error) => {
                            console.log("error: ", error)
                            console.log("results: ", results)
                            if (error) {
                                error("Something went wrong")
                            } else {
                                Swal.fire(
                                    'Deleted!',
                                    'uccesfully burnt token!!',
                                    'success'
                                )
                            }
                            this.isLoading = false
                        }).catch((err) => {
                            error("Something went Wrong\n\n" + err)
                            this.isLoading = false
                        })

                    }
                }).catch((err) => {
                    error("Something went Wrong\n\n" + err)
                    this.isLoading = false
                })
            },
            transferNFT: async function (index) {

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