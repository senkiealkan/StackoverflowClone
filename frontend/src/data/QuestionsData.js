const QuestionsData = [
  {
    _id: "1",
    questionTitle: "What is the purpose of useEffect in React?",
    questionDetail:
      "I am learning React and came across the useEffect hook. Can someone explain its purpose and provide a simple example of how it's used?",
    questionTags: ["react", "hooks", "lifecycle"],
    upVote: 4,
    downVote: 1,
    askedOn: "2024-11-09T12:00:00Z",
    userPosted: "CodeLearner",
    comments: [
      { commentText: "useEffect helps manage side effects in React components.", user: "ReactGuru" },
      { commentText: "It is similar to lifecycle methods like componentDidMount.", user: "FrontendDev" },
    ],
    answers: [
      {
        answerText: "useEffect is used to perform side effects like fetching data, setting up subscriptions, or manually changing the DOM.",
        user: "ReactGuru", upVote: 2, downVote: 0
      },
      {
        answerText: "You can also use it to clean up resources when a component is unmounted by returning a function inside the hook.",
        user: "JSPro", upVote: 3, downVote: 1
      },
    ],
  },
  {
    _id: "2",
    questionTitle: "How do you handle API errors in JavaScript?",
    questionDetail:
      "I am working on a project where I need to fetch data from an API. How can I handle potential errors like network issues or server errors in JavaScript?",
    questionTags: ["javascript", "api", "error-handling"],
    upVote: 5,
    downVote: 0,
    askedOn: "2024-11-08T10:00:00Z",
    userPosted: "DevMaster",
    comments: [
      { commentText: "You should use try-catch blocks to handle errors.", user: "ErrorHandler" },
      { commentText: "Don't forget to check the response status code too!", user: "CodeReviewer" },
    ],
    answers: [
      {
        answerText:
          "To handle API errors, you can use a try-catch block around your fetch request and check if the response is ok before parsing the data.",
        user: "ErrorHandler", upVote: 0, downVote: 0
      },
      {
        answerText:
          "You can also use libraries like Axios that provide better error-handling capabilities than the native fetch API.",
        user: "BackendExpert", upVote: 0, downVote: 0
      },
    ],
  },
  {
    _id: "3",
    questionTitle: "What are closures in JavaScript?",
    questionDetail:
      "I have heard about closures in JavaScript but I don't quite understand how they work. Can someone explain closures in simple terms with an example?",
    questionTags: ["javascript", "functions", "closures"],
    upVote: 3,
    downVote: 1,
    askedOn: "2024-11-07T09:00:00Z",
    userPosted: "AliceInCodeLand",
    comments: [
      { commentText: "Closures allow a function to access variables from its parent scope.", user: "JSWizard" },
      { commentText: "They are very useful for creating private variables.", user: "CodeNinja" },
    ],
    answers: [
      {
        answerText:
          "A closure is created when a function is defined inside another function and has access to its parent function's variables.",
        user: "JSWizard",upVote: 0, downVote: 0
      },
      {
        answerText:
          "For example: function outer() { let count = 0; return function inner() { count++; console.log(count); }; }",
        user: "CodeNinja", upVote: 0, downVote: 0
      },
    ],
  },
  {
    _id: "4",
    questionTitle: "What are the differences between SQL and NoSQL databases?",
    questionDetail:
      "I am trying to decide between using a SQL or NoSQL database for my project. Can someone explain the key differences between them?",
    questionTags: ["databases", "sql", "nosql"],
    upVote: 4,
    downVote: 0,
    askedOn: "2024-11-06T15:00:00Z",
    userPosted: "DatabaseExplorer",
    comments: [
      { commentText: "SQL is structured, while NoSQL is more flexible.", user: "DBGuru" },
      { commentText: "Consider your project's requirements before choosing.", user: "BackendArchitect" },
    ],
    answers: [
      {
        answerText:
          "SQL databases use structured schemas and are great for complex queries, while NoSQL databases store data in flexible formats like JSON.",
        user: "DBGuru", upVote: 0, downVote: 0
      },
      {
        answerText:
          "NoSQL databases are ideal for scaling horizontally and handling unstructured data, while SQL databases excel at handling complex relationships.",
        user: "BackendArchitect", upVote: 0, downVote: 0
      },
    ],
  },
  {
    _id: "5",
    questionTitle: "What is the difference between var, let, and const in JavaScript?",
    questionDetail:
      "Can someone explain the differences between var, let, and const in JavaScript with examples? When should each be used?",
    questionTags: ["javascript", "variables", "es6"],
    upVote: 6,
    downVote: 1,
    askedOn: "2024-11-05T08:00:00Z",
    userPosted: "ES6Fan",
    comments: [
      { commentText: "var is function-scoped, while let and const are block-scoped.", user: "CodeEnthusiast" },
      { commentText: "Use const whenever you don't intend to reassign a variable.", user: "JSBestPractices" },
    ],
    answers: [
      {
        answerText:
          "var is function-scoped and can be redeclared, let is block-scoped and can be reassigned, const is block-scoped and cannot be reassigned.",
        user: "CodeEnthusiast", upVote: 0, downVote: 0
      },
      {
        answerText:
          "Always use const unless you need to reassign a variable, then use let. Avoid var in modern JavaScript development.",
        user: "JSBestPractices",upVote: 0, downVote: 0
      },
    ],
  },
];

export default QuestionsData;
