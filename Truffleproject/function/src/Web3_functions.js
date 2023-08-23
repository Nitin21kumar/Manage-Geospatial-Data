import Web3 from "web3"
import LocationContract from "./ContractAbi.json";



async function ConnectWeb3() {


    const providers = new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545');

    var web3 = new Web3(providers);


    const accounts = await web3.eth.getAccounts();
    console.log("acc:", accounts)

    const networkId = await web3.eth.net.getId();
    const DeployedNetwork = LocationContract.networks[networkId];

    var instance = await new web3.eth.Contract(
        LocationContract.abi,
        DeployedNetwork.address
    );
    // console.log(instance.methods);
    return { accounts, instance }
}

async function connectWeb3Metamask() {
    const web3 = new Web3(Web3.givenProvider);
    console.log("Web3:", web3);
    const accounts = await web3.eth.requestAccounts();
    console.log("accounts:", accounts);


    const networkId = await web3.eth.net.getId();
    const DeployedNetwork = LocationContract.networks[networkId];

    var instance = await new web3.eth.Contract(
        LocationContract.abi,
        DeployedNetwork.address
    );
    // console.log(instance.methods);
    return { accounts, instance }
}

async function setGeo(contractInstance, account, latitude, longitude) {
    let res = await contractInstance.methods.setGeo(Number(latitude), Number(longitude)).send({ from: account });
    console.log("res:", res);
    // return res.events.success.returnValue.value;

}

export { ConnectWeb3, setGeo , connectWeb3Metamask}