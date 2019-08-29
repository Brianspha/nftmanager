"use strict";
const isNode = (typeof process !== 'undefined' && process.versions && process.versions.node);
const lib = isNode ? '../embarkjs.node' : '../embarkjs';
const EmbarkJSNode = isNode && require('../embarkjs.node');
let EmbarkJSBrowser;
try {
EmbarkJSBrowser = require('../embarkjs').default;
} catch(e) {};
const EmbarkJS = isNode ? EmbarkJSNode : EmbarkJSBrowser;
let OpenZeppelinUpgradesAddressJSONConfig = {"contract_name":"OpenZeppelinUpgradesAddress","code":"604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a723058209a5109dcd1f29c65707f3aed4cfc5ce38b93987bb90110dc382b5a2d78cd2db20029","runtime_bytecode":"73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a723058209a5109dcd1f29c65707f3aed4cfc5ce38b93987bb90110dc382b5a2d78cd2db20029","real_runtime_bytecode":"73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a72305820","swarm_hash":"9a5109dcd1f29c65707f3aed4cfc5ce38b93987bb90110dc382b5a2d78cd2db2","gas_estimates":{"creation":{"codeDepositCost":"15200","executionCost":"116","totalCost":"15316"},"internal":{"isContract(address)":"infinite"}},"function_hashes":{},"abi":[]};
let OpenZeppelinUpgradesAddress = new EmbarkJS.Blockchain.Contract(OpenZeppelinUpgradesAddressJSONConfig);
module.exports = OpenZeppelinUpgradesAddress;