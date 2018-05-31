$(document).ready(function() {
    var userInformation = {};

    $("#signuphere-button").on("click", function() {
        var password=document.getElementById('signupPassword').value;
        var confirmpassword=document.getElementById('confirmsignupPassword').value;
        var email=document.getElementById('signupEmail').value;
        var realEmail=false;

        for(var i=0;i<domains.length-1;i++){
            if(email.indexOf('@'+domains[i])==email.length-domains[i].length-1&&email.length-domains[i].length>1){
                realEmail=true;
            }
        }

        if(realEmail==false){
            if(confirm("Are you sure that "+email+" is a real email?")==false){
                return;
            }
        }

        console.log(email.lastIndexOf('.'));
        console.log(email.length-4);

        if(email.lastIndexOf('.')>email.length-5&&email.indexOf('@')!=-1){
                realEmail=true;
        }




            if(confirmpassword==password&&realEmail==true){
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify({
                        "email": email,
                        "password": password,
                        "information":{}
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
            }else{
                console.log('no');
                document.getElementById()
            }

    });
});

function LoginUser() {

    //if password matches the one from the management systems{

    var emailToGet = $('#loginEmail').val();
    var passwordToGet = $('#loginPassword').val();

    $.ajax({
        type: 'GET',
        dataType: 'application/json',
        success: function () {
            runMySuccessFunction(data);
            console.log(data);
        },
        error: function () {
            alert("failed");
        },
        url: 'https://slkidsbackend.herokuapp.com/VeggieGang/api/users/' + emailToGet
    });
//} if password matches
}



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

    console.log(pork)
    console.log(poultry)
    console.log(beef)
}


function myFunction() {
    var x = document.getElementById("loginPassword");
    if (x.type == "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}









var domains = [
    /* Default domains included */
    "aol.com", "att.net", "comcast.net", "facebook.com", "gmail.com", "gmx.com", "googlemail.com",
    "google.com", "hotmail.com", "hotmail.co.uk", "mac.com", "me.com", "mail.com", "msn.com",
    "live.com", "sbcglobal.net", "verizon.net", "yahoo.com", "yahoo.co.uk",

    /* Other global domains */
    "email.com", "fastmail.fm", "games.com" /* AOL */, "gmx.net", "hush.com", "hushmail.com", "icloud.com",
    "iname.com", "inbox.com", "lavabit.com", "love.com" /* AOL */, "outlook.com", "pobox.com", "protonmail.com",
    "rocketmail.com" /* Yahoo */, "safe-mail.net", "wow.com" /* AOL */, "ygm.com" /* AOL */,
    "ymail.com" /* Yahoo */, "zoho.com", "yandex.com",

    /* United States ISP domains */
    "bellsouth.net", "charter.net", "cox.net", "earthlink.net", "juno.com",

    /* British ISP domains */
    "btinternet.com", "virginmedia.com", "blueyonder.co.uk", "freeserve.co.uk", "live.co.uk",
    "ntlworld.com", "o2.co.uk", "orange.net", "sky.com", "talktalk.co.uk", "tiscali.co.uk",
    "virgin.net", "wanadoo.co.uk", "bt.com",

    /* Domains used in Asia */
    "sina.com", "qq.com", "naver.com", "hanmail.net", "daum.net", "nate.com", "yahoo.co.jp", "yahoo.co.kr", "yahoo.co.id", "yahoo.co.in", "yahoo.com.sg", "yahoo.com.ph",

    /* French ISP domains */
    "hotmail.fr", "live.fr", "laposte.net", "yahoo.fr", "wanadoo.fr", "orange.fr", "gmx.fr", "sfr.fr", "neuf.fr", "free.fr",

    /* German ISP domains */
    "gmx.de", "hotmail.de", "live.de", "online.de", "t-online.de" /* T-Mobile */, "web.de", "yahoo.de",

    /* Italian ISP domains */
    "libero.it", "virgilio.it", "hotmail.it", "aol.it", "tiscali.it", "alice.it", "live.it", "yahoo.it", "email.it", "tin.it", "poste.it", "teletu.it",

    /* Russian ISP domains */
    "mail.ru", "rambler.ru", "yandex.ru", "ya.ru", "list.ru",

    /* Belgian ISP domains */
    "hotmail.be", "live.be", "skynet.be", "voo.be", "tvcablenet.be", "telenet.be",

    /* Argentinian ISP domains */
    "hotmail.com.ar", "live.com.ar", "yahoo.com.ar", "fibertel.com.ar", "speedy.com.ar", "arnet.com.ar",

    /* Domains used in Mexico */
    "yahoo.com.mx", "live.com.mx", "hotmail.es", "hotmail.com.mx", "prodigy.net.mx",

    /* Domains used in Brazil */
    "yahoo.com.br", "hotmail.com.br", "outlook.com.br", "uol.com.br", "bol.com.br", "terra.com.br", "ig.com.br", "itelefonica.com.br", "r7.com", "zipmail.com.br", "globo.com", "globomail.com", "oi.com.br"
];
