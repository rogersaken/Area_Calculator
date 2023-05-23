function area(){
    var w = document.getElementById("width").value;
    var h = document.getElementById("height").value;
    
    var area = w * h;
    
    var result = "Area: " + area;
    
    document.getElementById("output").innerHTML = result; 
  }