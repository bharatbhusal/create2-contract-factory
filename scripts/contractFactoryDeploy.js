const hre = require("hardhat");


async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms)
  })
}

const main = async () => {

  const contractFactory = await hre.ethers.deployContract("ContractFactory", [], {});
  await contractFactory.waitForDeployment();
  console.log(`Factory Contract deployed at ${contractFactory.target}`);



  //Delay
  await sleep(45 * 1000)

  await hre.run("verify:verify", {
    address: contractFactory.target,
    constructorArguments: []
  })
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});