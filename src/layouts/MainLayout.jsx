import React from 'react'
import { Footer, Navbar } from '../components/ui'

export const MainLayout = ({children}) => {
  return (
    <>
        <div className="container-fluid nav-style shadow">
            <div className="row">
                <div className="col">
                    <Navbar/>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                    { children }
                </div>
            </div>
        </div>
        <div className="container-fluid foot-style shadow">
            <div className="row">
                <div className="col">
                    <Footer/>
                </div>
            </div>
        </div>
    </>
  )
}
