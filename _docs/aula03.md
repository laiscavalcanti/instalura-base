# Aula 03: Componente de botão com temas

- Vamos estilizar o botão horrível com cara de navegador

- Faz primeiro o componente diretão
  - Criar o botão
  ```js
  export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    transition: opacity ${({ theme }) => theme.transition}; // x
    border-radius: ${({ theme }) => theme.borderRadius}; 12px
    &:hover,
    &:focus {
      opacity: .5;
    }
  `;
  ```

- Fala de tema
  - Faz só o primary
    - Pega do Gist o objeto convertido dos dados do design:
      - https://gist.github.com/omariosouto/a505f4681ebf5c0b4afc3170ef106ee1
    - Fala que nenhum lugar é perfeito
      - https://github.com/alexpate/awesome-design-systems
    ```js
      background-color: ${({ theme, variant }) => theme.colors.primary.color};
    ```

- Cria as variantes do botão
  - Ghost e Default
```js
const ButtonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background-color: transparent;
`;

const ButtonDefault = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;
```

- Recebe as props

- Referencia pra tema: 
  - https://material-ui.com/customization/color/


- Faz o lodash.get no final da aula
```js
  ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
```