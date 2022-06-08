import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import ApiManagementIcon from '@site/static/img/api-management.svg'
import SproutIcon from '@site/static/img/sprout.svg'
import DollarIcon from '@site/static/img/dollar.svg'

const FeatureList = [
  {
    title: 'API',
    Svg: ApiManagementIcon,
    description: (
      <>
        Make it your own with our fully customizable platform.
      </>
    ),
  },
  {
    title: 'Carbon Neutral',
    Svg: SproutIcon,
    description: (
      <>
        Worried about the environmental impact?
        We are built on NEAR Protocol, a Climate-Neutral platform.
      </>
    ),
  },
  {
    title: 'Transaction Fees',
    Svg: DollarIcon,
    description: (
      <>
        There are no transaction fees on our platform. Start collecting at no cost!
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
