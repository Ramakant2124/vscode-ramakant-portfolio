'use client';

import { VscGithub, VscMail, VscLinkExternal } from 'react-icons/vsc';
import Link from 'next/link';

import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Ramakant Chaudhari</h1>
              <p className={styles.role}>Python FullStack Developer</p>
              <div className={styles.location}>
                <span className={styles.dot} />
              Kasoda, Maharashtra
              </div>
            </div>
          </div>
          
          <div className={styles.headerActions}>
            <a 
              href="https://github.com/Ramakant2124" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* Bio Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                Junior Software Engineer | Full-Stack Developer
              </p>
              <p className={styles.paragraph}>
                I am a passionate Full-Stack Developer with experience in Python, Django, React, JavaScript, HTML5, CSS3, Oracle, MongoDB, and SQLite3. 
                I enjoy building scalable, user-friendly,
                and high-performance web applications that deliver exceptional user experiences.
              </p>
              
              <p className={styles.paragraph}>
                My expertise spans both frontend and backend development. On the frontend, I create responsive and intuitive interfaces using React,
                JavaScript, HTML5, and CSS3, with a strong focus on UI/UX design principles. On the backend, I develop robust applications using Python and Django,
                while working with databases such as MongoDB, Oracle, and SQLite3.
              </p>  
              <p className={styles.paragraph}>
                I am committed to writing clean, maintainable code and continuously learning new technologies to build innovative digital solutions that users love to use.
              </p>
            </div>
          </section>

          {/* Education Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Education</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>G H Raisoni College Of Engineering And Management, Jalgaon - Maharashtra</span>
                </div>
                <h3 className={styles.expRole}>Master of Computer Applications <strong> (MCA)</strong></h3>
                
                <p className={styles.expDesc}>CGPA :<strong>9.32</strong>. </p>
                <p className={styles.expDesc}>YEAR :<strong>2025-2027</strong>. </p>
              </div>

            <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>G H Raisoni College Of Engineering And Management, Jalgaon - Maharashtra</span>
                </div>
                <h3 className={styles.expRole}>Bachelor of Computer Applications  <strong> (BCA)</strong></h3>
                
                <p className={styles.expDesc}>CGPA :<strong>8.20</strong>. </p>
                <p className={styles.expDesc}>YEAR :<strong>2022-2025</strong>. </p>
              </div>
            <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>D.D.S.P College, Erandol - Maharashtra</span>
                </div>
                <h3 className={styles.expRole}>Higher Secondary Education <strong> (HSC)</strong></h3>
                
                <p className={styles.expDesc}>Percentile :<strong>64.67%</strong>. </p>
                <p className={styles.expDesc}>YEAR :<strong>2020-2022</strong>. </p>
              </div>
            <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Bharthi Vidya Mandir, Kasoda - Maharashtra </span>
                </div>
                <h3 className={styles.expRole}>Secondary Education <strong> (SSC)</strong></h3>
                
                <p className={styles.expDesc}>Percentile :<strong>82.40%</strong>. </p>
                <p className={styles.expDesc}>YEAR :<strong>2019-2020</strong>. </p>
              </div>    
            </div>
          </section>  

          {/* Experience Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Experience</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>April 12, 2025 – October 12, 2025 </span>
                </div>
                <h3 className={styles.expRole}>Python Full-Stack Developer Intern</h3>
                <p className={styles.expCompany}>Adhyayan PVT.LTD</p>
                <ul className={styles.expList}>
                  <li>Developed and maintained web applications using Python and Django framework.</li>
                  <li>Designed responsive and user-friendly interfaces using HTML5, CSS3, JavaScript, and React.</li>
                </ul>
              </div>

            
            </div>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>
            
            <div className={styles.sectionBody}>
  <div className={styles.skillsGrid}>
    
    <div className={styles.skillCategory}>
      <h4 className={styles.skillTitle}>Programming Languages</h4>
      <div className={styles.skillTags}>
        <span className={styles.skillTag}>Python</span>
        <span className={styles.skillTag}>JavaScript</span>
        <span className={styles.skillTag}>SQL</span>
      </div>
    </div>

    <div className={styles.skillCategory}>
      <h4 className={styles.skillTitle}>Frontend Development</h4>
      <div className={styles.skillTags}>
        <span className={styles.skillTag}>React</span>
        <span className={styles.skillTag}>HTML5</span>
        <span className={styles.skillTag}>CSS3</span>
        <span className={styles.skillTag}>UI/UX</span>
      </div>
    </div>

    <div className={styles.skillCategory}>
      <h4 className={styles.skillTitle}>Backend Development</h4>
      <div className={styles.skillTags}>
        <span className={styles.skillTag}>Django</span>
        <span className={styles.skillTag}>Flask</span>
        <span className={styles.skillTag}>Node.js</span>
      </div>
    </div>

    <div className={styles.skillCategory}>
      <h4 className={styles.skillTitle}>Databases</h4>
      <div className={styles.skillTags}>
        <span className={styles.skillTag}>Oracle</span>
        <span className={styles.skillTag}>SQLite3</span>
        <span className={styles.skillTag}>SQL</span>
      </div>
    </div>

    <div className={styles.skillCategory}>
      <h4 className={styles.skillTitle}>Tools & Platforms</h4>
      <div className={styles.skillTags}>
        <span className={styles.skillTag}>Git</span>
        <span className={styles.skillTag}>GitHub</span>
        <span className={styles.skillTag}>VS Code</span>
        <span className={styles.skillTag}>Pycharm</span>
        <span className={styles.skillTag}>Python IDLE</span>
      </div>
    </div>
    <div className={styles.skillCategory}>
  <h4 className={styles.skillTitle}>Libraries </h4>
  <div className={styles.skillTags}>
    <span className={styles.skillTag}>Pandas</span>
    <span className={styles.skillTag}>NumPy</span>
  </div>
</div>
  </div>
</div>
          </section>

          {/* research paper Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>05</span>
              <h2 className={styles.sectionTitle}>Research Paper</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                As a freelance technical author, I have authored technical content for various recognized publications.

              </p>
              
              <div className={styles.writingLinks}>
                <a 
                  href="https://drive.google.com/file/d/1A1WL0pvCM_NZiSZmfPc_24we4vzcqYTz/view" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>Artificial Neural Network</span>
                  <VscLinkExternal size={14} />
                </a>
                
                <a 
                  href="https://drive.google.com/file/d/1A54m14_py3En-fJT9tp4sHDad0UmuLqF/view" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.writingLink}
                >
                  <span>AI in Industries</span>
                  <VscLinkExternal size={14} />
                </a>
                
              </div>
            </div>
          </section>

        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            View my projects →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
