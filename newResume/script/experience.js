
const exp = document.querySelector("#experience")


exp.addEventListener("click", ()=> {
    return(

        document.querySelector("#content").innerHTML=`
        <div id="container">
            <div>
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="containerMain">
                <h2>EXPERIENCIA</h2>
                <hr/>
                <h3>ARIM COMPONENTES</h3>
                <h3 class="h3">APRENDIZ ADMINISTRATIVO</h3>
                <p>
                    Funções exercidas: Movimentação de dados; Elaboração e atualização de planilhas
                    e gráficos; Participação em reuniões estratégicas com avaliação de desempenho
                    de produção Dário, Mensal e Anual. 
                </p>
                <p>
                    12/2017 - 11/2018
                </p>
            </div>
        </div>
                
        `
    )
});