import React from 'react'

export default function Layout({ children }) {
  return (
    <>
      {/* <Header /> */}
      <main className='flex-1'>{children}</main>
      {/* <Footer /> */}
    </>
  )
}
