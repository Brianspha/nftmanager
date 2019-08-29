"use strict";
const isNode = (typeof process !== 'undefined' && process.versions && process.versions.node);
const lib = isNode ? '../embarkjs.node' : '../embarkjs';
const EmbarkJSNode = isNode && require('../embarkjs.node');
let EmbarkJSBrowser;
try {
EmbarkJSBrowser = require('../embarkjs').default;
} catch(e) {};
const EmbarkJS = isNode ? EmbarkJSNode : EmbarkJSBrowser;
let BaseUpgradeabilityProxyJSONConfig = {"contract_name":"BaseUpgradeabilityProxy","code":"6080604052348015600f57600080fd5b5060948061001e6000396000f3fe6080604052600a600c565b005b6012601e565b601e601a6020565b6045565b565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e8080156063573d6000f35b3d6000fdfea165627a7a72305820f54611845093d61a23d43c06b9d314d391b6caf313e44ed22a0def259d5bfd9e0029","runtime_bytecode":"6080604052600a600c565b005b6012601e565b601e601a6020565b6045565b565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e8080156063573d6000f35b3d6000fdfea165627a7a72305820f54611845093d61a23d43c06b9d314d391b6caf313e44ed22a0def259d5bfd9e0029","real_runtime_bytecode":"6080604052600a600c565b005b6012601e565b601e601a6020565b6045565b565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e8080156063573d6000f35b3d6000fdfea165627a7a72305820","swarm_hash":"f54611845093d61a23d43c06b9d314d391b6caf313e44ed22a0def259d5bfd9e","gas_estimates":{"creation":{"codeDepositCost":"29600","executionCost":"81","totalCost":"29681"},"external":{"":"infinite"},"internal":{"_implementation()":"215","_setImplementation(address)":"infinite","_upgradeTo(address)":"infinite"}},"function_hashes":{},"abi":[{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"implementation","type":"address"}],"name":"Upgraded","type":"event","signature":"0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b"}]};
let BaseUpgradeabilityProxy = new EmbarkJS.Blockchain.Contract(BaseUpgradeabilityProxyJSONConfig);
module.exports = BaseUpgradeabilityProxy;