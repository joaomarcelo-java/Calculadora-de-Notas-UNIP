const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.textContent = "☀️";
    }else{
        themeBtn.textContent = "🌙";
    }
});

function verificaTipoMateria(){
  let tipo = document.getElementById("tipo").value;
  if(tipo === "teorica"){
      document.getElementById("relatorio").disabled = true;
  }else{
      document.getElementById("relatorio").disabled = false;
  }
}

function calcular() {

let curriculo = document.getElementById("curriculo").value
let tipo = document.getElementById("tipo").value

let prova = Number(document.getElementById("prova").value)
let pim = Number(document.getElementById("pim").value)
let ava = Number(document.getElementById("ava").value)
let relatorio = Number(document.getElementById("relatorio").value)
let exame = Number(document.getElementById("exame").value)

let md = 0

// calcular MD
if(tipo === "teorica")
{
    md = (7*prova + 2*pim + ava) / 10
}
else
{
    md = (3*relatorio + 7*prova) / 10
}

// arredondamento MD
if(curriculo === "2022")
{
    if(md >= 5.7 && md < 6)
        md = 6
}
else
{
    if(md >= 6.7 && md < 7)
        md = 7
}

let limite = curriculo === "2022" ? 6 : 7

let mf = md
let situacao = ""

// aprovado direto
if(md >= limite)
{
    situacao = "Aprovado"
}
else
{
    mf = (md + exame) / 2

    if(mf >= 4.75 && mf < 5)
        mf = 5

    if(mf >= 5)
        situacao = "Aprovado após exame"
    else
        situacao = "Reprovado"
}

// mostrar resultado
document.getElementById("md").innerText = md.toFixed(2)
document.getElementById("mf").innerText = mf.toFixed(2)
document.getElementById("situacao").innerText = situacao
let status = document.getElementById("situacao")

status.innerText = situacao

status.className = "result-status"

let dark = document.body.classList.contains("dark")

if(situacao.includes("Aprovado"))
{
    if(dark){
        status.style.background = "#1b5e20"
        status.style.color = "#a5d6a7"
    }else{
        status.style.background = "#c8e6c9"
        status.style.color = "#2e7d32"
    }
}
else
{
    if(dark){
        status.style.background = "#7f1d1d"
        status.style.color = "#ffcdd2"
    }else{
        status.style.background = "#ffcdd2"
        status.style.color = "#c62828"
    }
}

}
function irParaGuia(){

    document.getElementById("guia")
    .scrollIntoView({behavior:"smooth"});

}
particlesJS("particles-js", {
  particles: {
    number: {
      value: 60
    },
    color: {
      value: "#888888"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3
    },
    move: {
      enable: true,
      speed: 1
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#888888",
      opacity: 0.4,
      width: 1
    }
  },
interactivity: {
  detect_on: "window",
  events: {
    onhover: {
      enable: true,
      mode: "grab"
    },
    onclick: {
      enable: true,
      mode: "push"
    }
  },
  modes: {
    grab: {
      distance: 200,
      line_linked: {
        opacity: 1
      }
    },
    push: {
      particles_nb: 4
    }
  }
}

}
);