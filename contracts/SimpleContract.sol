// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

contract SimpleContract {
    address owner;

    constructor(address _owner) {
        owner = _owner;
    }

    function getOwner() public view returns (address) {
        return owner;
    }
}
