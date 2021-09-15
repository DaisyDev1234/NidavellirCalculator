function TotalGreen(){
  var sum = 0;
  //let Result;
  $('.GreenInput').each(function(){
    sum += parseFloat(this.value);
  });
  var othersum = 0;
  $('.GreenCommanderInput').each(function(){
    othersum  += parseFloat(this.value);
  });
  if(othersum > 5 && othersum <7){
    console.log("You got both!")
    sum = sum + 5
  }else if(othersum > 0 && othersum <2){
    console.log("You got ARAL!")
    sum = sum + 2
  }else if(othersum > 4 && othersum <6){
    console.log("You got DAGDA!")
    sum = sum + 3
  };
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
  var othersum = 0;
  $('.PurpleCommanderInput').each(function(){
    othersum  += parseFloat(this.value);
  });
  if(othersum > 5 && othersum <7){
    console.log("You got both!")
    sum = sum + 5
  }else if(othersum > 0 && othersum <2){
    console.log("You got AEGUR!")
    sum = sum + 2
  }else if(othersum > 4 && othersum <6){
    console.log("You got BONFUR!")
    sum = sum + 3
  };
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
  var othersum = 0;
  $('.OrangeCommanderInput').each(function(){
    othersum  += parseFloat(this.value);
  });
  if(othersum > 5 && othersum <7){
    console.log("You got both!")
    sum = sum + 4
    TotalOrange = TotalOrange + 4
  }else if(othersum > 0 && othersum <2){
    console.log("You got LOKDUR!")
    sum = sum + 3
    TotalOrange = TotalOrange + 1
  }else if(othersum > 4 && othersum <6){
    console.log("You got ZORAL!")
    sum = sum + 1
    TotalOrange = TotalOrange + 3
  };
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
  var othersum = 0;
  var TotalBlue = document.querySelectorAll('.BlueInput').length;
  $('.BlueCommanderInput').each(function(){
    othersum  += parseFloat(this.value);
  });
  if(othersum > 5 && othersum <7){
    console.log("You got both!")
    TotalBlue = TotalBlue + 2
    sum = sum + 27 + (TotalBlue * 2)
  }else if(othersum > 0 && othersum <2){
    TotalBlue = TotalBlue + 1
    console.log("You got IDUNN!")
    sum = sum + 7 + (TotalBlue * 2)
  }else if(othersum > 4 && othersum <6){
    console.log("You got HOURYA!")
    sum = sum + 20
  };
  document.getElementById('BlueOutput').innerHTML = sum;
};

function TotalRed(){
  var sum = 0;
  $('.RedInput').each(function(){
  sum += parseFloat(this.value);
  });
  var othersum = 0;
  var TotalRed = document.querySelectorAll('.RedInput').length;
  $('.RedCommanderInput').each(function(){
    othersum  += parseFloat(this.value);
  });
  if(othersum > 5 && othersum <7){
    console.log("You got both!")
    TotalRed = TotalRed + 3;
    sum = sum + 21 + (TotalRed * 2) + TotalRed;
  }else if(othersum > 0 && othersum <2){
    console.log("You got KRAAL!")
    TotalRed = TotalRed + 2;
    sum = sum + 7 + (TotalRed * 2)
  }else if(othersum > 4 && othersum <6){
    console.log("You got TARAH!")
    TotalRed = TotalRed + 1
    sum = sum + 14 + TotalRed
  };
  document.getElementById('RedOutput').innerHTML = sum;
};


