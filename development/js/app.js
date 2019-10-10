document.addEventListener('DOMContentLoaded', function () {
    var newUserBtn = document.querySelector('#newUserBtn');
    var newUser = document.querySelector('#newUser');
    newUserBtn.addEventListener('click', saveNewUser);

    function saveNewUser(event){
        event.preventDefault()
            localStorage.setItem("User Name", newUser.value);
            window.location.reload(false);
    }

    var name = document.querySelector(".name");
    if (localStorage.getItem("User Name") == null){
        name.innerHTML
    }else{
        name.innerHTML = localStorage.getItem("User Name");
        name.style.textTransform = "capitalize";
    }  
});

