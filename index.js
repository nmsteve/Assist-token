const Web3 = require("web3")
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonicPhrase = "under leg any edge candy ranch sorry dash nest remain toward urban"
var provider = new HDWalletProvider({
  mnemonic: mnemonicPhrase,
  providerOrUrl: `https://kovan.infura.io/ws/v3/${process.env.SECRET_KEY}`,
  pollingInterval: 8000
});
var web3 = new Web3(provider)

var accounts = web3.eth.getAccounts()

console.log(accounts)
var bal = web3.eth.getBalance(accounts[0])
console.log(bal)

var balkovan = await web3.eth.getBalance('0xb05cB2b95e40A88661646AE64fa4C2B0B6233611')
await web3.utils.fromWei(bal, "ether")
0x492c5102AF15eA6A8be2118fd442e97Cafd37019 - rinkeby

Mumai
await web3.eth.getAccounts().then(accounts, function (){var bal = accounts[0]; console.log(bal)})
var accounts = await web3.eth.getAccounts()
owner = '0xdd305DCf8C019B2E89cCEcfeDD80093726F611EF'
var bal = await web3.eth.getBalance(owner)
