"use strict";
const isNode = (typeof process !== 'undefined' && process.versions && process.versions.node);
const lib = isNode ? '../embarkjs.node' : '../embarkjs';
const EmbarkJSNode = isNode && require('../embarkjs.node');
let EmbarkJSBrowser;
try {
EmbarkJSBrowser = require('../embarkjs').default;
} catch(e) {};
const EmbarkJS = isNode ? EmbarkJSNode : EmbarkJSBrowser;
let ERC20JSONConfig = {"contract_name":"ERC20","code":"608060405234801561001057600080fd5b506107c1806100206000396000f3fe60806040526004361061008d5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b3811461009257806318160ddd146100df57806323b872dd14610106578063395093511461014957806370a0823114610182578063a457c2d7146101b5578063a9059cbb146101ee578063dd62ed3e14610227575b600080fd5b34801561009e57600080fd5b506100cb600480360360408110156100b557600080fd5b50600160a060020a038135169060200135610262565b604080519115158252519081900360200190f35b3480156100eb57600080fd5b506100f4610278565b60408051918252519081900360200190f35b34801561011257600080fd5b506100cb6004803603606081101561012957600080fd5b50600160a060020a0381358116916020810135909116906040013561027e565b34801561015557600080fd5b506100cb6004803603604081101561016c57600080fd5b50600160a060020a0381351690602001356102d5565b34801561018e57600080fd5b506100f4600480360360208110156101a557600080fd5b5035600160a060020a0316610311565b3480156101c157600080fd5b506100cb600480360360408110156101d857600080fd5b50600160a060020a03813516906020013561032c565b3480156101fa57600080fd5b506100cb6004803603604081101561021157600080fd5b50600160a060020a038135169060200135610368565b34801561023357600080fd5b506100f46004803603604081101561024a57600080fd5b50600160a060020a0381358116916020013516610375565b600061026f3384846103a0565b50600192915050565b60025490565b600061028b84848461050d565b600160a060020a0384166000908152600160209081526040808320338085529252909120546102cb9186916102c6908663ffffffff6106d116565b6103a0565b5060019392505050565b336000818152600160209081526040808320600160a060020a0387168452909152812054909161026f9185906102c6908663ffffffff61073116565b600160a060020a031660009081526020819052604090205490565b336000818152600160209081526040808320600160a060020a0387168452909152812054909161026f9185906102c6908663ffffffff6106d116565b600061026f33848461050d565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b600160a060020a0383161515610425576040805160e560020a62461bcd028152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a03821615156104ab576040805160e560020a62461bcd02815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b600160a060020a0383161515610593576040805160e560020a62461bcd02815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a0382161515610619576040805160e560020a62461bcd02815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a038316600090815260208190526040902054610642908263ffffffff6106d116565b600160a060020a038085166000908152602081905260408082209390935590841681522054610677908263ffffffff61073116565b600160a060020a038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008282111561072b576040805160e560020a62461bcd02815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b60008282018381101561078e576040805160e560020a62461bcd02815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b939250505056fea165627a7a72305820c7a1fe42e4d94ae5cfb2f77b0173e7dd04d3d68fcd2b1a95e79a356a807399700029","runtime_bytecode":"60806040526004361061008d5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b3811461009257806318160ddd146100df57806323b872dd14610106578063395093511461014957806370a0823114610182578063a457c2d7146101b5578063a9059cbb146101ee578063dd62ed3e14610227575b600080fd5b34801561009e57600080fd5b506100cb600480360360408110156100b557600080fd5b50600160a060020a038135169060200135610262565b604080519115158252519081900360200190f35b3480156100eb57600080fd5b506100f4610278565b60408051918252519081900360200190f35b34801561011257600080fd5b506100cb6004803603606081101561012957600080fd5b50600160a060020a0381358116916020810135909116906040013561027e565b34801561015557600080fd5b506100cb6004803603604081101561016c57600080fd5b50600160a060020a0381351690602001356102d5565b34801561018e57600080fd5b506100f4600480360360208110156101a557600080fd5b5035600160a060020a0316610311565b3480156101c157600080fd5b506100cb600480360360408110156101d857600080fd5b50600160a060020a03813516906020013561032c565b3480156101fa57600080fd5b506100cb6004803603604081101561021157600080fd5b50600160a060020a038135169060200135610368565b34801561023357600080fd5b506100f46004803603604081101561024a57600080fd5b50600160a060020a0381358116916020013516610375565b600061026f3384846103a0565b50600192915050565b60025490565b600061028b84848461050d565b600160a060020a0384166000908152600160209081526040808320338085529252909120546102cb9186916102c6908663ffffffff6106d116565b6103a0565b5060019392505050565b336000818152600160209081526040808320600160a060020a0387168452909152812054909161026f9185906102c6908663ffffffff61073116565b600160a060020a031660009081526020819052604090205490565b336000818152600160209081526040808320600160a060020a0387168452909152812054909161026f9185906102c6908663ffffffff6106d116565b600061026f33848461050d565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b600160a060020a0383161515610425576040805160e560020a62461bcd028152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a03821615156104ab576040805160e560020a62461bcd02815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b600160a060020a0383161515610593576040805160e560020a62461bcd02815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a0382161515610619576040805160e560020a62461bcd02815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a038316600090815260208190526040902054610642908263ffffffff6106d116565b600160a060020a038085166000908152602081905260408082209390935590841681522054610677908263ffffffff61073116565b600160a060020a038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008282111561072b576040805160e560020a62461bcd02815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b60008282018381101561078e576040805160e560020a62461bcd02815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b939250505056fea165627a7a72305820c7a1fe42e4d94ae5cfb2f77b0173e7dd04d3d68fcd2b1a95e79a356a807399700029","real_runtime_bytecode":"60806040526004361061008d5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b3811461009257806318160ddd146100df57806323b872dd14610106578063395093511461014957806370a0823114610182578063a457c2d7146101b5578063a9059cbb146101ee578063dd62ed3e14610227575b600080fd5b34801561009e57600080fd5b506100cb600480360360408110156100b557600080fd5b50600160a060020a038135169060200135610262565b604080519115158252519081900360200190f35b3480156100eb57600080fd5b506100f4610278565b60408051918252519081900360200190f35b34801561011257600080fd5b506100cb6004803603606081101561012957600080fd5b50600160a060020a0381358116916020810135909116906040013561027e565b34801561015557600080fd5b506100cb6004803603604081101561016c57600080fd5b50600160a060020a0381351690602001356102d5565b34801561018e57600080fd5b506100f4600480360360208110156101a557600080fd5b5035600160a060020a0316610311565b3480156101c157600080fd5b506100cb600480360360408110156101d857600080fd5b50600160a060020a03813516906020013561032c565b3480156101fa57600080fd5b506100cb6004803603604081101561021157600080fd5b50600160a060020a038135169060200135610368565b34801561023357600080fd5b506100f46004803603604081101561024a57600080fd5b50600160a060020a0381358116916020013516610375565b600061026f3384846103a0565b50600192915050565b60025490565b600061028b84848461050d565b600160a060020a0384166000908152600160209081526040808320338085529252909120546102cb9186916102c6908663ffffffff6106d116565b6103a0565b5060019392505050565b336000818152600160209081526040808320600160a060020a0387168452909152812054909161026f9185906102c6908663ffffffff61073116565b600160a060020a031660009081526020819052604090205490565b336000818152600160209081526040808320600160a060020a0387168452909152812054909161026f9185906102c6908663ffffffff6106d116565b600061026f33848461050d565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b600160a060020a0383161515610425576040805160e560020a62461bcd028152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a03821615156104ab576040805160e560020a62461bcd02815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b600160a060020a0383161515610593576040805160e560020a62461bcd02815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a0382161515610619576040805160e560020a62461bcd02815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a038316600090815260208190526040902054610642908263ffffffff6106d116565b600160a060020a038085166000908152602081905260408082209390935590841681522054610677908263ffffffff61073116565b600160a060020a038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008282111561072b576040805160e560020a62461bcd02815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b60008282018381101561078e576040805160e560020a62461bcd02815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b939250505056fea165627a7a72305820","swarm_hash":"c7a1fe42e4d94ae5cfb2f77b0173e7dd04d3d68fcd2b1a95e79a356a80739970","gas_estimates":{"creation":{"codeDepositCost":"397000","executionCost":"436","totalCost":"397436"},"external":{"allowance(address,address)":"904","approve(address,uint256)":"22615","balanceOf(address)":"733","decreaseAllowance(address,uint256)":"infinite","increaseAllowance(address,uint256)":"infinite","totalSupply()":"406","transfer(address,uint256)":"infinite","transferFrom(address,address,uint256)":"infinite"},"internal":{"_approve(address,address,uint256)":"infinite","_burn(address,uint256)":"infinite","_burnFrom(address,uint256)":"infinite","_mint(address,uint256)":"infinite","_transfer(address,address,uint256)":"infinite"}},"function_hashes":{"allowance(address,address)":"dd62ed3e","approve(address,uint256)":"095ea7b3","balanceOf(address)":"70a08231","decreaseAllowance(address,uint256)":"a457c2d7","increaseAllowance(address,uint256)":"39509351","totalSupply()":"18160ddd","transfer(address,uint256)":"a9059cbb","transferFrom(address,address,uint256)":"23b872dd"},"abi":[{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x18160ddd"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x39509351"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x70a08231"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa457c2d7"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xdd62ed3e"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"}]};
let ERC20 = new EmbarkJS.Blockchain.Contract(ERC20JSONConfig);
module.exports = ERC20;