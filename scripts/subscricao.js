//Buscar dados da subscrição
let form=document.getElementById("formSub");
let pNome=document.getElementById("pNome");
let uNome=document.getElementById("uNome");
let nCartao=document.getElementById("nCartao");
let mExpiracao=document.getElementById("optionMes");
let aExpiracao=document.getElementById("optionAno");
let labels=document.querySelectorAll(".field label");
let subscritos=["teste;teste;123;01;2023"];

//Adicionar evento ao botão de subscricao
form.addEventListener("submit",function(event){
    //Verificar se os inputs estão corretos
    if (checkInputs()==true){
        subscritos.push(`${pNomeValue};${uNomeValue};${nCartaoValue};${mExpiracaoValue};${aExpiracaoValue}`)//Adicionar subscrito à lista
        console.log(subscritos)
        window.location.href="../index.html"
        
    }
    
    event.preventDefault();
    
});

//Função para verificar se os inputs estão corretos
function checkInputs() {
    //Buscar valores dos inputs
    const pNomeValue = pNome.value
    const uNomeValue = uNome.value
    const nCartaoValue = parseInt(nCartao.value)
    const mExpiracaoValue = mExpiracao.value
    const aExpiracaoValue = aExpiracao.value
    let btn=document.querySelector("input[type=submit]")

    //Verificar se o nome esta na lista
    for(i=0;i<subscritos.length;i++){
        campos=subscritos[i].split(";")
       
        if (campos[0].includes(pNomeValue)){
            if(campos[1].includes(uNomeValue)){
                btn.value="Já existe um subscritor com esse nome!"
                pNome.style.borderColor="red"
                uNome.style.borderColor="red"
                labels[0].style.color="red"
                labels[1].style.color="red"
                setTimeout(function(){
                    btn.value="Subscrever (9,99€)"
                    pNome.style.borderColor="lightgray"
                    uNome.style.borderColor="lightgray"
                    labels[0].style.color="lightgray"
                    labels[1].style.color="lightgray"
                }, 3000)
                return false
            }
        }else if(campos[2].includes(nCartaoValue)){
            if(campos[3].includes(mExpiracaoValue)){
                if(campos[4].includes(aExpiracaoValue)){
                    btn.value="Já existe um subscritor com esse cartão!"
                    nCartao.style.borderColor="red"
                    labels[2].style.color="red"
                    setTimeout(function(){
                        btn.value="Subscrever (9,99€)"
                        nCartao.style.borderColor="lightgray"
                        labels[2].style.color="lightgray"
                    }, 3000)
                    return false
                }
            }
        }
        return true
    }
}