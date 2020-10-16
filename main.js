let mainSelect = document.getElementById("main-select");
let saveBtn = document.getElementById("save-btn");
let mainInput = document.getElementById("main-input");

saveBtn.addEventListener("click",function(event) {
 
 event.preventDefault();

 let selectedIndex = mainSelect.options.selectedIndex;
 let val = mainInput.value;

 if (val === "") {

  mainInput.style.borderColor = "red";
     
 } else {

  mainSelect.options[selectedIndex].textContent = val;
  mainInput.style.borderColor = "lightskyblue";
    
 }
});