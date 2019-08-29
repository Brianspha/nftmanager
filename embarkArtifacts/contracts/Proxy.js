"use strict";
const isNode = (typeof process !== 'undefined' && process.versions && process.versions.node);
const lib = isNode ? '../embarkjs.node' : '../embarkjs';
const EmbarkJSNode = isNode && require('../embarkjs.node');
let EmbarkJSBrowser;
try {
EmbarkJSBrowser = require('../embarkjs').default;
} catch(e) {};
const EmbarkJS = isNode ? EmbarkJSNode : EmbarkJSBrowser;
let ProxyJSONConfig = {"contract_name":"Proxy","code":"","runtime_bytecode":"","real_runtime_bytecode":"","swarm_hash":"","gas_estimates":null,"function_hashes":{},"abi":[{"payable":true,"stateMutability":"payable","type":"fallback"}]};
let Proxy = new EmbarkJS.Blockchain.Contract(ProxyJSONConfig);
module.exports = Proxy;