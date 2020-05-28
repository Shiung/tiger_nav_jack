import React, { useEffect, useState, useRef } from 'react'
import LinkItem from 'components/LinkItem'
import { get_random_signal } from 'utils/random'
import styles from './home.module.scss'

const testData1 = [
  {
    id: 1,
    name: '內地線路',
    url: 'https://www.google.com/',
    speed: 23
  },
  {
    id: 2,
    name: '香港線路',
    url: 'https://www.google.com/',
    speed: 205
  },
  {
    id: 3,
    name: '台灣線路',
    url: 'https://www.google.com/',
    speed: 32
  },
  {
    id: 4,
    name: '新加坡線路',
    url: 'https://www.google.com/',
    speed: 10
  },
  {
    id: 5,
    name: '菲律賓線路',
    url: 'https://www.google.com/',
    speed: 40
  }
]

const addDataSignal = data => {
  return data.map(obj => ({
    ...obj,
    speed: get_random_signal()
  }))
}

const Home = ({ ...props }) => {
  const [bgPositionY, setBgPositionY ] = useState(null)
  const [portData, setPortData] = useState([])
  const homeRef = useRef(null)

  const mouseHandler = e => {
    e.stopPropagation()
    const { pageY } = e
    const { offsetHeight, offsetTop } = homeRef.current || {}
    const offsetPercent = (pageY - offsetTop) / offsetHeight
    setBgPositionY(offsetPercent > 0.2 ? offsetPercent * 100 : 20)
  }
  const bindBgPosition = () => {
    if (!bgPositionY) return null
    return {
      backgroundPositionY: `${bgPositionY}%`
    }
  }

  useEffect(() => {
    const parseData = addDataSignal(testData1)
    setPortData(parseData)
    const currentRef = homeRef.current || {}
    currentRef.addEventListener('mousemove', mouseHandler)
    return () => {
      currentRef.removeEventListener('mousemove', mouseHandler)
    }
  }, [])
  return (
    <div className={styles.home} ref={homeRef} style={bindBgPosition()}>
      <div className={`${styles.home__box} container`}>
        <div className={styles.home__title} />
        <div className={styles.home__mouse} />
        <LinkItem data={portData} />
      </div>
    </div>
  )
}

export default Home
