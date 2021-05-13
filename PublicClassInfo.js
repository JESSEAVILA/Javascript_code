/*Program to convert Decimal number to Binary - development by PublicCLassInfo*/
function convertToBinary(d){
    let rem, show, res;
    let i = 1, bin = 0, step = 0;
    
    while(d != 0){
        rem = (d % 2);
        console.log(`Step: ${step++} - ${d} % 2 Remainder: ${rem}, Quotient: ${parseInt(d / 2)}`);
        
        bin = (bin + rem * i);
        i = (i * 10);
        d = parseInt(d / 2);
    }
    console.log (`Binary is: ${bin}`);
}

let number = prompt("Type here a decimal number: ");

convertToBinary(number);