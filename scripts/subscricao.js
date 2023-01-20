//Buscar dados da subscrição
let form=document.getElementById("formSub");
let pNome=document.getElementById("pNome");
let uNome=document.getElementById("uNome");
let nCartao=document.getElementById("nCartao");
let mExpiracao=document.getElementById("optionMes");
let aExpiracao=document.getElementById("optionAno");
let labels=document.querySelectorAll(".field label");
let btn=document.querySelector("input[type=submit]")
let subscritos=["teste;teste;123;01;2023"];

//Adicionar evento ao botão de subscricao
form.addEventListener("submit",function(event){
    //Verificar se os inputs estão corretos
    if (checkInputs()==true){
        subscritos.push(`${pNome};${uNome};${nCartao};${mExpiracao};${aExpiracao}`)//Adicionar subscrito à lista
        btn.value="Subscrito com sucesso!"
        setTimeout(function(){
            window.location.href="../index.html"
        }, 2000)
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
                    pNome.style.borderColor="#999999"
                    uNome.style.borderColor="#999999"
                    labels[0].style.color="#999999"
                    labels[1].style.color="#999999"
                }, 3000)
                return false
            }
                }else if(campos[2].includes(nCartaoValue) && campos[3].includes(mExpiracaoValue) && campos[4].includes(aExpiracaoValue)){
                    btn.value="Já existe um subscritor com esse cartão!"
                    nCartao.style.borderColor="red"
                    labels[2].style.color="red"
                    setTimeout(function(){
                        btn.value="Subscrever (9,99€)"
                        nCartao.style.borderColor="#999999"
                        labels[2].style.color="#999999"
                    }, 3000)
                    return false
                }
            }
        return true
        }
