var phrase = document.getElementById('phrase');
var offset = 0;
if (phrase.offsetHeight < 50) {
    document.getElementById('raptor_texas').style.height = '318px';
    document.getElementById('raptor_other').style.height = '318px';
    offset = 35;
} else if (phrase.offsetHeight < 100) {
    document.getElementById('raptor_texas').style.height = '288px';
    document.getElementById('raptor_other').style.height = '288px';
    offset = 5;
} else {
    document.getElementById('raptor_texas').style.height = '261px';
    document.getElementById('raptor_other').style.height = '261px';
}

var percent = document.getElementById('percentageContainer').innerHTML;
var bigger   = document.getElementById('isBigger').innerHTML;

percent = 1.0/percent * 100;

var toScale, toShift;
if (bigger == 'bigger') {
    toScale = document.getElementById('r_o');
    toShift = document.getElementById('r_t');
} else {
    toScale = document.getElementById('r_t');
    toShift = document.getElementById('r_o');
}

var container = toScale.parentNode;

toScale.style.width  = percent+"%";
toScale.style.height = 'auto';

var pHeight = parseInt(container.style.height,10);
var height = toScale.height;

if (height < 260) {
    var finalY = pHeight/2 - height/2 + offset;
    toScale.style.position = "relative";
    toScale.style.top = finalY + 'px';
    toShift.style.position = "relative";
    toShift.style.top = offset + 'px';
}
