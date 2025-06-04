'use client';

import React from 'react';
import { Card, Row, Col } from 'antd';
import Image from 'next/image';

const CardList = ({ items }) => {
  return (
    <Row gutter={[32, 32]}>
      {items.map((item, index) => (
        <Col xs={24} sm={12} md={8} key={index}>
          <Card
            hoverable
            cover={item.image && <div style={{ position: 'relative', width: '100%', height: '200px' }}><Image alt={item.title} src={item.image} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" /></div>}
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