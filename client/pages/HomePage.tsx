import { Markets } from '@/components/molecules/Home/Markets'
import { Slider } from '@/components/molecules/Home/Slider'
import React from 'react'

export const HomePage = () => {
  return (
    <div className='bg-black z-0'>
      <div className='w-[80%]  mx-auto'>
        <Slider />

        <Markets />
      </div>
    </div>
  )
}
