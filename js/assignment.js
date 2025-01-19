"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];
"use strict";


// Function
// Purpose - find the smallest number in the array
function findSmallestNumber(numbers) {
    let smallest = numbers[0];  // Start with the first number
    for (let i = 1; i < numbers.length; i++) {  // Loop through the array
        if (numbers[i] < smallest) {
            //make sure you have the smallest-look at them all
            smallest = numbers[i];  
        }
    }
    return smallest;  // Return the smallest number
}

// Function
// Purpose - find the largest number in the array
function findLargestNumber(numbers) {
    let largest = numbers[0];  // Start with the first number
    for (let i = 1; i < numbers.length; i++) {  // Loop through the array
        if (numbers[i] > largest) {
            //make sure you have the largest-look at them all
            largest = numbers[i];  
        }
    }
    return largest;  // Return the largest number
}

// Function to find the average of numbers in the array
function findAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        //add them all together
        sum += numbers[i];  
    }
    //compute average
    return sum / numbers.length;  
}

// Function to render the results (display them in the console)
function renderResults() {
    // Call the functions and store the results
    const smallest = findSmallestNumber(myNumbers);
    const largest = findLargestNumber(myNumbers);
    const average = findAverage(myNumbers);

    document.getElementById("smallest-number").textContent = smallest;
    document.getElementById("largest-number").textContent = largest;
    document.getElementById("average-number").textContent = average;
}

// Call the renderResults function when the page loads
document.getElementById("submission-btn").addEventListener("click", renderResults);
