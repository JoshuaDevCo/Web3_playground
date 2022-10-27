require("@nomicfoundation/hardhat-toolbox")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
   defaultNetwork: "hardhat",
   networks:{
      hardhat:{
         chainId: 31337
      },
      goerli:{
         
      }
   },
   solidity: "0.8.17",
};
