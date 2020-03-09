import React, { Fragment, useState } from "react";
import "./App.css";
import { Typography } from "antd";
import { Input } from "antd";
import { Row, Col } from "antd";
import { Button } from 'antd';
import {List} from 'antd';
const { Title } = Typography;

type FormElem = React.FocusEvent<HTMLFormElement>;
interface ITodo {
  text: string;
  complete: boolean;
}

function App() {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodo: ITodo[] = Array.from(todos);
    newTodo[index].complete = !newTodo[index].complete;
    setTodos(newTodo);
  };

  const removeTodo = (index: number): void => {
    const newTodo: ITodo[] = Array.from(todos);
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };
  const removeAll=():void=>{
    setTodos([]);
  }

  return (
    <Fragment>
      <Row gutter={[16,10]} style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Col span={12} style={{marginTop:"16px"}}>
          <Title level={1}>Pan's Todo List</Title>
        </Col>
         <Col xs={{span:18}} md={{span:20}} lg={{span:12}}>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={value}
            onChange={e => {
              setValue(e.target.value);
            }}
            allowClear
            required
          />
          <Button type="primary" htmlType="submit" ghost style={{width:'150px',marginTop:"16px"}}>Add Todo</Button>
          <Button type="primary" danger ghost style={{width:'150px',marginTop:"16px"}}onClick={()=>removeAll()} id="removeBtn">Remove All</Button>
        </form>
        </Col> 
        </Row>
        <Col lg={{span:8,offset:8}} xs={{span:18,offset:3}} md={{span:16,offset:4}}>
        <List itemLayout='horizontal'>
          {todos.map((todo: ITodo, index: number) => (
              <List.Item
                key={index}
                style={{textDecoration:todo.complete?'line-through':"",fontSize:'24px'}}
                actions={[<a key={index} onClick={() => completeTodo(index)} >{todo.complete ? "incompelete" : "Complete"}</a>,<a key={index} onClick={() => removeTodo(index)}> &times;</a>]}
               
              >
                {todo.text}
              </List.Item>
             
          ))}
        </List>
        </Col>
    </Fragment>
  );
}

export default App;
