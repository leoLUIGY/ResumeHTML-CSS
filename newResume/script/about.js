
const info = document.querySelector("#aboutMe")
const nave = document.querySelector(".menuSelect")


nave.addEventListener("click", () => {
    if(document.querySelector(".Navegation").style.display == 'flex'){
        document.querySelector(".Navegation").style.display = 'none';
    } else{
        document.querySelector(".Navegation").style.display = 'flex';
    }
})
info.addEventListener("click", ()=> {
    return(

        document.querySelector("#content").innerHTML=`
            <section id="header">
                <img src="https://avatars.githubusercontent.com/u/52331780?s=400&u=ea29871dadd2425c377e38466901507ab84a5dbf&v=4"/>
                <h1>LEÔNIDAS LUIGY LIMA DE FREITAS</h1>
                <h2>FRONT-END & DESENVOLVIMENTO DE JOGOS</h2>
            </section>
            <section id="headerMain">
                <div class="sectionInfo">
                    <h2>DADOS PESSOAIS</h2>
                    <h3>ENDEREÇO:</h3>
                    <p>Rua Guarani, 167, Jardim Aldeia do sol, Cajamar - SP</p>
                </div>
                <div class="sectionCont">
                    <h2>CONTATOS</h2>
                    <h3>luigyleonidas@gmail.com</h3>
                    <h3>55 11952196603</h3>
                    <a href="https://www.linkedin.com/in/le%C3%B4nidas-luigy-lima-freitas/">https://www.linkedin.com/in/leônidas-luigy-lima-freitas/ </a>
                    <a href="https://github.com/leoLUIGY">https://github.com/leoLUIGY</a>
                </div>
            </section>
                
        `
    )
});