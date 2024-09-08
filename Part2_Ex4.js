const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
// Function to calculate tip
const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
};
// 3. Calculate tips and totals using a for loop
for (let i = 0; i < bills.length; i++) {
    const currentBill = bills[i];
    const currentTip = calcTip(currentBill);
    tips.push(currentTip);
    totals.push(currentBill + currentTip);
}

// Print results to verify
console.log('Tips:', tips);
console.log('Totals:', totals);
// 4. Bonus: Function to calculate the average of an array
const calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

// Call the function with the 'totals' array
const averageTotal = calcAverage(totals);

// Print the average total to verify
console.log('Average Total:', averageTotal.toFixed(2));
