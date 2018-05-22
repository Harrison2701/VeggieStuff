$(document).ready(function() {
    var userInformation = {};

    $("#signuphere-button").on("click", function() {

            if ($('#signupPassword').val() == $('#confirmsignupPassword').val()) {
                $.ajax({
                    type: 'POST',
                    contentType: 'json',
                    data: JSON.stringify({
                        "email": $('#signUpEmail').val(),
                        "password": $('#signUpPassword').val()
                    }),
                    dataType: 'json',
                    success: function (data) {
                        return;
                    },
                    error: function () {
                        alert("failed");
                    },
                    url: 'https://slkidsbackend.herokuapp.com/VeggieGang/api/users'
                });
            }else{
                return 'hiu';
            }

    });

    function LoginUser() {

        //if password matches the one from the management systems{

        var emailToGet = $('#loginEmail').val();
        var passwordToGet = $('#loginPassword').val();

        $.ajax({
            type: 'GET',
            dataType: 'json',
            success: function (emailToGet, passwordToGet) {
                runMySuccessFunction(data);
            },
            error: function () {
                alert("failed");
            },
            url: 'https://slkidsbackend.herokuapp.com/VeggieGang/api/users/' + emailToGet
        });
//} if password matches
    }

});