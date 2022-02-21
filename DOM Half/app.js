//Objective 1:
let btn1 = document.createElement('button');
btn1.textContent = 'alert button';
btn1.addEventListener('click', function () {
    alert('Any (nice) message');
});
document.body.appendChild(btn1);
let hr1 = document.createElement('hr');
document.body.appendChild(hr1);

//Objective 2:
let textboxBtn = document.createElement('button');
textboxBtn.textContent = "Alert!"
let textbox = document.createElement('textarea');
textboxBtn.addEventListener('click', function () {
    alert(textbox.value);
});
document.body.appendChild(textboxBtn);
document.body.appendChild(textbox);
let hr2 = document.createElement('hr');
document.body.appendChild(hr2);

//Objective 3:
let colorDiv = document.createElement('div');
colorDiv.className = ('bg-warning colorDiv')
colorDiv.addEventListener('mouseover', function () {
    colorDiv.className = 'bg-danger text-white colorDiv';
});
colorDiv.addEventListener('mouseleave', function () {
    colorDiv.className = 'bg-warning colorDiv';
});
document.body.appendChild(colorDiv);
let hr3 = document.createElement('hr');
document.body.appendChild(hr3);

//Objective 4:
let colorP = document.createElement('p');
colorP.id = "colorP"
colorP.textContent = 'This is the magical text of the page! How Wonderful!';
colorP.addEventListener('click', function () {
    function getRandomRgb() {
        var num = Math.round(0xffffff * Math.random());
        var r = num >> 16;
        var g = num >> 8 & 255;
        var b = num & 255;
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
      }
    document.getElementById('colorP').style.color = getRandomRgb();
});
document.body.appendChild(colorP);
let hr4 = document.createElement('hr');
document.body.appendChild(hr4);

//Objective 5:
let btn3 = document.createElement('button');
btn3.textContent = 'Alert!';
let div3 = document.createElement('div');
div3.className = "bg-success text-white w-50 h-50"
let span = document.createElement('span');
span.textContent = "Aric Riggs!";
span.className = "border bg-danger w-50 h-50"
btn3.addEventListener('click', function () {
    div3.appendChild(span);
});
document.body.appendChild(btn3);
document.body.appendChild(div3);
let hr5 = document.createElement('hr');
document.body.appendChild(hr5);

//Objective 6:
let listBtn = document.createElement('button');
listBtn.textContent = "List Alert!"
let listUL = document.createElement('ul');
var imag = [
    'Russ',
    'Mindy',
    'David',
    'Reid',
    'Hunter',
    'Nathan',
    'Garrett',
    'Haylee',
    'Gage',
    'Will',
];

listBtn.addEventListener('click', function () {
    for (let i = 0; i < imag.length; i++) {
        let listLI = document.createElement('li');
        listLI.appendChild(document.createTextNode(imag[i]));
        listUL.appendChild(listLI)
    };
});
document.body.appendChild(listBtn)
document.body.appendChild(listUL)
let hr6 = document.createElement('hr');
document.body.appendChild(hr6);