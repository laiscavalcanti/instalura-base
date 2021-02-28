# Aula 08: Criando o componente Grid com Styled Components

- Mostra o figma
  - Fala do grid 
  - Vamos fazer com Flexbox
    - https://www.alura.com.br/artigos/como-fazer-grids-e-a-responsividade-na-web

```js
<Grid.Container>
  <Grid.Row>
    <Grid.Col>
      Textos
    </Grid.Col>
    <Grid.Col>
      <img src="" />
    </Grid.Col>
  </Grid.Row>
</Grid.Container>
```
<!-- Vai quebrar -->

- Cria a casca que faz funcionar
```js
const Grid = {
  Container: styled.div``,
  Row: styled.div``,
  Col: styled.div``,
}
```

- O container, é de boas:
  - Explica os paranaue do layout:
    - https://gist.github.com/omariosouto/75d105791f511358689ce72e8364364e

```js
<Grid.Container>
  <Grid.Row>
    <Grid.Col
      offset={1}
      value={{ xs: 12, md: 5 }}
    >
      Textos
    </Grid.Col>
    <Grid.Col
      value={{ xs: 12, md: 6 }}
    >
      <img src="" />
    </Grid.Col>
  </Grid.Row>
</Grid.Container>
```

- Col: vamos fazer funcionar
```js
const Col = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  ${({ value }) => {
    if (typeof value === 'number') {
      return css`
      flex: 0 0 ${(100 * value) / 12}%;
      max-width: ${(100 * value) / 12}%;
    `;
    }
  }}

  ${({ offset }) => {
    if (typeof offset === 'number') {
      return css`
      margin-left: ${(100 * offset) / 12}%;
    `;
    }
  }}
`
```  

- Row
```js
  Row: styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -16px;
    margin-left: -16px;
  `,
```


- Adiciona os breakpoints no Col, pega do Gist
  - https://gist.github.com/omariosouto/75d105791f511358689ce72e8364364e