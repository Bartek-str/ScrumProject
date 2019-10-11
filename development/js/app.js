document.addEventListener('DOMContentLoaded', function () {

    var addRecipesBtn = document.querySelector('.addRecipe');
    var addRecipesPage = document.querySelector('.add');
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
    });

    //add recipes

    
    addRecipesBtn.addEventListener('click', addRecipes);

    function addRecipes(event){
        screen.style.display = "none";
        addRecipesPage.style.display = "block";
    };

    //dodawanie kroków
    var addStepBtn = document.querySelector("#step-add-btn")
    var step = document.querySelector(".instruction");
    var addIngridientBtn = document.querySelector("#ingridient-add-btn");
    var ingridient = document.querySelector('.ingridients');

    //tworzenie nowego li do list 

    function createNewIngridient(ingridient){
        var newIngridient = document.createElement("li");
        newIngridient.innerText=ingridient;
        listOfIngridients.appendChild(newIngridient);
    }

    function createNewSteps(step){
        var newStep = document.createElement("li");
        newStep.innerText = step;
        listOfStepsRecipe.appendChild(newStep);

    }
//funkcja dodawania nowych li po kliknieciu w przycisk
    function addNewIngridient(event){
        event.preventDefault();
        newRecipe.ingridients.push(ingridient.value);
        createNewIngridient(ingridient.value);

    }
    function addNewStep(event){
        event.preventDefault();
        newRecipe.steps.push(step.value);
        createNewSteps(step.value);
    }
  

    addIngridientBtn.addEventListener('click',addNewIngridient);
    addStepBtn.addEventListener('click', addNewStep);



    var saveAndCloseBTN = document.querySelector("#new-recipe-btn");
    var nameRecipe = document.querySelector("#name-recipe");
    var dirscriptionRecipe = document.querySelector(".discrption-recipe");
    var listOfStepsRecipe = document.querySelector('#instruction-steps')
    var listOfIngridients = document.querySelector("#list-of-ingridients");


//tworzenie obiektu zawierającego caly przepis

var newRecipe = {
    name:"",
    discription:"",
    steps: [],
    ingridients:[]
}
//zapisywanie przepisu

function saveRecipe(newObj){
    var dataFromLocalStorage = [];
    if (localStorage.getItem("newRecipe") != null) {
        dataFromLocalStorage = JSON.parse(localStorage.getItem("newRecipe"));
        dataFromLocalStorage.push(newObj);
        localStorage.setItem("newRecipe", JSON.stringify(dataFromLocalStorage));
        }else{
        dataFromLocalStorage.push(newObj);
        localStorage.setItem("newRecipe", JSON.stringify(dataFromLocalStorage));
        }
        alert("Przepis zapisany");
}

    function saveRecipeLocalStorage(event){
        event.preventDefault();
        newRecipe.name = nameRecipe.value;
        newRecipe.discription = dirscriptionRecipe.value;
        saveRecipe(newRecipe);
        screen.style.display = "block";
        addRecipesPage.style.display = "none";

    }

    saveAndCloseBTN.addEventListener('click', saveRecipeLocalStorage);




})

