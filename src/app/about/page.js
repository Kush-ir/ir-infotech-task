'use client';

import React from 'react';
import { Typography, Row, Col, Card, Space, Avatar } from 'antd';
import { UserOutlined, TeamOutlined, RocketOutlined, TrophyOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
    },
    {
      name: 'Mike Johnson',
      role: 'Lead Developer',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    },
  ];

  const stats = [
    { icon: <TeamOutlined />, title: 'Team Members', value: '50+' },
    { icon: <RocketOutlined />, title: 'Projects Completed', value: '200+' },
    { icon: <TrophyOutlined />, title: 'Awards Won', value: '15+' },
  ];

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <Title level={1}>About IR Infotech</Title>
        <Paragraph style={{ fontSize: 18, maxWidth: 800, margin: '0 auto' }}>
          We are a leading technology company dedicated to transforming businesses through innovative solutions.
          With over a decade of experience, we've helped numerous organizations achieve their digital goals.
        </Paragraph>
      </div>

      {/* Stats Section */}
      <Row gutter={[32, 32]} style={{ marginBottom: 64 }}>
        {stats.map((stat, index) => (
          <Col xs={24} sm={8} key={index}>
            <Card hoverable>
              <Space direction="vertical" align="center" style={{ width: '100%' }}>
                <div style={{ fontSize: 32, color: '#1890ff' }}>{stat.icon}</div>
                <Title level={3} style={{ margin: 0 }}>{stat.value}</Title>
                <Paragraph style={{ margin: 0 }}>{stat.title}</Paragraph>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Mission Section */}
      <div style={{ marginBottom: 64 }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 32 }}>Our Mission</Title>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <Card>
              <Title level={4}>Vision</Title>
              <Paragraph>
                To be the global leader in innovative technology solutions, empowering businesses to thrive in the digital age.
                We envision a world where technology seamlessly enhances human potential and drives sustainable growth.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card>
              <Title level={4}>Values</Title>
              <Paragraph>
                Our core values include innovation, integrity, excellence, and customer-centricity. We believe in
                creating lasting partnerships with our clients and delivering solutions that exceed expectations.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Team Section */}
      <div>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 32 }}>Our Leadership Team</Title>
        <Row gutter={[32, 32]}>
          {teamMembers.map((member, index) => (
            <Col xs={24} sm={8} key={index}>
              <Card hoverable>
                <Space direction="vertical" align="center" style={{ width: '100%' }}>
                  <Avatar size={100} src={member.avatar} />
                  <Title level={4} style={{ margin: 0 }}>{member.name}</Title>
                  <Paragraph style={{ margin: 0 }}>{member.role}</Paragraph>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
} 