document.getElementById('register-form').addEventListener('input', function() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var registerButton = document.getElementById('register-button');
    var errorMessage = document.getElementById('error-message');

    if (username !== '' && email !== '' && password !== '' && confirmPassword !== '' && password === confirmPassword) {
        registerButton.removeAttribute('disabled');
        errorMessage.style.display = 'none';
    } else {
        registerButton.setAttribute('disabled', 'disabled');
        errorMessage.style.display = 'block';
    }
});

document.getElementById('register-button').addEventListener('click', function(event) {
    if (event.target.getAttribute('disabled') !== null) {
        event.preventDefault();

        var container = document.querySelector('.container');
        var button = event.target;
        var containerRect = container.getBoundingClientRect();
        var containerWidth = containerRect.width;
        var containerHeight = containerRect.height;
        var buttonWidth = button.offsetWidth;
        var buttonHeight = button.offsetHeight;
        var randomX = Math.floor(Math.random() * (containerWidth - buttonWidth));
        var randomY = Math.floor(Math.random() * (containerHeight - buttonHeight));

        button.style.transform = 'translate(' + randomX + 'px, ' + randomY + 'px)';
    }
});
