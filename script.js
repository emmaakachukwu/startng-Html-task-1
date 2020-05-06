let questions = [
    {
        question: "Which of these is a front end language?",
        option_a: "PHP",
        option_b: "JavaScript",
        option_c: "Ruby",
        ans: "b"
    },

    { 
        question: "The correct JavaScript file extension is which of these?",
        option_a: ".js",
        option_b: ".htm",
        option_c: ".xml",
        ans: "a"
    },

    { 
        question: "Who created JavaScript?",
        option_a: "Rasmorse Leedorf",
        option_b: "Mark Zuckerberg",
        option_c: "Brendan Eich",
        ans: "c"
    },

    { 
        question: "JavaScript codes is written inside which of the following HTML tags?",
        option_a: "<js>",
        option_b: "<html>",
        option_c: "<script>",
        ans: "c"
    },

    { 
        question: "Which of the following is a JavaScript framework?",
        option_a: "Vue JS",
        option_b: "Laravel",
        option_c: "Swift",
        ans: "a"
    },
]

let question_no = 1;
let score = 0;
showQuestion();

function showQuestion () {
    let options = ["a", "b", "c"];
    for(i = 0; i < 3; i++){
        document.querySelector("#"+options[i]).style.backgroundColor = "#FFF";
        document.querySelector("#"+options[i]).style.color = "#000";
    }

    document.querySelector(".score").innerText = "Your Score: " + score;

    document.querySelector("#question").innerText = questions[question_no-1].question;
    document.querySelector("#a").innerText = questions[question_no-1].option_a;
    document.querySelector("#b").innerText = questions[question_no-1].option_b;
    document.querySelector("#c").innerText = questions[question_no-1].option_c;
}

function submit(){
    question_no++;
    if ( question_no < questions.length ) {
        showQuestion();
    } else if ( question_no == questions.length ) {
        showQuestion();
        document.querySelector("#btn").innerText = "Submit";
    } else {
        let score_card = document.querySelector("#score");
        score_card.innerText = "Your final score is: " + score;
        document.querySelector(".quiz_card").style.display = "none";
        document.querySelector(".score_card").style.display = "block";
    }
}

function start_again(){
    question_no = 1;
    score = 0;
    showQuestion();
    document.querySelector("#btn").innerText = "Next";
    document.querySelector(".quiz_card").style.display = "block";
    document.querySelector(".score_card").style.display = "none";
}

function checkAns(id){
    let ans = questions[question_no-1].ans;
    document.querySelector("#"+ans).style.backgroundColor = 'green';
    document.querySelector("#"+ans).style.color = '#FFF';
    if ( id == ans ) {
        score++;
    } else {
        document.querySelector("#"+id).style.backgroundColor = 'red';
        document.querySelector("#"+id).style.color = '#FFF';
    }
}