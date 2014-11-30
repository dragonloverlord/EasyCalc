function id(id){
  var rid = document.getElementById(id);
  return rid;
}

function buttons(){

}

buttons.prototype.clear = function(){
  var display = id("text");
  display.innerHTML = "0";
}

buttons.prototype.zero = function(){
  var display = id("text");
  if(display.innerHTML == "0"){
    display.innerHTML = "0";
  }else{
    display.innerHTML += "0";
  }
}

buttons.prototype.one = function(){
  var display = id("text");
  if(display.innerHTML == "0"){
    display.innerHTML = "1";
  }else{
    display.innerHTML += "1";
  }
}

buttons.prototype.two = function(){
  var display = id("text");
  if(display.innerHTML == "0"){
    display.innerHTML = "2";
  }else{
    display.innerHTML += "2";
  }
}

buttons.prototype.three = function(){
  var display = id("text");
  if(display.innerHTML == "0"){
    display.innerHTML = "3";
  }else{
    display.innerHTML += "3";
  }
}
