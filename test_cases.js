let testCase1 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 91,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 90,
    chemistry: 81,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 96,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 85,
    chemistry: 86,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];

let testCase2 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 100,
    chemistry: 80,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 80,
    chemistry: 100,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 30,
    chemistry: 40,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 40,
    chemistry: 30,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];

// Custom sorting function
const compareStudents = (a, b) => {
  // First priority: Total marks
  const totalMarksA = a.biology + a.chemistry;
  const totalMarksB = b.biology + b.chemistry;
  
  if (totalMarksA > totalMarksB) {
    return -1;
  } else if (totalMarksA < totalMarksB) {
    return 1;
  }

  // Second priority: Biology marks
  if (a.biology > b.biology) {
    return -1;
  } else if (a.biology < b.biology) {
    return 1;
  }

  // Third priority: Date of birth (in DD-MM-YYYY format)
  const [aDay, aMonth, aYear] = a.dob.split("-");
  const [bDay, bMonth, bYear] = b.dob.split("-");

  if (aYear > bYear) {
    return -1;
  } else if (aYear < bYear) {
    return 1;
  } else {
    if (aMonth > bMonth) {
      return -1;
    } else if (aMonth < bMonth) {
      return 1;
    } else {
      if (aDay > bDay) {
        return -1;
      } else if (aDay < bDay) {
        return 1;
      } else {
        return 0;
      }
    }
  }
};

// Sort the test cases using the custom sorting function
testCase1.sort(compareStudents);
testCase2.sort(compareStudents);

// Print the sorted test cases
console.log("Test Case 1:");
console.log(testCase1);

console.log("Test Case 2:");
console.log(testCase2);