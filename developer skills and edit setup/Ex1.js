const printForecast = (arr) => {
    // Initialize an empty array to store the formatted strings
    const forecastStrings = [];
    
    // Loop through each temperature in the array
    for (let i = 0; i < arr.length; i++) {
        // Create the string for the current temperature
        const forecastString = `... ${arr[i]}oC in ${i + 1} days`;
        // Add the string to the forecastStrings array
        forecastStrings.push(forecastString);
    }
    
    // Join all the strings in forecastStrings with a space and print the result
    console.log(forecastStrings.join(' '));
};