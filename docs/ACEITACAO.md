# Critérios do modelo Habitat

Derivados da demonstração pública antes da implementação independente. Os testes verificam DOM simulado; isso não equivale a QA visual em navegador.

- **habitat-01** — No grupo “Tipo de negócio”, clicar Alugar.
  Resultado: Alugar recebe aria-pressed=true. Casa do Horizonte passa a R$ 12.500 / mês e Refúgio da Serra a R$ 8.400 / mês, ambos valores ilustrativos.
- **habitat-02** — No select “ONDE VOCÊ QUER VIVER?”, escolher Alto da Serra; clicar “Explorar imóveis”.
  Resultado: O filtro deixa apenas Refúgio da Serra. O clique declara scrollIntoView suave em #habitat-homes e mostra role=status: “Exibindo imóveis fictícios para comprar · Alto da Serra.”, ou “alugar” se esse tipo estiver ativo.
- **habitat-03** — Clicar button[aria-label="Favoritar: Refúgio da Serra"]; depois clicar o mesmo controle, agora “Remover dos favoritos: Refúgio da Serra”.
  Resultado: O primeiro clique marca aria-pressed=true, muda o nome acessível para remover e o contador passa a 1 favorito · nesta visita. O segundo reverte para false, nome Favoritar e 0 favoritos · nesta visita.
- **habitat-04** — Abrir o summary “Conheça os detalhes” de um imóvel.
  Resultado: O details revela a descrição e a declaração de que o anúncio é fictício, sem imóvel disponível, endereço real ou oferta comercial.

Além dos fluxos, a suíte confere conteúdo inicial publicado, controles, imagens, âncoras, ausência de configuração privada e reinício do estado.
