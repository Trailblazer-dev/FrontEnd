let rose ={
    roseQuantity: 50,
    pricerose:8,
    rosesTotal: function(){
        return this.roseQuantity*this.pricerose;
    },
}
//lilies
let lilies={
    liliesQuantity:20,
    pricelilies:10,
    liliesTotal : function(){
        return this.liliesQuantity*this.pricelilies;},
};
//tulip
let tulip={
    tulipQuantity:120,
    priceTulip:2,
    tulipsTotal : function(){
        return this.tulipQuantity*this.priceTulip;
    },
};

console.log(`Rose - unit price: ${rose.pricerose}
, quantity: ${rose.roseQuantity}, price: ${rose.rosesTotal()}`);
 
console.log(`Lilies - unit price: ${lilies.pricelilies}
, quantity: ${lilies.liliesQuantity}, price: ${lilies.liliesTotal()}`);

console.log(`Tulip - unit price: ${tulip.priceTulip}
, quantity: ${tulip.tulipQuantity}, price: ${tulip.tulipsTotal()}`);