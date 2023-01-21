const form2 = document.getElementById('form2')
const name = document.getElementById('name')
const password = document.getElementById('password')
const labels=document.querySelectorAll(".field label")
let btn = document.querySelector("input[type=submit]")
let users=["admin;admin;admin", "user;user;user"]

function checkInputs(){
    let nameValue = name.value
    let passwordValue = password.value
    
    for(i=0;i<users.length;i++){
        campos=users[i].split(";")
        if (campos[0].includes(nameValue)){
            if(campos[1].includes(passwordValue)){
                return true
            }
        }
    }
    btn.value="Nome ou password incorretos!"
    name.style.borderColor="red"
    password.style.borderColor="red"
    labels[0].style.color="red"
    labels[1].style.color="red"
    setTimeout(function(){
        btn.value="Entrar"
        name.style.borderColor="#999999"
        password.style.borderColor="#999999"
        labels[0].style.color="#999999"
        labels[1].style.color="#999999"
    }, 3000)
    return false
}


form2.addEventListener('submit', function(event){
    if (checkInputs()==true){
        btn.value="Entrada com sucesso"
        users.push(`${name.value};${email.value};${password.value}`)
        setTimeout(function(){
            window.location.href="../index.html"
        }, 2000)   
        
    }
    event.preventDefault()
})
   