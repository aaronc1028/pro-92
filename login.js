
function addUser(){
var p1=document.getElementById("player1NameInput").value 
var p2=document.getElementById("player2NameInput").value
localStorage.setItem("player1Name", p1)
localStorage.setItem("player2Name", p2)
window.location="game_page.html"
}