
var i = 0;

function slideback() {
    var scale = 84; // Use a decimal value for scale (e.g., 0.84 for 84%)
    
    if ((i >-2 )&&(i<1)) {
        i++;
    }
    else 
    {
        i=-1;
    }
    console.log(i);
    scale = scale * i;
    document.getElementById("slide_mainShow").style.transform = "translateX(" + scale + "vw)";
}

function slidefor() {
    var scale = 84; // Use a decimal value for scale (e.g., 0.84 for 84%)
    
    if ((i <2)&&(i>-1) )
     {
        i--;
    }
    else 
    {
        i=1;
    }
    console.log(i);
    scale = scale * i;
    document.getElementById("slide_mainShow").style.transform = "translateX(" + scale + "vw)";
}
function openPokiSite() {
    window.location.href = "https://poki.com/";
}
