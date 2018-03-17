var table;

function preload(){
  table = loadTable('AFINN-111.txt', 'tsv');
}


function setup() {
  noCanvas();
  console.log(table);
  console.log('sentiment');
  for (var i=0; i< table.getRowCount(); i++){
    var row = table.getRow(i);
    var word = row.get(0);
    var score = row.get(1);
    console.log(row);
 }
}
function draw(){

}
