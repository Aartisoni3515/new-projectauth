import AppContext from 'antd/es/app/context'
import React from 'react'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import PageContent from './PageContent'
import SideMenu from './SideMenu'

const Home = () => {
  return (
    <>
  <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <AppFooter /> 
    </>
  )
}

export default Home