function TotalOther(){
  var sum = 0;
  $('.OtherInput').each(function(){
  sum += parseFloat(this.value);
  });
  var othersum = 0;
  //var TotalRed = document.querySelectorAll('.RedInput').length;
  $('.OtherCommanderInput').each(function(){
    othersum  += parseFloat(this.value);
  });
  var DwergCheck = othersum % 10;
  console.log("Start Here")
  console.log(DwergCheck)
  console.log(othersum)
  console.log(sum)
    if(othersum < 59){
      if(othersum <= 56 && othersum >0 && DwergCheck != 0){
        console.log("Draft Depending on Who is There Now")
        if(DwergCheck === 3){
          //You have SKAA;
          sum = sum + 17;
          console.log("SKAA bonus achieved")
        }else if(DwergCheck === 6){
          //input.appendChild(option1);
          //You have GRID
          sum = sum + 7;
        }else if(DwergCheck === 9){
          //You have both
          sum = sum + 23;
        }
      }
      if(othersum >= 10 && othersum <=19){//Account for DWERGS selected
        console.log("DWERG 1 Bonus")
        sum = sum + 13;
      }else if(othersum >= 20 && othersum <=29){
        console.log("DWERG 2 Bonus")
        sum = sum + 40;
      }else if(othersum >= 30 && othersum <=39){
        console.log("DWERG 3 Bonus")
        sum = sum + 81;
      }else if(othersum >= 40 && othersum <=49){
        sum = sum + 108;
      }else if(othersum >= 50 && othersum <=59){
        sum = sum + 135;
      };
    }else if(othersum === 59){
      sum = sum + 158;
    }
  document.getElementById('OtherOutput').innerHTML = sum;
};

///GRAND TOTAL
document.getElementById('Total').addEventListener('click', function () {
  TotalGreen.call();
  TotalPurple.call();
  TotalOrange.call();
  TotalBlue.call();
  TotalRed.call();
  TotalOther.call();
  //var Additional = parseInt(document.getElementById('AdditionalPoints').value);
  var sum = 0;
  $('.SubTotal').each(function(){
  sum += parseFloat($(this).text());
  });
  document.getElementById('GrantTotal').innerHTML = sum;
});

var add = document.querySelector(".add");

document.getElementById('AddMoreGreen').addEventListener('click', function () {
  var input = document.createElement('input')
  input.type = "number";
  input.value = "1";
  input.className = "GreenInput";
  GreenDestination.appendChild(input);
});

