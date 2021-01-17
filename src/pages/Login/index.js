import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Checkbox, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';

import { appStores } from '@/stores';
import './style.less';

const LoginPage = () => {
  const history = useHistory();
  const { globalStore } = appStores();

  // const handleSubmit = (values) => {
  //   console.log('登录信息 ', values);
  //   message.success('即将前往sso，即将跳转...', 2);
  //   setTimeout(() => {
  //     history.push('http://log-ops.ezrpro.cn/#/login');
  //   }, 1000);
  // };
  message.success('即将前往sso，即将跳转...', 2);
    setTimeout(() => {
      history.push('http://log-ops.ezrpro.cn/#/login');
    }, 1000);

  return (
    <div className="page-login"/>
  );
};

export default observer(LoginPage);
