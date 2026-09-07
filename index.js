let scoreA = document.getElementById("score_a")
let scoreB = document.getElementById("score_b");
let countA = 0;
let countB = 0;

function addOneA() {
    scoreA.innerHTML = countA += 1;
}

function addThreeA() {
    scoreA.innerHTML = countA += 3;

}

function addFiveA() {
    scoreA.innerHTML = countA += 5;

}

function addOneB() {
    scoreB.innerHTML = countB += 1;
}

function addThreeB() {
    scoreB.innerHTML = countB += 3;

}

function addFiveB() {
    scoreB.innerHTML = countB += 5;

}