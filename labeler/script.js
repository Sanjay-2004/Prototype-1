let bugs_list = ``, features_list = ``;
let final_b=[], final_f=[];
const addbug = () =>{
    let bug_title = document.getElementById('bug-title').value;
    let bug_description = document.getElementById('bug-description').value;
    let bug_priority = document.querySelector('input[name="bugs-priority"]:checked').value;

    let item = `<li class="list-group-item list-group-item-action" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${bug_title}</h5>
    </div>
    <p class="mb-1">${bug_description}</p>
    <small>PRIORITY: ${bug_priority}</small>
</li>`;
let new_b=[];
new_b.push(bug_title,bug_description,bug_priority);
final_b.push(new_b);
bugs_list+=item;
document.getElementById('selected_bugs').innerHTML = bugs_list;
}

const addfeature = () =>{
    let feature_title = document.getElementById('feature-title').value;
    let feature_description = document.getElementById('feature-description').value;
    let feature_priority = document.querySelector('input[name="feature-priority"]:checked').value;
    
    let f_item = `<li class="list-group-item list-group-item-action" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">${feature_title}</h5>
    </div>
    <p class="mb-1">${feature_description}</p>
    <small>PRIORITY: ${feature_priority}</small>
    </li>`;
    let new_f=[];
    new_f.push(feature_title,feature_description,feature_priority);
    final_f.push(new_f);
    features_list+=f_item;
    document.getElementById('selected_features').innerHTML = features_list;
}

const sendData = async() =>{
    if(window.ethereum!=="undefined"){
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0];
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
            await window.contract.methods.get_list(final_b, final_f).send({from: account});
            document.getElementById("submit_button").innerHTML = "SUBMITTED SUCCESSFULLY"

    }
}


