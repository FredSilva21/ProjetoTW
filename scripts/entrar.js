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

function checkInputs2() {
    const nameValue =name.value
    const passwordValue = password.value
    let btn=document.querySelector("input[type=submit]")
    
    //Verificar se o nome esta na lista
    for(i=0;i<users.length;i++){
         campos=users[i].split(";")
        
        if(nameValue==campos[0] && passwordValue==campos[2]){
            return true
        }
        i++
    }
        btn.value="Email ou password errados!"
        setTimeout(function(){
            btn.value="Entrar"
        }, 3000
        )
        return false
    }