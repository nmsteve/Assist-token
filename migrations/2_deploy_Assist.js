// migrations/2_deploy_Assist.js
const Assist = artifacts.require('Assist');

module.exports =  function (deployer) {
  deployer.deploy(Assist,"0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D", '0xb05cB2b95e40A88661646AE64fa4C2B0B6233611','0xb05cB2b95e40A88661646AE64fa4C2B0B6233611','0xb05cB2b95e40A88661646AE64fa4C2B0B6233611','0xb05cB2b95e40A88661646AE64fa4C2B0B6233611');
};

