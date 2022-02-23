import Link from 'next/link'
import React from 'react'
import Router from 'next/router'
import { useRouter } from 'next/router'
//import Masthead from '../../components/admin/Masthead'

const SideBar = () => {
  const router = useRouter()
  const [active, setActive] = React.useState('/admin/dashboard')
  React.useEffect(() => {
    setActive(router.pathname)
  }, [router.pathname])

  return (
    <div className="flex h-screen antialiased  px-4 text-black">
      <aside className="inset-y-0 z-10 flex flex-shrink-0 overflow-hidden">
        <nav
          aria-label="Main"
          className="flex-1 space-y-2 overflow-y-hidden hover:overflow-y-auto">
          <div>
            <Link href="/admin/dashboard">
              <a
                className={`${
                  active === '/admin/dashboard' ? 'bg-orange-100' : ''
                } flex items-center hover:bg-orange-100 rounded-md cursor-pointer block p-2`}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#000000"
                    viewBox="0 0 256 256">
                    <rect width="256" height="256" fill="none"></rect>
                    <line
                      x1="88"
                      y1="232"
                      x2="168"
                      y2="232"
                      fill="none"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"></line>
                    <path
                      d="M78.7,167A79.5,79.5,0,0,1,48,104.5C47.8,61.1,82.7,25,126.1,24a80,80,0,0,1,51.3,142.9A24.2,24.2,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6A24.4,24.4,0,0,0,78.7,167Z"
                      fill="none"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"></path>
                    <path
                      d="M136.1,56.8a47.9,47.9,0,0,1,39.2,39.1"
                      fill="none"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"></path>
                  </svg>
                </span>
                <span className="ml-2 text-lg font-medium"> Overview </span>
              </a>
            </Link>
          </div>
          <div>
            <Link href="">
              <a
                className={`${
                  active === '' ? 'bg-orange-100' : ''
                } flex items-center hover:bg-orange-100 rounded-md cursor-pointer block p-2`}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#000000"
                    viewBox="0 0 256 256">
                    <rect width="256" height="256" fill="none"></rect>
                    <polyline
                      points="176 144 208 176 176 208"
                      fill="none"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"></polyline>
                    <line
                      x1="48"
                      y1="176"
                      x2="208"
                      y2="176"
                      fill="none"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"></line>
                    <polyline
                      points="80 112 48 80 80 48"
                      fill="none"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"></polyline>
                    <line
                      x1="208"
                      y1="80"
                      x2="48"
                      y2="80"
                      fill="none"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"></line>
                  </svg>
                </span>
                <span className="ml-2 text-lg font-medium">Transactions</span>
              </a>
            </Link>

            <div>
              <Link href="">
                <a
                  className={`${
                    active === '' ? 'bg-orange-100' : ''
                  } flex items-center hover:bg-orange-100 rounded-md cursor-pointer block p-2`}>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#000000"
                      viewBox="0 0 256 256">
                      <rect width="256" height="256" fill="none"></rect>
                      <rect
                        x="24"
                        y="56"
                        width="208"
                        height="144"
                        rx="8"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"></rect>
                      <line
                        x1="168"
                        y1="168"
                        x2="200"
                        y2="168"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"></line>
                      <line
                        x1="120"
                        y1="168"
                        x2="136"
                        y2="168"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"></line>
                      <line
                        x1="24"
                        y1="96.9"
                        x2="232"
                        y2="96.9"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"></line>
                    </svg>
                  </span>
                  <span className="ml-2 text-lg font-medium"> Budgets </span>
                </a>
              </Link>
            </div>
            <div>
              <Link href="">
                <a
                  className={`${
                    active === '' ? 'bg-orange-100' : ''
                  } flex items-center hover:bg-orange-100 rounded-md cursor-pointer block p-2`}>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#000000"
                      viewBox="0 0 256 256">
                      <rect width="20" height="20" fill="none"></rect>
                      <polyline
                        points="79.8 99.7 31.8 99.7 31.8 51.7"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"></polyline>
                      <path
                        d="M190.2,65.8a87.9,87.9,0,0,0-124.4,0l-34,33.9"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"></path>
                      <polyline
                        points="176.2 156.3 224.2 156.3 224.2 204.3"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"></polyline>
                      <path
                        d="M65.8,190.2a87.9,87.9,0,0,0,124.4,0l34-33.9"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-lg font-medium">
                    {' '}
                    Subscriptions{' '}
                  </span>
                </a>
              </Link>
            </div>

            <div>
              <Link href="">
                <a
                  className={`${
                    active === '' ? 'text-orange-400' : ''
                  } flex items-center hover:bg-orange-100 rounded-md cursor-pointer block p-2`}>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#000000"
                      viewBox="0 0 256 256">
                      <rect width="256" height="256" fill="none"></rect>
                      <polygon
                        points="24 96 232 96 128 32 24 96"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"></polygon>
                      <line
                        x1="56"
                        y1="96"
                        x2="56"
                        y2="176"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"></line>
                      <line
                        x1="104"
                        y1="96"
                        x2="104"
                        y2="176"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"></line>
                      <line
                        x1="152"
                        y1="96"
                        x2="152"
                        y2="176"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"></line>
                      <line
                        x1="200"
                        y1="96"
                        x2="200"
                        y2="176"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"></line>
                      <line
                        x1="32"
                        y1="176"
                        x2="224"
                        y2="176"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"></line>
                      <line
                        x1="16"
                        y1="208"
                        x2="240"
                        y2="208"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"></line>
                    </svg>
                  </span>
                  <span className="ml-2 text-lg font-medium"> Accounts </span>
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </aside>
    </div>
  )
}

export default SideBar
