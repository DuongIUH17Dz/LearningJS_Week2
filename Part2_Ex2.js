const calcTip = (bill) => {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
};
const bills = [125, 555, 44];
const tips = bills.map(calcTip);

// Print the tips array to verify
console.log(tips);
const total = bills.map((bill, index) => bill + tips[index]);

// Print the total array to verify
console.log(total);
// done ex2