import React from 'react'
import { useRouter } from 'next/router'
const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const router = useRouter()
  const logout = () => {
    router.push('/admin/login')
  }
  return (
    <nav className="container pt-6 pb-12 md:pb-24">
      <div className="flex items-center justify-between">
        <p className="font-bold text-2xl  text-black">earmark.</p>

        <div className="space-x-6 items-center justify-between font-medium hidden md:flex md:col-span-2">
          <div className="relative mx-4 lg:mx-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-500"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <input
              className="w-32 pl-10 pr-4 h-10 rounded-full text-black form-input bg-gray-100 sm:w-64 focus:border-indigo-600"
              type="text"
              placeholder="Search...."
            />
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>

            <div className="ml-4">
              <div className="text-sm leading-5 font-medium text-gray-900">
                Ryan Johnson
              </div>
            </div>
            <button onClick={logout} className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative md:hidden">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            className="w-12 h-12 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}>
            {!isOpen && (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            )}
            {isOpen && (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            )}
          </svg>
          {isOpen && (
            <div
              className="origin-top-right absolute right-0 mt-2 w-64 shadow-lg bg-soiblue-400 ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1">
              <div className="py-1" role="none">
                <div className="relative mx-4 lg:mx-0">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      viewBox="0 0 24 24"
                      fill="none">
                      <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <input
                    className="w-32 pl-10 pr-4 h-10 rounded-full text-black form-input bg-gray-100 sm:w-64 focus:border-indigo-600"
                    type="text"
                    placeholder="Search...."
                  />
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>

                  <div className="ml-4">
                    <div className="text-sm leading-5 font-medium text-gray-900">
                      Ryan Johnson
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Menu
