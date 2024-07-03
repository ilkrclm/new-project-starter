import React from 'react'
import Header from './navigation-builder-example'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='flex-1'>{children}</main>
      {/* <Footer /> */}
    </>
  )
}
