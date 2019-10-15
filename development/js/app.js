document.addEventListener('DOMContentLoaded', function () {

    var addRecipesBtn = document.querySelector('.addRecipe');
    var addRecipeBtn2 = document.querySelector('.addRcpBtn');
    var addRecipesPage = document.querySelector('.add');
    var addPlan = document.querySelector('.addPlan');
    var addRecipeSide = document.querySelector('.addRecipeSide');
    var addPlanSide = document.querySelector('.addPlanSide');
    var anotherTime = document.querySelector('.anotherTime');
    var recipes = document.querySelector('.recipes');
    var plans = document.querySelector('#plans');
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
        event.preventDefault();
        if(newUser.value === ""){
            newUserBtn.disabled.toggle = true;
            alert("Musisz podać imię dziku");
        }else{
            newUserBtn.disabled.toggle = false;
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

    pulpit.addEventListener('click', pulpitClick);

    przepisy.addEventListener('click', przepisyClick);

    plany.addEventListener('click', planyClick);

    function pulpitClick (event) {
        content.style.display = 'none';
        screen.style.display = 'block';
        addRecipesPage.style.display = 'none';
        addPlanSide.style.display = 'none';
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
    }

    function przepisyClick (event) {
        recipes.style.display = 'block';
        screen.style.display = 'none';
        content.style.display = 'none';
        addRecipesPage.style.display = 'none';
        addPlanSide.style.display = 'none';
        plans.style.display = 'none';
        if (!przepisy.classList.contains('highlight')) {
            przepisy.classList.add('highlight');
            przepisyI.style.display = 'block';
            pulpit.classList.remove('highlight');
            pulpitI.style.display = 'none';
            plany.classList.remove('highlight');
            planyI.style.display = 'none';
        }
    }

    function planyClick (event) {
        plans.style.display = 'block';
        recipes.style.display = 'none';
        screen.style.display = 'none';
        content.style.display = 'none';
        addRecipesPage.style.display = 'none';
        addPlanSide.style.display = 'none';
        if (!plany.classList.contains('highlight')) {
            plany.classList.add('highlight');
            planyI.style.display = 'block';
            pulpit.classList.remove('highlight');
            pulpitI.style.display = 'none';
            przepisy.classList.remove('highlight');
            przepisyI.style.display = 'none';
        }
    }

    //add recipes

    addRecipeBtn2.addEventListener('click', addRecipes);
    addRecipesBtn.addEventListener('click', addRecipes);

    function addRecipes(event){
        content.style.display = 'none';
        screen.style.display = "none";
        recipes.style.display = 'none';
        addRecipesPage.style.display = "block";
    };

    //dodawanie kroków
    var addStepBtn = document.querySelector("#step-add-btn")
    var step = document.querySelector(".instruction");
    var addIngridientBtn = document.querySelector("#ingridient-add-btn");
    var ingridient = document.querySelector('.ingridients');

    //dodawanie ikon  kosza i edycji
    function createIcon(color, name, size, padding, className, parentEl){
        var btn = document.createElement("i");
        btn.classList.add('far');
        btn.classList.add(name);
        btn.style.fontSize = size;
        btn.style.color = color;
        var bigBtn = document.createElement("a");
        bigBtn.href="#";
        bigBtn.appendChild(btn);
        parentEl.appendChild(bigBtn);
        bigBtn.style.padding = padding;
        bigBtn.classList.add(className);
    };
    //funkcja odpowiadajaca za edycje
    function editLi(event){
            if(this.previousSibling.contentEditable != "true"){
                this.previousSibling.contentEditable = "true";
            }else{
                this.previousSibling.contentEditable = "false"
            }
    };
    //funckcja odpowadająca za usuwanie
    function delLi(event){
        this.parentNode.parentNode.removeChild(this.parentNode);
    }

    function createNewIngridient(ingridient){
                    //tworzenie nowego li do list 
        var newIngridient = document.createElement("li");
        var contentLi = document.createElement('span');
        contentLi.contentEditable = "false";
        contentLi.innerText = ingridient;
        newIngridient.appendChild(contentLi);
        listOfIngridients.appendChild(newIngridient);

    //tworzenie przycisków edytowania;

        createIcon ('#FFB03B','fa-edit', '16px',"10px","edit", newIngridient);
        createIcon  ("#BD4932",'fa-trash-alt', '16px',"10px","del",newIngridient);
        var editBtn = document.querySelector('.edit');
        var delBtn = document.querySelector('.del');

        editBtn.addEventListener('click', editLi);

        delBtn.addEventListener('click', delLi)

    }

    function createNewSteps(step){
        var newStep = document.createElement("li");
        var contentLi = document.createElement('span');
        contentLi.contentEditable = "false";
        contentLi.innerText = step;
        newStep.appendChild(contentLi);
        listOfStepsRecipe.appendChild(newStep);

        createIcon ('#FFB03B','fa-edit', '16px',"10px","edit", newStep);
        createIcon("#BD4932",'fa-trash-alt', '16px',"10px","del",newStep);
        var editBtn = document.querySelector('.edit');
        var delBtn = document.querySelector('.del');

        editBtn.addEventListener('click', editLi);

        delBtn.addEventListener('click', delLi)
      
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
    var listOfStepsRecipeValid = Array.from(listOfStepsRecipe.children);
    var listOfIngridients = document.querySelector("#list-of-ingridients");
    var listOfIngridientsValid = Array.from(listOfIngridients.children);


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
        alert("Dziku twój przepis został zapisany");
}
var formRecipe = document.querySelector("#new-recipes")
    function saveRecipeLocalStorage(event){
        event.preventDefault();
        if (nameRecipe.value == "" && dirscriptionRecipe.value == "" && listOfIngridientsValid.length == [] && listOfStepsRecipe.children.length == []){
            saveAndCloseBTN.disabled.toggle = true;
            alert("Zawiodłeś mnie dziku nie wypełniłeś wszystkich pól");
        }else{
            saveAndCloseBTN.disabled.toggle = false;
            newRecipe.name = nameRecipe.value;
            newRecipe.discription = dirscriptionRecipe.value;
            saveRecipe(newRecipe);
            screen.style.display = "block";
            addRecipesPage.style.display = "none";
            formRecipe.reset();
        };
    }
    saveAndCloseBTN.addEventListener('click', saveRecipeLocalStorage);

})

