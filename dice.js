function getRandomNumber(){
    var num = Math.floor(Math.random() * ((6+1) - 1) + 1);
    return num;
}

function play(){
    var randomNumber1 = getRandomNumber();
    var randomNumber2 = getRandomNumber();
    var image1 = "./images/dice" + randomNumber1 + ".png";
    var image2 = "./images/dice" + randomNumber2 + ".png";
    document.getElementById('image1').src = image1;
    document.getElementById('image2').src = image2;

    if (randomNumber1 > randomNumber2){
        document.getElementById('result').innerHTML = "Player 1 wins";
    }else if(randomNumber1 < randomNumber2){
        document.getElementById('result').innerHTML = "Player 2 wins";
    }else{
        document.getElementById('result').innerHTML = "We have a tie";
    }
}
