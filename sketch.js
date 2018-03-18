// var table;
//
// var afinn = {}
//
//
// function preload(){
//   table = loadTable('AFINN-111.txt', 'tsv');
// }
//
//
// function setup() {
//   noCanvas();
//   console.log(table);
//   for (var i=0; i< table.getRowCount(); i++){
//     var row = table.getRow(i);
//     var word = row.get(0);
//     var score = row.get(1);
//     // console.log(word,score);
//     afinn[word] = score;
//  }
//
//  console.log(afinn);
//  save(afinn, 'afinnb-111.json')
// }
// function draw(){
//
// }


var afinn;

function preload() {
  afinn = loadJSON('AFINN-111.json');
}

function setup() {
  console.log(afinn);

  var txt = select('#txt');
  txt.input(typing);

  function typing() {
    var textinput = txt.value();
    var words = textinput.split(/\W/);
    console.log(words);
    var Scoredwords = [];
    var totalscore = 0;
    for(var i = 0; i< words.length; i++){
      var word = words[i].toLowerCase();
      if (afinn.hasOwnProperty(word)){
       var score =afinn[word];
       console.log(word,score);
       totalscore += Number(score);
       Scoredwords.push(word+ ": " + score + " ");
      }
    }
    var scoreP = select('#score');
    scoreP.html('score: ' + totalscore);

    var comp = select('#comparitive');
      comp.html('comparitive: ' + totalscore / words.length);

    var wordlist = select('#wordlist');
    wordlist.html(Scoredwords);
  }
}
