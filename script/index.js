function calcula(){
    let get_value_inpunt = parseInt(document.getElementById('hhh').value)
    let get_valu_inpunt_2 =parseInt(document.getElementById("my_js").value)
    let mutlica = get_value_inpunt+get_valu_inpunt_2
    
    let mutlipicacacao =document.getElementById("mutipliticao")
    let poteciacao = document.getElementById("rrr")
    let replosive_for_poteciacao = get_value_inpunt**get_valu_inpunt_2
    let divisao = document.getElementById('divi')
    let divisa = get_value_inpunt/get_valu_inpunt_2

    
    let porcetagem = document.getElementById("porc")
    let porc = get_value_inpunt/get_valu_inpunt_2
    let mutlica_relsut_porc = porc*get_valu_inpunt_2
    mutlipicacacao.textContent= `${get_value_inpunt}+ ${get_valu_inpunt_2}  = ${mutlica}`
    poteciacao.textContent =replosive_for_poteciacao    
    divisao.textContent = divisa
    porcetagem.textContent =mutlica_relsut_porc

} 
