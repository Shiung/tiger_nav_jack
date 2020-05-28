import React from 'react'
import Signal from 'components/Signal'
import { check_signal_level, parse_signal_str } from 'utils/random'
import { mapping_country } from 'constants/mapping'
import styles from './linkItem.module.scss'

const ImgItem = ({ id }) => {
  const iconMapping = mapping_country.find(country => country.id === id)
  if (!iconMapping) return null
  const imgSrc = require(`assets/img/country/${iconMapping.icon}.png`)
  return (
    <div className={styles.imgBox}>
      <img src={imgSrc} alt='country' />
    </div>
  )
}

const Content = ({ name, speed, id }) => {
  return (
    <div className={styles.content}>
      <ImgItem id={id} />
      <span className={styles.content__name}>{name}</span>
      <span className={styles.content__speed}>{parse_signal_str(speed)}秒</span>
      <span className={styles.content__link}>立刻访问</span>
    </div>
  )
}

const LinkList = ({ data }) => Array.from(data, ({ id, name, url, speed, isBlank = false }) => {
  const signalLevel = check_signal_level(speed)
  return (
    <a
      className={styles.link}
      href={url}
      rel='noreferrer'
      {...(isBlank && { target: '_blank' })}
      key={id}
    >
      <Signal level={signalLevel} parentClass={styles.signal_box} />
      <div className={styles.contentBox}>
        <Content name={name} speed={speed} id={id} />
      </div>
    </a>
  )
})

const LinkItem = ({ data }) => {
  if (!data || !(data instanceof Array)) return null
  return (
    <div className={styles.box}>
      <LinkList {...{ data }} />
    </div>
  )
}

export default LinkItem
