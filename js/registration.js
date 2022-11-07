$("#submit").on("click", function (){
    var name = $("#name").val().trim();
    var surname = $("#surname").val().trim();
    var email = $("#email").val().trim();
    var password = $("#password").val().trim();
    var confirmPassword = $("#confirmPassword").val().trim();

    if(name == "") {
        $("#errorMess").text("Введите Имя");
        return false;
    } else if(surname == "") {
        $("#errorMess").text("Введите Фамилию");
        return false;
    } else if(email == "") {
        $("#errorMess").text("Введите email");
        return false;

    } else if(password == "") {
        $("#errorMess").text("Введите Пароль");
        return false;
    }else if(confirmPassword == "") {
        $("#errorMess").text("Повторите Пароль");
        return false;
    } else if(confirmPassword != password) {
        $("#errorMess").text("Пароли не совпадают");
        return false;
    }

    $("#errorMess").text("")

    $.ajax({
        url: 'ajax/log.php',
        type: 'POST',
        cache: false,
        data: { 'name': name, 'surname':surname, 'email':email, 'password':password, 'confirmPassword':confirmPassword},
        dataType: 'html',
        beforeSend: function () {
            $("#submit").prop("disabled", true);
        },
        success: function(data) {
            if(!data)
                alert("Были ошибки сообщение не отправлено!");
            else


                $("#submit").prop("disabled", true);
        }

    });


});