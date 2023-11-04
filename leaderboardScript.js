let scores = [1, 2, 4, 4];

var temp = 0;
for (let i = 0; i < scores.length - 1; i++) {
    if (scores[i] > scores[i + 1]) {
        temp = scores[i];
        scores[i] = scores[i + 1];
        scores[i + 1] = temp;
        
        i = -1;
    }
}
// Call the function to display the leaderboard when the page loads
document.getElementById('box').innerHTML = scores;

