var elt2 = document.getElementById('calculator2');
var calculator2 = Desmos.GraphingCalculator(elt2, {
    expressions: false,
    lockViewport: true,
    settingsMenu: false,
    zoomButtons: false
});

calculator2.setExpression({ id: 'graph2', latex: 'f(x) = e^x' });
calculator2.setExpression({ id: 'sum', latex: "g(x) = \\sum_{n=0}^{t} (x^n)/(n!)"})

function updateT() {
    t = Number(document.getElementById('tSlider').value);
    calculator2.setExpression({ id: 't', latex: 't=' + t});
    document.getElementById('tval').innerHTML = "t = " + t;
}

var TSTEP = 1;
var tDelta = 1;

function startTSlider() {
    tDelta = TSTEP;

    button = document.getElementById("ttoggle");
    button.innerHTML = "stop";
    button.onclick = stopTSlider;
}
function stopTSlider() {
    // console.log('stop');
    tDelta = 0;

    button = document.getElementById("ttoggle");
    button.innerHTML = "start";
    button.onclick = startTSlider;
}

function changeTSlider() {
    // console.log('hi');
    tslider = document.getElementById('tSlider');

    max = tslider.max;
    min = tslider.min;

    newT = Number(tslider.value) + tDelta;
    tslider.value = newT;

    // console.log(newT);

    if (newT >= max || newT <= min) {
        tDelta *= -1;
    }
}

$(document.onload = function() {
    updateT()
});

setInterval(function() {
    changeTSlider();
    // console.log('changing')
    updateT();
}, 1000)