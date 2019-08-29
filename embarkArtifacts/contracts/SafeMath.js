"use strict";
const isNode = (typeof process !== 'undefined' && process.versions && process.versions.node);
const lib = isNode ? '../embarkjs.node' : '../embarkjs';
const EmbarkJSNode = isNode && require('../embarkjs.node');
let EmbarkJSBrowser;
try {
EmbarkJSBrowser = require('../embarkjs').default;
} catch(e) {};
const EmbarkJS = isNode ? EmbarkJSNode : EmbarkJSBrowser;
let SafeMathJSONConfig = {"contract_name":"SafeMath","address":"0x1d70A8947F1f6cBe4870D22B31F8ddE42CF84312","code":"604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820aeeb0530a7cd7eaa1b8c22c4a3bf6010158057072b24748e20ac92e5ea5fdfbd0029","runtime_bytecode":"73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820aeeb0530a7cd7eaa1b8c22c4a3bf6010158057072b24748e20ac92e5ea5fdfbd0029","real_runtime_bytecode":"73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820","swarm_hash":"aeeb0530a7cd7eaa1b8c22c4a3bf6010158057072b24748e20ac92e5ea5fdfbd","gas_estimates":{"creation":{"codeDepositCost":"15200","executionCost":"116","totalCost":"15316"},"internal":{"add(uint256,uint256)":"infinite","div(uint256,uint256)":"infinite","mod(uint256,uint256)":"infinite","mul(uint256,uint256)":"infinite","sub(uint256,uint256)":"infinite"}},"function_hashes":{},"abi":[]};
let SafeMath = new EmbarkJS.Blockchain.Contract(SafeMathJSONConfig);
module.exports = SafeMath;