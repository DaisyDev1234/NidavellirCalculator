

document.getElementById('thing').addEventListener('click', function () {
  var x = document.getElementById('test').value * 5; 
  document.getElementById('output').innerHTML += x;
})

document.getElementById('AddMore').addEventListener('click', function () {
  document.getElementById('MoreRows').innerHTML += '<div class="row"> <div class="col"> <input> </div> <div class="col"> <input> </div><div class="col"> <input> </div> <div class="col"> <input></div><div class="col"> <input></div></div>'
})
