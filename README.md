# Habitat — modelo open source de Imóveis & arquitetura

Imóveis apresentados com espaço para imaginar a vida. Busca clara, imagens que convidam.

Projeto de demonstração da **[LOFRANO TECNOLOGIA](https://lofranotecnologia.com.br)**, com código React independente, documentação em português, imagens/fontes locais e testes de interação.

[Demonstração independente](https://martinlofranodeoliveira.github.io/lofrano-habitat-imoveis/) · [Referência no site](https://lofranotecnologia.com.br/modelos/habitat) · [Catálogo dos 17 modelos](https://github.com/martinlofranodeoliveira/lofrano-modelos-sites)

![Imagem conceitual de Habitat](assets/habitat.webp)

## O que você pode experimentar

- Busca de imóveis
- Curadoria visual
- Favoritos
- Fluxos demonstrativos com estados reversíveis e reinício completo.
- Identidade visual e conteúdo conceitual do modelo publicado, com build independente.

**É um conceito fictício, não um case de cliente nem um sistema de produção.** Não realiza compra, cadastro, reserva, matrícula, atendimento ou envio de dados. O estado vive na sessão do componente e é perdido ao recarregar ou reiniciar. Valores e resultados são ilustrativos.

## Rodar no seu computador

Requisitos: Node.js **22.12 ou superior**, npm e Git. Sem API, conta ou chave.

```sh
git clone https://github.com/martinlofranodeoliveira/lofrano-habitat-imoveis.git
cd lofrano-habitat-imoveis
npm ci --ignore-scripts
npm run dev
```

Abra o endereço local exibido pelo Vite. O servidor de desenvolvimento escuta em `127.0.0.1`.

```sh
npm test
npm run build
npm run preview
```

`npm test` compila a entrada de testes e verifica conteúdo inicial, interações, atributos e reinício em **DOM simulado por JSDOM**. O build cliente gera `dist/`, incluindo a licença do projeto e todos os avisos de runtime, fontes e ícones. A CI também executa as etapas com fonte/dependências somente leitura, sem rede e sem home. Essa validação não substitui a conferência visual no navegador; o controle de navegador desta preparação estava indisponível.

## Onde alterar

| Arquivo | Responsabilidade |
| --- | --- |
| `src/Demo.jsx` | Experiência e regras locais do modelo |
| `src/demo.css` | Identidade e responsividade da demonstração |
| `src/App.jsx` | Moldura, guia e reinício do estado |
| `src/content.js` | Metadados, explicação e links |
| `assets/` | Imagens, fontes e sprite locais |
| `tests/` | Snapshot público e testes dos fluxos |

[Personalização](docs/PERSONALIZACAO.md) · [Publicação](docs/PUBLICACAO.md) · [Critérios de aceite](docs/ACEITACAO.md) · [Origem verificável](docs/ORIGEM.json) · [Contribuir](CONTRIBUTING.md) · [Segurança](SECURITY.md)

## Origem e licença

Extraído e reorganizado a partir dos **arquivos públicos de cliente** da demonstração, com análise estática REA e transformação por AST. Não é cópia do backend nem exportação do projeto privado original. A moldura independente e os caminhos de assets foram adaptados para execução e hospedagem próprias. A fonte recuperada está em JSX legível, com estados descritivos.

[MIT](LICENSE). Preserve a autoria e as [licenças/atribuições de terceiros](THIRD_PARTY_NOTICES.md). A licença não concede direitos exclusivos sobre a marca LOFRANO nem autoriza apresentar o conceito como cliente real. Para um projeto comercial próprio, substitua marca, conteúdo e ativos e implemente as regras e integrações necessárias.
