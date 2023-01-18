import styles from '../styles/codebookSelection.module.css';

export default function CodebookSelection({ selectedCodebooks, setSelectedCodebooks }) {
  const CODEBOOKS = [
    'CA Building Code', 'CA Energy Code', 'CA Existing Building Code',
    'CA Fire Code', 'CA Green Code', 'CA Historic Building Code',
    'CA Plumbing Code'
  ]

  const selectAll = () => {
    if (selectedCodebooks.length === CODEBOOKS.length) {
      setSelectedCodebooks([])
    } else {
      setSelectedCodebooks(CODEBOOKS)
    }
  }

  const selectBook = (e) => {
    if (e.target.checked) {
      setSelectedCodebooks([...selectedCodebooks, e.target.value])
    } else {
      setSelectedCodebooks(selectedCodebooks.filter((cb) => cb !== e.target.value))
    }
  }

  return (
    <div className={styles.selectors}>
      <button className={styles.selectAll} onClick={selectAll}>
        {selectedCodebooks.length === CODEBOOKS.length ? 'Unselect All' : 'Select All'}
      </button>
      <div className={styles.codebookSelectors}>
        {
          CODEBOOKS.map((codebook, index) => {
            return (
              <div key={index} className={styles.checkbox}>
                <input 
                  type="checkbox" id={codebook}
                  name={codebook} value={codebook}
                  checked={selectedCodebooks.includes(codebook)}
                  onChange={selectBook}
                />
                <label>{codebook}</label>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}