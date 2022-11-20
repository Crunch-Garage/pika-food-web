import { LogoutIcon } from '@heroicons/react/outline'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftBarRoutes } from '../routes'

export default function LeftSideBar() {
    const navigation = useNavigate()

    return (
        <>
            <div className="p-5 border-l-2 w-28 h-screen bg-white fixed">
            

                <div className="space-y-4">
                    {LeftBarRoutes.map((item, index) => {
                        return (
                            <div key={index}
                                className="w-16 h-16 hover:bg-gradient-to-r from-orange-400 to-orange-600 hover:shadow-2xl flex justify-center items-center rounded-full"
                                onClick={() => navigation(item?.route)}
                            >
                                {/* icon button */}
                                {item?.icon}
                            </div>

                        )
                    })}
                </div>

                <div className=" w-16 h-16 hover:bg-gradient-to-r from-orange-400 to-orange-600 flex justify-center items-center rounded-full absolute bottom-2">
                    <LogoutIcon
                     className="h-6 w-6 text-gray-500 hover:text-white" />
                </div>

            </div>
        </>
    )
}
