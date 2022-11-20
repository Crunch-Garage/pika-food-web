import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LeftSideBar, RightSideBar } from '../components'
import { ChildRoutes } from '../routes'


function Layout() {
    return (
        <div className="flex flex-row bg-slate-50">
            {/* Left side bar */}
            <LeftSideBar />

            {/* Middle Section for children */}
            <div className=" ml-32 mr-96">
                <Routes>
                    {ChildRoutes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                element={<route.element />}
                            />
                        )
                    })}
                </Routes>

            </div>

            {/* Right side bar */}
            <RightSideBar />
        </div>
    )
}

export default Layout