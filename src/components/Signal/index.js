import React from 'react'
import styles from './signal.module.scss'

const Signal = ({ count = 5, level, parentClass }) => {
  const signalClass = [styles.signal]
  parentClass && signalClass.push(parentClass)
  return (
    <div className={signalClass.join(' ')}>
      {Array.from({ length: count }, (d, i) => {
        const barNum = i + 1
        const barClass = [styles.signal__bar]
        barNum <= level && barClass.push(styles['signal__bar--active'])
        return <div className={barClass.join(' ')} key={`signal_${i}`} />
      })}
    </div>
  )
}

export default Signal
