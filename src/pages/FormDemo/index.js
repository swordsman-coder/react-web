/*
 * @Autor: zjq
 * @Description: 
 * @Version: 1.0
 * @Date: 2021-01-18 10:07:30
 * @LastEditors: zjq
 * @LastEditTime: 2021-01-18 13:48:35
 * @FilePath: /react-web/src/pages/FormDemo/index.js
 */
import React, { useEffect, useMemo } from 'react';
import { Table, Button, Switch, Row, Divider } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';

import Store from './store';
import NewModal from './newModal';
import SearchForm from './SearchForm';
import './style.less';

const FormDemoPage = () => {
  const pageStore = React.useContext(Store);
  // console.log(pageStore);
  // 页面加载获取数据
  useEffect(() => {
    pageStore.qryTableDate();
  }, []);

  const columns = useMemo(
    () => [
      {
        title: 'Id',
        dataIndex: 'id',
        ellipsis: true,
      },
      {
        title: '描述',
        dataIndex: 'description',
        ellipsis: true,
      },
      {
        title: '是否删除',
        dataIndex: 'isDel',
        width: 100,
        render: (text, record, index) => (
          <div>
            <Switch
              checkedChildren="正常"
              unCheckedChildren="停用"
              checked={text}
              loading={record.statusLoading}
              onChange={(type) => pageStore.statusChange(type, record, index)}
            />
          </div>
        ),
      },
      {
        title: '创建时间',
        dataIndex: 'createDate',
        width: 185,
      },
      {
        title: '操作',
        dataIndex: 'operation',
        width: 150,
        render: (text, record) => (
          <Row type="flex" align="middle" className="operation">
            <Button type="link" disabled={record.status} onClick={() => pageStore.openModal('edit', record)}>
              编辑
            </Button>
            <Divider type="vertical" />
            <Button
              type="link"
              disabled={record.status}
              onClick={() => pageStore.delOne(record.id)}
              loading={pageStore.recordLoding}
            >
              删除
            </Button>
          </Row>
        ),
      },
    ],
    [pageStore],
  );

  return (
    <div className="page-form-demo page-content">
      <SearchForm />
      <Divider dashed />
      <Button type="primary" icon={<PlusOutlined />} onClick={() => pageStore.openModal('new')}>
        新建
      </Button>
      <Table
        style={{ paddingTop: '20px' }}
        loading={pageStore.loading}
        columns={columns}
        dataSource={toJS(pageStore.tableData)}
        rowKey="id"
        pagination={toJS(pageStore.pagination)}
      />
      <NewModal />
    </div>
  );
};

export default observer(FormDemoPage);
