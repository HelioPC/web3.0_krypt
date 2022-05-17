// 893e5208aa690ddb4c9d8fb764b8ee146bc3166cd2863f554aad1aa956a1c6f9

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/AH2V8FlBiIVk5LAgoeKWSauNUsljBdYO',
      accounts: [
        "893e5208aa690ddb4c9d8fb764b8ee146bc3166cd2863f554aad1aa956a1c6f9"
      ]
    }
  }
}
