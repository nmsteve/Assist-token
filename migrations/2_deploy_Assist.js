// migrations/2_deploy_Assist.js
const Assist = artifacts.require('Assist');
const _routerAddress ="0x267962a3f7CC69a5E6Ab24A8459BdF7B3CA04Ac9"
const  _busd ="0x98fCA5d2be27b902605EfF3891847855a627eDDc"
const _marketingWallet ="0x98A6EeF34b345531926737E20B150781c137E89c"
const _developmentWallet ="0x42712A092965D12B2D47B884DBB0107B1d785814"
const _teamWallet ="0x0eA3eda55f4153bA9f27cF9b1A34b38087789d3F"

module.exports =  function (deployer) {
  deployer.deploy(Assist, _routerAddress, _busd,_marketingWallet,_developmentWallet,_teamWallet );
}