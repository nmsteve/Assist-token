# Deploying smart contract to cronos and Polygon testnest
The contract begin deployed using the following standards ERC20, ERC1363, ERC2612 and BEP20. They also implement UniswapV2Router02.

## Seeting up the Network

Follow the following guide to creat account of each network


## Deployment instructions

There are two contrctions to deploy- Assist and AssistDividendTracker.<br>

### Assist Contract
You have to pass 5 parameters as seen in  2_deploy_Assist.js deployments scripts.
The first two parameters the  *_routerAddress* and *_busd* points to other contracts that have been deployed in the network in these addresses: <br>
There other three parameters can work with address generated with the deployer mnemonic.

Cronos
UniswapV2Router02 cronos  address = 0xE765240958a91DF0cF878b8a4ED23D5FF8effFFe
BEP20 cronos address =  0xc6E9e235087B434089c6Af46251A368c803B1b42

Polygon Matic
UniswapV2Router02 matic adress =  0x267962a3f7CC69a5E6Ab24A8459BdF7B3CA04Ac9
BEP20 matic address = 0x98fCA5d2be27b902605EfF3891847855a627eDDc

### AssistDividendTracker
You have to pass two parameters BEP20 address and Assist address.Therefore these contracts must be deployed in the network. <br>

cronos
Assist cronos address = 0x12EE4CB9C76d933738b85DB00052C3b85C40DEBb (during deployment check for deployment address of Assist contract or set the address manually)
BEP20 cronos address =  0xc6E9e235087B434089c6Af46251A368c803B1b42 <br>

matic
BEP20 matic address = 0x98fCA5d2be27b902605EfF3891847855a627eDDc
Assist matic address = 0xE765240958a91DF0cF878b8a4ED23D5FF8effFFe



### Deployment Parameters UniswapV2Router02 

Cronos <br>
 UniswapV2Factory cronos  address = 0xAe09AE7830c432c15a9c8Ad2113805dEC4c4a24d
 WETH9 cronos  address = 0x717317A02dF5339f2b4AfFD8082EF3F98645756f
 UniswapV2Router02 cronos  address = 0xE765240958a91DF0cF878b8a4ED23D5FF8effFFe
 AssistDividendTracker cronos  address = "0x5aDA2836d1aCc727a5d94883607009A2Ae8e3552"
 
Matic<br>
 UniswapV2Factory matic   address = 0xda44410CDD7d3CfF775199b5bF4F838A30DBF013
 WETH9 matic adress = 0x7E6385D6F3b1fB8beb95d9D8c137645345aBa116
 
 