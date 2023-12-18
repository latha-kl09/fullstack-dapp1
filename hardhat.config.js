require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
module.exports = {
  solidity: {
    version: "0.8.19",
    networks:{
      hardhat:{
        networks: {
          URL:process.env.URL,
          accounts: [process.env.PRIVATE_KEY]

        }
      }
    }
  },
  
};