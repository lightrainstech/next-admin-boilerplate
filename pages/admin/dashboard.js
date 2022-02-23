import React, { useState } from 'react'
import SideBar from '../../components/admin/SideBar'
import Menu from '../../components/admin/Menu'
import Masthead from '../../components/admin/Masthead'
import Tables from '../../components/admin/Tables'

const Dashboard = () => {
  return (
    <div className="container flex flex-col bg-white rounded-lg mt-8 mb-8">
      <Menu />
      <div className="flex md:flex-row flex-col">
        <SideBar />
        <div className="md:p-1 md:px-20 overflow-scroll md:-mt-0 -mt-96 space-y-10 md:space-y-2 mb-6 ">
          <Masthead />
          <Tables />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
