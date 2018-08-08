function validateEmail(element) {
    var emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailFormat.test(element)
}

$('#email').keyup(function() {
    var value = $(this).val()
    var valid = validateEmail(value)
    if (!valid) {
        $("#validate").text("Not valid email").css('color', 'red')
        $('#email').css('border-color', 'red')
    } else {
        $("#validate").text("Berhasilll!").css('color', 'green')
        $('#email').css('border-color', 'green')
    }
})