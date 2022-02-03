//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./Greeter.sol";
import {a} from "./Constant.sol";

contract Visibility is Greeter {

    constructor(string memory _greeting) Greeter(_greeting){

    }

    function get() external view returns(string memory){
      return a;
    }
}