document.getElementById('AddGreenCommander').addEventListener('click', function () {
  var input = document.createElement('select')
  var othersum = 0;
  $('.GreenCommanderInput').each(function(){
    othersum  += parseFloat(this.value);
  });
  if(othersum > 5){
    console.log("You got both already!");
    alert("You have all hunter heros!");
  }else if(othersum > 0 && othersum <2){
    console.log("You got ARAL already!")
    var option2 = document.createElement('option')
    option2.text = "DAGDA";
    option2.value = 5;
    input.appendChild(option2);
    input.className = "GreenCommanderInput";
    GreenDestination.appendChild(input);
  }else if(othersum > 4 && othersum <6){
    console.log("You got DAGDA already!")
    var option1 = document.createElement('option')
    option1.text = "ARAL";
    option1.value = 1;
    input.appendChild(option1);
    input.className = "GreenCommanderInput";
    GreenDestination.appendChild(input);
  }else{
    var option1 = document.createElement('option')
    option1.text = "ARAL";
    option1.value = 1;
    var option2 = document.createElement('option')
    option2.text = "DAGDA";
    option2.value = 5;
    input.appendChild(option1);
    input.appendChild(option2);
    input.className = "GreenCommanderInput";
    GreenDestination.appendChild(input);
  };


  //var input = document.createElement('select')
  //var option1 = document.createElement('option')
  //option1.text = "ARAL";
  //option1.value = 1;
  //var option2 = document.createElement('option')
  //option2.text = "DAGDA";
  //option2.value = 5;
  //input.appendChild(option1);
  //input.appendChild(option2);
  //input.className = "GreenCommanderInput";
  //GreenDestination.appendChild(input);
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

  var othersum = 0;
  $('.PurpleCommanderInput').each(function(){
    othersum  += parseFloat(this.value);
  });
  if(othersum > 5){
    console.log("You got both already!");
    alert("You have all blacksmith heros!");
  }else if(othersum > 0 && othersum <2){
    console.log("You got AEGUR already!")
    var option2 = document.createElement('option')
    option2.text = "BONFUR";
    option2.value = 5;
    input.appendChild(option2);
    input.className = "PurpleCommanderInput";
    PurpleDestination.appendChild(input);
  }else if(othersum > 4 && othersum <6){
    console.log("You got BONFUR already!")
    var option1 = document.createElement('option')
    option1.text = "AEGUR";
    option1.value = 1;
    input.appendChild(option1);
    input.className = "PurpleCommanderInput";
    PurpleDestination.appendChild(input);
  }else{
    var option1 = document.createElement('option')
    option1.text = "AEGUR";
    option1.value = 1;
    var option2 = document.createElement('option')
    option2.text = "BONFUR";
    option2.value = 5;
    input.appendChild(option1);
    input.appendChild(option2);
    input.className = "PurpleCommanderInput";
    PurpleDestination.appendChild(input);
  };

  //var option1 = document.createElement('option')
  //option1.text = "AEGUR";
  //option1.value = 1;
  //var option2 = document.createElement('option')
  //option2.text = "BONFUR";
  //option2.value = 5;
  //input.appendChild(option1);
  //input.appendChild(option2);
  //input.className = "PurpleCommanderInput";
  //PurpleDestination.appendChild(input);
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

  var othersum = 0;
  $('.OrangeCommanderInput').each(function(){
    othersum  += parseFloat(this.value);
  });
  if(othersum > 5){
    console.log("You got both already!");
    alert("You have all miner heros!");
  }else if(othersum > 0 && othersum <2){
    console.log("You got LOKDUR already!")
    var option2 = document.createElement('option')
    option2.text = "ZORAL";
    option2.value = 5;
    input.appendChild(option2);
    input.className = "OrangeCommanderInput";
    OrangeDestination.appendChild(input);
  }else if(othersum > 4 && othersum <6){
    console.log("You got ZORAL already!")
    var option1 = document.createElement('option')
    option1.text = "LOKDUR";
    option1.value = 1;
    input.appendChild(option1);
    input.className = "OrangeCommanderInput";
    OrangeDestination.appendChild(input);
  }else{
    var option1 = document.createElement('option')
    option1.text = "LOKDUR";
    option1.value = 1;
    var option2 = document.createElement('option')
    option2.text = "ZORAL";
    option2.value = 5;
    input.appendChild(option1);
    input.appendChild(option2);
    input.className = "OrangeCommanderInput";
    OrangeDestination.appendChild(input);
  };


  //var option1 = document.createElement('option')
  //option1.text = "LOKDUR";
  //option1.value = 1;
  //var option2 = document.createElement('option')
  //option2.text = "ZORAL";
  //option2.value = 5;
  //input.appendChild(option1);
  //input.appendChild(option2);
  //input.className = "OrangeCommanderInput";
  //OrangeDestination.appendChild(input);
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

  var othersum = 0;
  $('.BlueCommanderInput').each(function(){
    othersum  += parseFloat(this.value);
  });
  if(othersum > 5){
    console.log("You got both already!");
    alert("You have all explorer heros!");
  }else if(othersum > 0 && othersum <2){
    console.log("You got IDUNN already!")
    var option2 = document.createElement('option')
    option2.text = "HOURYA";
    option2.value = 5;
    input.appendChild(option2);
    input.className = "BlueCommanderInput";
    BlueDestination.appendChild(input);
  }else if(othersum > 4 && othersum <6){
    console.log("You got HOURYA already!")
    var option1 = document.createElement('option')
    option1.text = "IDUNN";
    option1.value = 1;
    input.appendChild(option1);
    input.className = "BlueCommanderInput";
    BlueDestination.appendChild(input);
  }else{
    var option1 = document.createElement('option')
    option1.text = "IDUNN";
    option1.value = 1;
    var option2 = document.createElement('option')
    option2.text = "HOURYA";
    option2.value = 5;
    input.appendChild(option1);
    input.appendChild(option2);
    input.className = "BlueCommanderInput";
    BlueDestination.appendChild(input);
  };

  //var option1 = document.createElement('option')
  //option1.text = "IDUNN";
  //option1.value = 1;
  //var option2 = document.createElement('option')
  //option2.text = "HOURYA";
  //option2.value = 5;
  //input.appendChild(option1);
  //input.appendChild(option2);
  //input.className = "BlueCommanderInput";
  //BlueDestination.appendChild(input);
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

  var othersum = 0;
  $('.RedCommanderInput').each(function(){
    othersum  += parseFloat(this.value);
  });
  if(othersum > 5){
    console.log("You got both already!");
    alert("You have all warrior heros!");
  }else if(othersum > 0 && othersum <2){
    console.log("You got KRAAL already!")
    var option2 = document.createElement('option')
    option2.text = "TARAH";
    option2.value = 5;
    input.appendChild(option2);
    input.className = "RedCommanderInput";
    RedDestination.appendChild(input);
  }else if(othersum > 4 && othersum <6){
    var option1 = document.createElement('option')
    option1.text = "KRAAL";
    option1.value = 1;
    input.appendChild(option1);
    input.className = "RedCommanderInput";
    RedDestination.appendChild(input);
  }else{
    var option1 = document.createElement('option')
    option1.text = "KRAAL";
    option1.value = 1;
    var option2 = document.createElement('option')
    option2.text = "TARAH";
    option2.value = 5;
    input.appendChild(option1);
    input.appendChild(option2);
    input.className = "RedCommanderInput";
    RedDestination.appendChild(input);
  };

  //var option1 = document.createElement('option')
  //option1.text = "KRAAL";
  //option1.value = 1;
  //var option2 = document.createElement('option')
  //option2.text = "TARAH";
  //option2.value = 5;
  //input.appendChild(option1);
  //input.appendChild(option2);
  //input.className = "RedCommanderInput";
  //RedDestination.appendChild(input);
});

