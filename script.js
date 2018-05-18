
var userInformation={};


function SignUpUser(){
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        data: {
            "email": $('#signUpEmail').val(),
            "password": $('#signUpPassword').val()
        },
        dataType: 'json',
        success: function(data){
            runMySuccessFunction(data);
        },
        error: function(){
            alert("failed");
        },
        url: 'https://slkidsbackend.herokuapp.com/[appName]/api/users'
    });

}




function LoginUser(){

    var emailToGet =  $('#loginEmail').val();

    $.ajax({
        type: 'GET',
        dataType: 'json',
        success: function(emailToGet,passwordToGet){
            runMySuccessFunction(data);
        },
        error: function(){
            alert("failed");
        },
        url: 'https://slkidsbackend.herokuapp.com/VeggieGang/api/users/' + emailToGet
    });

}

