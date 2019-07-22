# tzToken - tokens on the Tezos blockchain
tzToken is a token standard developed by TezTech Labs, which runs on the Tezos blockchain. Our standard is modular, and implements a hex-based interface (which is built using the fi smart contract language). This allows us to develop easy interfaces and guides for simple integration with various apps, wallets and exchanges.

For information about the tztoken standard, please [visit our website](https://tztoken.teztech.io/). You can also check out our [JS utility library](https://github.com/TezTech/tztoken/blob/master/tztoken.js) (which works with [eztz.js](https://github.com/TezTech/eztz)) for interfacing with the tztoken, as well as our Technical Integration Guide (TBA).

# Documentation
Our tztoken library is written in JS, and requires the eztz.js library to work. This library should be used to easily integrate tztokens into websites, apps, exchanges and wallets. The tztoken library has the following functions:

```javascript
checkBalance(tokenContract, address)
```

This functions returns the current token balance for the given address and token contract.

```javascript
data(toAddrerss, amountToSend)
```

This function generates the hex parameter required to initiate a transfer of amount in tokens to the provided address. This can then be used with 3rd party libraries, like eztz.js.

```javascript
transfer(tokenContract, from, keys, to, amount, ?fee, ?gasLimit, ?storageLimit, ?revealFee)
```

This function will generate the hex parameter and utilize the eztz.js rpc.transfer function to submit the transaction to the blockchain.

# Fees, gas and storage limits
Fees and limits can be ommitted, and standard fees for our basic implementation will be used by default. It is advised that these parameters should be set as per the instructions of the token creators.
