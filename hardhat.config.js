import hhEthers from "@nomicfoundation/hardhat-ethers";
import hhUpgrades from "@openzeppelin/hardhat-upgrades";
import hhFoundry from "@nomicfoundation/hardhat-foundry";
import hhMocha from "@nomicfoundation/hardhat-mocha";

const config = {
  solidity: "0.8.24",
  paths: {
    sources: "./contracts",
    tests: "./test/upgradeability"
  },
  plugins: [
    hhEthers,
    hhUpgrades,
    hhFoundry,
    hhMocha
  ]
};

export default config;
