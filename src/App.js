import React, {useState} from 'react';
import GlobalStyle from './styles/global'
import {Title, Form, Table} from './styles/styles'

function App() {
  const [A,setA]=useState();
  const [B,setB]=useState();
  const [C,setC]=useState();
  const [D,setD]=useState();
  const [inOut,setInOut]=useState([])
  async function generateResultado(event){
		event.preventDefault();
		if(B>C && D>A && (C+D)>(A+B) && C>0 &&D>0 && A%2==0){
      setInOut([...inOut,{entrada:`${A}, ${B}, ${C}, ${D}`,saida:'Valores aceitos'}])
    }else{
      setInOut([...inOut,{entrada:`${A}, ${B}, ${C}, ${D}`,saida:'Valores não aceitos'}])
    }

    setA("")
    setB("")
    setC("")
    setD("")
	}
  return (
    <>
      <Title>Desafio EJ</Title>
      <Form onSubmit={generateResultado}>
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
			<button type="submit">Resultado</button>
      </Form>
      <Table>
        <tr>
          <td>Entrada</td>
          <td>Saída</td>
        </tr>
        {
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
