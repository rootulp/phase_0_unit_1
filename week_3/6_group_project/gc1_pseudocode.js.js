//Pseudocode for gc1

//Create and initialize the containers for the test - not sure what this means
//Create an array called 'oddLengthArray' with initial values of '1, 2, 3, 4, 5, 5, 7'
//Create an array called 'evenLengthArray' with initial values of '4, 4, 5, 5, 6, 6, 6, 7'

// Create a function  called 'assert' which will take 3 parameters (test, message, test_number)
//'test' : value will be Boolean true if test works, will be Boolean false if test doesn't work
    // Example: sum(oddLengthArray) === 27
//'message' : the message that should be output by ‘assert’ if test value is false
    // Example: "sum should return the sum of all elements in an array with an odd length."
//'test_number' : the number identifier of the test that is sending the information
    // Example: 2

//The function assert should check test
    //if test is false:
        //output the parameter ‘test_number’ and the word "false"
        //set an exception condition by throwing the word "ERROR: " and the alphameric 
        //string contained in parameter 'message'
    //else (test is true):
        //output value of parameter 'test_number' and the word "true"
        //set the value of 'assert' to true

// Test Specifications:

// 9 tests will be performed.

// (1) First test for sum: check to see if there exists a function named 'sum'
//     Parameters to pass to 'assert'
//         -Value of test for 'sum'
//         -Parameter ‘message’: "sum should be a Function."
//         -Parameter ‘test_number’: alphameric "1. "

// (2) Second test for sum: check to see if the sum of the values in the 'oddLengthArray' is equal to 27
//     Parameters to pass to ‘assert’:
//         -Value of test as described
//         -Parameter ‘message’: "sum should return the sum of all elements in an array with an odd length."
//         -Parameter ‘test_number’: alphameric "2. "

// (3) Third test for sum: check to see if the sum of the values in the 'evenLengthArray' is equal to 43
//     Parameters to pass to ‘assert’:
//         -Value of test as described
//         -Parameter ‘message’: "sum should return the sum of all elements in an array with an even length."
//         -Parameter ‘test_number’: alphameric "3. "

// (4) First test for mean: check to see if there exists a function named 'mean'
//     Parameters to pass to 'assert'
//         -Value of test for 'mean'
//         -Parameter ‘message’: "mean should be a Function."
//         -Parameter ‘test_number’: alphameric "4. "

// (5) Second test for mean: check to see if the mean of the values in the 'oddLengthArray' is equal to 3.857142857142857
//     Parameters to pass to 'assert'
//         -Value of test as described
//         -Parameter ‘message’: "mean should return the average of all elements in an array with an odd length."
//         -Parameter ‘test_number’: alphameric "5. "

// (6) Third test for mean: check to see if the mean of the values in the 'evenLengthArray' is equal to 5.375
//     Parameters to pass to 'assert'
//         -Value of test as described
//         -Parameter ‘message’: "mean should return the average of all elements in an array with an even length."
//         -Parameter ‘test_number’: alphameric "6. "

// (7) First test for median: check to see if there exists a function named 'median'
//     Parameters to pass to 'assert'
//         -Value of test for 'median'
//         -Parameter ‘message’: "median should be a Function."
//         -Parameter ‘test_number’: alphameric "7. "

// (8) Second test for median: check to see if the median of the values in the 'oddLengthArray' is equal to 4
//     Parameters to pass to 'assert'
//         -Value of test as described
//         -Parameter ‘message’: "median should return the median value of all elements in an array with an odd length."
//         -Parameter ‘test_number’: alphameric "8. "

// (9) Third test for median: check to see if the median of the values in the 'evenLengthArray' is equal to 5.5
//     Parameters to pass to 'assert'
//         -Value of test as described
//         -Parameter ‘message’: "median should return the median value of all elements in an array with an even length."
//         -Parameter ‘test_number’: alphameric "9. "
