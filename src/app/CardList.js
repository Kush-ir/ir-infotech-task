'use client';

import React from 'react';
import { Card, Row, Col } from 'antd';

const CardList = ({ items }) => {
  return (
    <Row gutter={[32, 32]}>
      {items.map((item, index) => (
        <Col xs={24} sm={12} md={8} key={index}>
          <Card
            hoverable
            cover={item.image && <img alt={item.title} src={item.image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />}
          >
            <Card.Meta
              title={item.title}
              description={item.description}
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardList; 