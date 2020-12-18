var high=document.getElementById("high");
var button=document.getElementById("button");
var container=document.getElementById("contianer")
container.textContent="Welcome" //to the quiz. Please choose among 4 options and end of quiz submit with your initials to get score"
function arr(){
var  questions=["What does CSS stand for ?","What do you use to link JS file on hmtl ?",
"What is purpose of css ?", "How to call a function() ?"]}

var answer1=["Cascading style sheet","Contra costa county","function()", "Congress congo can"]
var answer2=["src","Contra costa county","Community College congress", "Congress congo can"]
var answer3=["Cascading style sheet","styling","Community College congress", "function()"]
var answer4=["Cascading style sheet","Contra costa county","Community College congress", "function()"]

    function first(){
        
        for(var i=0;i<questions.length;i++){
       
            var storel=questions[i]

        }
        document.write(storel)
        }
button.onclick=first;
document.getElementById("arr").setAttribute(question,style)