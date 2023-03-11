const form = document.querySelector('.form'),
input = document.querySelectorAll('.input'),
result = document.querySelector('.result')
btn= document.querySelector('.btn');
form.addEventListener("submit",(e) => {
    e.preventDefault();
    const newList= document.createElement('div')
    newList.classList.add('Allresults')
    nameSpan = document.createElement('div')
    nameSpan.classList.add('styleOutput')
    newList.appendChild(nameSpan)
    nameSpan.textContent = `${input[0].value}`
    relSpan = document.createElement('div')
    relSpan.classList.add('styleOutput')
    newList.appendChild(relSpan)
    relSpan.textContent = `${input[1].value}`
    telSpan = document.createElement('div')
    telSpan.classList.add('styleOutput')
    newList.appendChild(telSpan)
    telSpan.textContent = `${input[2].value}`
    if(!input[0].value){
        console.log('ok');
        input[0].classList.add("danger")
        alert('Name isnt entered')
    }
    else {
        input[0].classList.add("green")
    }
    if(!input[1].value){
        console.log('ok');
        input[1].classList.add("danger")
        alert('Relationship status isnt entered')
    }
    else {
        input[1].classList.add("green")
    }
    if(!input[2].value){
        console.log('ok');
        input[2].classList.add("danger")
        alert('Phone number isnt entered')
    }
    else {
        input[2].classList.add("green")
    }
    
    const deleteButton = document.createElement("button");
    newList.appendChild(deleteButton);
    deleteButton.classList.add('deletebutton')
    result.appendChild(newList);
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      result.removeChild(newList);
    });
    form.reset();
})
