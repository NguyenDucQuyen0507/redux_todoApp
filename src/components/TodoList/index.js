import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import {
  todoSearchSelector,
  todosRemainingSelector,
} from "../../redux/selector";
import todoListSlice from "./todoListSlice";
//sinh ra một mã ngẫu nhiên
export default function TodoList() {
  const dispatch = useDispatch();
  //chứa dữ liệu input
  const [inputTodo, setInputToDo] = React.useState("");
  const [priority, setPriority] = React.useState("Medium");
  //h ta sẽ lấy dữ liệu chung từ reducer.js
  //Ta phải import useSlector từ redux
  // const todoList = useSelector((state) => state.todoList);
  //Nếu file nào cũng lấy dữ liệu ra như vậy thì khi thay đổi todolist ở reducer thì phải thay đổi tất cả.Nên h ta sẽ tạo một file riêng cũng gọi tới todoList
  // const todoList = useSelector(todoListSelector);
  //Khi đó thì todoList sẽ có tất cả dữ liệu
  //Bây h ta sẽ lấy dữ liệu từ ô Search
  const selectorText = useSelector(todoSearchSelector);
  //Vì bên selector ta đã dùng một phương thức mới từ reselect nên ta import nó vào và thay thế
  const todoPrioryty = useSelector((state) => state.filters.priority);
  const todoList = useSelector(todosRemainingSelector);
  const hanldeAddTodo = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: inputTodo,
        priority: priority,
        completed: false,
      })
    );
    setInputToDo(""); //
    setPriority("Medium");
  };
  const handleInputTodo = (event) => {
    setInputToDo(event.target.value);
  };
  const handlePriority = (value) => {
    console.log({ value });
    setPriority(value);
    //Vì trong <Select.Option value="High" label="High"> ta đã truyền value nên khi chọn select nào thì nó in ra value trong select đó
  };
  console.log({ todoList, selectorText });
  console.log("input", inputTodo);
  console.log(todoPrioryty);
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {/* <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" /> */}
        {todoList &&
          todoList.map((value, index) => (
            <Todo
              key={index}
              id={value.id}
              name={value.name}
              prioriry={value.priority}
              completed={value.completed}
            />
          ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={inputTodo} onChange={handleInputTodo} />
          <Select
            value={priority}
            onChange={handlePriority}
            // defaultValue="Medium"
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick={hanldeAddTodo} type="primary">
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
