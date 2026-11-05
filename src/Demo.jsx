import React from "react";
import { ArrowUpRight, Search, Heart } from "./Icons.jsx";
import image_habitat from "../assets/habitat.webp";

const ConceptImage = ({ name: e, alt: t, className: n = `` }) => (
  <img
    className={n}
    src={image_habitat}
    alt={t}
    width={`1200`}
    height={`900`}
  />
);
function DemoNavigation({ brand: e, children: t }) {
  return (
    <div className={`dm-nav`}>
      <a className={`dm-brand`} href={`#demo-top`}>
        {e}
      </a>
      <nav aria-label={`Navegação do modelo ` + e}>{t}</nav>
    </div>
  );
}
function HabitatDemo() {
  let [transactionType, setTransactionType] = React.useState(`Comprar`),
    [neighborhood, setNeighborhood] = React.useState(`Todos os bairros`),
    [filtered, setFiltered] = React.useState(!1),
    [savedProperties, setSavedProperties] = React.useState([]),
    u = [
      {
        name: `Casa do Horizonte`,
        area: `Jardim Botânico`,
        size: `240 m²`,
        rooms: `3 suítes`,
        price:
          transactionType === `Comprar` ? `R$ 2.450.000` : `R$ 12.500 / mês`,
      },
      {
        name: `Refúgio da Serra`,
        area: `Alto da Serra`,
        size: `185 m²`,
        rooms: `2 suítes`,
        price:
          transactionType === `Comprar` ? `R$ 1.680.000` : `R$ 8.400 / mês`,
      },
    ];
  return (
    <div className={`dm-habitat`} id={`demo-top`}>
      <DemoNavigation brand={`habitat.`}>
        <a href={`#habitat-homes`}>Encontre seu lugar</a>
        <a href={`#habitat-about`}>
          {`Nosso olhar `}
          <ArrowUpRight size={16} />
        </a>
      </DemoNavigation>
      <section className={`hb-hero`}>
        <ConceptImage
          name={`habitat`}
          alt={`Residência contemporânea em uma paisagem serena, imagem conceitual`}
        />
        <div className={`hb-hero-copy`}>
          <p className={`dm-overline`}>ESPAÇOS PARA NOVAS HISTÓRIAS</p>
          <h1>
            Há lugares.
            <br />
            {`E há `}
            <em>o seu lugar.</em>
          </h1>
          <p>Arquitetura, luz e a sensação de estar onde você deveria.</p>
        </div>
        <span className={`hb-image-caption`}>
          RESIDÊNCIA CONCEITUAL / IMAGEM ILUSTRATIVA
        </span>
      </section>
      <section
        className={`hb-search`}
        aria-label={`Busca demonstrativa de imóveis`}
      >
        <div
          className={`dm-tabs`}
          role={`group`}
          aria-label={`Tipo de negócio`}
        >
          {[`Comprar`, `Alugar`].map((n) => (
            <button
              key={n}
              onClick={() => setTransactionType(n)}
              aria-pressed={transactionType === n}
            >
              {n}
            </button>
          ))}
        </div>
        <div className={`hb-search-fields`}>
          <label>
            ONDE VOCÊ QUER VIVER?
            <select
              value={neighborhood}
              onChange={(e) => {
                (setNeighborhood(e.target.value), setFiltered(!1));
              }}
            >
              {[`Todos os bairros`, `Jardim Botânico`, `Alto da Serra`].map(
                (e) => (
                  <option key={e}>{e}</option>
                ),
              )}
            </select>
          </label>
          <span>
            IMÓVEIS COM PERSONALIDADE
            <br />
            <strong>Uma curadoria, não uma lista.</strong>
          </span>
          <button
            className={`dm-button`}
            onClick={() => {
              (setFiltered(!0),
                document.getElementById(`habitat-homes`)?.scrollIntoView({
                  behavior: `smooth`,
                }));
            }}
          >
            <Search size={17} />
            {` Explorar imóveis`}
          </button>
        </div>
      </section>
      <section className={`hb-homes`} id={`habitat-homes`}>
        <div className={`hb-heading`}>
          <div>
            <p className={`dm-overline`}>UM OLHAR MAIS ATENTO</p>
            <h2>Espaços que fazem sentir.</h2>
          </div>
          <span>
            {savedProperties.length}
            {` `}
            {savedProperties.length === 1 ? `favorito` : `favoritos`}
            {` · nesta visita`}
          </span>
        </div>
        {filtered && (
          <p role={`status`} className={`dm-feedback`}>
            {`Exibindo imóveis fictícios para `}
            {transactionType.toLowerCase()}
            {` · `}
            {neighborhood}.
          </p>
        )}
        <div className={`hb-home-grid`}>
          {u
            .filter(
              (e) =>
                neighborhood === `Todos os bairros` || e.area === neighborhood,
            )
            .map((e, t) => (
              <article key={e.name}>
                <div className={`hb-home-photo hb-home-` + t}>
                  <ConceptImage
                    name={
                      e.name === `Refúgio da Serra`
                        ? `habitat-serra`
                        : `habitat`
                    }
                    alt={`Imagem ilustrativa de ` + e.name}
                  />
                  <button
                    aria-label={
                      (savedProperties.includes(e.name)
                        ? `Remover dos favoritos: `
                        : `Favoritar: `) + e.name
                    }
                    aria-pressed={savedProperties.includes(e.name)}
                    onClick={() =>
                      setSavedProperties((t) =>
                        t.includes(e.name)
                          ? t.filter((t) => t !== e.name)
                          : [...t, e.name],
                      )
                    }
                  >
                    <Heart
                      size={19}
                      fill={
                        savedProperties.includes(e.name)
                          ? `currentColor`
                          : `none`
                      }
                    />
                  </button>
                  <span>IMÓVEL FICTÍCIO</span>
                </div>
                <p>{e.area.toUpperCase()}</p>
                <h3>{e.name}</h3>
                <div className={`hb-home-specs`}>
                  <span>{e.size}</span>
                  <span>{e.rooms}</span>
                  <span>Área verde</span>
                </div>
                <strong>
                  {e.price}
                  <small>valor ilustrativo</small>
                </strong>
                <details>
                  <summary>
                    {`Conheça os detalhes `}
                    <ArrowUpRight size={18} />
                  </summary>
                  <p>
                    Planta integrada, luz natural e espaços para receber. Este
                    anúncio é fictício: não representa imóvel disponível,
                    endereço real ou oferta comercial.
                  </p>
                </details>
              </article>
            ))}
        </div>
      </section>
      <section className={`hb-about`} id={`habitat-about`}>
        <span>h.</span>
        <div>
          <p className={`dm-overline`}>MAIS DO QUE METROS QUADRADOS</p>
          <h2>
            Um novo endereço.
            <br />
            Uma nova maneira de viver.
          </h2>
          <p>
            Um conceito de plataforma imobiliária que valoriza o espaço, a
            clareza das informações e a descoberta do que faz sentido para cada
            pessoa.
          </p>
        </div>
      </section>
    </div>
  );
}

export default HabitatDemo;
