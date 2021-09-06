


document.getElementById('Total').addEventListener('click', function () {
  var sum = 0;
  $('.GreenInput').each(function(){
  sum += parseFloat(this.value);
  })
  document.getElementById('GreenOutput').innerHTML = sum;
})

document.getElementById('AddMore').addEventListener('click', function () {
  document.getElementById('MoreRows').innerHTML += '<div class="row"> <div class="col"> <input class="GreenInput" value="0"> </div> <div class="col"> <input value="0"> </div><div class="col"> <input value="0"> </div> <div class="col"> <input value="0"></div><div class="col"> <input value="0"></div></div>'
  //this needs to be updated to use .appendChild() instead of .innerHTML https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_appendchild
})
