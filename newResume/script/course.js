
const cour = document.querySelector("#course")


cour.addEventListener("click", ()=> {
    return(

        document.querySelector("#content").innerHTML=`
        <div className="sectionComp">
            <h2>COMPLEMENTOS</h2>
            <h3>INGLÊS</h3>
            <h3>OPEN ENGLISH</h3>
            <p>Plataforma com atividades, videos interativos e 
            aulas de conversação com professores americanos</p>
        </div>
                
        `
    )
});