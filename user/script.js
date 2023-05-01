const approval = async()=>{
	if(window.ethereum!=='udefined'){
		const accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0];
		let ABI = [
			{
				"inputs": [
					{
						"internalType": "string",
						"name": "time",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "pname",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "vnumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "fname",
						"type": "string"
					},
					{
						"internalType": "bytes",
						"name": "data",
						"type": "bytes"
					}
				],
				"name": "addPatch",
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
				"name": "arr",
				"outputs": [
					{
						"internalType": "string",
						"name": "time_rn",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "patch_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "version_number",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "file_name",
						"type": "string"
					},
					{
						"internalType": "bytes",
						"name": "patch",
						"type": "bytes"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "sendPatch",
				"outputs": [
					{
						"components": [
							{
								"internalType": "string",
								"name": "time_rn",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "patch_name",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "version_number",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "file_name",
								"type": "string"
							},
							{
								"internalType": "bytes",
								"name": "patch",
								"type": "bytes"
							}
						],
						"internalType": "struct Details",
						"name": "",
						"type": "tuple"
					}
				],
				"stateMutability": "view",
				"type": "function"
			}
		];
				let Address = "0xE9fff0896994DF9d8fA4aE9458e60116ca235e49";
				window.web3 = await new Web3(window.ethereum);
				window.contract = await new window.web3.eth.Contract(ABI, Address);
				const filedata = await window.contract.methods.sendPatch().call();
				const blob = new Blob([new Uint8Array(web3.utils.hexToBytes(filedata[4]))], { type: 'application/octet-stream' });
				const url = URL.createObjectURL(blob);

// RECEIVED FILE, NAME AND ALL above

        ABI = [
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
        Address = "0x44FE70b842002816C73Ef746Cb9bd1Cf25B7b81A";
        window.web3 = await new Web3(window.ethereum);
        window.contract = await new window.web3.eth.Contract(ABI, Address);
        const data = await window.contract.methods.from_admin().call();
        let new_list = `<div class="row m-3 gx-3">
        <div class="col m-2"><div class="list-group">`
        let buglist = data[1]
        for(let i=0;i<buglist.length;i++){
            new_list+=`<li class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${buglist[i][0]}</h5>
            </div>
            <p class="mb-1">${buglist[i][1]}</p>
            </li>`
        }
        new_list+=`</div></div>
        <div class="col m-2">
        <div class="list-group">`
        let featurelist = data[2];
        for(let i=0;i<featurelist.length;i++){
            new_list+=`<li class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${featurelist[i][0]}</h5>
            </div>
            <p class="mb-1">${featurelist[i][1]}</p>
            </li>`
        }
        new_list+=`</div></div></div>`
        new_list+=`
    <div class=" mb-5 card text-center">
        <div class="card-body">
            <h5 class="card-title">${filedata[1]}</h5>
            <p class="card-text">Version : ${filedata[2]}</p>
            <a href="${url}" download = "${filedata[3]}" class="btn btn-secondary">DOWNLOAD</a>
        </div>
    </div>`
        document.getElementById('list_of_bnf').innerHTML = new_list;
}}

const accepted = async()=>{
    if(window.ethereum!=="undefined"){
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0];
		let ABI = [
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "dec",
                        "type": "string"
                    }
                ],
                "name": "decision",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "whatisdec",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ];
				let Address = "0x804AcD6A1D5A942E32203Ac69BF306C94A08445B";
				window.web3 = await new Web3(window.ethereum);
				window.contract = await new window.web3.eth.Contract(ABI, Address);
				const filedata = await window.contract.methods.whatisdec().call();
                console.log(filedata)
                if(filedata=="ACCEPTED"){
                    approval();
                }
                else if(filedata=="REJECTED"){
                    let newlist = `<div class=" mt-5 alert alert-secondary" role="alert">
                        UPDATE STILL NOT RELEASED
</div>`
                    document.getElementById('list_of_bnf').innerHTML = newlist;
                }
    }
}