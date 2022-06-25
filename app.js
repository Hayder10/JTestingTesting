// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    return  Math.round(((valueInDollar*127.9)/1.2)*100) / 100
}

const fromYenToPound = function(valueInYen){
    return Math.round(((valueInYen*0.8)/127.9)*100) / 100
}

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3));
console.log(fromDollarToYen(1));
console.log(fromYenToPound(200));
// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };