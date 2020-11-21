var team1={
    name:"CSK",
    score:0,
    runs:[]
};

var team2={
    name:"MI",
    score:0,
    runs:[]
};

var score=[0,1,2,3,4,5,6]
console.log(team1)
console.log(team2)

var toss;

window.onload=()=>{
    selectToss(); 
    updateName();
    updateButtontext();
    updateScore();
}

function selectToss(){
    toss=Math.round(Math.random())+1
    console.log(toss)
}

function updateName(){
    console.log("team1 name "+ team1.name)
    console.log("team2 name "+ team2.name)
    document.getElementById("team1name").textContent=team1.name;
    document.getElementById("team2name").textContent=team2.name;
}

function updateButtontext(){
    //console.log(`${toss===1?team1.name :team2.name } Batting`)
    var button=document.getElementById("strike")
    var results=document.getElementById("results")
    results.style.visibility=""

    if (team1.runs.length==6 && team2.runs.length==7){
        button.remove();
        console.log(team1.score==team2.score?"It is a Draw":`${team1.score>team2.score?team1.name:team2.name}`);
        results.textContent=team1.score===team2.score?"It is a Draw":`${team1.score>team2.score?team1.name:team2.name} Wins`
    }
    else{
        toss=
        team1.runs.length===6?2:
        team2.runs.length===6?1:
        toss;
    }
    console.log(`${toss===1?team1.name:team2.name} Batting`)
    document.getElementById("strike").textContent=`${toss==1?team1.name:team2.name} Batting`
}

function handlestrike(){
    console.log("onclick works")
    var runs= score[Math.floor(Math.random()*score.length)]
    console.log(runs)
    if(toss==1){
        team1.runs.push(runs);
        console.log(runs)
        team1.score=calculatescore(team1.runs)
    }
    else{
        team2.runs.push(runs);
        console.log(runs)
        team2.score=calculatescore(team2.runs)
    }
    updateButtontext();
    updateScore();
}

function updateScore(){
    console.log("team1 score "+ team1.score)
    console.log("team2 score "+ team2.score)
    document.getElementById("team1score").textContent=team1.score
    document.getElementById("team2score").textContent=team2.score
    updateRuns();
}

function updateRuns(){
    var team1runs=document.getElementById("team1runs").children
    var team2runs=document.getElementById("team2runs").children

    team1.runs.forEach((runs,index)=>{
        team1runs[index].textContent=runs;
    });

    team2.runs.forEach((runs,index)=>{
        team2runs[index].textContent=runs;
    });
}

var calculatescore=(runs)=>{
    return runs.map(num=>{
        return num;
    }).reduce((total,num)=>total+num);
}