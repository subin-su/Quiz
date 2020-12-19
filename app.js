var high=document.getElementById("high");
var button=document.getElementById("button");
var container=document.getElementById("container")
var link=document.getElementById("link")

button.addEventListener("click",function(event){
    event.preventDefault()
    link()

    
})
container.textContent="Welcome to the quiz. Please choose among 4 options and end of quiz submit with your initials to get score"

let questions= [
    {
      id: 1,
      question: "Who invented computer?",
      answer: "Charles Babbage",
      option: [
        "Thomas Edison",
        "Albert einstein",
        "Charles Babbage",
        "None of the above"
      ]
    },
    {
      id: 2,
      question: "When did first program founded?",
      answer: "1989",
      option: [
        "1982",
        "1980",
        "1780",
        "1989"
      ]
    },
    {
      id: 3,
      question: "What is the name of first program?",
      answer: "High-level language",
      option: [
        "Machine level language",
        "javascript",
        "High-level language",
        "css"
      ]
    },
    {
      id: 4,
      question: "What is the Capital of Usa?",
      answer: "Washington D.c",
      option: [
        "New York",
        "Washington D.C",
        "California",
        "Virginia"
      ]
    },
    {
      id: 5,
      question: "Who invented Java?",
      answer: "James Gosling",
      option: [
        "Bill Gates",
        "Steve Jobs",
        "Daphne koller",
        "James Gosling"
      ]
    }
  ]

        
