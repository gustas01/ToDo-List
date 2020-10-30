let estaPreenchido = (acumulador, atual) => !!acumulador && !!atual

const inputs = Array.from(document.getElementsByTagName("input"))
const botaoSalvarTarefa = document.getElementsByClassName("adicionar")[0]



// inputs.forEach(e => {
//         e.addEventListener("onchange", () => {
//         if (inputs.map(a => a.value).reduce(estaPreenchido))
//             botaoSalvarTarefa.disabled = false
//         else
//             botaoSalvarTarefa.disabled = true
//     })
// })


inputs.forEach(e => {
        e.onchange = () => {
        if (inputs.map(a => a.value).reduce(estaPreenchido))
            botaoSalvarTarefa.disabled = false
        else
            botaoSalvarTarefa.disabled = true
    }
})

// let percentual

function adicionarTarefa() {
    // let percentual = document.getElementById("barraDeProgresso").value
    // setInterval(() => {
    //     if (percentual < 100){
    //         percentual++
    //         document.getElementById("barraDeProgresso").value = percentual
            
    //     }
    //     clearInterval()
    // }, 10)

   //execucao tá parando aqui, não sei pq, só termina de executar quando clico de novo em adicionar tarefa
   //percentual tá chengando igual à 0 aqui na primeira vez que executa, e não sei pq

    // console.log("saindo do setInterval " + percentual)
    // if (percentual == 100){
        // console.log("no if " + percentual)
        let tabela = document.getElementById("tabelaDeTarefas")
        
        let linha = tabela.insertRow(1)

        let tarefa = linha.insertCell(0)
        let dia = linha.insertCell(1)
        let hora = linha.insertCell(2)
        // let botaoConcluiTarefa = linha.insertCell(3)
        
        tarefa.innerHTML = inputs[0].value
        dia.innerHTML = inputs[1].value
        hora.innerHTML = inputs[2].value
        // botaoConcluiTarefa.innerHTML = "OK?"

        // let botaoConcluiTarefa = document.createElement("button")
        // botaoConcluiTarefa.innerHTML = "OK?"
        // document.getElementById("tabelaDeTarefas").appendChild(botaoConcluiTarefa)
        
        // percentual = 0
    // }
}