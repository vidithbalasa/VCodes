import { useEffect, useRef, useState } from "react";
import styles from '../styles/typewriterAnswer.module.css'

export default function Typewriter({ text, children }) {
  const [visibleText, setVisibleText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (visibleText.length >= text.length) return;
    setTimeout(()=>{
      setVisibleText(curr => curr + text.charAt(index));
      setIndex(curr => curr + 1);
    }, 30)
  }, [visibleText, text, index, setIndex]);

  return (
    <>
      <div className={styles.textBox}>
        <h4 className={styles.text}>
          {visibleText}
        </h4>
      </div>
      {visibleText == text && children}
    </>
  )
}