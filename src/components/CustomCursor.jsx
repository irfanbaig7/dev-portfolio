import React, { useEffect, useState } from 'react'

const CustomCursor = () => {

  const [position, setPositon] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const moveHandler = (e) => {
      setPositon({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", moveHandler)


    // cleanup function
    return () => window.removeEventListener("mousemove", moveHandler)

  }, [])

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-9999"
      style={{
        transform: ` translate(${position.x - 40}px, ${position.y - 40}px) `
      }}
    >
      <div className='w-50 h-20 rounded-full bg-linear-to-r from-pink-500 to-blue-500 blur-3xl opacity-80' />
    </div>
  )
}

export default CustomCursor