import { Button } from '@/components/atoms/Button'
import { marketData } from '@/constants'
import React from 'react'
import { TableData } from './TableData'

export const Markets = () => {
    return (
        <div className='pb-10'>
            <p className='text-white text-3xl font-semibold'>
                Markets
            </p>

            <div className='grid grid-cols-3 gap-6 my-5'>
                <div className='col-span-1 py-4 bg-zinc-900 rounded-md'>
                    <p className='text-white font-medium px-4'>New</p>

                    <div className='flex flex-col my-2'>
                        {
                            marketData.new.map((item) => {
                                return (
                                    <div key={item.id}
                                        className='grid grid-cols-4 py-2 px-4 cursor-pointer hover:bg-zinc-800 transition-all duration-100'
                                    >
                                        <div className='col-span-2 flex gap-2 items-center'>
                                            <img src={item.img} alt={item.name} 
                                                className='w-5 rounded-[50%]'
                                            />
                                            <p className='text-white text-[14px]'> { item.name }</p>
                                        </div>

                                        <p className='text-white text-[14px]'> ${ item.price } </p>

                                        <p className={`${item.positive ? 'text-green-500': 'text-red-500'} text-[14px]`}> 
                                            { (item.positive ? "+ " : "- ") + item.percent } % 
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='col-span-1 py-4 bg-zinc-900 rounded-md'>
                    <p className='text-white font-medium px-4'>Top Gainers</p>

                    <div className='flex flex-col my-2'>
                        {
                            marketData.topGainers.map((item) => {
                                return (
                                    <div key={item.id}
                                        className='grid grid-cols-4 py-2 px-4 cursor-pointer hover:bg-zinc-800 transition-all duration-100'
                                    >
                                        <div className='col-span-2 flex gap-2 items-center'>
                                            <img src={item.img} alt={item.name} 
                                                className='w-5 rounded-[50%]'
                                            />
                                            <p className='text-white text-[14px]'> { item.name }</p>
                                        </div>

                                        <p className='text-white text-[14px]'> ${ item.price } </p>

                                        <p className={`${item.positive ? 'text-green-500': 'text-red-500'} text-[14px]`}> 
                                            { (item.positive ? "+ " : "- ") + item.percent } % 
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='col-span-1 py-4 bg-zinc-900 rounded-md'>
                    <p className='text-white font-medium px-4'>Experimental</p>

                    <div className='flex flex-col my-2'>
                        {
                            marketData.experimental.map((item) => {
                                return (
                                    <div key={item.id}
                                        className='grid grid-cols-4 py-2 px-4 cursor-pointer hover:bg-zinc-800 transition-all duration-100'
                                    >
                                        <div className='col-span-2 flex gap-2 items-center'>
                                            <img src={item.img} alt={item.name} 
                                                className='w-5 rounded-[50%]'
                                            />
                                            <p className='text-white text-[14px]'> { item.name }</p>
                                        </div>

                                        <p className='text-white text-[14px]'> ${ item.price } </p>

                                        <p className={`${item.positive ? 'text-green-500': 'text-red-500'} text-[14px]`}> 
                                            { (item.positive ? "+ " : "- ") + item.percent } % 
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div>
                <Button
                    className='py-1 px-3 bg-blue-600 text-blue-500 bg-opacity-30 hover:text-blue-600 duration-200 transition-all'
                >
                    All
                </Button>

                <TableData />
            </div>
        </div>
    )
}
