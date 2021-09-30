var player1Score = 0;
var player2Score = 0;
var player1Name = localStorage.getItem("player1Name");
var player2Name = localStorage.getItem("player2Name");
document.getElementById("player1Name").innerHTML = player1Name + ":";
document.getElementById("player2Name").innerHTML = player2Name + ":";
document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;
document.getElementById("playerQuestion").innerHTML = "question-" + player1Name;
document.getElementById("playerAnswer").innerHTML = "answer-" + player2Name

function send() {
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actualAnswer=parseInt(number1)*parseInt(number2);
    question="<h4>"+number1+"x"+number2+"</h4>"
    inputBox = "<br> a:<input type='text' id='inputBox'>";
    checkButton = "<br> <button class='btn btn-info' onclick='check()'> Check </button>";
    output=question+inputBox+checkButton
    
    document.getElementById("output").innerHTML = output;
    document.getElementById("number1").innerHTML = "";
    document.getElementById("number2").innerHTML = "";
}
question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("inputBox").value;
    if (get_answer == actualAnswer) {
        if (answer_turn == "player1") {
            player1Score = player1Score + 1;
            document.getElementById("player1Score").innerHTML = player1Score;


        }
        else {
            player2Score = player2Score + 1;
            document.getElementById("player2Score").innerHTML = player2Score;

        }
    }
    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("playerQuestion").innerHTML = "question turn" + player2Name;



    }
    else {
        question_turn = "player1"
        document.getElementById("playerQuestion").innerHTML = "question turn" + player1Name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("playerAnswer").innerHTML = "answer turn" + player2Name;



    }
    else {
        answer_turn = "player1"
        document.getElementById("playerAnswer").innerHTML = "answer turn" + player1Name;
    }
    document.getElementById("output").innerHTML = "";
}