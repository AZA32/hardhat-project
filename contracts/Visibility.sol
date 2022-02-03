//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


contract Visibility  {

    address gretter;

    constructor( address _gretter){
        gretter = _gretter;
    }

    function call() external {
       gretter.call{gas: 21000, value: 21 ether}(abi.encodeWithSignature("setGreeting(string)", "how old are you"));
    }

    function delegatecall() external {
        gretter.delegatecall{gas: 21000}(abi.encodeWithSignature("setGreeting(string)", "how old are you"));
    }
}