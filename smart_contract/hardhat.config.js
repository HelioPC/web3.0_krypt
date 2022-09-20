require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/',
      accounts: [
        "YOUR_SOLIDITY_ACCOUNT"
      ]
    }
  }
}
