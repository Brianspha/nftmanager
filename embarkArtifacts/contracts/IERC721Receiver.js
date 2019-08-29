"use strict";
const isNode = (typeof process !== 'undefined' && process.versions && process.versions.node);
const lib = isNode ? '../embarkjs.node' : '../embarkjs';
const EmbarkJSNode = isNode && require('../embarkjs.node');
let EmbarkJSBrowser;
try {
EmbarkJSBrowser = require('../embarkjs').default;
} catch(e) {};
const EmbarkJS = isNode ? EmbarkJSNode : EmbarkJSBrowser;
let IERC721ReceiverJSONConfig = {"contract_name":"IERC721Receiver","code":"","runtime_bytecode":"","real_runtime_bytecode":"","swarm_hash":"","gas_estimates":null,"function_hashes":{"onERC721Received(address,address,uint256,bytes)":"150b7a02"},"abi":[{"constant":false,"inputs":[{"name":"operator","type":"address"},{"name":"from","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"data","type":"bytes"}],"name":"onERC721Received","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x150b7a02"}]};
let IERC721Receiver = new EmbarkJS.Blockchain.Contract(IERC721ReceiverJSONConfig);
module.exports = IERC721Receiver;