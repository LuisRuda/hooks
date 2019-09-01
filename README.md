<h1>App de exemplo utilizando React Hooks</h1>
<p>Hooks são uma nova adição ao React 16.8. Eles permitem que você use o state e outros recursos do React sem escrever uma classe, assim deixando o código menos verboso e mais performático.</p>

<ul>useState</ul>

<p>const [name, setName] = useState('');</p>
<p>name seria o nome da campo e setName a função para alterar o valor do campo.</p>

<ul>useEffect</ul>

<p>useEffect seria o método semelhante ao componentDidMount e componentDidUpdate.</p>
<p>Usado desta forma sera executado apenas quando o comonente for montado.</p>

```
useEffect(() => {
    // código que deverá ser executado
  }, []);
```

<p>Desta forma será executado quando o componente for montado e toda vez que
 sofrer alterações de estado.</p>

```
useEffect(() => {
    // código que deverá ser executado
  });
```
