import React from 'react';
import { Timeline, Button } from 'antd';
import { style } from './msbchildren.less'
import { connect } from 'dva';


const msbchildren = (props)=>{
    const baby = ()=>{
         props.dispatch({
            type: 'msbAdmin/msb',
            payload: '美术宝前端dva工具',
         })
    }
    return (
        <div>
        美术宝子路由组件
        <div style={{'marginTop':'100px'}}>
            <Timeline>
                <Timeline.Item>2019.12开始着手整理文档</Timeline.Item>
                <Timeline.Item>期间走访大家使用习惯</Timeline.Item>
                <Timeline.Item>在antdesignpro的基础上修改代码（目标就是简单易懂，上手快）</Timeline.Item>
                <Timeline.Item>2019.12写出代码和文档</Timeline.Item>
                <Timeline.Item>结束</Timeline.Item>
            </Timeline>
        </div>
        <p>我是dva</p>
        <Button type="primary" onClick={baby}>来吧宝贝点我</Button>
        <p>{props.msbAdmin}</p>
    </div>
    )
}
export default connect(({ msbAdmin }) => ({
    msbAdmin,
}))(msbchildren);
