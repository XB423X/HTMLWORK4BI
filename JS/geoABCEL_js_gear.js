// Intermediar as pesquisas/objetos com a página HTML

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

const B2 = document.getElementById("B-part-1")
const P2_id = document.getElementById("part-1")
B2.addEventListener("click", function() {
    P2_id.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
})

const B3 = document.getElementById("B-part-1")
const P3_id = document.getElementById("part-1")
B3.addEventListener("click", function() {
    P3_id.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
})

const B4 = document.getElementById("B-part-1")
const P4_id = document.getElementById("part-1")
B4.addEventListener("click", function() {
    P4_id.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
})

// Textos/Pesquisa

const T01_ITD = document.getElementById("I0-T-itd")
const t01 = itd.titulo

T01_ITD.textContent = t01



const Tx01_ITD = document.getElementById("I0-t-itd")
const tx01 = itd.itexto

Tx01_ITD.textContent = tx01  