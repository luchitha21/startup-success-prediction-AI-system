import React from "react";
import { Row, Col, Divider, Space, Tag } from "antd";
import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const CompanyProfile = ({ data }) => {
  return (
    <div className="form">
      <img src={data?.data?.organization?.logo_url}></img>
      <br />
      <h1>{data?.data?.organization?.name}</h1>
      <br />
      <h2>Company Description</h2>
      <p>{data?.data?.organization?.short_description}</p>
      <br />
      <Row gutter={24}>
        <Col span={5}>
          <h2>Industry</h2>
          <p>{data?.data?.organization?.industry}</p>
        </Col>
        <Divider type="vertical" />
        <Col span={5}>
          <h2>Address</h2>
          <p>{data?.data?.organization?.raw_address}</p>
        </Col>
        <Divider type="vertical" />
        <Col span={5}>
          <h2>Founded Year</h2>
          <p>{data?.data?.organization?.founded_year}</p>
        </Col>
        <Divider type="vertical" />
        <Col span={5}>
          <h2>Employees</h2>
          <p>{data?.data?.organization?.estimated_num_employees}</p>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row gutter={24}>
        {data?.data?.organization?.annual_revenue && (
          <Col span={5}>
            <h2>Annual Revenue</h2>
            <p>{data?.data?.organization?.annual_revenue} $</p>
          </Col>
        )}
        <Divider type="vertical" />
        {data?.data?.organization?.annual_revenue && (
          <Col>
            <h2>Total Funding</h2>
            <p>{data?.data?.organization?.total_funding} $</p>
          </Col>
        )}
      </Row>
      <br />
      <br />
      <Row>
        <Col>
          <h2>Socials</h2>
          <Space size={[0, 8]} wrap>
            <Tag icon={<TwitterOutlined />} color="#55acee">
              Twitter
            </Tag>
            <Tag icon={<FacebookOutlined />} color="#3b5999">
              Facebook
            </Tag>
            <Tag icon={<LinkedinOutlined />} color="#55acee">
              LinkedIn
            </Tag>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default CompanyProfile;
