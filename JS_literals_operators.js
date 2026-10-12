
let nullValue=null;
let undefinedValue;

console.log("nullValue:", nullValue); // Output: nullValue: null
console.log("undefinedValue:", undefinedValue); // Output: undefinedValue: undefined
console.log("Type of nullValue:",typeof nullValue); // Output: Type of nullValue: object
console.log("Type of undefinedValue:",typeof undefinedValue); // Output: Type of undefinedValue: undefined

function greet(){

}
console.log(greet());
console.log("Type of greet():",typeof greet()); // Output: Type of greet(): undefined

let decimal=42;
console.log("decimal:",decimal);

let binary=0b101010;
console.log("binary:",binary);

let octal=0o52;
console.log("octal:",octal);

let hexadecimal=0x2A;
console.log("hexadecimal:",hexadecimal);

let big=1234567890123456789012345678901234567890n;
let big2=BigInt("123456789012345678901234567890");
let bigFromNumber=BigInt(42);
console.log(("big:",big));
console.log("big2:",big2);
console.log("bigFromNumber:",bigFromNumber);
console.log("Type of big:",typeof big);

console.log("Infinity:",Infinity);
console.log("1/0:",1/0);
console.log("-Infinity -1/0:",-1/0);
console.log("type of Infinity:",typeof Infinity);

console.log("NaN:",NaN);
console.log("0/0:",0/0);
console.log("type of NaN:",typeof NaN);
console.log("'hello'*2","hello"*2);
console.log("type of NaN:",typeof NaN);

// == -> Loose equality operator , === -> Strict equality operator
console.log(5=='5'); // true
console.log(5==='5'); // false
console.log(5!=5); // false
console.log(5!==5); // false

console.log(""===0); // false
console.log(""==0); // true
console.log(""=="0"); // false
console.log("0"===0); // false

let str="Hello";
console.log("str:",str);
console.log("Type of str:",typeof str);
console.log("Typeof 31.4:",typeof 31.4);

let isci=true;
let browserMode=isci?"headless":"headed";
console.log("browserMode:",browserMode);

let responseTime=850;
let sla=1000;
let slaStatus=responseTime<=sla?"Within SLA":"Outside SLA";
console.log("slaStatus:",slaStatus);

console.log("Type of true:",typeof true);
console.log("Type of undefined:",typeof undefined);
console.log("Type of null:",typeof null);
console.log("Type of []:",typeof []);

