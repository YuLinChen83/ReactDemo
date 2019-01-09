import React from 'react'

const TodoInput = ({ addTodo, allDone }) => {
  let input;
  return (
    <div className="container">
      <form className="form-inline"
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          addTodo(input.value)
          input.value = ''
        }}
      >
        <div className="row">
          <input className="form-control col-md-8"
            ref={node => {
              input = node
            }}
            placeholder="Add todo"
          />
          <button type="submit" className="btn btn-primary form-control col-md-2">新增待辦</button>
          <button id="checkAll" className="btn btn-success form-control col-md-2" onClick={allDone}>全部完成</button>
        </div>
      </form>
    </div>
  )
}

export default TodoInput;