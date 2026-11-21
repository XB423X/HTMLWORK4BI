// Guarda todas as pesquisas e Interagir com o JSgear

/**
 * B_id = O id do elemento na pagina html
 * txt = O texto que quer por dentro daquele elemento html
 * P_id = Id de destino, utilizado apenas para os botões da toolbar, onde ao clicar sai do id do botão("B_id") ao id destino que é o "P_id"
 */

// ToolBar
const TBi = [

    { // indice 0
        B_id:"B-part-I",
        P_id:"part-I",
        txt:"Introdução"
    },

    { // indice 1
        B_id:"B-part-1",
        P_id:"part-1",
        txt:"O que são minerais críticos?"
    },

    {
        B_id:"B-part-1/2",
        P_id:"part-1/2",
        txt:"As leis ambientais"
    },

    { // indice 2
        B_id:"B-part-2",
        P_id:"part-2",
        txt:"Mapa do Brasil"
    },

    { // indice 3
        B_id:"B-part-3",
        P_id:"part-3",
        txt:"Como essa mineração influencia no ambiente ao redor?"
    },

    { // indice 4
        B_id:"B-part-4",
        P_id:"part-4",
        txt:"Referências"
    }
]

// Introdução
const itd = [
    { // indice 0
        B_id:"I0-T-itd",
        txt: "Do solo ao celular: como a tecnologia na mineração de minerais críticos influencia a sociedade do Brasil"
    },

    { // indice 1
        B_id:"I0-t-itd",
        txt: "A sociedade brasileira é diretamente influenciada pelas tecnologias presentes na mineração de minerais críticos, aqueles que afetam o desenvolvimento econômico e possuem certas limitações e suas reservas de processamento e produção. Além das terras-raras presentes em Minas Gerais, Bahia, Amazonas e Goiás. Como será que esses minérios afetam o nosso cotidiano e as relações geopolíticas? É isso que veremos a seguir"
    }
]
// As leis ambientais e como elas são fiscalizadas perante os subsolos
const LAfs = [
    {
        B_id:"LA-T-0",
        txt:"As leis ambientais e como elas são fiscalizadas perante os subsolos"
    },
    {
        B_id:"LA-t-0",
        txt:"Até não muito tempo atrás, o Brasil tinha apenas o Código de Mineração de 1967 que tratava todos os minérios de maneira genérica, incluindo os minerais críticos/ estratégicos, assim tinham menos obrigações a serem cumpridas. Nos tempos atuais, foi criado um projeto de lei (n° 2870/2024) para instituir a Política Nacional de Minerais Críticos e Estratégicos (PNMCE) e o Comitê de Minerais Críticos e Estratégicos (CMCE). Com a promulgação desse projeto, espera-se que se consiga a atração de novos investidores para o setor mineral, uma redução da dependência externa de insumos estratégicos, um fortalecimento da soberania e o protagonismo do Brasil na transição energética, um desenvolvimento regional com sustentabilidade e inovação e um alinhamento com políticas industriais e ambientais. A lei também busca, além de se beneficiar, transformar e industrializar os minerais que ele mesmo exporta, fazer mineradoras investirem uma porcentagem de sua receita anual em projetos de sustentabilidade e recuperação do solo, com multa alta caso não invistam, e aumentar o controle do Estado, permitindo uma possível melhor fiscalização. Essa fiscalização é feita principalmente através de um sistema obrigatório no qual registra as transações e os agentes envolvidos desde a extração dos minerais até o consumo. O sistema exige a comprovação de origem lícita, licença ambiental, outorga mineral e dados sobre o impacto socioambiental de cada operação. Ainda mais recentemente, após pressão de ambientalistas na busca de equilibrar o lado econômico e o meio ambiente, o Governo Federal precisou publicar um novo decreto para incluir o Ministério do Meio Ambiente no comitê responsável e garantir a ele direito de voto, o que nos revela que, apesar do Brasil está avançando com a criação de leis específicas para os minerais críticos, ainda é necessário estar vigilante quanto ao equilíbrio da transição energética e os ecossistemas."  
    }
]

// Mapa do Brasil
const mpB = [
    { // indice 0
        B_id:"M0-T-mpB", // T = titulo
        txt: "Mapa do Brasil e reservas de terras raras"
    },

    { // indice 1
        B_id:"M0-t-mpB", // t = texto
        txt: "O Brasil possui grandes reservas de terras raras, principalmente em Minas Gerais, Goiás, Amazonas e Bahia. Esses minerais são importantes para fabricar celulares, computadores, baterias e carros elétricos."
    },

    { // indice 2
        B_id:"BttMpB", // btt = botão(bottom)
        txt: "O que são terras raras?"
    }
]
// C.F.M. (Como era, é, e pode ser feita a mineração? E quais são as tecnologias usadas?)
const CFM = [
    { // indice 0
        B_id:"C0-T-CFM",
        txt:"Como era, é e pode ser feita a mineração?"
    },
    { // indice 1
        B_id:"C0-t1-CFM",
        txt:"Antigamente era feita com ferramentas simples e muito trabalho manual."
    },
    { // indice 2
        B_id:"C0-t2-CFM",
        txt:"Atualmente utiliza máquinas, escavadeiras, perfuradoras e processos químicos para separar os minerais"
    },
    { // indice 3
        B_id:"C0-t3-CFM",
        txt:"No futuro poderá utilizar robôs, inteligência artificial e tecnologias menos poluentes."
    },
    { // indice 4
        B_id:"C0-t4-CFM",
        txt:"Tecnologias utilizadas são escavadeiras, sensores, separação magnética, processos químicos e equipamentos automatizados."
    }

]

