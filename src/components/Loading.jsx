import React from 'react';
import { Flex, Spin } from 'antd';
const Loading = ({ statusLoading }) => (
    <div style={{textAlign:'center', margin: 0}}>
        <Flex align="center" gap="middle">
            {statusLoading && <Spin size="large" />}
        </Flex>
    </div>
);
export default Loading;