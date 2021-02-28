# Aula 09: Componente Box, ESLint e o desafio do módulo


## Fluxo

- Vamos arrumar finamente a nossa Home
  - Adicionando o bubles
    - Gist: https://gist.github.com/omariosouto/b72c857897542410a82799c60abce525
      - Pega o RAW

- Criar o componente Box
```js
// https://material-ui.com/components/box/#box
// https://gestalt.netlify.app/Box#card-0
import styled from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';

export const Box = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
`;
```

- Arrrumar Layout

  - Wrapper da página
```js
    <Box
      flex={1}
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    > 
```

```js
  <Grid.Container
    marginTop={{
      xs: '32px',
      md: '60px',
    }}
  >
```

- Grid Col
```js
  <Grid.Col
    value={{ xs: 12, md: 6 }}
  >
    <Box
      display="flex"
      justifyContent={{ xs: 'center', md: 'flex-start' }}
    >
      <img
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
        src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
        />
    </Box>
</Grid.Col>
```


========================================

- Trazer o Linter

- ESLint

```sh
# Install eslint 
yarn add eslint --dev
yarn run eslint --init
> To check syntax, find problems, and enforce code style
> JavaScript modules (import/export)
> press <a> (browser and node)
> popular style guide
> airbnb
> remove o package.lock.json e roda yarn install
```

> Criando um README bacana para o projeto: https://www.youtube.com/watch?v=yMRSDdifGW8&feature=youtu.be


```js
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'import/prefer-default-export': 0,
  },
```

## Desafio do módulo:
  - ESLint
    - Compartilhar como ela ta fazendo os propTypes dela e conversar no Discord
  - Criar um tema só seu:
    - Tentar fazer o dark mode
    - Registre seus aprendizados em markdown: 
      - http://youtube.com/watch?v=n5hnE1yPde0
  - Recriar algum dos outros layouts usando as estruturas que criamos até agora
    - https://www.figma.com/file/Veefm1pjkeTFcJC7BUqHge/Instalura?node-id=0%3A1
