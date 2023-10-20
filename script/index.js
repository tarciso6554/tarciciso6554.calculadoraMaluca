
var  nnj = document.getElementById('jjj')

function mause(){
    
    nnj.classList.add("my_class")

}
function retira(){
    nnj.classList.remove("my_class")
} 

function go(){
   
    var numero1 = Number(document.getElementById('hhh').value);
    var numero2 = Number(document.getElementById("my_js").value);
    var numero = Number(numero1+numero2)
    var NAN = document.getElementById('rrr')
    var NAN1 = document.getElementById('mutipliticao')
    var NAN2 = document.getElementById('porc')
    var NAN3 = document.getElementById('rrr')
   if (isNaN(numero1) &&(isNaN(numero2))){
    
    console.log= "deu erado"
    
    NAN.textContent = "not a number"
    
   }else{
    console.log("deu certo")
    const porce = numero1/100
    const porc = porce*numero2

    NAN2.textContent  =numero1+"%"+"de"+numero2+ "="+porc
    
    NAN.textContent =numero1+"+"+numero2+"="+numero
}}