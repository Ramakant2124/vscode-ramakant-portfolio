'use client';

import Link from 'next/link';
import { VscArrowRight, VscGithub, VscMail, VscCode } from 'react-icons/vsc';

import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.icon}>
              <VscCode size={32} />
            </div>
          </div>

          <div className={styles.intro}>
            <p className={styles.greeting}>Hello, I&apos;m</p>
            
            <h1 className={styles.name}>Ramakant Chaudhari</h1>
            
            <p className={styles.role}>Python Full Stack Developer</p>
            
            <div className={styles.divider} />
            
            <p className={styles.description}>
            Jr. Software Engineer | Full-Stack Developer (Python, Django, UI/UX, Oracle, HTML5, CSS3, JavaScript)
            I develop clean, efficient, and high-performance web applications using modern technologies. Focused on TypeScript,
            React, and Node.js, I enjoy building user-friendly products that deliver great experiences.
            </p>
          </div>

          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryAction}>
              <span>View Projects</span>
              <VscArrowRight size={18} />
            </Link>
            
            <Link href="/about" className={styles.secondaryAction}>
              <span>Learn More</span>
            </Link>
          </div>

          <div className={styles.links}>
            <a 
              href="https://github.com/Ramakant2124" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              <VscGithub size={16} />
              <span>GitHub</span>
            </a>
            
            <span className={styles.linkSeparator}>/</span>
            
            <Link href="/contact" className={styles.link}>
              <VscMail size={16} />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
