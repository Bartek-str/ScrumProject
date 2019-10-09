document.addEventListener('DOMContentLoaded', function () {
    var newUserBtn = document.querySelector('#newUserBtn');
    var newUser = document.querySelector('#newUser');
    newUserBtn.addEventListener('click', saveNewUser);

    function saveNewUser(event){
        event.preventDefault()
            localStorage.setItem("User Name", newUser.value);
    }
});