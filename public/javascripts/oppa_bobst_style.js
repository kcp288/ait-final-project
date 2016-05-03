// Set background color
document.body.style.background = "linear-gradient(#90b8e6, #eff4f3)";

// TODO: Toggle nighttime
//document.body.style.background = "linear-gradient(#13185d, #0076a4)";

// Change color of printer on click
function chngimg(element) {
    var element_name = element.id;
    var img = document.getElementById(element_name).src;

    if (img.indexOf('/images/printer-on.png')!=-1) {
            document.getElementById(element_name).src = '/images/printer-off.png';
    }
    else {
        document.getElementById(element_name).src = '/images/printer-on.png';
    }
}

// TODO: Get actual printer data!