document.getElementById('RemoveRed').addEventListener('click', function () {
  var list = document.getElementById("RedDestination");
  var max =list.lastChild;
  list.removeChild(max); 
});

document.getElementById('AddMoreOther').addEventListener('click', function () {
  var input = document.createElement('input')
  input.type = "number";
  input.value = "0";
  input.className = "OtherInput";
  OtherDestination.appendChild(input);
});

document.getElementById('AddOtherCommander').addEventListener('click', function () {
  var input = document.createElement('select')
  var othersum = 0;
  console.log("helllooo!");
  //var TotalRed = document.querySelectorAll('.RedInput').length;
  $('.OtherCommanderInput').each(function(){
    othersum += parseFloat(this.value);
  });
  var DwergCheck = othersum % 10;
  var DwergCount = othersum /10;
  console.log(othersum);
  console.log(DwergCheck);
  var option1 = document.createElement('option');
  option1.text = "SKAA";
  option1.value = 3;
  var option2 = document.createElement('option');
  option2.text = "GRID";
  option2.value = 6;
  var option3 = document.createElement('option');
  option3.text = "DWERG";
  option3.value = 10;
  if(othersum < 59){
    if(othersum <= 49 && othersum >0 && DwergCheck != 0){
      console.log("Draft Depending on Who is There Now")
      if(DwergCheck === 3){
        //input.appendChild(option1);
        input.appendChild(option2);
        input.appendChild(option3);
        input.className = "OtherCommanderInput";
        OtherDestination.appendChild(input);
      }else if(DwergCheck === 6){
        input.appendChild(option1);
        //input.appendChild(option2);
        input.appendChild(option3);
        input.className = "OtherCommanderInput";
        OtherDestination.appendChild(input);
      }else if(DwergCheck === 9){
        //input.appendChild(option1);
        //input.appendChild(option2);
        input.appendChild(option3);
        input.className = "OtherCommanderInput";
        OtherDestination.appendChild(input);
      }
    }else if(othersum === 50){
      console.log("Draft Depending on Who is There Now...Just not DWERG...")
        input.appendChild(option1);
        input.appendChild(option2);
        //input.appendChild(option3);
        input.className = "OtherCommanderInput";
        OtherDestination.appendChild(input);
    }else{
        console.log("Draft Anyone!")
        input.appendChild(option1);
        input.appendChild(option2);
        input.appendChild(option3);
        input.className = "OtherCommanderInput";
        OtherDestination.appendChild(input);
    };
  }else{
    console.log("You have all the commanders!");
    alert("You have all the commanders!");
  }
});

document.getElementById('RemoveOther').addEventListener('click', function () {
  var list = document.getElementById("OtherDestination");
  var max =list.lastChild;
  list.removeChild(max); 
});
