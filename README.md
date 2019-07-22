# tzToken - tokens on the Tezos blockchain
tzToken is a token standard developed by TezTech Labs, which runs on the Tezos blockchain. Our standard is modular, and implements a hex-based interface (which is built using the fi smart contract language). This allows us to develop easy interfaces and guides for simple integration with various apps, wallets and exchanges.

For information about the tztoken standard, please visit our website. You can also check out our JS utility library (which works with eztz.js) for interfacing with the tztoken, as well as our Technical Integration Guide.

# Documentation
Our tztoken library is written in JS, and requires the eztz.js library to work. This library should be used to easily integrate tztokens into websites, apps, exchanges and wallets. The tztoken library has the following functions:

```javascript
checkBalance(tokenContract, address)
```

This functions returns the current token balance for the given address and token contract.

```javascript
data(toAddrerss, amountToSend)
```

This function generates the hex parameter required to initiate a transfer of amount in tokens to the provided address.

```javascript
transfer(tokenContract, from, keys, to, amount, ?fee, ?gasLimit, ?storageLimit, ?revealFee)
```

This function will generate the hex parameter and utilize the eztz.js rpc.transfer function to submit the transaction to the blockchain.

# Fees, gas and storage limits
Coming soon
