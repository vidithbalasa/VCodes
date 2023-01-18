import { useEffect, useRef, useState } from "react";
import styles from '../styles/typewriterAnswer.module.css'


export default function Typewriter({ text, children }) {
  const [visibleText, setVisibleText] = useState('');
  let index = useRef(0);

  useEffect(() => {
    if (visibleText == text) return;
    setTimeout(()=>{
      setVisibleText(text.substring(0, index.current));
      index.current += 1;
    }, 30)
  }, [visibleText, text]);

  return (
    <>
      <div className={styles.textBox}>
        <h4 className={styles.text}>
          {/* {answer} */}
          {visibleText}
          {/* {text} */}
        </h4>
      </div>
      {/* {visibleText == text && children} */}
    </>
  )
}