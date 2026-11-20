// Intermediar as pesquisas/objetos com a página HTML


// ToolBar
const BI = document.getElementById("B-part-I")
const BItxt = TBtxt.btt.itd
BI.textContent = BItxt
const PI_id = document.getElementById("part-I")
BI.addEventListener("click", function() {
    PI_id.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
})


const B1 = document.getElementById("B-part-1")
const B1txt = TBtxt.btt.oqm
B1.textContent = B1txt
const P1_id = document.getElementById("part-1")
B1.addEventListener("click", function() {
    P1_id.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
})

const B2 = document.getElementById("B-part-2")
const B2txt = TBtxt.btt.mpb
B2.textContent = B2txt
const P2_id = document.getElementById("part-2")
B2.addEventListener("click", function() {
    P2_id.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
})

const B3 = document.getElementById("B-part-3")
const B3txt = TBtxt.btt.cfm
B3.textContent = B3txt
const P3_id = document.getElementById("part-3")
B3.addEventListener("click", function() {
    P3_id.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
})

const B4 = document.getElementById("B-part-4")
const B4txt = TBtxt.btt.ref
B4.textContent = B4txt
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

const B01_mpB = document.getElementById("BttMpB")
const Bx01_mpB = mpB.mbtt
B01_mpB.textContent = Bx01_mpB

// C.F.M.

const T01_CFM = document.getElementById("C0-T-CFM")
const t01_CFM = CFM.titulo
T01_CFM.textContent = t01_CFM

const Tx01_CFM = document.getElementById("C0-t1-CFM")
const tx01_CFM = CFM.ctexto.t1
Tx01_CFM.textContent = tx01_CFM

const Tx02_CFM = document.getElementById("C0-t2-CFM")
const tx02_CFM = CFM.ctexto.t2
Tx02_CFM.textContent = tx02_CFM

const Tx03_CFM = document.getElementById("C0-t3-CFM")
const tx03_CFM = CFM.ctexto.t3
Tx03_CFM.textContent = tx03_CFM

const Tx04_CFM = document.getElementById("C0-t4-CFM")
const tx04_CFM = CFM.ctexto.t4
Tx04_CFM.textContent = tx04_CFM