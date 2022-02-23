import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

import { Page } from './PageBase.styles'

const PageBase = ({ children }: any) => {
  return (
    <Page>
      {/* <Header /> */}
      {children}
      <Footer />
    </Page>
  )
}

export default PageBase
