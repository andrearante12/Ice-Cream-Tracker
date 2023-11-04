function pressed(option) {
    if (option == "Yes") {
        console.log('yes');
        document.getElementById('op-1').disabled = false;
        document.getElementById('op-2').disabled = true;
        theOption = "Yes";
        working = true;
    }
    else if (option == "No"){
        console.log('no');
        document.getElementById('op-1').disabled = true;
        document.getElementById('op-2').disabled = false;
        theOption = "No";
        working = false;
    }
}