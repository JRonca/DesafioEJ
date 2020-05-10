import React, {useState} from 'react';
import GlobalStyle from './styles/global'
import {Title, Form, Table,Description, Link} from './styles/styles'

function App() {
  //variaveis para a entrada
  const [A,setA]=useState();
  const [B,setB]=useState();
  const [C,setC]=useState();
  const [D,setD]=useState();
  //vetor de objeto que armazenará as respostas
  const [inOut,setInOut]=useState([])
  //função de processamento dos valores da entrada
  async function generateResultado(event){
    //evita que a página recarregue após o envio do formulario
    event.preventDefault();
    //confere se os valores recebidos cumprem os requisitos e atribui o valor
    //correspondente a variavel que exibirá os resultados na tabela
		if(B>C && D>A && (C+D)>(A+B) && C>0 &&D>0 && A%2==0){
      setInOut([...inOut,{entrada:`${A}, ${B}, ${C}, ${D}`,saida:'Valores aceitos'}])
    }else{
      setInOut([...inOut,{entrada:`${A}, ${B}, ${C}, ${D}`,saida:'Valores não aceitos'}])
    }
    //limpa as variáveis de entrada para limpar os campos
    setA("")
    setB("")
    setC("")
    setD("")
	}
  return (
    <>
      <Title>Desafio EJ</Title>
      <Description>
        <p>Escreva 4 valores inteiros A, B, C e D. A seguir,
       se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D,
       ambos, forem positivos e se a variável A for par escreveremos a mensagem
       "Valores aceitos", senão escreveremos "Valores nao aceitos".<br/>
       Os Resultados irão ficar registrados na tabela!<br/></p>
       </Description>
       <Description>
         <Link href="https://github.com/JRonca/JRonca.github.io">Repositório do projeto</Link>
      </Description>
       {
       //inicio do formulário que chamara a função
       }
      <Form onSubmit={generateResultado}>
      {
       //campos de entrada de dados
      }
      <input
			value={A}
			onChange={(e)=> setA(e.target.value)}
			placeholder="A"
			/>
      <input
			value={B}
			onChange={(e)=> setB(e.target.value)}
			placeholder="B"
			/>
      <input
			value={C}
			onChange={(e)=> setC(e.target.value)}
			placeholder="C"
			/>
      <input
			value={D}
			onChange={(e)=> setD(e.target.value)}
			placeholder="D"
			/>
      {
       //botão responsável por enviar o formulário
      }
			<button type="submit">Resultado</button>
      </Form>
      <Table>
      {
       //campos principais da tabela
      }
        <tr>
          <td>Entrada</td>
          <td>Saída</td>
        </tr>
        {
          //percorrerá o vetor de resultados, renderizando-os na tabela
          inOut.map(x=>
            <tr>
              <td>{x.entrada}</td>
              <td>{x.saida}</td>
            </tr>
          )
        }
      </Table>
      <GlobalStyle/>
    </>
  );
}

export default App;
