const form = document.getElementById('form1')
const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const cpassword = document.getElementById('cpassword')
const labels=document.querySelectorAll(".field label")
const btn=document.querySelector(".field input[type='submit']")

let users=["admin;admin@gmail.com;admin"]
form.addEventListener('submit', function(event){
    if (checkInputs()==true){
        btn.value="Registado com sucesso"
        users.push(name.value+";"+email.value+";"+password.value)
        setTimeout(function(){
            window.location.href="./entrar.html"
        }, 2000)   
        
    }
    event.preventDefault()
})
function checkInputs() {

    const nameValue = name.value
    const emailValue = email.value
    const passwordValue = password.value
    const cpasswordValue = cpassword.value

    //Verificar se o nome esta na lista
    for(i=0;i<users.length;i++){
        campos=users[i].split(";")
       
       if(campos[0].includes(nameValue)){
              name.style.border="1px solid red"
              labels[0].style.color="red"
              btn.value="O nome já existe!"
              setTimeout(function(){
                btn.value="Registar"
                name.style.border="1px solid #999999"
                labels[0].style.color="#999999"}, 3000)
              return false
            
        }else if(campos[1].includes(emailValue)){
            email.style.border="1px solid red"
            labels[1].style.color="red"
            btn.value="O email já existe!"
            setTimeout(function(){
                btn.value="Registar"
                email.style.border="1px solid #999999"
                labels[1].style.color="#999999"}, 3000)
            return false
        }else if(passwordValue!=cpasswordValue){
            password.style.border="1px solid red"
            cpassword.style.border="1px solid red"
            labels[2].style.color="red"
            labels[3].style.color="red"
            btn.value="As passwords não coincidem!"
            setTimeout(function(){
                btn.value="Registar"
                password.style.border="1px solid #999999"
                cpassword.style.border="1px solid #999999"
                labels[2].style.color="#999999"
                labels[3].style.color="#999999"}, 3000)
            return false
        }
    }
    

    return true

}

