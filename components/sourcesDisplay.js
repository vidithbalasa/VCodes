import React, { useState } from 'react';
import styles from '../styles/sourcesDisplay.module.css';

export default function SourcesDisplay({ sources }) {
  const [currSection, setCurrSection] = useState(Object.keys(sources)[0]);

  return (
    <main className={styles.main}>
      <h4 className={styles.title}>Relevant Sources:</h4>
      <div className={styles.sourcesContainer}>
        <div className={styles.sourcesTitles}>
          {
            Object.keys(sources).map((key, index) =>
              <div 
                className={`${styles.sourceTitle} ${currSection == key ? styles.selectedSourceTitle : ''}`}
                key={index}
                onClick={() => setCurrSection(key)}
              >
                <h4 className={styles.sourceTitleText}>
                  { key.split('-')[1] }
                </h4>
                <p className={styles.sourceTitleSubtext}>
                  { key.split('-')[0] }
                </p>
              </div>
            )
          }
        </div>
        <div className={styles.sourceContent}>
          {sources[currSection]}
        </div>
      </div>
    </main>
  )
}