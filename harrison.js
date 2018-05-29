
function addMeat(){
    var meat = document.getElementById("selectBox1").value;
    var quantity = document.getElementById("selectBox2").value;
    var amount = "oz"
    document.getElementById("listMeat").innerHTML += '<p>' + meat + " " + quantity + amount + '</p>'
}

function calculateMeat(){

}