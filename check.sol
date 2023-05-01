// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;
struct check{
    uint kk;
    string name;
}
contract simple{
    string[][] public new_a = [["Hello","Hie"],["Bye","New"],["Huh","Bye"]];
    uint public ll = new_a.length;

    check ss;
        constructor() {
        ss.kk = 3;
        ss.name = "sanjay";
    }

    function senddd() public view returns (check memory){
        return ss;
    }
}