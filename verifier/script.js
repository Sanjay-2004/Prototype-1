const listofbnf = async() =>{
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
                    <small>PRIORITY ${buglist[i][2]}</small>
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
                    <small>PRIORITY ${featurelist[i][2]}</small>
                    </li>`
                }
                new_list+=`</div></div></div>`
                document.getElementById('list_of_bnf').innerHTML = new_list;
    }
}


const fromDev = async() =>{
    if(window.ethereum!=="undefined"){
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0]
        const ABI = [
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
        const Address = "0xE9fff0896994DF9d8fA4aE9458e60116ca235e49";
        window.web3 = await new Web3(window.ethereum);
        window.contract = await new window.web3.eth.Contract(ABI, Address);
        const data = await window.contract.methods.sendPatch().call();
        const blob = new Blob([new Uint8Array(web3.utils.hexToBytes(data[4]))], { type: 'application/octet-stream' });
		const url = URL.createObjectURL(blob);
		console.log(data[3])
		let patchDetails = `
		<div class="container px-4 text-center">
			<div class="row g-5">
				<div class="col-md-6 ">
					<div class="card text-center">
						<div class="card-header">
							Sent at : ${data[0]}
						</div>
						<div class="card-body">
							<h5 class="card-title">${data[1]}</h5>
							<p class="card-text">Version : ${data[2]}</p>
							<a href="${url}" download = "${data[3]}" class="btn btn-secondary">DOWNLOAD</a>
						</div>
					</div>
				</div>
				<div class="col-md-6 ">
					<div class="btn-group mt-5 mb-3" role="group" aria-label="Basic radio toggle button group">
						<input type="radio" class="btn-check" name="approval" value="ACCEPTED" id="btnradio1" autocomplete="off" checked>
						<label class="btn btn-outline-success px-5 py-2" for="btnradio1">ACCEPT</label>
						<input type="radio" class="btn-check" name="approval" value="REJECTED" id="btnradio2" autocomplete="off">
						<label class="btn btn-outline-danger px-5 py-2" for="btnradio2">REJECT</label>
					</div><br>
					<center id="sentdec"><button class="btn btn-secondary"  onclick="approval()" >SUBMIT</button></center>
				</div>
			</div>
		</div>`;
        document.getElementById('name_and_all').innerHTML = patchDetails;
    }

}

const approval = async() =>{
	let approved = document.querySelector('input[name="approval"]:checked').value;
	if(window.ethereum!=="undefined"){
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0];
        const ABI = [
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
        const Address = "0x804AcD6A1D5A942E32203Ac69BF306C94A08445B";
        window.web3 = await new Web3(window.ethereum);
        window.contract = await new window.web3.eth.Contract(ABI, Address);
            await window.contract.methods.decision(approved).send({from: account});
            document.getElementById("sentdec").innerHTML = "SUBMITTED SUCCESSFULLY"

    }
}


