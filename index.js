names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function whosPaying(names) {
    selectedNames = Math.floor(Math.random() * names.length) + 1;
    return names[selectedNames];
    }
console.log(whosPaying(names));
 
myName = 'ade';
console.log(myName);

let fibNum = [];
let n = fibNum
function fibonacciGenerator(n) {
    //Do NOT change any of the code above 👆
    
    //Write your code here:
    for (let i = 0; i <= n; i++) {
        n = [n.push(fibNum)]; 
        return n
        //if ()
    }
    console.log(fibonacciGenerator(5));
}