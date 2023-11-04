//Op-1 is yes for working, op-2 is no for not working

function clicked(option) {
    if (option = "Yes") {
        console.log('this works');
        document.getElementById('op-1').clicked = true;
        document.getElementById('op-2').clicked = false;
    }
    else {
        console.log('this works');
        document.getElementById('op-2').clicked = true;
        document.getElementById('op-1').clicked = false;
    }
}
function submit() {
    if (document.getElementById('op-1').clicked) {
        console.log('this works');
        return true;
    }
    else if (document.getElementById('op-2').clicked) {
        console.log('this works');
        return false;
    }
    else {
        alert("Choose an option.");
        console.log('this works');
    }
}
