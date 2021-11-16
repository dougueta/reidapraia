import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Page } from './PageBase.styles'

const PageBase = ({ children }) => {
  return (
    <Page>
      <Header />
      {children}
      <Footer />
      opi
    </Page>
  )
}

export default PageBase
