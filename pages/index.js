import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { httpsCallable } from "firebase/functions";
import { functions } from '../firebase.config';
import CodebookSelection from '../components/codebookSelection';
import Typewriter from '../components/typewriter';

export default function Home() {
  const [selectedCodebooks, setSelectedCodebooks] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState('');
  const [sources, setSources] = useState([]);

  const generateAnswer = () => {
    if(selectedCodebooks.length === 0) { 
      alert('Please select at least one codebook'); return 
    }
    if(query === '') { alert('Please enter a question'); return }

    setAnswer('');
    setSources([]);
    setLoading(true);

    const QA = httpsCallable(functions, 'qa-temp');
    QA({codebooks: selectedCodebooks, query: query})
      .then((result) => {
        console.log(result.data)
        setAnswer(result.data.answer);
        setSources(result.data.sources);
        setLoading(false);
      })
      .catch((error) => {console.log(error)})
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={`${styles.title} ${styles.header}`}>Untitled Codebook Demo</h1>
        <h5 className={`${styles.subtitle} ${styles.header}`}>
          Tools for the <span className={styles.blueSubtext}>Modern Architect</span>
        </h5>
        <div className={styles.conrainer}>
          <CodebookSelection 
            selectedCodebooks={selectedCodebooks}
            setSelectedCodebooks={setSelectedCodebooks}
          />
          <div className={styles.queryContainer}>
            <div className={styles.queryBox}>
              <label className={styles.queryLabel}>Ask a Question</label>
              <div className={styles.queryInputBox}>
                <input 
                  type="text" name="query"
                  placeholder="What's the difference between a second story and a mezzanine?" 
                  className={styles.queryInput} value={query} onChange={(e) => setQuery(e.target.value)}
                />
                <button className={styles.queryButton} onClick={generateAnswer}>Generate Answer</button>
              </div>
            </div>
          </div>
          {answer && <Typewriter text={answer} />}
          {sources.length > 0 && (
            <div className={styles.sourcesBox}>
              Relevant Sections:
              <div className={styles.sources}>
                {sources.join(' || ')}
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
