const Token = artifacts.require("MinimalERC721");

module.exports = function (deployer) {
  deployer.deploy(Token);
};

// module.exports = function (deployer, network) {
//   console.log(network);
//   if (network != "live") {
//     deployer.exec("add_demo_data.js");
//   }

//   var old_contract = eth.contract(abi).at(address1);
//   old_contract.upgrade.sendTransaction(address2);
// };
