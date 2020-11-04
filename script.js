let estaPreenchido = (acumulador, atual) => !!acumulador && !!atual

const inputs = Array.from(document.getElementsByTagName("input"))
const botaoSalvarTarefa = document.getElementsByClassName("adicionar")[0]



inputs.forEach(e => {
        e.addEventListener("change", () => {
        if (inputs.map(a => a.value).reduce(estaPreenchido))
            botaoSalvarTarefa.disabled = false
        else
            botaoSalvarTarefa.disabled = true
    })
})


// inputs.forEach(e => {
//         e.onchange = () => {
//         if (inputs.map(a => a.value).reduce(estaPreenchido))
//             botaoSalvarTarefa.disabled = false
//         else
//             botaoSalvarTarefa.disabled = true
//     }
// })

let percentual = document.getElementById("barraDeProgresso").value

function adicionarTarefa() {
    document.getElementById('barraDeProgresso').classList.toggle('sumirBarraDeProgresso')    
    const id = setInterval(() => {
       
            percentual++
            document.getElementById("barraDeProgresso").value = percentual
            
        console.log(percentual)

        if (percentual == 100){
            document.getElementById('barraDeProgresso').classList.toggle('sumirBarraDeProgresso')    
            let tabela = document.getElementById("tabelaDeTarefas")
            
            let linha = tabela.insertRow(1)

            let tarefa = linha.insertCell(0)
            let dia = linha.insertCell(1)
            let hora = linha.insertCell(2)
            
            
            tarefa.innerHTML = inputs[0].value
            dia.innerHTML = inputs[1].value
            hora.innerHTML = inputs[2].value
            
            
            percentual = 0
            clearInterval(id)
        }
    }, 10)

}