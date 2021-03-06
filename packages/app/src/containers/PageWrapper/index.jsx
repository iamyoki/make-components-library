/**
 * PageWrapper
 */
import React from 'react'
import Navigation from 'components/Navigation'

/** PageWrapper */
function PageWrapper({ children }) {
  return (
    <>
      <Navigation>{children}</Navigation>

      {children}
    </>
  )
}

export default PageWrapper
