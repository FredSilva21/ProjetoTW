const form = document.getElementById('form1')
const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const cpassword = document.getElementById('cpassword')
const labels=document.querySelectorAll(".field label")
let users=["admin;admin;admin"]
form.addEventListener('submit', function(event){
    if (checkInputs()==true){
        users.push(name.value+";"+email.value+";"+password.value)
        alert("Registado com sucesso!")
        window.location.href="./entrar.html"
    }
    event.preventDefault()
})

function checkInputs() {

    const nameValue = name.value
    const emailValue = email.value
    const passwordValue = password.value
    const cpasswordValue = cpassword.value
    let btn=document.querySelector("input[type=submit]")

    //Verificar se o nome esta na lista
    for(i=0;i<users.length;i++){
        campos=users[i].split(";")
       
        if(nameValue==campos[0]){
            name.style.border="1px solid red"
            labels[0].style.color="red"
            btn.value="Nome já existe!"
            setTimeout(function(){
                btn.value="Registar"
                name.style.border="1px solid lightgrey"
                labels[0].style.color="", 3000
                return false
            })
        }else if(emailValue==campos[1]){
            email.style.border="1px solid red"
            labels[1].style.color="red"
            btn.value="Email já existe!"
            setTimeout(function(){
                btn.value="Registar"
                email.style.border="1px solid lightgrey"
                labels[1].style.color="black"
            }, 3000
            )
            return false
        }
        i++
    }
    if(passwordValue !== cpasswordValue) {
        password.style.border="1px solid red"
        cpassword.style.border="1px solid red"
        btn.value="As passwords não coincidem!"
        setTimeout(function(){
            btn.value="Registar"
            password.style.border="1px solid lightgrey"
            cpassword.style.border="1px solid lightgrey"}, 3000
        )
        return false
    }

    return true

}

