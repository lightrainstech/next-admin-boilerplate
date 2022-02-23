import React from 'react'

const Masthead = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className="flex md:flex-row flex-col gap-x-6 gap-y-6">
      <div className="flex flex-col gap-y-7">
        <p className="text-5xl font-medium text-black">
          Good afternoon Ryan, you have
        </p>
        <p className="text-teal-500 text-4xl">$24,920.56</p>
        <p className="text-black font-medium">
          Available funds to invest: $435.00{' '}
          <span className="text-yellow-500 underline cursor-pointer">
            Invest now
          </span>
        </p>
      </div>
      <img
        src="/clumsy.png"
        alt="clumsy"
        className="w-96 h-72 cursor-pointer"
      />
    </div>
  )
}

export default Masthead
