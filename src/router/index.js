import Vue from 'vue';
import Router from 'vue-router';
import MintNFT from "../components/MintNFT";
import MintedNFT from "../components/MintedNFTS";
import MintERC20 from "../components/MintERC20";

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
        },
        {
            path: "/MintERC20",
            name: "minterc20",
            component: MintERC20
        }
    ],
    mode: "history"
})