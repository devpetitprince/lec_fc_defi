import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      gas: 10000000,
      gasPrice: 875000000
    },
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/QTf8Pk_9sggTwzU7pA-V3Ttxe3-N1XOX',
      accounts: ['919fbf1f95e913a4734293d62ebd97f1f326dea31c68fa7b8ae99a0866045790']
    },
    goerli: {
      url: 'https://ethereum-goerli-rpc.allthatnode.com/v14rcnspsoUZ2UZu0B2mKQjhuZjpoE2t',
      accounts: ['919fbf1f95e913a4734293d62ebd97f1f326dea31c68fa7b8ae99a0866045790']
    },
  },
  etherscan: {
    apiKey: "G6E29Q1S9WZ9438GNA6RA9X36ZSJU3ZIUU"
  }
};

export default config;