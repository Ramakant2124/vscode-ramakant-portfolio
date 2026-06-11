import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'Ramakant.com',
    href: '#',
  },
  {
    social: 'email',
    link: 'chaudhari2124@gmail.com',
    href: 'mailto:chaudhari2124@gmail.com',
  },
  {
    social: 'github',
    link: 'Ramakant2124',
    href: 'https://github.com/Ramakant2124',
  },
  {
    social: 'linkedin',
    link: 'RamakantChaudhari482124',
    href: 'https://www.linkedin.com/in/ramakantchaudhari482124/',
  },
  {
    social: 'twitter',
    link: '@Ramakant2124',
    href: 'https://x.com/',
  },
  {
    social: 'digital-resume',
    link: 'Ramakant',
    href: 'https://unrivaled-alpaca-bc4a2f.netlify.app/',
  },
  {
    social: 'instagram',
    link: 'er_ramakant_3715',
    href: 'https://www.instagram.com/er_ramakant_3715?igsh=MWtzdmp5c2R1dHpzYw%3D%3D',
  },
  {
    social: 'facebook',
    link: 'chaudhari ramakant',
    href: 'https://www.facebook.com/ramakant.chaudhari.7547?rdid=JfJ7WvS6A4HxywiM&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F14Ecm4MUBgg%2F#',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
