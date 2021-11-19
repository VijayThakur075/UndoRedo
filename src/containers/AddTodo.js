import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import {Form, Button} from "react-bootstrap"
import { useRef } from 'react'

let AddTodo = ({ dispatch }) => {
  let input
  let desc;


  const handleSubmit = (e)=>{
    e.preventDefault()
    if (!input.value.trim()) {
      return
     
    }
     
    dispatch(addTodo(input.value))
    input.value = ''
    dispatch(addTodo(desc.value))
    desc.value = ''
  }

  return (
    <div>
      <Form onSubmit={(e) => handleSubmit(e)}>
        title:
        <input type="text" ref={node => {
          input = node
        }} />
        description:
        <input type="text" ref={node => {
          desc = node
        }} />
        <Button type="submit">
          Add Todo
        </Button>
      </Form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
