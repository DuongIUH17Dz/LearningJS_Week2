const mark = {
    fullName: 'Mark Miller',
    mass: 78, // in kg
    height: 1.69, // in meters
    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};
const john = {
    fullName: 'John Smith',
    mass: 92, // in kg
    height: 1.95, // in meters
    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};
// 2. Calculate BMI for each person
mark.calcBMI();
john.calcBMI();

// 3. Compare BMIs and log the result
if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI.toFixed(1)}) is higher than ${john.fullName}'s (${john.BMI.toFixed(1)})!`);
} else if (john.BMI > mark.BMI) {
    console.log(`${john.fullName}'s BMI (${john.BMI.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.BMI.toFixed(1)})!`);
} else {
    console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.BMI.toFixed(1)})!`);
}