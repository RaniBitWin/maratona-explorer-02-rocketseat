
let temas = document.querySelector(".temas")
let transition = document.querySelector(".optionsTemas")
function transitionTemas(){   

    if(transition.value == 'dark-blue'){
      temas.className = transition.value
    } else if(transition.value == 'pink'){
      temas.className = transition.value
    } else if(transition.value == 'dark-pink'){
      temas.className = transition.value
    }else{
      temas.className = "temas"
    }

}
