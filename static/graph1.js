var MQ = Desmos.MathQuill;
var elt1 = document.getElementById('calculator1');
var calculator = Desmos.GraphingCalculator(elt1, {
    expressions: false,
    lockViewport: true,
    settingsMenu: false,
    zoomButtons: false
});
calculator.resize();

calculator.setExpression({ id: 'graph1', latex: 'f(x) = \\cos(x)' });
calculator.setExpression({ id: 'taylor', latex: "y = f(c) + f'(c)(x-c) + \\frac{f''(c)(x-c)^2}{2!} + \\frac{f'''(c)(x-c)^3}{3!}" });
calculator.setExpression({ id: 'x', latex: 'x=c', hidden: true });

function updateC() {
    c = Number(document.getElementById('cSlider').value);
    calculator.setExpression({ id: 'c', latex: 'c=' + c/10});
    updateLatex(c);
    // document.getElementById('cval').innerHTML = "$$c: " + c/10 + "$$";
}

var CSTEP = 1
var cDelta = 1

function updateLatex(c) {
    var eq = document.getElementById('cval');
    eq.innerHTML = "c = " + c/10;
}

function startCSlider() {
    // console.log('start')
    cDelta = CSTEP;

    button = document.getElementById("ctoggle");
    button.innerHTML = "stop";
    button.onclick = stopCSlider;
}
function stopCSlider() {
    // console.log('stop');
    cDelta = 0;

    button = document.getElementById("ctoggle");
    button.innerHTML = "start";
    button.onclick = startCSlider;
}

function changeCSlider() {
    cslider = document.getElementById('cSlider');

    max = cslider.max;
    min = cslider.min;

    newC = Number(cslider.value) + cDelta;
    cslider.value = newC;

    if (newC >= max || newC <= min) {
        cDelta *= -1;
    }
}

$(document.onload = function() {
    updateC();
    document.getElementById('MathDiv');
});

$(function() {
    var x = 5;
    

    
})

setInterval(function() {
    changeCSlider();
    updateC();
}, 40)


