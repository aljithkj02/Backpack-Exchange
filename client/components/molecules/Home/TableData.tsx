import { marketData } from '@/constants'
import React from 'react'

export const TableData = () => {
    return (
        <div className='my-4'>
            <table className='bg-zinc-900 w-full rounded-lg'>
                <thead>
                    <tr>
                        <th className='text-gray-400 font-normal text-[14px] pt-5 pb-3 text-left pl-7'> Name </th>
                        <th className='text-gray-400 font-normal text-[14px] pt-5 pb-3 text-left pl-7'> Price </th>
                        <th className='text-gray-400 font-normal text-[14px] pt-5 pb-3 text-left pl-7'> Market Cap </th>
                        <th className='text-gray-400 font-normal text-[14px] pt-5 pb-3 text-left pl-7'> 24h Volume </th>
                        <th className='text-gray-400 font-normal text-[14px] pt-5 pb-3 text-left pl-7'> 24h Change </th>
                        <th className='text-gray-400 font-normal text-[14px] pt-5 pb-3 text-left pl-7'> 24h Price </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        marketData.tableData.map((item) => {
                            return (
                                <tr key={item.id} className='cursor-pointer border-t border-t-zinc-700 hover:bg-neutral-800 transition-all duration-50'>
                                    <td className='text-white pl-7 py-2'>
                                        <div className='flex gap-5 items-center'>
                                            <div className='w-9 h-9'>
                                                <img src={item.img} alt={item.name}
                                                    className='w-full h-full object-cover'
                                                />
                                            </div>
                                            <div>
                                                <p className='text-white'>{item.name}</p>
                                                <p className='text-zinc-400 text-[12px]'>{item.tag}</p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className='text-white pl-7'> ${ item.price }</td>
                                    <td className='text-white pl-7'> ${ item.marketCap }</td>
                                    <td className='text-white pl-7'> ${ item.volume24h }</td>
                                    <td className={`pl-7 ${item.positive ? 'text-green-500': 'text-red-500'}`}> 
                                        { (item.positive ? "+ ": "- ") + item.change24h }
                                    </td>
                                    <td/>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
