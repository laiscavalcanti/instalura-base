# Aula 06: Trabalhando com breakpoints via Styled Components
- Vamos fazer o menu desktop!
  - 

- Os breakpoints
  - Figma tem 2 
  - Mas pensando na vida real, temos mais algumas convenções
  - https://getbootstrap.com/docs/5.0/layout/breakpoints/

```js
export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};
```

- Fala do Material UI
  - https://material-ui.com/customization/breakpoints/#css-media-queries
  - https://xstyled.dev/docs/enhanced-styled-components/#breakpoints


- Faz um media query na mão, e desenha a sintaxe da chamda de função de como vamos fazer:
  - Ajustar font do link do menu
  - Da pra fazer manual:
```css
@media screen(max-width: 600px) {
} 
@media screen(max-width: 1000px) {
} 
```
  - Ou com asteroides:
```js
// MenuWrapper.CentralSide = styled.div`
// a {
    ${breakpointsMedia({
    xs: css`
        ${TextStyleVariants.smallestException}
    `,
    md: css`
      ${TextStyleVariants.paragraph1}
    `,
  })}
```

========================================

- Escreve o código do breakpointsMedia no console do browser

```js
import { css } from 'styled-components';
import { breakpoints } from '../index';

export function breakpointsMedia(cssByBreakpoint) {
  const breakpointNames = Object.keys(breakpoints);
  return breakpointNames
    .filter((breakpointName) => Boolean(cssByBreakpoint[breakpointName]))
    .map((breakpointName) => css`
    @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
      ${cssByBreakpoint[breakpointName]}
    }
  `);
}
```


- Aplica o restante dos breakpoints do Menu e do Button

- Código do Menu Wrapper
  - https://gist.github.com/omariosouto/4bceb30506bf8151771bb421f22aba3a

```js
// ######## Button
export const Button = styled.button`
  // ...
  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      padding: 12px 43px;
      ${TextStyleVariants.paragraph1}
    `,
  })}
```