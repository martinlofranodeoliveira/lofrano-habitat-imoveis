---
name: "Habitat"
description: "Sistema visual implementado — Imóveis & arquitetura"
colors:
  primary: "#2b4939"
  background: "#f6f7f2"
  text: "#23382f"
  surface: "#e3e9dd"
  card: "#fff"
  accent: "#dbe5c8"
  frame-background: "#09090b"
  frame-text: "#f5f5f7"
  focus: "#ff2d60"
typography:
  display:
    fontFamily: "Georgia, serif"
    fontSize: "clamp(50px, 6vw, 85px)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-2.5px"
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
---

# Design System: Habitat

## Overview

Apresentação imobiliária editorial, com fotografia ampla, verdes naturais e títulos serifados. A busca sobreposta conecta a imagem de abertura à seleção de imóveis fictícios.

Registro descritivo do código atual, com autoridade de preservação da [referência pública](https://lofranotecnologia.com.br/modelos/habitat). Fontes normativas: [estilos do modelo](../src/demo.css), [base compartilhada](../src/base.css), [componentes da demonstração](../src/Demo.jsx) e [moldura de distribuição](../src/App.jsx). Layout, contraste e overflow visual permanecem não verificados em navegador; valores abaixo são declarações de fonte, não medições de renderização.

## Colors

Verde profundo orienta ação e texto; branco destaca a busca e verde claro delimita a seção final. O acento claro enfatiza o título sobre a fotografia. O frontmatter registra cores principais por papel; variações locais permanecem no CSS. A moldura LOFRANO conserva fundo escuro, texto claro e foco rosa. Paleta fixa, sem alternância de tema.

## Typography

Georgia conduz marca, hero e títulos dos imóveis; DM Sans organiza filtros e especificações. O título principal muda para (57px) até (760px). Manrope e DM Sans são fontes locais de [`assets/`](../assets/); Georgia, Arial e Helvetica dependem das alternativas do sistema. O token display descreve o título principal em desktop. A base define h2 móvel (34px), com espaçamento de letras (-1.3px), até (760px); regras mais específicas do modelo prevalecem.

## Layout

Hero com altura declarada de (590px), busca sobreposta por margem negativa (-45px) e imóveis em duas colunas. Até (1050px), desaparece o texto auxiliar da busca. Até (760px), campos, imóveis e apresentação final ficam em uma coluna; hero usa (510px), a sobreposição (-35px) e os seletores (16px).

A moldura organiza autoria e links acima da demonstração, guia abaixo e rodapé final. Cabeçalho e rodapé permitem quebra; até (600px), o guia reduz o padding para (40px 20px).

## Elevation & Depth

A busca recebe sombra (0 15px 45px #152c1714). O hero usa gradiente sobre a foto; demais áreas trabalham com fundos e linhas.

## Shapes

Busca e cartões mantêm planos retangulares. Favoritos usam botões circulares (35px); abas de compra/aluguel têm sublinhado, sem pílula. A imagem conceitual está em [`assets/habitat.webp`](../assets/habitat.webp); preservar seu recorte definido pelo CSS.

## Components

- Busca: Comprar/Alugar troca os preços; bairro filtra a lista. Explorar apresenta status e rola até os imóveis.
- Favoritos: coração alterna preenchimento e `aria-pressed`; o contador reflete a seleção local.
- Imóveis: fotografia ilustrativa compartilhada e detalhes nativos expansíveis, com indicação de anúncio fictício.
- Estados compartilhados: Controles da demonstração usam o foco global rosa (3px), afastado (5px). A moldura inverte o botão de reinício para fundo branco no hover. As interações do modelo usam os estados descritos acima; não há variante de hover adicional declarada para elas. Reiniciar remonta a demonstração e restaura o estado local.
- Movimento: a base usa rolagem suave; a preferência por movimento reduzido troca a rolagem CSS para automática e reduz durações de animação/transição para (0.01ms).

## Do's and Don'ts

- **Do:** Preservar a busca sobre a foto e a distinção entre títulos editoriais e dados objetivos.
- **Do:** manter avisos de conceito fictício, foco visível e estados de seleção coerentes com os controles.
- **Don't:** Apresentar imagens, valores ou detalhes como imóveis disponíveis.
- **Don't:** interpretar a moldura compartilhada como autorização para substituir a identidade visual do modelo.
