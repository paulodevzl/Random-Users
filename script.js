$(document).ready(function(){
    $("#userrand").click(function(){
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data){
                var user = data.results[0];
                var userInfo = "<h2>Informações do Usuário</h2>";
                userInfo += "<p>Nome: " + user.name.first + " " + user.name.last + "</p>";
                userInfo += "<p>Gênero: " + user.gender + "</p>";
                userInfo += "<p>E-mail: " + user.email + "</p>";
                userInfo += "<p>Telefone: " + user.phone + "</p>";
                userInfo += "<p>Endereço: " + user.location.street.number + ", " + user.location.street.name + ", " + user.location.city + ", " + user.location.state + ", " + user.location.country + "</p>";
                userInfo += "<img src='" + user.picture.large + "' alt='Usuário'>";
                $("#userInfo").html(userInfo);
            }
        });
    });
});