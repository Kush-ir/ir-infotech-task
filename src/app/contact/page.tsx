'use client';
import { useState, useEffect } from 'react';
import { List, Card, Spin } from 'antd';

const contacts = [
  {
    name: 'Amit Sharma',
    role: 'CEO',
    email: 'amit.sharma@company.com',
    phone: '+91 98765 43210',
  },
  {
    name: 'Priya Verma',
    role: 'CTO',
    email: 'priya.verma@company.com',
    phone: '+91 91234 56789',
  },
  {
    name: 'Rahul Singh',
    role: 'Business Manager',
    email: 'rahul.singh@company.com',
    phone: '+91 99887 66554',
  },
  {
    name: 'Sneha Patel',
    role: 'HR Head',
    email: 'sneha.patel@company.com',
    phone: '+91 90000 12345',
  },
];

export default function Contact() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 32 }}>Our Contacts</h2>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 40 }}>
          <Spin size="large" />
        </div>
      ) : (
        <List
          grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 2, xl: 2, xxl: 2 }}
          dataSource={contacts}
          renderItem={item => (
            <List.Item>
              <Card title={item.name} variant="borderless" style={{ minHeight: 180 }}>
                <p><strong>Role:</strong> {item.role}</p>
                <p><strong>Email:</strong> {item.email}</p>
                <p><strong>Phone:</strong> {item.phone}</p>
              </Card>
            </List.Item>
          )}
        />
      )}
    </main>
  );
} 