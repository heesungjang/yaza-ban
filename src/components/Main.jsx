import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import Todo from './Todo'

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: beige;
  padding: 5rem;

`


const Main = () => {
  const [text, setText] = useState('')
  const [arr, setArr] =useState([])

  const inputOnchange = (e) => {
    const { value, name } = e.target
    setText({
      ...text,
      id: Date.now(),
      [name]: value,
      toggleClicked: false
    })
  }
 
  const addText = (e) => {
    e.preventDefault();
    if (text.title === '' || text.content ==="") {return
  }
    setArr([
      ...arr,
      text,
    ]);
    setText({title:'',content:''})
  }
  
  return (
    <MainContainer>
      <form onSubmit={addText}>
        <input type="text" value={text.title} placeholder='제목' name="title" onChange={inputOnchange} />  
        <input type="text" value={text.content}  placeholder='내용' name="content" onChange={inputOnchange} /> 
        <button>추가하기</button>
      </form>
      <div  style={{marginTop: '20px'}}>
        {arr.map((todo,i) =>
          <Todo title={todo.title} content = {todo.content} key={i} id={todo.id} arr={arr} setArr={setArr}
          />
          )
        }
        
      </div>
    </MainContainer>
  )
}

export default Main