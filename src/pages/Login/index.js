import React from 'react';
import { useHistory } from 'react-router-dom';
import { message } from 'antd';

import './style.less';

const LoginPage = () => {
  const history = useHistory();
  message.success('即将前往sso，即将跳转...', 2);
    setTimeout(() => {
      history.push('http://log-ops.ezrpro.cn/#/login');
    }, 1000);

  return (
    <div className="page-login" />
  );
};

export default LoginPage;
