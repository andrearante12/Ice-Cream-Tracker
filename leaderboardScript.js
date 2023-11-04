let scores = [1, 4, 4, 2];
let names = ["j", "k", "l", "m"]

var temp = 0;
var tempStr = "";
for (let i = 0; i < scores.length - 1; i++) {
    if (scores[i] > scores[i + 1]) {
        // score sorting
        temp = scores[i];
        scores[i] = scores[i + 1];
        scores[i + 1] = temp;

        tempStr = names[i];
        names[i] = names[i + 1];
        names[i + 1] = tempStr;
        
        i = -1;
    }
}
// Call the function to display the leaderboard when the page loads
document.getElementById('box').innerHTML = scores;
document.getElementById('box').innerHTML = names;

