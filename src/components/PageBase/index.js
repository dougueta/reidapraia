import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

import { Page } from './PageBase.styles'

const PageBase = ({ children }) => {
  return (
    <Page>
      {/* <Header /> */}
      {children}
      <Footer itens={['oi', 'oies']} />
    </Page>
  )
}

export default PageBase
