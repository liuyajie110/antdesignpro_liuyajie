import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

export default (props) => (
    <PageHeaderWrapper>
         <div>
            美术宝父路由组件
            {props.children}
        </div>
    </PageHeaderWrapper>
)