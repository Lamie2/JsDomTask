
// tag ile edende fontsize da error verir

// let btnP= document.getElementById('fontBtnP')

// btnP.onclick = function(){
//     let dynText = document.getElementsByTagName('h1');
//     dynText.style.fontSize = "30px";

// }

// let btnM= document.getElementById('fontBtnM')

// btnM.onclick = function(){
//     let dynText = document.getElementsByTagName('h1');
//     dynText.style.fontSize = "5px"; }
 





// ona gore xususi bir elemente id verib etdim>>>

let btnP= document.getElementById('fontBtnP')

btnP.onclick = function(){
    let dynText = document.getElementById('dynamic-text');
    dynText.style.fontSize = "100px";

}

let btnM= document.getElementById('fontBtnM')

btnM.onclick = function(){
    let dynText = document.getElementById('dynamic-text');
    dynText.style.fontSize = "40px";
}