// Import necessary libraries and modules
const { ethers, parseUnits } = require("ethers");
require("dotenv/config");



// Define contract address and import contract ABI
const contractAddress = "0x5e74f3fBaC6C836e519d2628ADf156299B187e10";
const { _, abi } = require("../artifacts/contracts/ContractFactory.sol/ContractFactory.json");
const { bytecode } = require("../artifacts/contracts/SimpleContract.sol/SimpleContract.json")

// Initialize Ethereum provider and contract instances
const provider = new ethers.JsonRpcProvider(`https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`)
const contract = new ethers.Contract(contractAddress, abi, provider)
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
// console.log(contract)


// Function to interact with the contract and change its state
async function stateChangingInteraction(functionName, argumentsList) {
    try
    {
        // Send a transaction to the contract
        const transaction = await wallet.sendTransaction({
            to: contractAddress,
            data: contract.interface.encodeFunctionData(functionName, argumentsList),
        });
        console.log("Transaction created");

        // Wait for the transaction to be mined and get the receipt
        const receipt = await transaction.wait();
        // console.log(receipt);
        return receipt;
    } catch (error)
    {
        console.error(error.reason);
    }
}

// Function to perform read-only interactions with the contract
async function interaction() {

    console.log(await stateChangingInteraction("getAddress", [bytecode, 69]));
    // await stateChangingInteraction("deploy", [bytecode, 69]);
    // var salt = 10;
    // var predictedAddress = "";
    // for (let i = 0; i <= 4096; i++)
    // {
    //     predictedAddress = await contract.getAddress(bytecode, i)
    //     console.log(predictedAddress)
    //     console.log(predictedAddress.slice(2, 5))
    //     console.log(salt)
    //     if (predictedAddress.slice(2, 4) === "000")
    //     {
    //         salt = i;
    //     }
    // }
}

// Main function to execute the script
async function main() {
    await interaction();
}

// Call the main function to start the script
main();
