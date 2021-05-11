
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
            <h2>HABILIDADES</h2>
            <hr/>
            <div class="skills">
                <div>
                    <h3>UNITY-C#</h3>
                    <div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <h3>HTML</h3>
                    <div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <h3>CSS</h3>
                    <div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <h3>JAVA</h3>
                    <div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <h3>JAVASCRIPT</h3>
                    <div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <h3>REACT</h3>
                    <div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <h3>PYTHON</h3>
                    <div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                
        `
    )
});