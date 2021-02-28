# Aula 05: O component <Text />, padronizando a tipografia do projeto

- O layout usa o termo "paragraph1" e "smallestException"
  - Vamos converter isso para nosso tema e ter um componente que representa esse token de design

- Vamos pegar a parte de tema relativo a isso:
  - carregar o typographyVariants
  - Mostrar no figma e explicar o lance do paragraph e titleXS (mundo real de novo)
    - https://gist.github.com/omariosouto/04c65e08569dad2a70e0ca0befa09a64

- Fazer o de para, do objeto que representa o contrato, pro CSS que faz ele valer
```js
const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`;

const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`;
```

```js
const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
`;

export function Text({
  variant,
  children,
  tag,
  ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};
```

- Feito isso:
  - Muda o `<Button>`
     - `${TextStyleVariants.smallestException}`
  - Muda o `<Menu />`
```js
  <Text variant="smallestException" tag="a" href={link.url}>
    {link.name}
  </Text>
```

- Termina a explicação com PropTypes
  - Fazer o install da lib
  - Não tem tipos, componentes precisam de coisas específicas e "contratos"

```js
Text.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
  variant: PropTypes.oneOf(['paragraph1', 'smallestException']),
};
```