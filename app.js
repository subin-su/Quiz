var container1=document.getElementById("container1");
currentquestion=0;
totalquestions=question.length;
var question=window.getElementById("question")
var answer=window.getElementById("answer")
var option1=window.getElementById("option1")
var option2=window.getElementById("option2")
var option3=window.getElementById("option3")
var option4=window.getElementById("option4")
function load1(questionIndex){
    var q=questions[questionIndex]
    container1.textContent=(questionIndex+1)+"."+q.question

}
load1(currentquestion)




    


