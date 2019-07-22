var tztoken = {
  checkBalance : function(token, address){
    var key = {
      key: eztz.utility.sexp2mic('"'+address+'"'),
      type: eztz.utility.sexp2mic("address")
    };
    return eztz.rpc.call("/chains/main/blocks/head/context/contracts/"+token+"/big_map_get", key);
  },
  data : function(token, to, amount){
		var data = "0x19308cc0";
		data += "050707";
		data += eztz.tezos.encodeRawBytes(eztz.utility.sexp2mic('"'+to+'"')).toLowerCase();
		data += "0707";
		data += eztz.tezos.encodeRawBytes(eztz.utility.sexp2mic(amount.toString())).toLowerCase();
		data += "0306";
		return data;
  },
  transfer : function(token, from, keys, to, amount, fee, gasLimit, storageLimit, revealFee){
		return eztz.rpc.transfer(from, keys, token, 0, fee, tztoken.data(token, to, amount), gasLimit, storageLimit, revealFee);
  }
};
