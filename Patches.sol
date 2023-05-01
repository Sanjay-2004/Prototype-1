// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

struct Bugs{
    string bug_name;
    string bug_description;
    string bug_priority;
}
struct Features{
    string feature_name;
    string feature_description;
    string feature_priority;
}

contract Patch{
string h="HIGH";
    Bugs[] public bugs_arr;
    Features[] public features_arr;
    function get_list(string[][] memory new_b,string[][] memory new_f) public{
        delete bugs_arr;
        for(uint i=0;i<new_b.length;i++){
            Bugs memory temp;
            temp.bug_name = new_b[i][0];
            temp.bug_description = new_b[i][1];
            temp.bug_priority = new_b[i][2];
            bugs_arr.push(temp);
        }
        delete features_arr;
        for(uint i=0;i<new_f.length;i++){
            Features memory temp;
            temp.feature_name = new_f[i][0];
            temp.feature_description = new_f[i][1];
            temp.feature_priority = new_f[i][2];
            features_arr.push(temp);
        }
    }
    function send_list() public view returns(Bugs[] memory, Features[] memory ){
        return (bugs_arr,features_arr);
    }

}