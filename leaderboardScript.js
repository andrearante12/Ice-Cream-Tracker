let scores = [1, 4, 4, 2];
let names = ["j", "k", "l", "m"]

var temp = 0;
var tempStr = "";

// sort scores
for (let i = 0; i < scores.length - 1; i++) {
    if (scores[i] < scores[i + 1]) {
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
arrayList = document.getElementById('arrayList');

scores.forEach (item => {
    listItem = document.createElement('li');
    listItem.textContent = item;
    arrayList.appendChild(listItem);
  });Container.append(displayListItems);


arrayListNames = document.getElementById('arrayList2');

  names.forEach (item => {
    listItem = document.createElement('li');
    listItem.textContent = item;
    arrayListNames.appendChild(listItem);
  });Container.append(displayListItems);
  
// Call the function to display the leaderboard when the page loads
document.getElementById('box').innerHTML = scores;
document.getElementById('box2').innerHTML = names;

