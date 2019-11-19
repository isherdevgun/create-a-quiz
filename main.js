document.getElementById('mark').addEventListener('click', marked);

function marked() {

    let answer1 = document.getElementById('a1').value;

    let answer2 = document.getElementById('a2').value;

    let answer3 = document.getElementById('a3').value;

    let answer4 = document.getElementById('a4').value;

    let total = 0;

    if (answer1 == "Not at all"|| answer1 == "not at all"||answer1 == "NOT AT ALL" ) {

        total += 1;
        document.getElementById('a1').style.backgroundColor = 'green';
    } else {
        total -= 1;
        document.getElementById('a1').style.backgroundColor = 'red';
    }

    if (answer2 == "Po"||answer2 == "po"||answer2 == "Dragon Warrior"|| answer2 == "dragon warrior") {

        total += 1;
        document.getElementById('a2').style.backgroundColor = 'green';
    } else {
        total -= 1;
        document.getElementById('a2').style.backgroundColor = 'red';
    }


    if (answer3 == "Earth"|| answer3 == "earth") {

        total += 1;
        document.getElementById('a3').style.backgroundColor = 'green';
    } else {
        total -= 1;
        document.getElementById('a3').style.backgroundColor = 'red';
    }

    if (answer4 == "10"|| answer4=="ten") {
        total += 1;
        document.getElementById('a4').style.backgroundColor = 'green';
    } else {
        total -= 1;
        document.getElementById('a4').style.backgroundColor = 'red';
    }
    if (total < 0) {
        total -= total
    }

    document.getElementById('result').innerHTML = total;

    let percentage = (total / 4) * 100

    document.getElementById('percent').innerHTML = percentage;

    if(percentage<=70){
        document.getElementById('feedback').innerHTML = 'You are dumb';
    } else{
        document.getElementById('feedback').innerHTML = 'BIG BRAIN!';
    }

}