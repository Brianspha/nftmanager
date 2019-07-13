import Vue from 'vue';
import Router from 'vue-router';
import MintNFT from "../components/MintNFT";
import MintedNFT from "../components/MintedNFTS";

Vue.use(Router)

export default new Router({
    routes: [{
            path: "/",
            redirect: "mintnft"
        },
        {
            path: "/MintNFT",
            name: "mintnft",
            component: MintNFT
        },
        {
            path: "/MintedNFTS",
            name: "mintednft",
            component: MintedNFT
        }
    ],
    mode: "history"
})