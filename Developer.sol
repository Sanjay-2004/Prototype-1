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
struct Requests{
    string time;
    Bugs[] bugs_arr;
    Features[] features_arr;
}



contract Developer{
    mapping (string=>Requests) public sent_req;
    string[] dates;
    function to_dev(string memory time_rn, string[][] memory bugs, string[][] memory features) public{
        Requests storage temporary = sent_req[time_rn];
        dates.push(time_rn);
        temporary.time = time_rn;
        for(uint i=0;i<bugs.length;i++){
            Bugs memory temp;
            temp.bug_name = bugs[i][0];
            temp.bug_description = bugs[i][1];
            temp.bug_priority = bugs[i][2];
            temporary.bugs_arr.push(temp);
        }
        for(uint i=0;i<features.length;i++){
            Features memory temp;
            temp.feature_name = features[i][0];
            temp.feature_description = features[i][1];
            temp.feature_priority = features[i][2];
            temporary.features_arr.push(temp);
        }
    }

    function from_admin() public view returns (Requests memory){
        return(sent_req[dates[dates.length-1]]);
    }
}
