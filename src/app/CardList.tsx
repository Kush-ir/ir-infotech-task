'use client';
import { Card, List } from 'antd';

const data = [
  {
    title: 'Fast Development',
    description: 'Leverage Next.js and Ant Design for rapid web development.',
  },
  {
    title: 'Modern UI',
    description: 'Beautiful, responsive components out of the box with Ant Design.',
  },
  {
    title: 'SEO Friendly',
    description: 'Next.js provides server-side rendering and SEO optimizations.',
  },
  {
    title: 'Reusable Components',
    description: 'Build and reuse UI components efficiently.',
  },
];

export default function CardList() {
  return (
    <List
      grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 4, xl: 4, xxl: 4 }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Card title={item.title}>{item.description}</Card>
        </List.Item>
      )}
    />
  );
} 