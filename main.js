const mainSelect = document.getElementById('main-select');
const saveBtn = document.getElementById('save-btn');
const mainInput = document.getElementById('main-input');

saveBtn.addEventListener('click',function(event) {
 
 event.preventDefault();

 const selectedIndex = mainSelect.options.selectedIndex;
 const val = mainInput.value;

 if (!val) {

  mainInput.style.borderColor = 'red';
     
 } else {

  mainSelect.options[selectedIndex].textContent = val;
  mainInput.style.borderColor = 'lightskyblue';
    
 }
});

mainSelect.addEventListener('change',function(evt) {
   
    const selectedIndex = mainSelect.options.selectedIndex;
    mainInput.style.borderColor = 'lightskyblue';
    mainInput.value = mainSelect.options[selectedIndex].textContent;
   
});