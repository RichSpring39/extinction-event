//1. querySelectorAll1
//#ordered-dinos - parent id

let dinoList1 = document.querySelectorAll('#ordered-dinos li');
function olStrike(){
    for(let i = 0; i < dinoList1.length; i++){
        dinoList1[i].addEventListener('click', function(){
            console.log(dinoList1[i].innerText);
            dinoList1[i].style.textDecoration = "line-through";
        })
    }
}
olStrike();


//2.unordered-dinos - parent div
let dinoList2 = document.querySelector('#unordered-dinos')
    function dinolist2DS(){
        dinoList2.addEventListener('click', function(event){
            let listItem = event.target;
            console.log(listItem.innerText);
            listItem.style.opacity = '0';
        })
}
dinolist2DS();

//3.row 
let dinoimg = document.querySelector('#row')
    function dinopicDS(){
        dinoimg.addEventListener('click', function(event){
            let listItem = event.target;
            console.log(listItem.innerText);
            listItem.style.width = '0';
    })
}
dinopicDS();

//4.destroy-all
let destroy = document.querySelector('#destroy-all')
let ardinoList2 = document.querySelectorAll('#unordered-dinos')
let ardinoimg = document.querySelectorAll('#row')

destroy.addEventListener('click', function(){
    meteorStrike(dinoList1,ardinoList2,ardinoimg)
});

function meteorStrike(dinoList1,ardinoList2,ardinoimg){
    for(let i = 0; i < dinoList1.length; i++){
        dinoList1[i].style.textDecoration = 'line-through solid black';
    }
    for(let i = 0; i < ardinoList2.length; i++){
        ardinoList2[i].style.opacity = '0';
    }
    for(let i = 0; i < ardinoimg.length; i++){
        ardinoimg[i].style.opacity = '0';
    }
}



