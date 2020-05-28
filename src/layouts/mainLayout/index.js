import React, { useState, Suspense } from 'react'
import Nav from 'components/Nav'
import { Switch, Route, Redirect } from 'react-router-dom'
import ROUTER_CONFIG from 'router'
import styles from './main.module.scss'

const MainLayout = ({ history }) => {
  const [menuActive, setMenuActive] = useState(false)
  const classArr = [styles.main]
  menuActive && classArr.push(styles.main__left)
  return (
    <div className={classArr.join(' ')}>
      <div className={styles['nav-box']}>
        <Nav rwdMenu={{ get: () => menuActive, set: setMenuActive }} />
      </div>
      <div className={styles['page-view']}>
        <Suspense fallback={<></>}>
          <Switch>
            {ROUTER_CONFIG.map(route => {
              return <Route key={`${route.name}`} exact={route.exact} path={route.path} component={route.component} />
            })}
            <Redirect to='/' />
          </Switch>
        </Suspense>
      </div>
      <div className={styles.footer}>
        <p className={styles.copyright}>COPYRIGHT©2019 6686体育 ALL RIGHTS RESERVED 版权所有</p>
      </div>
    </div>
  )
}

export default MainLayout
