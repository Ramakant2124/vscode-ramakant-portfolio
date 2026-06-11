import Tab from '@/components/Tab';

import styles from '@/styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/logos/html_icon.svg" filename="home.html" path="/" />
      <Tab icon="/logos/react_icon.svg" filename="about.tsx" path="/about" />
      <Tab icon="/logos/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/logos/js_icon.svg" filename="projects.js" path="/projects" />
      <Tab
        icon="/logos/json_icon.svg"
        filename="articles.json"
        path="/articles"
      />
      <Tab
        icon="/logos/markdown_icon.svg"
        filename="github-profile.md"
        path="/github"
      />
    </div>
  );
};

export default Tabsbar;
