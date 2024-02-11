// Import necessary libraries and modules
const { ethers, parseUnits } = require("ethers");
require("dotenv/config");



// Define contract address and import contract ABI
const contractAddress = "0x1b43fCeaaf67dff15Ad6B1E8791dC5b3e6bbd8BA";
const { _, abi } = require("../artifacts/contracts/ContractFactory.sol/ContractFactory.json");

// Initialize Ethereum provider and contract instances
const provider = new ethers.JsonRpcProvider(`https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API_KEY}`)
const contract = new ethers.Contract(contractAddress, abi, provider)
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)



// Function to perform read-only interactions with the contract
async function interaction() {
    const bytecode = "something";
    var salt = 0;
    const predictedAddress = "";
    for (let i = 0; i <= 4096; i++)
    {
        predictedAddress = await contract.getAddress(bytecode, i)
        if (predictedAddress.slice(2, 4) === "000")
        {
            salt = i;
        }
    }
    console.log(salt)
}

// Main function to execute the script
async function main() {
    await interaction();
}

// Call the main function to start the script
main();
