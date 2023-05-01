// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

contract Statuslevel{
    string[] status;
    function decision(string memory dec) public{
        status.push(dec);
    }

    function whatisdec() public view returns(string memory){
        uint k;
        k=status.length-1;
        return status[k];
    }
}