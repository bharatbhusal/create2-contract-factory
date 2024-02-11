// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

contract ContractFactory {
    event Deploy(address deployedContractAddress);
    event PridictedAddress(address predictedDeployedContractAddress);

    function deploy(bytes memory bytecode, uint _salt) external {
        address addr;
        assembly {
            addr := create2(0, add(bytecode, 0x20), mload(bytecode), _salt)
            if iszero(extcodesize(addr)) {
                revert(0, 0)
            }
        }

        emit Deploy(addr);
    }

    function getAddress(bytes memory bytecode, uint _salt) public {
        bytes32 hash = keccak256(
            abi.encodePacked(
                bytes1(0xff),
                address(this),
                _salt,
                keccak256(bytecode)
            )
        );
        emit PridictedAddress(address(uint160(uint(hash))));
    }
}
