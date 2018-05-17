
var userInformation={};

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