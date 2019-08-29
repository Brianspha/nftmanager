"use strict";
const isNode = (typeof process !== 'undefined' && process.versions && process.versions.node);
const lib = isNode ? '../embarkjs.node' : '../embarkjs';
const EmbarkJSNode = isNode && require('../embarkjs.node');
let EmbarkJSBrowser;
try {
EmbarkJSBrowser = require('../embarkjs').default;
} catch(e) {};
const EmbarkJS = isNode ? EmbarkJSNode : EmbarkJSBrowser;
let OwnedUpgradeabilityProxyJSONConfig = {"contract_name":"OwnedUpgradeabilityProxy","address":"0xe2174564c54677D5F4ADf06B1295ea610CA6De6B","code":"608060405234801561001057600080fd5b5061002333640100000000610028810204565b61005d565b604080517f6f72672e7a657070656c696e6f732e70726f78792e6f776e65720000000000008152905190819003601a01902055565b6105528061006c6000396000f3fe60806040526004361061006c5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663025313a281146100b25780633659cfe6146100e35780634f1ef286146101185780635c60da1b146101ce578063f1739cae146101e3575b6000610076610216565b9050600160a060020a038116151561008d57600080fd5b60405136600082376000803683855af43d806000843e8180156100ae578184f35b8184fd5b3480156100be57600080fd5b506100c7610272565b60408051600160a060020a039092168252519081900360200190f35b3480156100ef57600080fd5b506101166004803603602081101561010657600080fd5b5035600160a060020a03166102a8565b005b6101166004803603604081101561012e57600080fd5b600160a060020a03823516919081019060408101602082013564010000000081111561015957600080fd5b82018360208201111561016b57600080fd5b8035906020019184600183028401116401000000008311171561018d57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506102d0945050505050565b3480156101da57600080fd5b506100c7610216565b3480156101ef57600080fd5b506101166004803603602081101561020657600080fd5b5035600160a060020a03166103ab565b604080517f6f72672e7a657070656c696e6f732e70726f78792e696d706c656d656e74617481527f696f6e0000000000000000000000000000000000000000000000000000000000602082015290519081900360230190205490565b604080517f6f72672e7a657070656c696e6f732e70726f78792e6f776e65720000000000008152905190819003601a0190205490565b6102b0610272565b600160a060020a031633146102c457600080fd5b6102cd81610430565b50565b6102d8610272565b600160a060020a031633146102ec57600080fd5b6102f5826102a8565b600082600160a060020a0316826040518082805190602001908083835b602083106103315780518252601f199092019160209182019101610312565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610391576040519150601f19603f3d011682016040523d82523d6000602084013e610396565b606091505b505090508015156103a657600080fd5b505050565b6103b3610272565b600160a060020a031633146103c757600080fd5b600160a060020a03811615156103dc57600080fd5b7f5a3e66efaa1e445ebd894728a69d6959842ea1e97bd79b892797106e270efcd9610405610272565b60408051600160a060020a03928316815291841660208301528051918290030190a16102cd81610496565b600061043a610216565b9050600160a060020a03808216908316141561045557600080fd5b61045e826104cb565b604051600160a060020a038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a25050565b604080517f6f72672e7a657070656c696e6f732e70726f78792e6f776e65720000000000008152905190819003601a01902055565b604080517f6f72672e7a657070656c696e6f732e70726f78792e696d706c656d656e74617481527f696f6e0000000000000000000000000000000000000000000000000000000000602082015290519081900360230190205556fea165627a7a7230582057afd81358bd6f18d7c0f40e11ef66b1fea9224b66c34705b3ce22c03b2ca8e20029","runtime_bytecode":"60806040526004361061006c5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663025313a281146100b25780633659cfe6146100e35780634f1ef286146101185780635c60da1b146101ce578063f1739cae146101e3575b6000610076610216565b9050600160a060020a038116151561008d57600080fd5b60405136600082376000803683855af43d806000843e8180156100ae578184f35b8184fd5b3480156100be57600080fd5b506100c7610272565b60408051600160a060020a039092168252519081900360200190f35b3480156100ef57600080fd5b506101166004803603602081101561010657600080fd5b5035600160a060020a03166102a8565b005b6101166004803603604081101561012e57600080fd5b600160a060020a03823516919081019060408101602082013564010000000081111561015957600080fd5b82018360208201111561016b57600080fd5b8035906020019184600183028401116401000000008311171561018d57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506102d0945050505050565b3480156101da57600080fd5b506100c7610216565b3480156101ef57600080fd5b506101166004803603602081101561020657600080fd5b5035600160a060020a03166103ab565b604080517f6f72672e7a657070656c696e6f732e70726f78792e696d706c656d656e74617481527f696f6e0000000000000000000000000000000000000000000000000000000000602082015290519081900360230190205490565b604080517f6f72672e7a657070656c696e6f732e70726f78792e6f776e65720000000000008152905190819003601a0190205490565b6102b0610272565b600160a060020a031633146102c457600080fd5b6102cd81610430565b50565b6102d8610272565b600160a060020a031633146102ec57600080fd5b6102f5826102a8565b600082600160a060020a0316826040518082805190602001908083835b602083106103315780518252601f199092019160209182019101610312565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610391576040519150601f19603f3d011682016040523d82523d6000602084013e610396565b606091505b505090508015156103a657600080fd5b505050565b6103b3610272565b600160a060020a031633146103c757600080fd5b600160a060020a03811615156103dc57600080fd5b7f5a3e66efaa1e445ebd894728a69d6959842ea1e97bd79b892797106e270efcd9610405610272565b60408051600160a060020a03928316815291841660208301528051918290030190a16102cd81610496565b600061043a610216565b9050600160a060020a03808216908316141561045557600080fd5b61045e826104cb565b604051600160a060020a038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a25050565b604080517f6f72672e7a657070656c696e6f732e70726f78792e6f776e65720000000000008152905190819003601a01902055565b604080517f6f72672e7a657070656c696e6f732e70726f78792e696d706c656d656e74617481527f696f6e0000000000000000000000000000000000000000000000000000000000602082015290519081900360230190205556fea165627a7a7230582057afd81358bd6f18d7c0f40e11ef66b1fea9224b66c34705b3ce22c03b2ca8e20029","real_runtime_bytecode":"60806040526004361061006c5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663025313a281146100b25780633659cfe6146100e35780634f1ef286146101185780635c60da1b146101ce578063f1739cae146101e3575b6000610076610216565b9050600160a060020a038116151561008d57600080fd5b60405136600082376000803683855af43d806000843e8180156100ae578184f35b8184fd5b3480156100be57600080fd5b506100c7610272565b60408051600160a060020a039092168252519081900360200190f35b3480156100ef57600080fd5b506101166004803603602081101561010657600080fd5b5035600160a060020a03166102a8565b005b6101166004803603604081101561012e57600080fd5b600160a060020a03823516919081019060408101602082013564010000000081111561015957600080fd5b82018360208201111561016b57600080fd5b8035906020019184600183028401116401000000008311171561018d57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506102d0945050505050565b3480156101da57600080fd5b506100c7610216565b3480156101ef57600080fd5b506101166004803603602081101561020657600080fd5b5035600160a060020a03166103ab565b604080517f6f72672e7a657070656c696e6f732e70726f78792e696d706c656d656e74617481527f696f6e0000000000000000000000000000000000000000000000000000000000602082015290519081900360230190205490565b604080517f6f72672e7a657070656c696e6f732e70726f78792e6f776e65720000000000008152905190819003601a0190205490565b6102b0610272565b600160a060020a031633146102c457600080fd5b6102cd81610430565b50565b6102d8610272565b600160a060020a031633146102ec57600080fd5b6102f5826102a8565b600082600160a060020a0316826040518082805190602001908083835b602083106103315780518252601f199092019160209182019101610312565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610391576040519150601f19603f3d011682016040523d82523d6000602084013e610396565b606091505b505090508015156103a657600080fd5b505050565b6103b3610272565b600160a060020a031633146103c757600080fd5b600160a060020a03811615156103dc57600080fd5b7f5a3e66efaa1e445ebd894728a69d6959842ea1e97bd79b892797106e270efcd9610405610272565b60408051600160a060020a03928316815291841660208301528051918290030190a16102cd81610496565b600061043a610216565b9050600160a060020a03808216908316141561045557600080fd5b61045e826104cb565b604051600160a060020a038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a25050565b604080517f6f72672e7a657070656c696e6f732e70726f78792e6f776e65720000000000008152905190819003601a01902055565b604080517f6f72672e7a657070656c696e6f732e70726f78792e696d706c656d656e74617481527f696f6e0000000000000000000000000000000000000000000000000000000000602082015290519081900360230190205556fea165627a7a72305820","swarm_hash":"57afd81358bd6f18d7c0f40e11ef66b1fea9224b66c34705b3ce22c03b2ca8e2","gas_estimates":{"creation":{"codeDepositCost":"272400","executionCost":"infinite","totalCost":"infinite"},"external":{"":"infinite","implementation()":"630","proxyOwner()":"540","transferProxyOwnership(address)":"infinite","upgradeTo(address)":"22513","upgradeToAndCall(address,bytes)":"infinite"},"internal":{"setUpgradeabilityOwner(address)":"infinite"}},"function_hashes":{"implementation()":"5c60da1b","proxyOwner()":"025313a2","transferProxyOwnership(address)":"f1739cae","upgradeTo(address)":"3659cfe6","upgradeToAndCall(address,bytes)":"4f1ef286"},"abi":[{"constant":true,"inputs":[],"name":"proxyOwner","outputs":[{"name":"owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x025313a2"},{"constant":false,"inputs":[{"name":"implementation","type":"address"}],"name":"upgradeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x3659cfe6"},{"constant":false,"inputs":[{"name":"implementation","type":"address"},{"name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"payable":true,"stateMutability":"payable","type":"function","signature":"0x4f1ef286"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"name":"impl","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x5c60da1b"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferProxyOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xf1739cae"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"previousOwner","type":"address"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"ProxyOwnershipTransferred","type":"event","signature":"0x5a3e66efaa1e445ebd894728a69d6959842ea1e97bd79b892797106e270efcd9"},{"anonymous":false,"inputs":[{"indexed":true,"name":"implementation","type":"address"}],"name":"Upgraded","type":"event","signature":"0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b"}]};
let OwnedUpgradeabilityProxy = new EmbarkJS.Blockchain.Contract(OwnedUpgradeabilityProxyJSONConfig);
module.exports = OwnedUpgradeabilityProxy;