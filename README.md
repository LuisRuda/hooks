# Exemplo de app utilizando React Hooks

##### Hooks são uma nova adição ao React 16.8. Eles permitem que você use o state e outros recursos do React sem escrever uma classe, assim deixando o código menos verboso e mais performático.

- useState

##### const [name, setName] = useState('');

##### name seria o nome da campo e setName a função para alterar o valor do campo.

- useEffect

##### useEffect seria o método semelhante ao componentDidMount e componentDidUpdate.

##### Usado desta forma sera executado apenas quando o comonente for montado.

```
useEffect(() => {
    // código que deverá ser executado
  }, []);
```

##### Desta forma será executado quando o componente for montado e toda vez que

##### sofrer alterações de estado.

```
useEffect(() => {
    // código que deverá ser executado
  });
```
