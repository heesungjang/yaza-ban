import React from 'react'
import styled from 'styled-components'

const TodoContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
`
const Buttons = styled.button`
  margin-left: 10px;
`
const Todo = ({ title, content, id,arr,setArr }) => {
  const deleteTodo = (id) => {
     setArr(arr.filter(arrId => arrId.id !== id))
  }

  const updateTodo = (id) => {
    const newList = arr.map(arrId => ({
      ...arr,
      toggleClicked: arrId.id === id ? true : false
    }))
    console.log(newList)
  }
  return (
    <TodoContainer>
      <div>제목: {title}  내용: {content}</div>
      <div>
        <Buttons onClick={() => updateTodo(id)}>수정하기</Buttons>
        <Buttons onClick={()=>deleteTodo(id)}>삭제하기</Buttons>
        
      </div>
    </TodoContainer>
  )
}

export default Todo