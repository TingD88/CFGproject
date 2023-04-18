
const tunapastaDish = document.getElementById('tunapasta');
const bologneseDish = document.getElementById('bolognese');
const chickencurryDish = document.getElementById('chickencurry');
const beansontoastDish = document.getElementById('beansontoast');
const dumplingDish = document.getElementById('dumpling');
const fishfingersDish = document.getElementById('fishfingers');
const deselectBtn = document.getElementById('deselect');
const dishContainer = document.querySelector('.dish__container');
const scheduleContainer = document.querySelector('.schedule__container');
const resetBtn = document.querySelector('.deleteBtn');
const popUp = document.querySelector('.pop-up__container');
const noBtn = document.getElementById('btn__no');
const yesBtn = document.getElementById('btn__yes');



let selectedColor, active;

//Event Listeners
dishContainer.addEventListener('click', selectDish);
scheduleContainer.addEventListener('click', setColors);
deselectBtn.addEventListener('click', resetDishs);
resetBtn.addEventListener('click',openPopup);
noBtn.addEventListener('click', closePopup);
yesBtn.addEventListener('click', deleteDishs);

// Dishs click  (3)
function selectDish (e){
    resetDishs()

    taskColor = e.target.style.backgroundColor;

    switch(e.target.id){
        case 'tunapasta':
            activeDish(tunapastaDish, taskColor);
            icon = '<i class="fas fa-couch"></i>';
            break
        case 'bolognese':
            activeDish(bologneseDish, taskColor);
            icon = '<i class="fa-solid fa-spaghetti-monster-flying"></i>';
           break
        case 'chickencurry':
            activeDish(chickencurryDish, taskColor);
            icon = '<i class="fa-regular fa-pan-food"></i>';
            break
        case 'beansontoast':
            activeDish(beansontoastDish, taskColor);
            icon = '<i class="fa-solid fa-bread-slice-butter"></i>';
            break
        case 'dumpling':
            activeDish(dumplingDish, taskColor);
            icon = '<i class="fa-sharp fa-regular fa-taco"></i>';
            break
        case 'fishfingers':
            activeDish(fishfingersDish, taskColor);
            icon = '<i class="fa-regular fa-french-fries"></i>';
            break
    }

};

// Set colors for schedule (4)
function setColors (e){
    if(e.target.classList.contains('dish') && active === true){
        e.target.style.backgroundColor = selectedColor;
        e.target.innerHTML = icon;
    }else if(e.target.classList.contains('fas') && active === true){
        e.target.parentElement.style.backgroundColor = selectedColor;
        e.target.parentElement.innerHTML = icon;
    }
};

// Active dish (1)
function activeDish(dish, color){
    dish.classList.toggle('selected');

    if(dish.classList.contains('selected')){
        active = true;
        selectedColor = color;
        return selectedColor;
    } else {
        active = false;
    }
}

// Reset tasks (2)
function resetDishs(){
    const allDishs = document.querySelectorAll('.dish__name');

    allDishs.forEach((item)=>{
        item.className = 'dish__name';
    })
}

// Delete tasks
function deleteDishs(){
    const dish = document.querySelectorAll('.dish');

    dish.forEach((item)=>{
        item.innerHTML = '';
        item.style.backgroundColor = 'white';
    })

    closePopup();
}

// Open Pop-up
function openPopup(){
    popUp.style.display = 'flex';
}

// Close Pop-up
function closePopup(){
    popUp.style.display = 'none';
}