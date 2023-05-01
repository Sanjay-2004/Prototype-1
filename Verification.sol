// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

struct Details{
    string time_rn;
    string patch_name;
    string version_number;
    string file_name;
    bytes patch;
}

contract PatchUpload{
    Details[] public arr;
    function addPatch(string memory time, string memory pname, string memory vnumber,string memory fname, bytes memory data) public{
        Details memory temp;
        temp.time_rn = time;
        temp.patch_name = pname;
        temp.version_number = vnumber;
        temp.file_name = fname;
        temp.patch = data;
        arr.push(temp);
    }

    function sendPatch() public view returns(Details memory){
        uint k;
        k=arr.length-1;
        return(arr[k]);
    }
}