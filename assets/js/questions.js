var quizData = [
    {
      question: "What is the result of the expression 5 + '5' in JavaScript?",
      answers: ["55", "10", "Type Error", "Undefined"],
      correctAnswer: "55"
    },
    {
      question: "Which keyword is used to declare a constant variable in JavaScript?",
      answers: ["var", "const", "let", "constVar"],
      correctAnswer: "const"
    },
    {
      question: "What does the 'null' value represent in JavaScript?",
      answers: ["Empty string", "Undefined value", "No value or no object value", "NaN"],
      correctAnswer: "No value or no object value"
    },
    {
      question: "How do you write a single-line comment in JavaScript?",
      answers: ["//", "/*", "--", "#"],
      correctAnswer: "//"
    },
    {
      question: "What is the purpose of the 'push()' method in JavaScript arrays?",
      answers: ["To pop the last element", "To add an element to the end of an array", "To remove the first element", "To reverse the array"],
      correctAnswer: "To add an element to the end of an array"
    },
    {
      question: "Which of the following is not a valid JavaScript variable name?",
      answers: ["_myVar", "$var", "123Var", "my-var"],
      correctAnswer: "123Var"
    },
    {
      question: "What is the result of the expression '2' == 2 in JavaScript?",
      answers: ["true", "false", "undefined", "Type Error"],
      correctAnswer: "true"
    },
    {
      question: "What does the 'slice()' method do in JavaScript?",
      answers: ["Joins two arrays", "Copies a portion of an array to a new array", "Removes elements from an array", "Adds elements to the beginning of an array"],
      correctAnswer: "Copies a portion of an array to a new array"
    },
    {
      question: "Which built-in object in JavaScript is used to represent a date and time?",
      answers: ["Time", "Date", "Clock", "Calendar"],
      correctAnswer: "Date"
    },
    {
      question: "What is the purpose of the 'charAt()' method in JavaScript?",
      answers: ["To check if a character exists in a string", "To concatenate two strings", "To remove characters from a string", "To retrieve the character at a specified position in a string"],
      correctAnswer: "To retrieve the character at a specified position in a string"
    },
    {
      question: "What is the result of the expression '10' === 10 in JavaScript?",
      answers: ["true", "false", "undefined", "Type Error"],
      correctAnswer: "false"
    },
    {
      question: "What is the purpose of the 'pop()' method in JavaScript arrays?",
      answers: ["To add an element to the beginning of an array", "To remove the last element", "To reverse the array", "To sort the array"],
      correctAnswer: "To remove the last element"
    },
    {
      question: "In JavaScript, what is a closure?",
      answers: ["A type of loop", "A way to close a webpage", "A combination of functions and the lexical environment within which that function was declared", "A syntax error"],
      correctAnswer: "A combination of functions and the lexical environment within which that function was declared"
    },
    {
      question: "Which method is used to convert a string to uppercase in JavaScript?",
      answers: ["toUpperCase()", "toUpper()", "upperCase()", "convertUpperCase()"],
      correctAnswer: "toUpperCase()"
    },
    {
      question: "What does the 'typeof' operator return for a function?",
      answers: ["Function", "Object", "String", "Undefined"],
      correctAnswer: "Function"
    },
    {
      question: "Which loop is used for iterating over the properties of an object in JavaScript?",
      answers: ["for", "while", "do-while", "for...in"],
      correctAnswer: "for...in"
    },
    {
      question: "What does the 'isNaN()' function do in JavaScript?",
      answers: ["Checks if a value is not a number", "Checks if a value is a number", "Converts a string to a number", "Returns the current timestamp"],
      correctAnswer: "Checks if a value is not a number"
    },
    {
      question: "What is the purpose of the 'filter()' method in JavaScript arrays?",
      answers: ["To add elements to an array", "To remove elements from an array", "To create a new array with elements that pass a certain condition", "To sort the array"],
      correctAnswer: "To create a new array with elements that pass a certain condition"
    },
    {
      question: "What is the default behavior of the 'submit' event in a form?",
      answers: ["Reloads the page", "Redirects to a new page", "Does nothing", "Submits the form data to the server"],
      correctAnswer: "Submits the form data to the server"
    },
    {
      question: "What is the purpose of the 'parseInt()' function in JavaScript?",
      answers: ["To convert a string to a floating-point number", "To convert a string to an integer", "To parse JSON data", "To concatenate two strings"],
      correctAnswer: "To convert a string to an integer"
    },
    {
      question: "What is the result of the expression 'undefined + 5' in JavaScript?",
      answers: ["5", "NaN", "Type Error", "Undefined"],
      correctAnswer: "NaN"
    },
    {
      question: "What is an example of a JavaScript closure?",
      answers: ["if statement", "while loop", "try-catch block", "A function that returns another function"],
      correctAnswer: "A function that returns another function"
    },
    {
      question: "What is the purpose of the 'shift()' method in JavaScript arrays?",
      answers: ["To add an element to the end of an array", "To remove the last element", "To remove the first element", "To reverse the array"],
      correctAnswer: "To remove the first element"
    },
    {
      question: "Which built-in object in JavaScript is used to represent mathematical operations?",
      answers: ["Math", "Number", "Calculate", "Operator"],
      correctAnswer: "Math"
    },
    {
      question: "What is the purpose of the 'concat()' method in JavaScript arrays?",
      answers: ["To add elements to the end of an array", "To remove elements from an array", "To concatenate two arrays", "To reverse the array"],
      correctAnswer: "To concatenate two arrays"
    },
    {
      question: "What is the result of the expression 'true + false' in JavaScript?",
      answers: ["true", "false", "Type Error", "1"],
      correctAnswer: "1"
    },
    {
      question: "In JavaScript, what does the 'NaN' value represent?",
      answers: ["Not a Number", "Null and None", "Negative Number", "Nearly a Number"],
      correctAnswer: "Not a Number"
    },
    {
      question: "What is the purpose of the 'unshift()' method in JavaScript arrays?",
      answers: ["To add an element to the end of an array", "To remove the last element", "To remove the first element", "To add elements to the beginning of an array"],
      correctAnswer: "To add elements to the beginning of an array"
    },
    {
      question: "Which method is used to round a number to the nearest integer in JavaScript?",
      answers: ["round()", "ceil()", "floor()", "int()"],
      correctAnswer: "round()"
    },
    {
      question: "What is the result of the expression 'typeof NaN' in JavaScript?",
      answers: ["Number", "String", "Undefined", "NaN"],
      correctAnswer: "Number"
    },
    {
      question: "What is the purpose of the 'splice()' method in JavaScript arrays?",
      answers: ["To add elements to an array", "To remove elements from an array", "To create a new array with elements that pass a certain condition", "To sort the array"],
      correctAnswer: "To remove elements from an array"
    },
    {
      question: "What does the 'continue' statement do in a loop?",
      answers: ["Terminates the loop", "Skips the rest of the code in the loop and continues with the next iteration", "Creates an infinite loop", "Jumps to a specified label"],
      correctAnswer: "Skips the rest of the code in the loop and continues with the next iteration"
    },
    {
      question: "What is the purpose of the 'map()' method in JavaScript arrays?",
      answers: ["To add elements to an array", "To remove elements from an array", "To create a new array with the results of a function applied to each element", "To sort the array"],
      correctAnswer: "To create a new array with the results of a function applied to each element"
    },
    {
      question: "Which method is used to convert a string to lowercase in JavaScript?",
      answers: ["toLowerCase()", "toLower()", "lowerCase()", "convertLowerCase()"],
      correctAnswer: "toLowerCase()"
    },
    {
      question: "What is the result of the expression 'typeof [1, 2, 3]' in JavaScript?",
      answers: ["Array", "Object", "List", "Undefined"],
      correctAnswer: "Object"
    },
    {
      question: "What is the purpose of the 'reduce()' method in JavaScript arrays?",
      answers: ["To add elements to an array", "To remove elements from an array", "To create a new array with elements that pass a certain condition", "To reduce the array to a single value"],
      correctAnswer: "To reduce the array to a single value"
    },
    {
      question: "Which built-in object in JavaScript is used to represent a regular expression?",
      answers: ["Regex", "Pattern", "RegExp", "Expression"],
      correctAnswer: "RegExp"
    },
    {
      question: "What is the result of the expression '5 / 0' in JavaScript?",
      answers: ["Infinity", "NaN", "Type Error", "Undefined"],
      correctAnswer: "Infinity"
    },
    {
      question: "What is the purpose of the 'forEach()' method in JavaScript arrays?",
      answers: ["To add elements to an array", "To remove elements from an array", "To iterate over each element in the array and execute a function", "To sort the array"],
      correctAnswer: "To iterate over each element in the array and execute a function"
    },
    {
      question: "What is the result of the expression 'parseInt('abc')' in JavaScript?",
      answers: ["0", "NaN", "Type Error", "Undefined"],
      correctAnswer: "NaN"
    },
    {
      question: "What is the purpose of the 'toFixed()' method in JavaScript?",
      answers: ["To round a number to the nearest integer", "To format a number with a specified number of digits after the decimal point", "To convert a string to a number", "To remove decimal points from a number"],
      correctAnswer: "To format a number with a specified number of digits after the decimal point"
    },
    {
      question: "Which event is triggered when an element loses focus in JavaScript?",
      answers: ["onMouseOver", "onClick", "onBlur", "onChange"],
      correctAnswer: "onBlur"
    },
    {
      question: "What is the purpose of the 'split()' method in JavaScript?",
      answers: ["To join two arrays", "To remove elements from an array", "To split a string into an array of substrings", "To reverse the array"],
      correctAnswer: "To split a string into an array of substrings"
    },
    {
      question: "What is the result of the expression 'typeof true' in JavaScript?",
      answers: ["Boolean", "Number", "String", "Undefined"],
      correctAnswer: "Boolean"
    },
    {
      question: "What does the 'addEventListener()' method do in JavaScript?",
      answers: ["Removes an event listener from an element", "Adds an event listener to an element", "Triggers an event on an element", "Clears all event listeners from an element"],
      correctAnswer: "Adds an event listener to an element"
    },
    {
      question: "What is the purpose of the 'substring()' method in JavaScript?",
      answers: ["To check if a character exists in a string", "To remove characters from a string", "To retrieve a substring between two indices", "To concatenate two strings"],
      correctAnswer: "To retrieve a substring between two indices"
    },
    {
      question: "Which operator is used to combine two or more strings in JavaScript?",
      answers: ["+", "&", "*", "/"],
      correctAnswer: "+"
    },
    {
      question: "What is the result of the expression 'null == undefined' in JavaScript?",
      answers: ["true", "false", "undefined", "Type Error"],
      correctAnswer: "true"
    },
    {
      question: "What is the purpose of the 'reverse()' method in JavaScript arrays?",
      answers: ["To add elements to an array", "To remove elements from an array", "To reverse the order of elements in an array", "To sort the array"],
      correctAnswer: "To reverse the order of elements in an array"
    },
    {
      question: "What is the result of the expression 'Number('123')' in JavaScript?",
      answers: ["123", "NaN", "Type Error", "Undefined"],
      correctAnswer: "123"
    },
    {
      question: "In JavaScript, what is the purpose of the 'escape()' function?",
      answers: ["To escape from a loop", "To encode a URI component", "To remove special characters from a string", "To create an anonymous function"],
      correctAnswer: "To encode a URI component"
    }
  ];