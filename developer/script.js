const fromadmin = async() =>{
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
                let timeofrequest = data[0];
                let new_list = `<div class=" d-flex w-100 m-2 p-3 justify-content-between">
                <h5>PATCH:</h5><small>sent at: ${timeofrequest}</small></div> <div class="row m-3 gx-3">
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
                document.getElementById('from_admin').innerHTML = new_list;
    }
}

const sendtoverify = async() =>{
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
		let patchName = document.getElementById("patch_name").value;
		let patchVersion = document.getElementById("patch_version").value;
		console.log(typeof(patchVersion))
		let fileinput = document.getElementById("file-input");
		const file = fileinput.files[0];
		let file_name = file.name;
		const reader = new FileReader();
		reader.readAsArrayBuffer(file);
		reader.onload = async () => {
			const fileData = new Uint8Array(reader.result);
			console.log(typeof(fileData));
			console.log(file_name)
			console.log(account);
			let dateofupload = new Date().toString().split(" ");
            let timeofupload=dateofupload[2]+" "+dateofupload[1]+ " "+ dateofupload[3]+" "+dateofupload[4]+" "+dateofupload[5];
			await contract.methods.addPatch(timeofupload, patchName, patchVersion, file_name, fileData).send({ from: account })
			document.getElementById('doneuploading').innerHTML = "Patch info successfully added to blockchain";
		}
	}	
}

const upload = ()=>{
	let kkr = `<div class="container my-5 bg-light">
	<div id="from_admin"></div>
	<div class="p-3">
		<div class="input-group mb-3">
			<input type="text" id="patch_name" class="form-control me-2" placeholder="Patch Name" aria-label="Patch Name">
			<input type="number" id="patch_version" step="any" class="form-control" placeholder="Version Number" aria-label="Version Number">
		</div>
		<label for="file-input" class="form-label">Upload patch</label>
		<input class="form-control" type="file" id="file-input">
		<center class="mt-3" id="doneuploading">
			<button onclick="sendtoverify()" type="submit" class="btn btn-secondary">SUBMIT</button>
		</center>
	</div>
</div>`;
document.getElementById('upload').innerHTML = kkr;
}