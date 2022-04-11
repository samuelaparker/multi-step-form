export let questions = [
  {
    inputType: "text",
    question: "What is the name of the company and your position?",
    choices: [
      {
        value: "Company name",
      },
      {
        value: "Position",
      },
    ],
  },
  {
    inputType: "checkbox",
    question: "What kind of website do you need?",
    choices: [
      {
        value: "Personal Website",
      },
      {
        value: "Landing Page/Simple Marketing Site",
      },
      {
        value: "Multi-page Marketing Site or Blog",
      },
      {
        value: "Other",
      },
    ],
  },
  {
    inputType: "text",
    question: "What is the main objective for this website?",
    choices: [
      {
        value: "",
      },
    ],
  },
  {
    inputType: "radio",
    question: "Do you already have a design?",
    choices: [
      {
        value: "Yes",
      },
      {
        value: "No",
      },
    ],
  },
  {
    inputType: "checkbox",
    question: "What is your project's budget?",
    choices: [
      {
        value: "$2,000 - $4,000",
      },
      {
        value: "$4,000 - $8,500",
      },
      {
        value: "$8,500 - $14,000",
      },
      {
        value: "$14,000 +",
      },
    ],
  },
  {
    inputType: "text",
    question: "How can we contact you?",
    choices: [
      {
        value: "First Name",
      },
      {
        value: "Last Name",
      },
      {
        value: "Email",
      },
    ],
  },
];
