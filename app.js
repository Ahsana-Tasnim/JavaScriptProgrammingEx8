/**
 * Ahsana Tasnim
 * JavaScriptProgramming Exercise 8
 * Control and Events
 */

/**
 * Button click event handler
 */
function clickHandler() {
    const inputElement = document.getElementById('firstNameInput');
    const target = document.getElementById('target-p');
    target.innerHTML = inputElement.value;
}

const button = document.getElementById('btnClickMe');
button.addEventListener('click',clickHandler);
/**
 * Working with Select and Checkbox
 */
const chkMyCheckBox = document.getElementById('chkMyCheckBox');
chkMyCheckBox.addEventListener('change', showCheckBoxState);

function showCheckBoxState(event){
    console.log(event);
    const target = document.getElementById('checkboxState');
    target.innerHTML = event.target.checked;
}

const vehicleMakes = document.getElementById('vehicleMakes');
// let selectedVehicleIndex = vehicleMakes.selectedIndex;
// let vehicleId =  vehicleMakes.options[selectedVehicleIndex].value;
// let vehicleName = vehicleMakes.options[selectedVehicleIndex].text;

// let targetElm = document.getElementById('selectedMake');
// targetElm.innerHTML = `You selected Make: ${vehicleName} Id: ${vehicleId} Index: ${selectedVehicleIndex}`;

vehicleMakes.addEventListener('change', vehicleMakeChange);

function vehicleMakeChange(event){
    console.log(event);
    const index = event.target.selectedIndex;
    const option = event.target.selectedOptions[0];
    const targetElm = document.getElementById('selectedMake');

    if(index > 0) {
        targetElm.innerHTML = `You selected Make: ${option.text} Id: ${option.value} Index: ${index}`;
    }else{
        targetElm.innerHTML = "";
    }
}


//Login handler
const loginButton = document.getElementById('btnLogin');
loginButton.addEventListener('click', loginHandler);

function loginHandler(){
    const user = document.getElementById("userNameInput");
    const pwd = document.getElementById("passwordInput");
    const pwdR = document.getElementById("passwordRepeatInput");
    const p = document.getElementById('login');

    if(pwd.value != pwdR.value){
        p.innerHTML = 'Password do not match';
    }else{
        p.innerHTML = `Use: ${user.value} Pwd: ${pwd.value}`; 
    }
}

const vehicleModels = document.getElementById('vehicleModels');
// let selectedVehicleModelIndex = vehicleModels.selectedIndex;
// let vehicleModelId = vehicleModels.option[selectedIndex].value;
// let vehicleModelName = vehicleModels.option[selectedIndex].text;

// let targetElm = document.getElementById('selectedModel');
// targetElm.innerHTML = `Vehicle Name: ${vehicleModelName}, Vehicle Id: ${vehicleModelId}, Vehicle Index: ${selectedVehicleModelIndex}`;

vehicleModels.addEventListener('change', vehicleModelHandler);

function vehicleModelHandler(event){
      console.log(event);
      const index = event.target.selectedIndex;
      const option = event.target.selectedOptions[0];
      const targetElm = getElementById('selectedModel');

      if(index > 0){
          targetElm.innerHTML = `Your selected model Name: ${option.text}, Id: ${option.value}, Index: ${index}`;
      }
      else{
          targetElm.innerHTML = "";
      }
} 