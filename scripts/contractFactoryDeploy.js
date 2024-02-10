const hre = require("hardhat");

const main = async () => {

  const contractFactory = await hre.ethers.deployContract("ContractFactory", [], {});
  await contractFactory.waitForDeployment();
  console.log(`Factory Contract deployed at ${contractFactory.target}`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});