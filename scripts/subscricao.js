let form=document.getElementById("formSub");
let pNome=document.getElementById("pNome");
let uNome=document.getElementById("uNome");
let nCartao=document.getElementById("nCartao");
let mExpiracao=document.getElementById("mExpiracao");
let aExpiracao=document.getElementById("aExpiracao");
let labels=document.querySelector("div label");
let subscritos=["teste;teste;123;01;2023"];


form.addEventListener("submit",function(event){
    if (checkInputs()==true){
        subscritos.push(`${pNomeValue};${uNomeValue};${nCartaoValue};${mExpiracaoValue};${aExpiracaoValue}`)
        console.log(subscritos)
        alert("Subscrito com sucesso!")
    }
    
    event.preventDefault();
    
});

function checkInputs() {

    const pNomeValue = pNome.value
    const uNomeValue = uNome.value
    const nCartaoValue = parseInt(nCartao.value)
    const mExpiracaoValue = mExpiracao.value
    const aExpiracaoValue = aExpiracao.value
    let btn=document.querySelector("input[type=submit]")

    //Verificar se o nome esta na lista
    for(i=0;i<subscritos.length;i++){
        campos=subscritos[i].split(";")
       
        if(pNomeValue==campos[0] && uNomeValue==campos[1]){
            pNomeValue.style.border="1px solid red"
            labels[0].style.color="red"
            uNomeValue.style.border="1px solid red"
            labels[1].style.color="red"
            btn.value="Nome já existe!"
            setTimeout(function(){
                btn.value="Subscrever"
                pNomeValue.style.border="1px solid lightgrey"
                labels[0].style.color="lightgrey"
                uNomeValue.style.border="1px solid lightgrey"
                labels[1].style.color="lightgrey"
                , 3000
                return false
            })
        }else if(nCartaoValue==campos[2] && mExpiracaoValue==campos[3] && aExpiracaoValue==campos[4]){
            nCartaoValue.style.border="1px solid red"
            mExpiracaoValue.style.border="1px solid red"
            aExpiracaoValue.style.border="1px solid red"
            labels[2].style.color="red"
            btn.value="Email já existe!"
            setTimeout(function(){
                btn.value="Subscrever"
                nCartaoValue.style.border="1px solid lightgrey"
                mExpiracaoValue.style.border="1px solid lightgrey"
                aExpiracaoValue.style.border="1px solid lightgrey"
                labels[2].style.color="lightgrey"
            }, 3000
            )
            return false
        }
        i++
    }

    return true
}