import { useState } from 'react'
import styles from './Calc.module.css'

type Theme = 1 | 2 | 3

const Calc = () => {
  const [theme, setTheme] = useState<Theme>(1)

  return (
    <main className={`${styles.app} ${theme === 2 ? styles.theme2 : ''} ${theme === 3 ? styles.theme3 : ''}`}>
      <div className={styles.themeControl}>
        <div className={styles.themePicker}>
          <div className={styles.themeNumbers}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className={styles.themeSwitch} role="radiogroup" aria-label="Háttérszín témája">
            {[1, 2, 3].map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name="theme"
                  value={option}
                  checked={theme === option}
                  onChange={() => setTheme(option as Theme)}
                />
                <span className={styles.switchDot} />
              </label>
            ))}
          </div>
        </div>
      </div>

        <div className={styles.calc}>
            <div className={styles.display}>7</div>
            <div className={styles.display}>8</div>
            <div className={styles.display}>9</div>
            <div className={styles.display}>del</div>
            <div className={styles.display}>4</div>
            <div className={styles.display}>5</div>
            <div className={styles.display}>6</div>
            <div className={styles.display}>+</div>
            <div className={styles.display}>1</div>
            <div className={styles.display}>2</div>
            <div className={styles.display}>3</div>
            <div className={styles.display}>-</div>
            <div className={styles.display}>.</div>
            <div className={styles.display}>0</div>
            <div className={styles.display}>/</div>
            <div className={styles.display}>*</div>
        </div>
        <div className={styles.calc2}>
            <div className={styles.display2}>Reset</div>
            <div className={styles.display2}>=</div>
        </div>
    </main>

  )
}

export default Calc