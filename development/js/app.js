document.addEventListener('DOMContentLoaded', function () {

    var addRecipe = document.querySelector('.addRecipe');
    var addPlan = document.querySelector('.addPlan');
    var addRecipeSide = document.querySelector('.addRecipeSide');
    var addPlanSide = document.querySelector('.addPlanSide');
    var anotherTime = document.querySelector('.anotherTime');
    var recipes = document.querySelector('.recipes');
    var plans = document.querySelector('.plans');
    var pulpit = document.querySelector('.pulpit');
    var pulpitI = pulpit.querySelector('i');
    var przepisy = document.querySelector('.przepisy');
    var przepisyI = przepisy.querySelector('i');
    var plany = document.querySelector('.plany');
    var planyI = plany.querySelector('i');
    var newUserBtn = document.querySelector('#newUserBtn');
    var newUser = document.querySelector('#newUser');
    var content = document.querySelector('.content');
    var screen = document.querySelector('.screen');
    var name = document.querySelector(".name");

    // pobranie i zmiana imienia

    newUserBtn.addEventListener('click', saveNewUser);

    function saveNewUser(event){
        event.preventDefault()
        localStorage.setItem("UserName", newUser.value);
        content.style.display = "none";
        screen.style.display = "block";
        if (localStorage.getItem("UserName") == null){
            name.innerHTML
        }else{
            name.innerHTML = localStorage.getItem("UserName");
            name.style.textTransform = "capitalize";
        }
    }
    if(localStorage.getItem("UserName")!= null){
        content.style.display = "none";
        screen.style.display = "block";
        name.innerHTML = localStorage.getItem("UserName");
            name.style.textTransform = "capitalize";
    }


    // menu

    przepisyI.style.display = 'none';
    planyI.style.display = 'none';

    pulpit.addEventListener('click', function (event) {
        anotherTime.style.display = 'block';
        recipes.style.display = 'none';
        plans.style.display = 'none';
        if (!pulpit.classList.contains('highlight')) {
            pulpit.classList.add('highlight');
            pulpitI.style.display = 'block';
            przepisy.classList.remove('highlight');
            przepisyI.style.display = 'none';
            plany.classList.remove('highlight');
            planyI.style.display = 'none';
        }
    });

    przepisy.addEventListener('click', function (event) {
        recipes.style.display = 'block';
        anotherTime.style.display = 'none';
        plans.style.display = 'none';
        if (!przepisy.classList.contains('highlight')) {
            przepisy.classList.add('highlight');
            przepisyI.style.display = 'block';
            pulpit.classList.remove('highlight');
            pulpitI.style.display = 'none';
            plany.classList.remove('highlight');
            planyI.style.display = 'none';
        }
    });

    plany.addEventListener('click', function (event) {
        plans.style.display = 'block';
        anotherTime.style.display = 'none';
        recipes.style.display = 'none';
        if (!plany.classList.contains('highlight')) {
            plany.classList.add('highlight');
            planyI.style.display = 'block';
            pulpit.classList.remove('highlight');
            pulpitI.style.display = 'none';
            przepisy.classList.remove('highlight');
            przepisyI.style.display = 'none';
        }
    })
})
