let users=["admin;admin;admin", "user;user;user"]
const form2 = document.getElementById('form2')
const name = document.getElementById('name')
const password = document.getElementById('password')
form2.addEventListener('submit', function(event){
    if (checkInputs2()==true){
        alert("Login com sucesso!")
        window.location.href="../index.html"
    }
    event.preventDefault()
})

function checkInputs2(){
    let nameValue = name.value
    let passwordValue = password.value
    let btn2 = document.querySelector("input[type=submit]")
    for(i=0;i<users.length;i++){
        campos=users[i].split(";")
        if (campos[0].includes(nameValue)){
            if(campos[1].includes(passwordValue)){
                return true
            }
        }
    }
    btn2.value="Nome ou password incorretos!"
    name.style.borderColor="red"
    password.style.borderColor="red"
    setTimeout(function(){
        btn2.value="Entrar"
        name.style.borderColor="lightgray"
        password.style.borderColor="lightgray"
    }, 3000)
    return false
}
   