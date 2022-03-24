const goodRep = document.getElementsByClassName("goodRep");
const btn = document.querySelector("#btn");
const q = document.getElementsByClassName("q");
const result = document.getElementById("result");

btn.addEventListener('click',function(){
    let goodR = 0;
    let badR = 0;
    let allR = 0;
    for(let i = 0; i < goodRep.length; i++){
        if(goodRep[i].checked){
            console.log("test");
            q[i].style.background = "#90ee8f";
            goodR++;
        }
        else if(!goodRep[i].checked) {
            q[i].style.background = "#ffb8b8";
            badR++;
        }
    }
    allR = goodR + badR;
    result.textContent = "vous avez " + goodR + "/" + allR + " bonne réponse !"
    
});

