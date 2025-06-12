import React from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header />
          
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
