function addMeat(){
    var meat = document.getElementById("selectBox1").value;
    var amount = document.getElementById("selectBox2").value;
    var oz = "oz"
    document.getElementById("listMeat").innerHTML += '<p>' + meat + " " + amount + oz + '</p>'
    var amounts = parseInt(amount)
    if(meat == "Pork"){
        meatsPork.push({"meat":meat,"total":amounts})
    }
    if(meat == "Poultry"){
        meatsPoultry.push({"meat":meat,"total":amounts})
    }
    if(meat == "Beef"){
        meatsBeef.push({"meat":meat,"total":amounts})
    }
}

var meatsPork = []
var meatsPoultry = []
var meatsBeef = []

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

    var poultryLB = poultry/16
    var beefLB = beef/16
    var porkLB = pork/16

    console.log(pork)
    console.log(poultry)
    console.log(beef)

    console.log(porkLB)
}
