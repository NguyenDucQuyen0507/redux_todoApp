import { Row, Tag, Checkbox } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { toggleTodoStatus } from "../../redux/actions";
import todoListSlice from "../TodoList/todoListSlice";
const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ id, name, prioriry, completed }) {
  console.log("props", completed);
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch();
  React.useEffect(() => {
    setChecked(completed);
  }, [completed]);
  //Dùng useEffect để cập nhật lại giá trị khi component thay đổi.
  //Nếu không dùng useEffect thì nó chỉ cập nhật giá trị 1 lần những lần sau nó không có sự thay đổi mặc dù props truyền vào đã thay đổi

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoListSlice.actions.toggleTodoStatus(id));
  };
  console.log("Boolean", checked);
  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {/*[prioriry] truy xuất đối tượng object dựa trên khóa key*/}
        {prioriry}
      </Tag>
    </Row>
  );
}
