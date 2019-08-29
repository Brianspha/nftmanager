"use strict";
const isNode = (typeof process !== 'undefined' && process.versions && process.versions.node);
const lib = isNode ? '../embarkjs.node' : '../embarkjs';
const EmbarkJSNode = isNode && require('../embarkjs.node');
let EmbarkJSBrowser;
try {
EmbarkJSBrowser = require('../embarkjs').default;
} catch(e) {};
const EmbarkJS = isNode ? EmbarkJSNode : EmbarkJSBrowser;
let AddressJSONConfig = {"contract_name":"Address","address":"0x9787e9Dbe89Cd9Fce5D8593BB553C1979cE1722f","code":"604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a7230582099f0d981c5bd1c0d2600a4ddc58e9b1e30c8b34549f77ac560a757c1988300bd0029","runtime_bytecode":"73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a7230582099f0d981c5bd1c0d2600a4ddc58e9b1e30c8b34549f77ac560a757c1988300bd0029","real_runtime_bytecode":"73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820","swarm_hash":"99f0d981c5bd1c0d2600a4ddc58e9b1e30c8b34549f77ac560a757c1988300bd","gas_estimates":{"creation":{"codeDepositCost":"15200","executionCost":"116","totalCost":"15316"},"internal":{"isContract(address)":"infinite","toPayable(address)":"infinite"}},"function_hashes":{},"abi":[]};
let Address = new EmbarkJS.Blockchain.Contract(AddressJSONConfig);
module.exports = Address;