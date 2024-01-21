import React from 'react';
import { Result, Button, Space } from 'antd';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Space style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to="/">
          <Button type="primary">Back to Home</Button>
        </Link>
      }
    />
    </Space>
  );
};

export default ErrorPage;
