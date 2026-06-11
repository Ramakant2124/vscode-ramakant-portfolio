import { Metadata } from 'next';
import { VscBook, VscLinkExternal, VscGlobe } from 'react-icons/vsc';

import ArticleCard from '@/components/ArticleCard';

import { Article } from '@/types';

import styles from '@/styles/ArticlesPage.module.css';

export const metadata: Metadata = {
  title: 'Articles',
};

export const revalidate = 60;

async function getArticles(): Promise<Article[]> {
  const res = await fetch(
    'https://dev.to/api/articles/me/published?per_page=6',
    {
      headers: {
        'api-key': process.env.DEV_TO_API_KEY!,
      },
    }
  );

  if (!res.ok) {
    console.error(`Failed to fetch articles: ${res.status} ${res.statusText}`);
    return [];
  }

  return res.json();
}

export default async function ArticlesPage() {
  const articles = await getArticles();
  const totalViews = articles.reduce((sum, article) => sum + article.page_views_count, 0);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerMain}>
            <div className={styles.iconWrapper}>
              <VscBook className={styles.icon} size={24} />
            </div>
            
            <div className={styles.headerContent}>
              <div className={styles.headerTop}>
                <h1 className={styles.title}>Articles</h1>
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <VscGlobe size={14} />
                    <span>{articles.length} posts</span>
                  </div>
                  <div className={styles.divider} />
                  <div className={styles.stat}>
                    <span>{totalViews.toLocaleString()} views</span>
                  </div>
                </div>
              </div>
              
              <p className={styles.subtitle}>
                I write about web development, sharing insights, tutorials, and lessons learned from building real-world applications.
              </p>
            </div>
          </div>

<div className={styles.linksRow}>
  <a
    href="https://drive.google.com/file/d/1A1WL0pvCM_NZiSZmfPc_24we4vzcqYTz/view"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.profileLink}
  >
    <span>Artificial Neural Network</span>
    <VscLinkExternal size={14} />
  </a>
<br></br>
  <a
    href="https://drive.google.com/file/d/1A54m14_py3En-fJT9tp4sHDad0UmuLqF/view"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.profileLink}
  >
    <span>AI in Industries</span>
    <VscLinkExternal size={14} />
  </a>
</div>
    
        </header>

        <div className={styles.articlesList}>
          {articles.map((article, index) => (
            <ArticleCard 
              key={article.id} 
              article={article}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
