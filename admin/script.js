let new_list = `<div class="row gx-3">
<div class="col">
    <div class="list-group">`
const showdata = async() =>{
    if(window.ethereum!=="undefined"){
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0]
        const ABI = [
	{
		"inputs": [
			{
				"internalType": "string[][]",
				"name": "new_b",
				"type": "string[][]"
			},
			{
				"internalType": "string[][]",
				"name": "new_f",
				"type": "string[][]"
			}
		],
		"name": "get_list",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "bugs_arr",
		"outputs": [
			{
				"internalType": "string",
				"name": "bug_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "bug_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "bug_priority",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "features_arr",
		"outputs": [
			{
				"internalType": "string",
				"name": "feature_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "feature_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "feature_priority",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "send_list",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "bug_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "bug_description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "bug_priority",
						"type": "string"
					}
				],
				"internalType": "struct Bugs[]",
				"name": "",
				"type": "tuple[]"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "feature_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "feature_description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "feature_priority",
						"type": "string"
					}
				],
				"internalType": "struct Features[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
        const Address = "0x950777a2104427eD35971159169DA182ACB356B6";
                window.web3 = await new Web3(window.ethereum);
                window.contract = await new window.web3.eth.Contract(ABI, Address);
                const data = await window.contract.methods.send_list().call();
                // console.log(typeof(data));
                // console.log(data);
                const bugs = data[0];
                const features = data[1];
                for(i in bugs){
                    let temp = bugs[i];
                    new_list+=`<li class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">${temp[0]}</h5>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" name="bugs_dev" value="${temp[0]},${temp[1]},${temp[2]}" id="bugs_in_this_patch">
                        </div>
                    </div>
                    <p class="mb-1">${temp[1]}</p>
                    <small>${temp[2]}</small>
                </li>`;
                }
                new_list+=`        </div>
                </div>
                <div class="col">
                    <div class="list-group">`;
                for(i in features){
                    let temp = features[i];
                    new_list+=`<li class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">${temp[0]}</h5>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" name="features_dev" value="${temp[0]},${temp[1]},${temp[2]}" id="featuress_in_this_patch">
                        </div>
                    </div>
                    <p class="mb-1">${temp[1]}</p>
                    <small>${temp[2]}</small>
                </li>`;
                }
                new_list+=`</div>
                </div>
            </div>`;
            document.getElementById('finallist').innerHTML = new_list;
    }
}

const sendtoDev = async() =>{
    if(window.ethereum!=="undefined"){
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0]
        const ABI = [
			{
				"inputs": [
					{
						"internalType": "string",
						"name": "time_rn",
						"type": "string"
					},
					{
						"internalType": "string[][]",
						"name": "bugs",
						"type": "string[][]"
					},
					{
						"internalType": "string[][]",
						"name": "features",
						"type": "string[][]"
					}
				],
				"name": "to_dev",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "from_admin",
				"outputs": [
					{
						"components": [
							{
								"internalType": "string",
								"name": "time",
								"type": "string"
							},
							{
								"components": [
									{
										"internalType": "string",
										"name": "bug_name",
										"type": "string"
									},
									{
										"internalType": "string",
										"name": "bug_description",
										"type": "string"
									},
									{
										"internalType": "string",
										"name": "bug_priority",
										"type": "string"
									}
								],
								"internalType": "struct Bugs[]",
								"name": "bugs_arr",
								"type": "tuple[]"
							},
							{
								"components": [
									{
										"internalType": "string",
										"name": "feature_name",
										"type": "string"
									},
									{
										"internalType": "string",
										"name": "feature_description",
										"type": "string"
									},
									{
										"internalType": "string",
										"name": "feature_priority",
										"type": "string"
									}
								],
								"internalType": "struct Features[]",
								"name": "features_arr",
								"type": "tuple[]"
							}
						],
						"internalType": "struct Requests",
						"name": "",
						"type": "tuple"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"name": "sent_req",
				"outputs": [
					{
						"internalType": "string",
						"name": "time",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			}
		];
        const Address = "0x44FE70b842002816C73Ef746Cb9bd1Cf25B7b81A";
                window.web3 = await new Web3(window.ethereum);
                window.contract = await new window.web3.eth.Contract(ABI, Address);
    arrayb = [];
            $("input:checkbox[name=bugs_dev]:checked").each(function() {
                let temp = $(this).val()
                let b_arr = temp.split(",");
                arrayb.push(b_arr);
            });
    arrayf = [];
            $("input:checkbox[name=features_dev]:checked").each(function() {
                let temp = $(this).val()
                let f_arr = temp.split(",");
                arrayf.push(f_arr);
            });
            console.log(arrayb)
            console.log(arrayf)
            let arr = new Date().toString().split(" ");
            let date_rn=arr[2]+" "+arr[1]+ " "+ arr[3]+" "+arr[4]+" "+arr[5];
    await window.contract.methods.to_dev(date_rn,arrayb,arrayf).send({from: account});
    document.getElementById("sent_req").innerHTML = "SENT SUCCESSFULLY"
}
}



