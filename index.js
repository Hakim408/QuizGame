const quizQue =[
    {
        question: "1: Who won IPL 2022?",
        a:"CSK",
        b:"GT",
        c:"MI",
        d:"None",
        ans:"ans2"
    },
    {
        question: "2: Who won IPL 2022 Orange Cap?",
        a:"Y.Chahel",
        b:"M.Shami",
        c:"J.Buttler",
        d:"Ms.Dhoni",
        ans:"ans3"
    },
    {
        question: "3: Who won IPL 2022 Purple Cap?",
        a:"Y.Chahel",
        b:"M.Shami",
        c:"J.Buttler",
        d:"Ms.Dhoni",
        ans:"ans1"
    },
    {
        question: "4: Who won IPL 2022 Fair play award?",
        a:"csk",
        b:"dc",
        c:"pkbs",
        d:"none",
        ans:"ans4"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score=0;
const loadQuestion =()=>{
    const questionList = quizQue[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}
loadQuestion();
const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAns)=>{
        if(curAns.checked){
            answer = curAns.id;
        }
    });
    return answer;
};
const deSelectAll=()=>{
    answers.forEach((curAns)=>
    curAns.checked=false
    );
}
submit.addEventListener('click',()=>{
    const checkedAnswer =getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer==quizQue[questionCount].ans){
        score++;
    };
    questionCount++;
    deSelectAll();
    if(questionCount < quizQue.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=`
        <h3> you correct ${score}/${quizQue.length} </h3>
        <button class ="btn" onclick="location.reload()">Play Again</buttton>
        `;
        showScore.classList.remove('Score');
    }
    
});




