/* Operador Typeof */

console.log("\nOperador 'typeof'\n")

var a
console.log(typeof a) //undefined

a = "hello world"
console.log(a) //string

/* Objetos */

console.log("\nObjetos\n")

/* Os objetos são valores em que podemos definir propriedades. Cada propriedade pode armazenar um valor. */

var obj = {
    a: "hello world",
    b: 42,
    c: true
}

console.log(obj.a)
console.log(obj["a"])

/* Arrays */

console.log("\nArrays\n")

var arr = [
    "hello world",
    42,
    true
]

console.log(arr[0]) //"hello world"

console.log(typeof arr) //"object"

function foo() {
    return 42;
}

foo.bar = "hello world"

console.log(typeof foo) //"function"
console.log(typeof foo()) //"number"
console.log(typeof foo.bar) //"string"

/* Built-In Type Methods */

console.log("\nBuilt-In Type Methods\n")

var c = "hello world"
var b = 3.1415;

console.log(c.length); //11
console.log(c.toUpperCase()) //"HELLO WORLD"
console.log(b.toFixed(2)) //3.14

/* Quando usamos o método ou uma propriedade de um método "built-in", como o "c.toUppercase()", internamente, o Java
* Script realiza o "boxing" desse valor primitivo para o seu wrapper, ou seja, um "string" vira um "String", dessa
* forma, o primitivo é transformado em um objeto e temos acesso aos seus métodos. */

/* "==" e "===" */

console.log("\n'==' e '==='\n")

/* O operador "==" é a comparação que permite a coerção de tipos, enquanto que o operador "===" é a comparação que
* não permite a coerção de tipos. */

console.log("1" == 1) //true - coerção habilitada
console.log("1" === 1) //false - coerção desabilitada

/* Hoisting */

console.log("\nHoisting\n")

/* Sempre que declaramos uma variável com a palavra-chave "var", estamos definindo que essa variável estará
* disponível no escopo inteiro, por exemplo: */

var ab = 2;

foo2();

function foo2() { //No JS, as funções também são içadas para cima por causa do hoisting, assim, podemos utilizar a
    ab = 3;           //função "foo2()", mesmo ela sendo chamada antes de sua declaração.

    console.log(a); //3

    var ab; //A variável estará disponível para ser acessada, porque, como foi usada a palavra-chave "var", ela foi
    //içada para cima, no topo do bloco da função "foo()".
}

//Usar a palavra-chave "var" não é uma boa ideia. Para declararmos variáveis que não sofrerão o "hoisting", é recomendada
//a utilização da palavra-chave "let", que foi introduzida no ES6.

/* IIFE */

console.log("\nIIFE\n");

    /* Uma IIFE é uma função que é executada imediatamente após a sua declaração. O código dentro da IIFE não será afetado
    * por declarações de variáveis fora desse escopo. */

    (function IIFE() {
        console.log("Essa é uma IIFE.")
    })()

/* Uma IIFE também retorna valores. */

/* Closures */

console.log("\nClosures\n");

let x = 50

function fora(){
    let x = 1005
    function somarXMais3(){
        return x + 3;
    }

    return somarXMais3
}

/* Estamos executando a função "somarXMais3" que está sendo retornada. */

/* Nesse exemplo, a função "somarXMais3" lembra do escopo em que ela foi definida, assim, como ela foi definida
* dentro da função "fora()", ao executarmos a função "fora()", é retornada a função "somarXMais3()", e, ao executarmos
* essa função, ela lembra do escopo em que ela estava, e lembra que o valor de "x" é "1005". */
console.log(fora()());

/* Modules */

console.log("\nModules\n");

/* O "module pattern" é uma forma de definirmos detalhes privados de implementações, como
* variáveis ou funções, que estejam escondidos do mundo externo. */

/* Nesse exemplo, todas as variáveis estão escondidas do mundo externo, e apenas
* a "publicAPI", que está sendo retornada pela função "User", está visível. */

function User(){
    var username, password

    function doLogin(user, pw) {
        username = user;
        password = pw;

        console.log(user, pw)
    }

        var publicAPI = {
            login: doLogin
        };

        return publicAPI
}

var fred = User();
fred.login("Fred", "1234")

/* Palavra-chave "this" */

console.log("\nPalavra-chave 'this'\n");

/* Se uma função tem um "this" dentro dela, essa referência normalmente aponta para um
* objeto, mas o objeto em que ela aponta depende de como a função foi chamada. */

function foo2(){
    console.log(this.bar2)
}

var bar2 = "global";

var obj1 = {
    bar2: "obj2",
    foo2: foo2
}

var obj2 = {
    bar: "obj2"
}

foo2(); //"global"
obj1.foo2() //"obj1"
foo2.call(obj2) //Estamos chamando a função "foo2" no contexto do objeto "obj2", logo, o
                //valor de "this.bar2" será o "obj2".
new foo(); //estamos definindo o "this" para um novo objeto vazio.

/* Prototypes */

console.log("\nPrototypes\n");

/* Quando uma referência para uma propriedade em um objeto não existir, o JS vai, automaticamente, usar
* o protótipo interno do objeto para procurar por essa propriedade, é como se fosse um "fallback" caso a propriedade
* esteja faltando. */

/* Todos os objetos em JavaScript herdam de pelo menos um outro objeto. Um objeto comum herdará da classe
* "Object", que é uma classe nativa que possui os métodos "valueOf", por exemplo. */

/* Polyfill */

console.log("\nPolyfill\n");

/* Um polyfill é uma feature nova do JS que produz um pedaço de código que é equivalente ao
* comportamento original, mas que pode ser executado em ambientes que rodam uma versão antiga do
* JS. */

/* Recurso novo (ES6) */

Number.isNaN(1)

/* Polyfill desse recurso: Se esse recurso não existe ainda, ele entrará no "if" e
* criaremos essa função na mão, para que ela possa ser utilizada. */
if(!Number.isNaN){
    Number.isNaN = function isNaN(x){
        return x !== x;
    };
}

/* Transpilling */

console.log("\nTranspilling\n");

/* Quando uma nova sintaxe é inserida na linguagem, não há como efetuar o polyfill, porém, é
* possível usarmos uma ferramenta que converte o código novo em códigos antigos que são equivalentes. */

/* Isso é usado no TypeScript, por exemplo. Um transpilador muito utilizado é o Babel. */

/* Funções como o "getElementById()" ou o "alert()" são providas pelo browser, e não pelo JS. O DOM, por
* exemplo, é implementado usando C e C++. */
