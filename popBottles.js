var myInvestment = parseInt(process.argv.slice(2));

let totPops = 0;
let totBottles = 0;
let totCaps = 0;
let currCaps = 0;
let currBottles = 0;

const recycle = function recycleRecursive(currPops){
    totPops += currPops;
    currCaps += currPops;
    currBottles += currPops; 
    totBottles += Math.floor(currBottles / 2);
    totCaps += Math.floor(currCaps / 4); 
    morePops = Math.floor(currCaps / 4) + Math.floor(currBottles / 2);
    currCaps = currCaps % 4;
    currBottles = currBottles % 2; 
    if (morePops === 0){
        return 0;
    } else {
        return recycle(morePops);
    }
};

const calcBottles = function calculateTotalBottles(cash){
    recycle(cash / 2);
    return(`Total Bottles: ${totPops}\nRemaining Bottles: ${currBottles}\nRemaining Caps: ${currCaps}\nTotal Earned:\n  Bottles:${totBottles}\n  Caps: ${totCaps}`.toUpperCase());
    
};

console.log(calcBottles(myInvestment));

