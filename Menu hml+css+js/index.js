let body =document.querySelector('body')
let dark =document.querySelector('#Dark')

dark.onclick = function(){
    if(dark.checked == true){
        body.classList.add('darkMode')
    } else{
        body.classList.remove('darkMode')
    }
}