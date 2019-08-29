"use strict";
const isNode = (typeof process !== 'undefined' && process.versions && process.versions.node);
const lib = isNode ? '../embarkjs.node' : '../embarkjs';
const EmbarkJSNode = isNode && require('../embarkjs.node');
let EmbarkJSBrowser;
try {
EmbarkJSBrowser = require('../embarkjs').default;
} catch(e) {};
const EmbarkJS = isNode ? EmbarkJSNode : EmbarkJSBrowser;
let CountersJSONConfig = {"contract_name":"Counters","code":"604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a723058205c2de707f54172039e4eff6927f516d1be5ef9383ed7a178bb552ff92270c98a0029","runtime_bytecode":"73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a723058205c2de707f54172039e4eff6927f516d1be5ef9383ed7a178bb552ff92270c98a0029","real_runtime_bytecode":"73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820","swarm_hash":"5c2de707f54172039e4eff6927f516d1be5ef9383ed7a178bb552ff92270c98a","gas_estimates":{"creation":{"codeDepositCost":"15200","executionCost":"116","totalCost":"15316"},"internal":{"current(struct Counters.Counter storage pointer)":"infinite","decrement(struct Counters.Counter storage pointer)":"infinite","increment(struct Counters.Counter storage pointer)":"infinite"}},"function_hashes":{},"abi":[]};
let Counters = new EmbarkJS.Blockchain.Contract(CountersJSONConfig);
module.exports = Counters;