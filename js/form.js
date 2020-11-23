console.log("DOM fully loaded and parsed");
//selectors
const phone = document.querySelector('#user_phoneno'),
      pm = document.querySelector('#pm'),
      pmDiv = document.querySelector('#pm-div'),
      form = document.querySelector('#new_user'),
      allInputs = document.querySelectorAll(".input"),
      submit = document.querySelector("#submit"),
      id = document.querySelector("#id"),
      valsId = document.querySelector('#vals-id'),
      r1 = document.querySelector('#r1'),
      r2 = document.querySelector('#r2'),
      r3 = document.querySelector('#r3'),
      fNameInput = document.querySelector('#first-name-input'),
      lNameInput = document.querySelector('#last-name-input'),
      fNameDiv = document.querySelector('#first-name'),
      lNameDiv = document.querySelector('#last-name'),
      name1 = document.querySelector('#name-1'),
      name2 = document.querySelector('#name-2');

allInputs.forEach(el=>{
    el.addEventListener('focus',()=>{
      el.classList.add("input-focus")
      // el.classList.remove("input-error")
  });
  el.addEventListener('focusout',()=>{
    el.classList.remove("input-focus")
  });
});
function focusInOut(errorDiv,element){
  element.addEventListener('focus',()=>{
    errorDiv.style.display = 'inline';	
  });
  element.addEventListener('focusout',()=>{
    errorDiv.style.display = 'none';
  });
}
focusInOut(pmDiv,phone)
focusInOut(valsId,id)
focusInOut(fNameDiv,fNameInput)
focusInOut(lNameDiv,lNameInput)
  function validate(element,re,para){
    element.addEventListener('keyup',()=>{
    element.value.match(re)?para.style.display = "none" : para.style.display = "inline";
  });	
}
validate(phone,/^\d{10}$/,pm);
validate(id,/^[A-Z]/,r1);
validate(id,/[a-z|A-Z]+/,r2);
validate(id,/[0-9]+/,r3);
validate(fNameInput,/^[a-z|A-Z| ]{3,10}$/,name1);
validate(lNameInput,/^[a-z|A-Z| ]{3,10}$/,name2);
