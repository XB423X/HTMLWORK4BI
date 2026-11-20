// Intermediar as pesquisas/objetos com a página HTML


// Funções

function textFcontent(id, texto = "content") {
    const evento = document.getElementById(id);

    if (!evento) {
        console.warn(`No content: ${id}`);
        return;
    }

    evento.textContent = texto;
}

const bttC = function(id, dest_id) {
        const ID = document.getElementById(id);
        const DestID = document.getElementById(dest_id);
        ID.addEventListener("click", function() {
        DestID.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        })
    })
}


const Gear = (funcP) => {
    const verifB = funcP.some(obj => "P_id" in obj) 
    funcP.forEach(izinho => {
        
        textFcontent(izinho.B_id, izinho.txt)
        if (verifB == true)
        {
            bttC(izinho.B_id, izinho.P_id)
        }
    })
}

Gear(TBi); // toolbar
Gear(itd); // introdução
Gear(mpB); // mapa do brasil card
Gear(CFM); // Historia da mineração