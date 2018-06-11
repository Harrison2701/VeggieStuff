<select id="foodAlternatives">
    <option value="steak">Steak</option>
    <option value="roastbeef">Roast Beef</option>
<option value="friedchicken">Fried Chicken</option>
<option value="chickennuggets">Chicken Nuggets</option>
<option value="bacon">Bacon</option>
    <option value="porkchops">Pork Chops</option>
</select>

<button type="button"id="seachFoodAlternatives" onclick="displayAlternatives()" class="ui-btn ui-btn-b ui-shadow ui-corner-all">Find</button>

    <div id="listALternatives">

    </div>


var meatsPork = [];
var meatsPoultry = [];
var meatsBeef = [];

function calculateMeat(){
    var poultry = 0;
    var beef = 0;
    var pork = 0;

    for(var i=0;i<meatsPork.length;i++){
        pork += meatsPork[i].total
    }
    for(var j=0;j<meatsPoultry.length;j++){
        poultry += meatsPoultry[j].total
    }
    for(var k=0;k<meatsBeef.length;k++){
        beef += meatsBeef[k].total
    }

    var poultryLB = poultry/16;
    var beefLB = beef/16;
    var porkLB = pork/16;

    document.location.href = "#page4";
    listConsumptions(pork,beef,poultry);

    console.log(porkLB)
}

function listConsumptions(x,y,z) {
    var waterBeef = y * 1845;
    var waterPork = x * 719;
    var waterPoultry = z * 515;
    var totalWater = waterBeef + waterPork + waterPoultry;

    var co2Beef = y * 13.3;
    var co2Pork = x * 3.3;
    var co2Poultry = z * 3.5;
    var totalCO2 = co2Beef + co2Pork + co2Poultry;

    document.getElementById("listFoodEaten").innerHTML += '<p>' + "Your total water consumption is " + totalWater + " and your total CO2 consumptions is " + totalCO2 + '</p>';




    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            "email": email,
            "password": password,
            "information":{
                waterConsumed:[],
                co2Consumed:[],
                dateAccountWasCreate:new Date()
            }
        }),
        dataType: 'json',
        success: function (data) {
            console.log(data);
        },
        error: function () {
            alert("failed");
        },
        url: 'https://slkidsbackend.herokuapp.com/VeggieGang/api/users'

    });

}

var beefAlternatives = ["Seitan Steaks","Tofu Steaks","Mushroom Steaks","Eggplant Steaks","Cauliflower Steaks","Tempeh","Vegan Meat","Lentils","Beans"];
var poultryAlternatives = ["Tofu Chicken","Jackfruit Chicken","Chickpea Cutlets","Seitan Cutlets","Vegetable Cutlets","Tofu Nuggets","Cauliflower Wings"]
var porkAlternatives = ["Sun-dried Tomatoes","Fried Shallots","Roasted Mushrooms","Tempeh Bacon","Textured Soy Protein","Tofu","Beans"]
var alternative = ""

function displayAlternatives(){
    var alternativeValue = document.getElementById("foodAlternatives").value
    if( alternativeValue == "steak" || alternativeValue == "roastbeef"){
        alternative  = beefAlternatives[Math.floor(Math.random() * beefAlternatives.length)]
        document.getElementById("listALternatives").innerHTML = " "
        document.getElementById("listALternatives").innerHTML += '<p>' + "A good alternative to this option could be " + alternative + '</p>'
    }
    if( alternativeValue == "friedchicken" || alternativeValue == "chickennuggets"){
        alternative  = poultryAlternatives[Math.floor(Math.random() * poultryAlternatives.length)]
        document.getElementById("listALternatives").innerHTML = " "
        document.getElementById("listALternatives").innerHTML += '<p>' + "A good alternative to this option could be " + alternative + '</p>'
    }
    if( alternativeValue == "bacon" || alternativeValue == "porkchops"){
        alternative  = porkAlternatives[Math.floor(Math.random() * porkAlternatives.length)]
        document.getElementById("listALternatives").innerHTML = " "
        document.getElementById("listALternatives").innerHTML += '<p>' + "A good alternative to this option could be " + alternative + '</p>'
    }
}
