# 🎓 Calculadora de Notas UNIP

Calculadora web para calcular a média das disciplinas da Universidade Paulista (UNIP), considerando as diferentes fórmulas para matérias teóricas e práticas, currículos de 2022 e 2023+.

🔗 **[Acesse o projeto online](https://joaomarcelo-java.github.io/Calculadora-de-Notas-UNIP/)**

---

## 💡 Sobre

A fórmula de cálculo da UNIP não é simples — varia pelo tipo de matéria, pelo ano de matrícula e ainda possui regras de arredondamento específicas. Este projeto nasceu da necessidade real de calcular médias sem precisar fazer na mão.

---

## ✨ Funcionalidades

- Cálculo de média para **matérias teóricas** (Prova + PIM + AVA)
- Cálculo de média para **matérias práticas** (Prova + Relatório)
- Suporte aos currículos **até 2022** e **2023+** (fórmulas diferentes)
- Cálculo da **Média Final** com Exame quando necessário
- Regras de **arredondamento** da UNIP aplicadas automaticamente
- Status de aprovação: **Aprovado**, **Aprovado após exame** ou **Reprovado**
- **Dark mode** com alternância por botão
- **Guia explicativo** com scroll suave detalhando cada componente da nota
- Fundo animado com **particles.js**
- Layout **responsivo** para celular e desktop

---

## 📐 Como o cálculo funciona

**Matéria Teórica:**
```
MD = (7 × Prova + 2 × PIM + AVA) / 10
```

**Matéria Prática:**
```
MD = (7 × Prova + 3 × Relatório) / 10
```

**Com Exame:**
```
MF = (MD + Exame) / 2
```

| Currículo | Aprovado direto | Aprovado com exame |
|---|---|---|
| Até 2022 | MD ≥ 6.0 | MF ≥ 5.0 |
| 2023+ | MD ≥ 7.0 | MF ≥ 5.0 |

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura da página |
| CSS3 | Estilo, dark mode, animações e responsividade |
| JavaScript | Lógica de cálculo e interatividade |
| Particles.js | Fundo animado com partículas |
| Google Fonts | Poppins + JetBrains Mono |
| GitHub Pages | Hospedagem gratuita |

---

## 🏗️ Estrutura

```
Calculadora-de-Notas-UNIP/
├── index.html    # Estrutura: calculadora e guia explicativo
├── style.css     # Estilo, dark mode e responsividade
└── script.js     # Cálculos, validações e particles.js
```

---

## ▶️ Como rodar localmente

Não precisa instalar nada — basta abrir no navegador:

```bash
# Clone o repositório
git clone https://github.com/joaomarcelo-java/Calculadora-de-Notas-UNIP.git

# Abra no navegador
cd Calculadora-de-Notas-UNIP
start index.html   # Windows
open index.html    # Mac
```

Ou acesse diretamente pelo link do GitHub Pages acima.

---

## 👨‍💻 Autor

**João Marcelo**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-joaomarcelo-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/jo%C3%A3o-marcelo-0244ba35a/)
[![GitHub](https://img.shields.io/badge/GitHub-joaomarcelo--java-black?style=flat&logo=github)](https://github.com/joaomarcelo-java)
