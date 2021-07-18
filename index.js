// on clicking bt1
function get_bmi(){

  var weight = document.querySelector(".weight_input").value;
  var height = document.querySelector(".height_input").value;
  //special cases
  if ((weight==="")||(height==="")){
    alert("Enter the weight or height");
  }
  else if (isNaN(weight)||isNaN(height)){
    alert("Please enter weight or height in decimal number");
  }
  else if(weight<=0 || height<=0){
    alert("Please enter feasible value");
  }
  else{
    const weight_sb = document.querySelector(".weight_units");
    const height_sb = document.querySelector(".height_units");
    if ((weight_sb.selectedIndex===0)||(height_sb.selectedIndex===0)){
      alert("Please select the unit");
    }
    //conversion of units into metric system
    switch (weight_sb.selectedIndex){
      case 2:
        weight = weight/1000; //grams into kg
        break;
      case 3:
        weight = weight*0.453592; //pounds into kg
        break;
    }
    switch (height_sb.selectedIndex){
      case 2:
        height = height/100;  //cm to m
        break;
      case 3:
        height = height*0.3048; //feet to m
        break;
    }
    var bmi = weight / Math.pow(height,2); //bmi formula
    //display bmi result
    document.querySelector(".bmi").innerHTML=Math.round(bmi*100)/100;
    var message = document.querySelector(".bmi_result");
    var img = document.querySelector(".bmi_image");
    if (bmi<=18.5){
      message.innerHTML = "Underweight";
      img.src = "images/underweight.png";
      img.height = "400";
      img.width = "300";
    }
    else if (bmi>18.5 && bmi<=24.9){
      message.innerHTML = "Healthy";
      img.src = "images/healthy.png";
    }
    else if (bmi>=25 && bmi<=29.9){
      message.innerHTML = "Obese";
      img.src = "images/obese.png";
    }
    else{
      message.innerHTML = "Morbidly Obese";
      img.src = "images/mor_obesity.png";
    }
    // display result section
    document.getElementById("result").classList.remove("visibility");
    location.href = "#result";
  }
}

//on clicking bt2
function reset(){
  window.location.reload();
  location.href = "#input-field";
}
