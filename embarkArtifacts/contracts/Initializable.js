"use strict";
const isNode = (typeof process !== 'undefined' && process.versions && process.versions.node);
const lib = isNode ? '../embarkjs.node' : '../embarkjs';
const EmbarkJSNode = isNode && require('../embarkjs.node');
let EmbarkJSBrowser;
try {
EmbarkJSBrowser = require('../embarkjs').default;
} catch(e) {};
const EmbarkJS = isNode ? EmbarkJSNode : EmbarkJSBrowser;
let InitializableJSONConfig = {"contract_name":"Initializable","address":"0x35B81921dF70fb0CC45a340a23f5c7E31960C969","code":"6080604052348015600f57600080fd5b50603580601d6000396000f3fe6080604052600080fdfea165627a7a72305820768331fcb5dd887fd5071add90d20fe627b95d5a5a544c6fc65377b48e7a05f40029","runtime_bytecode":"6080604052600080fdfea165627a7a72305820768331fcb5dd887fd5071add90d20fe627b95d5a5a544c6fc65377b48e7a05f40029","real_runtime_bytecode":"6080604052600080fdfea165627a7a72305820","swarm_hash":"768331fcb5dd887fd5071add90d20fe627b95d5a5a544c6fc65377b48e7a05f4","gas_estimates":{"creation":{"codeDepositCost":"10600","executionCost":"66","totalCost":"10666"},"internal":{"isConstructor()":"infinite"}},"function_hashes":{},"abi":[]};
let Initializable = new EmbarkJS.Blockchain.Contract(InitializableJSONConfig);
module.exports = Initializable;