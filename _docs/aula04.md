# Aula 04: O Reset CSS com Styled Components

- Por que precisamos de um reset de CSS?
  - https://necolas.github.io/normalize.css/

- `<GlobalStyle />` que ta no `_app.js`

- Fala que o _app é o ponto de entrada de coisas "globais"
  - Trazer a fonte pra ca com o `next/head`
  - Lembrar de apagar da home
```js
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
    </Head>
```

- Vamos criar o nosso GlobalStyle com CSS para dar suporte para nosso estilo de app 100%


```js
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  ${normalize}
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
  }

  /* Full height layout */
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
```

- Mostrar como o Styled Components carrega as coisas

- Carregar o footer

- Ajustar a home pro footer ficar no rodapé
```js
export default function Home() {
  return (
    <div style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Menu />
      <Footer />
    </div>
  )
}
```