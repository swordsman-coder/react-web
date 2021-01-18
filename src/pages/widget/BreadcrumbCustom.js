import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const BreadcrumbCustom = (props) => {
    const { breads } = props;
    return (
        <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>
                <Link to="/dashboard">首页</Link>
            </Breadcrumb.Item>
            {breads?.map((bread) => (
                <Breadcrumb.Item key={bread}>{bread}</Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
};

export default BreadcrumbCustom;