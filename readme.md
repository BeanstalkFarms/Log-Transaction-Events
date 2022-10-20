# Log Transaction Events

## How to use

1. Set `<RPC_URL>` in `events.js`

2. run `npm install`

2. run `node beanstalk.js <TRANSACTION_HASH>` to print events for a Beanstalk transaction


## Adding new contracts

New contracts can easily be added
1. Add a contract abi in `abi/` 

2. Create a `.js` file that defines the contract address, imports the abi and calls `printContractEvents` in `events.js`.

* Use the `beanstalk.js` as a reference when adding new contracts.