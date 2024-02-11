const { ethers } = require("ethers");
const sourceCodeFileName = "SimpleContract"
const { _, abi, bytecode } = require(`../artifacts/contracts/${sourceCodeFileName}.sol/${sourceCodeFileName}.json`);


async function getDeployBytecode(constructorArgs) {
    const abiCoder = new ethers.AbiCoder()
    console.log(abiCoder)
    // Encode the constructor arguments
    const encodedParams = abiCoder.encode([constructorArgs.type], [constructorArgs.values])

    // // Remove '0x' prefix if present
    // const cleanedEncodedParams = encodedParams.startsWith('0x') ? encodedParams.slice(2) : encodedParams;

    // // Combine the bytecode and encoded constructor parameters
    // const combinedBytecode = bytecode + cleanedEncodedParams;

    // return combinedBytecode;
    return 0;

}


// Example usage
const exampleConstructorArgs = {
    types: ['address'],
    values: ['0x1ce7BbFa437727495710fF8350b398d9Bc8Ec30A']
};

const combinedBytecode = getDeployBytecode(exampleConstructorArgs);
// console.log('Combined bytecode:', combinedBytecode);

