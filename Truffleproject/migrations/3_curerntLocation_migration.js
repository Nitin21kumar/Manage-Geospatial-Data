const current = artifacts.require("currentLocation");

module.exports = function(deployer) {
  deployer.deploy(current);
};