let ciencia2 = {
    imagem: "img/ciencia/ciencia2.jpg",
    titulo: "ChatGPT. O prodígio da Inteligência Artificial",
    texto: "O lançamento da versão beta do ChatGPT, um modelo de Inteligência Artificial criado pela empresa norte-americana OpenAI, criou uma das maiores ondas de entusiasmo dos últimos tempos quanto às potencialidades da tecnologia. Baseado no modelo GPT-3.5 (Generative Pre-trained Transformer versão 3.5), o ChatGPT funciona como um bot de conversação ao qual é possível fazer perguntas e obter respostas em poucos segundos. Depois de criar uma conta, o interface é simples: há uma caixa para fazer perguntas e a resposta surge como se houvesse alguém a escrevê-la em tempo real do outro lado. É possível ter conversas em português de Portugal porque o protótipo é multilingue e adapta-se ao utilizador. Ou seja: se alguém começar uma conversa em inglês e depois mudar para português, o ChatGPT ajusta-se e começa a responder em português. Essa é uma das suas características mais notáveis, disse ao DN Paulo Novais, professor do Departamento de Informática e investigador no centro ALGORITMI, na Escola de Engenharia da Universidade do Minho.",
};

/*Ao clicar numa imagem da página individual, o utilizador é redirecionado para a página individual e altera os dados da página individual para os dados da imagem clicada*/
function redirecionar() {
    window.location.href = "../paginas/individual.html";
    individual1();
    console.log("redirecionar");
}
function individual1() {
    document.getElementsByClassName("individual_imagem").src = ciencia2.imagem;
    document.getElementById("titulo_individual").innerHTML = ciencia2.titulo;
    document.getElementById("texto_individual").innerHTML = ciencia2.texto;
}

