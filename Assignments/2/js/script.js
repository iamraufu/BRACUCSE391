function generateQuote() {
    var quotes = ["Your talents will be recognized and suitably rewarded.", "He who hurries cannot walk with dignity.", "Your success in life must be earned with earnest efforts.", "You love peace.", "A friend asks only for your time and not your money.", "You will soon inherit a piece of land.", "Your luck is about to change.", "Things will soon go your way.", "He who stands on toilet is high on pot.", "Everybody is ignorant, only on different subjects.", "Fortune favors the brave.", "There is nothing permanent except change.", "You haven't failed until you give up."];
    var length = quotes.length;
    var number = Math.floor(Math.random() * (length - 1 - 0 + 1)) + 0;
    document.getElementById('quote').innerText = quotes[number];
}

function changeStyle(box) {

    if (box === 'box1') {
        document.getElementById('quote-container').style.color = 'blue';
        document.getElementById('quote-container').style.borderColor = 'blue';
        document.getElementById('quote-container').style.backgroundColor = 'greenyellow';
        document.getElementById('quote-container').style.fontSize = '14px';
        document.getElementById('quote-container').style.fontFamily = 'Serif';
    }
    else if (box === 'box2') {
        document.getElementById('quote-container').style.color = 'red';
        document.getElementById('quote-container').style.border = 'red';
        document.getElementById('quote-container').style.backgroundColor = 'orange';
        document.getElementById('quote-container').style.fontSize = '16px';
        document.getElementById('quote-container').style.fontFamily = 'Arial';
    }
    else if (box === 'box3') {
        document.getElementById('quote-container').style.color = 'yellow';
        document.getElementById('quote-container').style.borderColor = 'yellow';
        document.getElementById('quote-container').style.backgroundColor = 'skyblue';
        document.getElementById('quote-container').style.fontSize = '12px';
        document.getElementById('quote-container').style.fontFamily = 'Lucida Sans';
    }
    else {
        document.getElementById('quote-container').style.color = 'purple';
        document.getElementById('quote-container').style.borderColor = 'purple';
        document.getElementById('quote-container').style.backgroundColor = 'goldenrod';
        document.getElementById('quote-container').style.fontSize = '18px';
        document.getElementById('quote-container').style.fontFamily = 'Times New Romans';
    }
}

function convert(converter, unit) {

    // convert kg to pound 
    if (converter == "kg_to_lb") {
        var kg = unit;
        var pound = kg * 2.2046;

        document.getElementById("result").innerText = pound.toFixed(4) + " pound";
    }

    // convert pound to kg
    else {
        var pound = unit;
        var kg = pound / 2.2046;

        document.getElementById("result").innerText = kg.toFixed(4) + " kilograms";
    }
}

function calculate() {
    var values = document.getElementById('box1').value.split(/,/g);
    var sum = values.reduce(function (a, b) { return parseInt(a) + parseInt(b); });
    document.querySelector('#max').innerHTML = values.max();
    document.querySelector('#min').innerHTML = values.min();
    document.querySelector('#sum').innerHTML = sum;
    document.querySelector('#avg').innerHTML = (sum / values.length).toFixed(13);
    document.querySelector('#reverse').innerHTML = values.reverse().join(',');
}

Array.prototype.max = function () {
    return Math.max.apply(null, this);
};

Array.prototype.min = function () {
    return Math.min.apply(null, this);
};

function capitalize() {
    console.log(document.getElementsByClassName('lists')[0].innerHTML)
    document.getElementsByClassName('lists')[0].innerHTML = 'red';
}