//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import  "hardhat/console.sol";

contract Greeter {
    string internal greeting;

    uint[] internal myArray;

    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function greet() external view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }

    function getEncode() public pure returns (bytes32){
        return keccak256(abi.encode(0xff3213));
    }

    function getAiEncodePacked(string memory param) public pure returns (bytes memory){
        return abi.encodePacked(param);
    }

    function getAbiEncodeSignature(string memory param) external pure returns (bytes memory){
        return abi.encodeWithSignature("setGreeting(string)", param);
    }

    function call() external view returns (bytes memory){
        //address(this).call(getAbiEncodeSignature("2"));
        return this.getAbiEncodeSignature("2");
    }

    function opAssembly(uint256 _a, uint256 _b) external pure returns (uint256){
        assembly{
            let result := add(_a, _b)
            mstore(0x0, result)
            return (0x0, 32)
        }
    }

    function getArray() external view returns(uint[] memory){
        return myArray;
    }

    receive() external payable {}

    fallback() external {}
}
