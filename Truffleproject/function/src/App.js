import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Locationjs from './Locationjs';
import { ConnectWeb3, connectWeb3Metamask} from './Web3_functions';


function App() {

  const [contractInstance, setContract] = useState(null)
  const [accounts, setAccount] = useState()

  useEffect(() => {
    async function connect() {
      try {
        let { accounts, instance } = await connectWeb3Metamask();
        setAccount(accounts);
        setContract(instance);
      }
      catch (error) {
        alert(
          "Faild to load web3",
        );
        console.log(error);
      }
    }
    connect();


  }, [])

  return (
    <div className="App">

      {contractInstance == null ?
        <>
          <h2 style={{ textAlign: "center" }}> Please connect to your meta mask </h2>
        </> :
        <>
          <Locationjs contractInstance={contractInstance} account={accounts[0]} />
        </>}

    </div>
  );
}

export default App;
