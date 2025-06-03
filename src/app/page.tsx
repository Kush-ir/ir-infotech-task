import { Button, Row, Col } from 'antd';
import CardList from './CardList';

export default function Home() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <section style={{ textAlign: 'center', padding: '48px 0 32px 0' }}>
        <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 16 }}>Welcome to IR Infotech</h1>
        <p style={{ fontSize: 20, color: '#888', marginBottom: 32 }}>
          Building modern web solutions with Next.js & Ant Design
        </p>
        <Button type="primary" size="large" style={{ marginRight: 16 }}>
          Get Started
        </Button>
        <Button size="large" href="#features">
          Learn More
        </Button>
      </section>
      <section id="features" style={{ marginTop: 48 }}>
        <h2 style={{ fontSize: 32, fontWeight: 600, marginBottom: 24 }}>Features</h2>
        <CardList />
      </section>
    </main>
  );
}
