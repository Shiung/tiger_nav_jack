import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './nav.module.scss'

const optionConfig = [
  {
    name: 'home',
    path: '/',
    routeUse: true,
    blank: true
  },
  {
    name: 'detection',
    path: '/detection',
    routeUse: true,
    blank: true
  },
  {
    name: 'verify',
    path: '/verify',
    routeUse: true,
    blank: true
  },
  {
    name: '跳轉',
    path: 'https://www.google.com/',
    routeUse: false,
    blank: true
  }
]

const navActiveHandler = (match, location) => {
  if (!match) return false
  if (match.url === location.pathname) return true
}

const RwdMenu = ({ rwdMenu }) => {
  const { get, set } = rwdMenu
  return (
    <>
      <div className={styles.rwdMenu} onClick={() => set(!get())}>
        <div className={styles.rwdMenu__bar} />
        <div className={styles.rwdMenu__bar} />
        <div className={styles.rwdMenu__bar} />
      </div>
      {get() && <div className={styles.rwdBlock} onClick={() => set(false)} />}
    </>
  )
}

const Options = ({ rwdMenu }) => {
  const { get: rwdStatus } = rwdMenu
  const LinkItems = () => Array.from(optionConfig, item => {
    const { name, path, routeUse, blank } = item
    if (routeUse) {
      return (
        <NavLink
          to={path}
          className={styles.option__items}
          activeClassName={styles['option__items--active']}
          isActive={navActiveHandler}
          key={name}
        >
          {name}
        </NavLink>
      )
    }
    return (
      <a
        className={styles.option__items}
        href={path}
        key={name}
        {...(blank && { target: '_blank' })}
        rel='noreferrer'
      >
        {name}
      </a>
    )
  })

  const classArr = [styles.option]
  rwdStatus() && classArr.push(styles.option__rwdActive)
  return (
    <nav className={classArr.join(' ')}>
      <LinkItems />
    </nav>
  )
}

const Nav = ({ rwdMenu }) => {
  const Logo = () => <img className={styles.logo} src={require('assets/img/6686icon.png')} alt='logo' />
  return (
    <div className={styles.box}>
      <div className='container'>
        <Logo />
        <Options {...{ rwdMenu }} />
        <RwdMenu {...{ rwdMenu }} />
      </div>
    </div>
  )
}

export default Nav
