var Web3 = require('web3');
var ethers = require('ethers');
const RPC_URL = '<RPC_URL>' // RPC URL
var web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));

async function printEvent(e) {
    console.log(`----------------------------------`)
    console.log(`${e.signature}`)
    Object.entries(e.args).forEach(([k,v], i) => {
        if (!parseInt(k) && parseInt(k) != 0) console.log(`${k}: ${v}`)
    })

}

async function printContractEvents(address, abi) {
    let iface = new ethers.utils.Interface(abi)
    console.log(`\nContract: ${address}`)
    console.log(`Transaction Hash: ${process.argv[2].toString()}\n`)
    const txn = await web3.eth.getTransactionReceipt(process.argv[2].toString())
    txn.logs.forEach((t) => {
        if (t.address == address) printEvent(iface.parseLog(t))
    })
    console.log(`----------------------------------\n\n\n`)
}

exports.printContractEvents = printContractEvents