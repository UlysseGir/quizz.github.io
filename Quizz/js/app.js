const goodRep = document.getElementsByClassName("goodRep");
const btn = document.querySelector("#btn");
// const div = document.getElementsByName("div")

// div.style.backgroundColor = "#ffb8b8";

function goodResponse(){

}

btn.addEventListener('click',function(){
    for(let i = 0; i < goodRep.length; i++){
        if(goodRep[i].checked){
            console.log("test");
        }
        else {

        }
    }
} );