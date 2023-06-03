import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import {
  addFilterChange,
  addFilterPriorities,
  addFilterStatus,
} from "../../redux/actions";
import filterSlice from "./filtersSlice";
const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchText] = React.useState("");
  const [filterStatus, setFilterStatus] = React.useState("All");
  //Vì mình có thể chọn nhiều priority nên ta sẽ xét nó vào mảng
  const [filterPriorities, setFilterPriorities] = React.useState([]);

  const dispatch = useDispatch();
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    dispatch(filterSlice.actions.addFilterChange(e.target.value));
  };

  const handleStatusChange = (e) => {
    console.log({ e });
    setFilterStatus(e.target.value);
    dispatch(filterSlice.actions.addFilterStatus(e.target.value));
  };
  console.log(searchText);
  const handlePriory = (value) => {
    console.log({ value });
    setFilterPriorities(value);
    dispatch(filterSlice.actions.addFilterPriorities(value));
  };
  console.log("Priory: ", filterPriorities);
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          value={searchText}
          onChange={handleSearch}
          placeholder="input search text"
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleStatusChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          //cho phép chọn nhiều giá trị
          allowClear
          //cho phép xóa giá trị
          placeholder="Please select"
          style={{ width: "100%" }}
          value={filterPriorities}
          onChange={handlePriory}
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
      </Col>
    </Row>
  );
}
