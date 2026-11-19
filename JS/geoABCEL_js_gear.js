// Intermediar as pesquisas/objetos com a página HTML


// ToolBar
const BI = document.getElementById("B-part-I")
const PI_id = document.getElementById("part-I")
BI.addEventListener("click", function() {
    PI_id.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
})

const B1 = document.getElementById("B-part-1")
const P1_id = document.getElementById("part-1")
B1.addEventListener("click", function() {
    P1_id.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
})

const B2 = document.getElementById("B-part-2")
const P2_id = document.getElementById("part-2")
B2.addEventListener("click", function() {
    P2_id.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
})

const B3 = document.getElementById("B-part-3")
const P3_id = document.getElementById("part-3")
B3.addEventListener("click", function() {
    P3_id.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
})

const B4 = document.getElementById("B-part-4")
const P4_id = document.getElementById("part-4")
B4.addEventListener("click", function() {
    P4_id.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
})

// Textos/Pesquisa

// Introdução
const T01_ITD = document.getElementById("I0-T-itd")
const t01_ITD = itd.titulo

T01_ITD.textContent = t01_ITD



const Tx01_ITD = document.getElementById("I0-t-itd")
const tx01_ITD = itd.itexto

Tx01_ITD.textContent = tx01_ITD  

// Mapa do Brasil
const T01_mpB = document.getElementById("M0-T-mpB")
const t01_mpB = mpB.titulo
T01_mpB.textContent = t01_mpB

const Tx01_mpB = document.getElementById("M0-t-mpB")
const tx01_mpB = mpB.mtexto
Tx01_mpB.textContent = tx01_mpB