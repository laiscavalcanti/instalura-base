# Aula 02: Criando Component <Menu /> com Styled Components

- O que vamos construir? 
  - https://www.figma.com/file/Veefm1pjkeTFcJC7BUqHge/Instalura?node-id=0%3A1

- Vamos construir a Home!
  - Por onde começar?
    - de cima pra baixo
    - Começa no Menuzão top da massa

- Como vamos estruturar isso?
  - Temos:
    - Área da esquerda
    - Área do Centro
    - Área da Direita

- Começa criando o `<Menu />` na `pages/index.js`
  - Explica como o title do Styled Components funciona
    - - Props com Children
  - Monta o nosso Menu

- Move para a pasta correta
  - Referências para estrutura o projeto:
    - https://material-ui.com/
    - https://gestalt.netlify.app/What's%20New

- Move o menu
  - Traz o logo pronto

- Montar a casca do Menu
```js
export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide> {/* MenuWrapper.LeftSide */}
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul"> {/* MenuWrapper.CentralSide */}
        {[
          { url: '/', name: 'Home' },
          { url: '/faq', name: 'Perguntas Frequentes' },
          { url: '/sobre', name: 'Sobre' },
        ].map((link) => (
          <li key={link.url}>
            <a href={link.url}>
              {link.name}
            </a>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide> {/* MenuWrapper.RightSide */}
        <button type="button">
          Entrar
        </button>
        <button type="button">
          Cadastrar
        </button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
```

- Carregar a font externa:
  - https://fonts.google.com/specimen/Rubik
```js
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
  rel="stylesheet"
/>
```
```css
  // <MenuWrapper />
  font-family: 'Rubik', sans-serif;
```

- Gist com o final da aula:
  - https://gist.github.com/omariosouto/2167711d7107dc70690eb2d0852e6f63
