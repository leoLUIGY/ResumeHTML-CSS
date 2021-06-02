
const hab = document.querySelector("#hability")


hab.addEventListener("click", ()=> {
    return(

        document.querySelector("#content").innerHTML=`
        <div id="containerHab">
        <div>
            <div class="circle"></div>
            <div class="line"></div>
        </div>
        <div class="containerMain">
            <h1>HABILIDADES</h2>
            <hr/>
            <div class="skills">
                <div>
                    <h2>Cronometro</h2>
                    <h3>Descrição</h3>
                    <p>Cronometro feito para praticar e aprender programação para web</p>
                    <h3>Tecnologias Usadas</h3>
                    <p>HTML, CSS e JAVASCRIPT</p>
                    <div>
                        <a href="./CronometroProject/Cronometro.html" target="_blank">Projeto</a>
                        <a href="https://github.com/leoLUIGY/FullStack-Studies/tree/main/javascript201/projectCronometro" target="_blank">Codigo Fonte</a>
                    </div>
                </div>
                <div>
                    <h2>Calculadora</h2>
                    <h3>Descrição</h3>
                    <p>Calculadora feita para praticar e aprender programação para web</p>
                    <h3>Tecnologias Usadas</h3>
                    <p>HTML, CSS e JAVASCRIPT</p>
                    <div>
                        <a href="./CalculadoraProject/Calculator.html" target="_blank">Projeto</a>
                        <a href="https://github.com/leoLUIGY/FullStack-Studies/tree/main/javascript201/projectCalculator" target="_blank">Codigo Fonte</a>
                    </div>
                </div>
                <div>
                    <h2>Color Game</h2>
                    <h3>Descrição</h3>
                    <p>Jogo de descobrir a cor feito para praticar e aprender programação para web</p>
                    <h3>Tecnologias Usadas</h3>
                    <p>HTML, CSS e JAVASCRIPT</p>
                    <div>
                        <a href="./ColorProject/ChooseColor.html" target="_blank">Projeto</a>
                        <a href="https://github.com/leoLUIGY/FullStack-Studies/tree/main/javascript201/projectColor" target="_blank">Codigo Fonte</a>
                    </div>
                </div>
                <div>
                    <h2>Game Nave</h2>
                    <h3>Descrição</h3>
                    <p>Jogo de Nave feito para praticar e aprender programação para web</p>
                    <h3>Tecnologias Usadas</h3>
                    <p>HTML, CSS e JAVASCRIPT</p>
                    <div>
                        <a href="https://leonidasleonidas.itch.io/navgame" target="_blank">Projeto</a>
                        <a href="https://github.com/leoLUIGY/JogoNaveJs" target="_blank">Codigo Fonte</a>
                    </div>
                </div>
                <div>
                    <h2>Quantic</h2>
                    <h3>Descrição</h3>
                    <p>Game infinity runner 2D feito em um evento da faculdade com duração de 2 dias </p>
                    <h3>Tecnologias Usadas</h3>
                    <p>Unity/C#</p>
                    <div>
                        <a href="https://amvil.itch.io/quantic" target="_blank">Game</a>
                    </div>
                </div>
                <div>
                    <h2>QTR</h2>
                    <h3>Descrição</h3>
                    <p>Game Feito como forma de TCC para Fatec </p>
                    <h3>Tecnologias Usadas</h3>
                    <p>Unity/C#</p>
                    <div>
                        <a href="https://sijoga.itch.io/qtr" target="_blank">Game</a>
                    </div>
                </div>
                
            </div>
            <h1>Adicionais</h1>
            <div class="outros">
                <div>
                    <h3>Java</h3>
                    <p>Principais conceitos da linguagem</p>
                    <a href="https://github.com/leoLUIGY/EstudosJava/tree/master/javaConceitos">Codigos</a>
                
                </div>

                <div>
                    <h3>Mais estudos de Curso</h3>
                    <p>Basico de outras linguagens e tecnologias como python, Django, React, jquery</p>
                    <a href="https://github.com/leoLUIGY/FullStack-Studies">Codigos</a>
                </div>
            </div>
        </div>
    </div>
                
        `
    )
});