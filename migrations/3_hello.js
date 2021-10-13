const hello = artifacts.require("hello.sol");

module.exports = function (deployer) {
  deployer.deploy(hello);
};
