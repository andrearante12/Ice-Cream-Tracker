//Op-1 is yes for working, op-2 is no for not working
let decision = false;
let theOption = "";

function pressed(option) {
    if (option == "Yes") {
        console.log('yes');
        document.getElementById('op-1').disabled = false;
        document.getElementById('op-2').disabled = true;
        theOption = "Yes";
    }
    else if (option == "No"){
        console.log('no');
        document.getElementById('op-1').disabled = true;
        document.getElementById('op-2').disabled = false;
        theOption = "No";
    }
}

function submitIt() {
    if (theOption == "Yes") {
        console.log('this means green was pressed');
        decision = true;
        document.getElementById('op-1').disabled = false;
        document.getElementById('op-2').disabled = false;
        //return true;
    }
    else if (theOption == "No") {
        console.log('this means red was pressed');
        decision = false;
        document.getElementById('op-1').disabled = false;
        document.getElementById('op-2').disabled = false;
        //return false;
    }
    else {
        alert("Choose an option.");
        console.log('this works');
    }
}




