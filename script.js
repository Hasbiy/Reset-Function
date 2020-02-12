let firstDiv = document.getElementById('style1');
let secondDiv = document.getElementById('style2');
let thirdDiv = document.getElementById('style3');

// firstDiv.addEventListener('click', function (){
//     firstDiv.style.display = 'none';
// });

// secondDiv.addEventListener('click', function (){
//     secondDiv.style.display = 'none';
// });

// thirdDiv.addEventListener('click', function (){
//     thirdDiv.style.display = 'none';
// });

let allDivs = document.querySelectorAll('.number');

for (let div of allDivs) {
    div.addEventListener('click', function () {
        div.style.display = 'none';
    });
}

function reset() {
    firstDiv.style.display = 'block';
    secondDiv.style.display = 'block';
    thirdDiv.style.display = 'block';
}