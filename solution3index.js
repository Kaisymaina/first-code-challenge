// insert the basic salary below
const basicSalary = 10000;
//inset the benefits below
const benefits = 3000;

function calculateNetSalary(basicSalary,benefits){

//the following show the rates of NHIF,tax and NSSF
const NHIFrate = 0.03;
const taxRate = 0.1;
const NSSFrate = 0.06;

//this calculates the gross salary of the individual
grossSalary = basicSalary + benefits

const NHIF = grossSalary * NHIFrate;
const tax = grossSalary * taxRate;
const NSSF = grossSalary * NSSFrate;

//this calculates the net salary of the individual
const netSalary = grossSalary - (NHIF + tax + NSSF);

return{
    grossSalary,
    NHIF,
    tax,
    NSSF,
    netSalary,
}
}
const output = calculateNetSalary(basicSalary,benefits)
//this gives the output of gross salary
console.log('grossSalary:',output.grossSalary);
//this gives the output of NHIF
console.log('NHIF:',output.NHIF);
//this gives the output of the tax
console.log('tax:',output.tax);
//this gives the output of NSSF
console.log('NSSF:',output.NSSF);
//this gives the outut of net salary
console.log('netSalary:',output.netSalary);