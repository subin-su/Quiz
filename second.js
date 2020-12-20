var o=document.getElementById("submit")
var name=document.getElementById("name")
var h2=document.getElementById("h2")
var eventual=document.getElementById("eventual")
o.addEventListener("click",function(event){
    event.preventDefault()
    location.href="html.html"
    var name=document.getElementById("name").value
    eventual.textContent="sssss"
    localStorage.setItem("name", name)
   
    
  


})