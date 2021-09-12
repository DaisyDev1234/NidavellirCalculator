function TotalGreen(){
  var sum = 0;
  let Result;
  $('.GreenInput').each(function(){
  sum += parseFloat(this.value);
  });
  let y; //starting value of 1, and represents previous value
  let z; 
  z = 1;
  y = 1;
  if(sum<1){
    NewResult = 0;
  } else{
    for(let i = 2; i<= sum; i++){
    
      //Counting up by odd numbers
      OddBonus = y + 2;
      y = OddBonus;
  
      //Adding the OddBonus
      z = z + OddBonus;
    };
    NewResult = z;
  };
  document.getElementById('GreenOutput').innerHTML = NewResult;
};

function TotalPurple(){
  var sum = 0;
  $('.PurpleInput').each(function(){
  sum += parseFloat(this.value);
  });
  let y; //starting value of 1, and represents previous value
  let z; 
  z = 3;
  y = 3;
  if(sum<1){
    NewResult = 0;
  } else{
    for(let i = 2; i<= sum; i++){
    
      //Counting up
      Bonus = y + 1;
      y = Bonus;
  
      //Adding the Bonus
      z = z + Bonus;
    };
    NewResult = z;
  };
  document.getElementById('PurpleOutput').innerHTML = NewResult;
};

function TotalOrange(){
  var sum = 0;
  $('.OrangeInput').each(function(){
  sum += parseFloat(this.value);
  });
  var TotalOrange = document.querySelectorAll('.OrangeInput').length;
  if(sum > 0){
  NewResult = sum * TotalOrange;
  } else{
    NewResult = TotalOrange;
  };
  document.getElementById('OrangeOutput').innerHTML = NewResult;
};

function TotalBlue(){
  var sum = 0;
  $('.BlueInput').each(function(){
  sum += parseFloat(this.value);
  });
  document.getElementById('BlueOutput').innerHTML = sum;
};

function TotalRed(){
  var sum = 0;
  $('.RedInput').each(function(){
  sum += parseFloat(this.value);
  });
  document.getElementById('RedOutput').innerHTML = sum;
};

///GRAND TOTAL
document.getElementById('Total').addEventListener('click', function () {
  TotalGreen.call();
  TotalPurple.call();
  TotalOrange.call();
  TotalBlue.call();
  TotalRed.call();
  var Additional = parseInt(document.getElementById('AdditionalPoints').value);
  var sum = 0;
  $('.SubTotal').each(function(){
  sum += parseFloat($(this).text());
  });

  document.getElementById('GrantTotal').innerHTML = sum + Additional;
});

var add = document.querySelector(".add");
//var GreenDestination = document.getElementById('GreenDestination');
//var PurpleDestination = document.getElementById('PurpleDestination');


document.getElementById('AddMoreGreen').addEventListener('click', function () {
  var input = document.createElement('input')
  input.type = "number";
  input.value = "1";
  input.className = "GreenInput";
  GreenDestination.appendChild(input);
});

document.getElementById('AddGreenCommander').addEventListener('click', function () {
  var input = document.createElement('select')
  var option1 = document.createElement('option')
  option1.text = "ARAL";
  option1.value = "ARAL";
  var option2 = document.createElement('option')
  option2.text = "DAGDA";
  option2.value = "DAGDA";
  input.appendChild(option1);
  input.appendChild(option2);
  input.className = "GreenCommanderInput";
  GreenDestination.appendChild(input);
});


document.getElementById('RemoveGreen').addEventListener('click', function () {
  var list = document.getElementById("GreenDestination");
  var max =list.lastChild;
  list.removeChild(max); 
});

document.getElementById('AddMorePurple').addEventListener('click', function () {
  var input = document.createElement('input')
  input.type = "number";
  input.value = "1";
  input.className = "PurpleInput";
  PurpleDestination.appendChild(input);
});
document.getElementById('AddPurpleCommander').addEventListener('click', function () {
  var input = document.createElement('select')
  var option1 = document.createElement('option')
  option1.text = "AEGUR";
  option1.value = "AEGUR";
  var option2 = document.createElement('option')
  option2.text = "BONFUR";
  option2.value = "BONFUR";
  input.appendChild(option1);
  input.appendChild(option2);
  input.className = "PurpleCommanderInput";
  PurpleDestination.appendChild(input);
});

document.getElementById('RemovePurple').addEventListener('click', function () {
  var list = document.getElementById("PurpleDestination");
  var max =list.lastChild;
  list.removeChild(max); 
});

document.getElementById('AddMoreOrange').addEventListener('click', function () {
  var input = document.createElement('input')
  input.type = "number";
  input.value = "0";
  input.className = "OrangeInput";
  OrangeDestination.appendChild(input);
});

document.getElementById('AddOrangeCommander').addEventListener('click', function () {
  var input = document.createElement('select')
  var option1 = document.createElement('option')
  option1.text = "LOKDUR";
  option1.value = "LOKDUR";
  var option2 = document.createElement('option')
  option2.text = "ZORAL";
  option2.value = "ZORAL";
  input.appendChild(option1);
  input.appendChild(option2);
  input.className = "OrangeCommanderInput";
  OrangeDestination.appendChild(input);
});

document.getElementById('RemoveOrange').addEventListener('click', function () {
  var list = document.getElementById("OrangeDestination");
  var max =list.lastChild;
  list.removeChild(max); 
});

document.getElementById('AddMoreBlue').addEventListener('click', function () {
  var input = document.createElement('input')
  input.type = "number";
  input.value = "0";
  input.className = "BlueInput";
  BlueDestination.appendChild(input);
});

document.getElementById('AddBlueCommander').addEventListener('click', function () {
  var input = document.createElement('select')
  var option1 = document.createElement('option')
  option1.text = "IDUNN";
  option1.value = "IDUNN";
  var option2 = document.createElement('option')
  option2.text = "HOURYA";
  option2.value = "HOURYA";
  input.appendChild(option1);
  input.appendChild(option2);
  input.className = "BlueCommanderInput";
  BlueDestination.appendChild(input);
});

document.getElementById('RemoveBlue').addEventListener('click', function () {
  var list = document.getElementById("BlueDestination");
  var max =list.lastChild;
  list.removeChild(max); 
});

document.getElementById('AddMoreRed').addEventListener('click', function () {
  var input = document.createElement('input')
  input.type = "number";
  input.value = "0";
  input.className = "RedInput";
  RedDestination.appendChild(input);
});

document.getElementById('AddRedCommander').addEventListener('click', function () {
  var input = document.createElement('select')
  var option1 = document.createElement('option')
  option1.text = "KRAAL";
  option1.value = "KRAAL";
  var option2 = document.createElement('option')
  option2.text = "TARAH";
  option2.value = "TARAH";
  input.appendChild(option1);
  input.appendChild(option2);
  input.className = "RedCommanderInput";
  RedDestination.appendChild(input);
});

document.getElementById('RemoveRed').addEventListener('click', function () {
  var list = document.getElementById("RedDestination");
  var max =list.lastChild;
  list.removeChild(max); 
});
