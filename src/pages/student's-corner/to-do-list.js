import React from "react"
import { Image } from "semantic-ui-react"
import GeneralComp from "../../components/generalComp"
import Layout from "../../components/layout"
import { todolist } from "../../data"
import "../../styles/to-do-list.css"
function ToDoList(props) {
  return (
    <div>
      <Layout>
        <h2 className="dark-color-head">To-do list</h2>
        <div>
          {todolist.map(todo => (
            <div className="todo">
              <div className="icon-head">
                <Image
                  src={require("../../images/flag.png")}
                  className="flag-icon"
                />
                <p className="normal-para">
                  {" "}
                  <strong>{todo.title}</strong> {todo.content}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p
          className="normal-para para-container"
          dangerouslySetInnerHTML={{
            __html: props.content,
          }}
        />
      </Layout>
    </div>
  )
}

export default ToDoList
