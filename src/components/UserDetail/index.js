import React from "react";
import { Image, Card, Row, Col } from "antd";

import FormEdit from "./FormEdit";
const { Meta } = Card;
const UserDetail = ({ data }) => {
  return (
    <Row align="middle" style={{ backgroundColor: "white" }}>
      <Col xs={24} md={7}>
        <Card
          cover={<Image src={data.avatar} />}
          loading={!data.id}
        >
          <Meta
            title={`${data.id} - ${data.first_name} ${data.last_name}`}
            description={data.email}
            style={{ textAlign: "center" }}
          />
        </Card>
      </Col>
      <Col xs={24} md={17}>
        <FormEdit data={data} />
      </Col>
    </Row>
  );
};

UserDetail.defaultProps = {
  data: {},
};

export default UserDetail;
