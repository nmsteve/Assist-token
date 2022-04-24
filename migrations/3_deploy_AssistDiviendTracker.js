const  _busd ="0x98fCA5d2be27b902605EfF3891847855a627eDDc"
const  Assist = "0xE765240958a91DF0cF878b8a4ED23D5FF8effFFe"

const AssistDividendTracker = artifacts.require("AssistDividendTracker")


module.exports = function (deployer) {
    deployer.deploy(AssistDividendTracker, _busd, Assist)
}