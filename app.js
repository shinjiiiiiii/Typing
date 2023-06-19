 const mots = ['design','frontend','backend','testing'];
const h2 = document.getElementById('h2');
let supp = 0;
let add = 0;


 let oui = setInterval(() => {
     let jsp = mots[supp].split('');
     if(add <jsp.length) {
        h2.textContent += jsp[add];
         add ++;
     }else{
         h2.textContent = '';
         supp ++;
        add = 0;
     }
     if(supp === 4){
        clearInterval(oui)
    }
    
    
 },200);



