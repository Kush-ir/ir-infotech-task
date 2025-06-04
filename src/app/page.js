'use client';

import React from 'react';
import { Typography, Button } from 'antd';
import CardList from './CardList';
import styles from './page.module.css';
import Link from 'next/link';

const { Title, Paragraph } = Typography;

export default function Home() {
  const features = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies.',
      image: '/images/1.jpg',
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications.',
      image: '/images/2.jpg',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services.',
      image: '/images/3.jpg',
    },
  ];

  return (
    <main>
      <div className={styles.hero}>
        <Title level={1}>Welcome to IR Infotech</Title>
        <Paragraph className={styles.heroText}>
          We build innovative solutions for modern businesses
        </Paragraph>
        <div className={styles.ctas}>
          <Button type="primary" size="large">
            Get Started
          </Button>
          <Link href="/about">
            <Button size="large">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      <div id="features" className={styles.features}>
        <Title level={2}>Our Services</Title>
        <CardList items={features} />
      </div>
    </main>
  );
} 