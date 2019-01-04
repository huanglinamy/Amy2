import React from 'react';
import { Table, Divider, Tag, Modal, notification, Button } from 'antd';
import './List.scss';
import {connect} from 'dva';


const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

const columns = [{
  title: 'ID',
  dataIndex: 'id',
  key: 'id',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'City',
  dataIndex: 'city',
  key: 'city',
}, {
  title: 'Pic',
  key: 'pic',
  dataIndex: 'pic',
  render: pic => (
    <span>
      {pic.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
  ),
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Invite {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
  ),
}, {
  title: 'More',
  key: 'more',
  render: (text, record) => (
    <span>
      <a href="javascript:;">data:{JSON.stringify(record)}</a>
      <Divider type="vertical" />
      <a href="javascript:void(0);" onClick={this.showModal}>Edit</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  id: '1',
  name: '西北旺地铁',
  address: '北京市西北旺地铁站',
  city: '北京',
  pic: ['n'],
}, {
  key: '2',
  id: '2',
  name: '东北旺店',
  address: '北京市东北旺站店',
  city: '上海',
  pic: ['g'],
}, {
  key: '3',
  id: '3',
  name: '南北旺铁',
  address: '北京市南北旺地铁',
  city: '广州',
  pic: ['c'],
}, {
  key: '4',
  id: '4',
  name: '西北旺地',
  address: '北京市西北旺地铁',
  city: '东京',
  pic: ['n'],
}, {
  key: '5',
  id: '5',
  name: '南北旺',
  address: '北京市南北旺',
  city: '海南',
  pic: ['g'],
}, {
  key: '6',
  id: '6',
  name: '东北旺角',
  address: '北京市东北旺地铁站',
  city: '太原',
  pic: ['g'],
}, {
  key: '7',
  id: '7',
  name: '东北旺',
  address: '北京市东北旺地铁站',
  city: '太原',
  pic: ['g'],
}, {
  key: '8',
  id: '8',
  name: '东北旺角',
  address: '北京市东北旺地铁站',
  city: '太原',
  pic: ['n'],
}];


@connect((state)=>{
  console.log(state)
  return state.rend
},(dispatch)=>{
  return {
    rendlist:(payload)=>{
      dispatch({
        type:'rend/getList'
      })
    }
  }
})
class ShopList extends React.PureComponent {
  componentDidMount(){
    this.props.rendlist()
  }
  columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: '门店名称',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '城市',
    dataIndex: 'city',
    key: 'city',
  }, {
    title: '门店图片',
    key: 'pic',
    dataIndex: 'pic',
    render: pic => (
      <span>
        {pic.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
      </span>
    ),
  }, {
    title: '门店状态',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">{record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    ),
  }, {
    title: '操作',
    key: 'more',
    render: (text, record) => (
      <span>
        {/* <a href="javascript:;">data:{JSON.stringify(record)}</a> */}
        <a href="javascript:void(0);" onClick={this.showModal}>编辑</a>
        <Divider type="vertical" />
        {/* <a href="javascript:void(0);">关闭</a> */}
        <a href="javascript:;">关闭</a>
      </span>
    ),
  }];
  state = {
    visible: false
  }
  getList
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  hideModal = () => {
    this.setState({
      visible: false,
    });
  }
  render() {
    return <React.Fragment>
      <Table columns={this.columns} dataSource={data} pagination={{ pageSize: 8 }}></Table>
      <Modal
        title="Modal"
        visible={this.state.visible}
        onOk={this.hideModal}
        onCancel={this.hideModal}
        okText="保存"
        cancelText="取消"
      >
        <div className="model">
          <div>
            <span>*</span>门店名称:
           <input type="text" placeholder="请输入" />
          </div>
          <div>
            <span>*</span>住址:
           <input type="text" placeholder="请输入" />
          </div>
          <div>
            <span>*</span>城市:
           <input type="text" placeholder="北京市" />
          </div>
          <div>
            <span>*</span>门店状态:
           <input type="text" placeholder="正常营业" />
          </div>
          <div>
            <span>*</span>门店信息:
           <input type="text" placeholder="靠近各大地铁站的书籍租赁点方便广大用户租书捐书让知识传播开来" />
          </div>
        </div>
      </Modal>
      <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
      <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
      <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
      <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
    </React.Fragment>
  }
}


export default ShopList;
