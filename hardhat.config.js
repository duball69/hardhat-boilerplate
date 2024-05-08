require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:{
    sepolia:{
      url: "https://eth-sepolia.g.alchemy.com/v2/M87svOeOrOhMsnQWJXB8iQECjn8MJNW0",
      accounts: [
        "7388479fffd177a96efa0ca7e9596f0ea1478e090c9082a427052129c3d53df6"
      ],
    },
  },
};
