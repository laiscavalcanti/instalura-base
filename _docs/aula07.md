# Aula 07: Componentes com Props via Breakpoints 


- Mostra a home no layout
  - Coloca o titulo
  - sub titulo

```js
      <div>
        <Text
          variant="title"
          tag="h1"
          color="tertiary.main"
        >
          Compartilhe momentos e conecte-se com amigos
        </Text>
        <Text
          variant="paragraph1"
          tag="p"
          color="tertiary.light"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
        </Text>

        <Button variant="primary.main">
          Cadastrar
        </Button>
      </div>
```

- Começa a alinhar o título
  - Fala que o componente precisaria ter uma variação dele só pra poder alinhar no mobile e ficar a esquerda no desktop


- Primeiro faz no style do React


```js
style={{ textAlign: 'center' }}
```

- Porém, precisamos que isso funcionasse por breakpoint

```js
// Impossível de fazer, MAAAS
textAlign={{
  xs: 'center',
  md: 'left',
}}
```

- podemos fazer via styled components
  - Começa com como vamos usar 

```js
  ${propToStyle('textAlign')}
```

- Evolui passo a passo
  - cria função, da console.log do nome da prop
  - faz o retorno padrão
```js
    return {
      // textALign: props.textAlign
      [propName]: props[propName],
    };
```
  - O que criamos agora pouco que deixa trabalhar com breakpoints?
    - `breakpointsMedia()`!!!

```js
import { css } from 'styled-components';
import { breakpointsMedia } from './breakpointsMedia';

export function propToStyle(propName) {
  return (props) => {
    const propValue = props[propName];

    if (typeof propValue === 'object') {
      return css`
        ${breakpointsMedia({
    ...(propValue.xs && {
      xs: { [propName]: propValue.xs },
    }),
    ...(propValue.sm && {
      sm: { [propName]: propValue.sm },
    }),
    ...(propValue.md && {
      md: { [propName]: propValue.md },
    }),
    ...(propValue.lg && {
      lg: { [propName]: propValue.lg },
    }),
    ...(propValue.xl && {
      xl: { [propName]: propValue.xl },
    }),
  })}
      `;
    }

    return {
      [propName]: props[propName],
    };
  };
}
```


- Vamos ajustar o title:
  - Fazer o align mágico:
```js
  ${propToStyle('textAlign')}
```

- CSS do Title no mobile
  - Pega no Gist
    - https://gist.github.com/omariosouto/1e45a4080bbb8029ea5bd96e7655ee7f

- Vamos ajustar o button:

```js
margin={{
  xs: 'auto',
  md: 'initial',
}}
display="block"
```
```js
  ${propToStyle('margin')}
  ${propToStyle('display')}
```