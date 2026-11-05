const text = (element) => element.textContent.replace(/\s+/gu, " ").trim();

export default [
  {
    name: "habitat-01 — muda os preços ilustrativos para aluguel",
    run: async ({ ui, user, assert, within }) => {
      await user.click(
        within(ui.getByRole("group", { name: "Tipo de negócio" })).getByRole(
          "button",
          { name: "Alugar", exact: true },
        ),
      );
      assert.equal(
        ui
          .getByRole("button", { name: "Alugar", exact: true })
          .getAttribute("aria-pressed"),
        "true",
      );
      for (const [name, price] of [
        ["Casa do Horizonte", "R$ 12.500 / mês"],
        ["Refúgio da Serra", "R$ 8.400 / mês"],
      ]) {
        const article = ui
          .getByRole("heading", { name, exact: true })
          .closest("article");
        assert.ok(
          within(article).getByText(price, {
            exact: false,
            selector: "strong",
          }),
        );
      }
    },
  },
  {
    name: "habitat-02 — filtra Alto da Serra e confirma a busca",
    run: async ({ ui, user, root, assert, within }) => {
      await user.selectOptions(
        ui.getByRole("combobox", { name: "ONDE VOCÊ QUER VIVER?" }),
        "Alto da Serra",
      );
      assert.equal(
        ui.queryByRole("heading", { name: "Casa do Horizonte", exact: true }),
        null,
      );
      assert.ok(
        ui.getByRole("heading", { name: "Refúgio da Serra", exact: true }),
      );
      assert.equal(
        within(root.querySelector("#habitat-homes")).getAllByRole("article")
          .length,
        1,
      );
      await user.click(ui.getByRole("button", { name: "Explorar imóveis" }));
      assert.equal(
        text(ui.getByRole("status")),
        "Exibindo imóveis fictícios para comprar · Alto da Serra.",
      );
    },
  },
  {
    name: "habitat-03 — adiciona e remove um favorito local",
    run: async ({ ui, user, assert }) => {
      await user.click(
        ui.getByRole("button", {
          name: "Favoritar: Refúgio da Serra",
          exact: true,
        }),
      );
      const remove = ui.getByRole("button", {
        name: "Remover dos favoritos: Refúgio da Serra",
        exact: true,
      });
      assert.equal(remove.getAttribute("aria-pressed"), "true");
      assert.ok(ui.getByText("1 favorito · nesta visita", { exact: true }));
      await user.click(remove);
      assert.equal(
        ui
          .getByRole("button", {
            name: "Favoritar: Refúgio da Serra",
            exact: true,
          })
          .getAttribute("aria-pressed"),
        "false",
      );
      assert.ok(ui.getByText("0 favoritos · nesta visita", { exact: true }));
    },
  },
  {
    name: "habitat-04 — abre detalhes do anúncio fictício",
    run: async ({ ui, user, assert, within }) => {
      const article = within(
        ui
          .getByRole("heading", { name: "Casa do Horizonte", exact: true })
          .closest("article"),
      );
      const summary = article.getByText("Conheça os detalhes", {
        selector: "summary",
      });
      await user.click(summary);
      assert.equal(summary.closest("details").open, true);
      assert.ok(
        article.getByText(
          "Planta integrada, luz natural e espaços para receber. Este anúncio é fictício: não representa imóvel disponível, endereço real ou oferta comercial.",
          { exact: true },
        ),
      );
    },
  },
];
