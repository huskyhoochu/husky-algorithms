import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: '게을러서 만든 블로그',
    imageUrl: 'img/lazy.png',
    description: (
      <>
        알고리즘 책이다, 인강이다 돈만 쓰고 나아진 건 없는 제 자신이 답답해서 만들었습니다.
        저처럼 제자리걸음 중이신 다른 분들께 도움이 되는 블로그였으면 합니다.
      </>
    ),
  },
  {
    title: '어려워서 만든 블로그',
    imageUrl: 'img/hard.png',
    description: (
      <>
        동적계획법, 그리디, 해시 테이블... 눈으로 봐도 뭐가 뭔지 모르겠는 제 지식을 정리하기 위해 만들었습니다.
        지식이 필요하신 분들 함께 해요.
      </>
    ),
  },
  {
    title: '발전하고 싶어서 만든 블로그',
    imageUrl: 'img/growth.png',
    description: (
      <>
        그래도 블로그를 만든 건 어제보다는 조금이나마 나아지길 위해서겠죠. 이 블로그가 알고리즘 공부의 성지가 되는 그날까지
          열심해 해 보겠습니다!
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description="알고리즘 공부를 위해 만든 블로그">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              시작하기
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
