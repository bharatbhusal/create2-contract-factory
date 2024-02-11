// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

contract SimpleContract {
    address owner = 0x1ce7BbFa437727495710fF8350b398d9Bc8Ec30A;

    function getOwner() public view returns (address) {
        return owner;
    }
}
