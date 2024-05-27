import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../library/Button/Button'
import Footer from '../Footer'

function PropertyManagementView() {
    const navigate = useNavigate()
    return (
        <>
            <div className='bg-propertyManagement min-h-screen w-full bg-cover h-full justify-center items-center flex'>
                <div className='mt-20 flex flex-col w-full h-full space-y-24 max-w-[70%]'>
                    <h2 className='mt-10 text-center font-bold text-2xl'>Property Management</h2>
                    <div className='flex flex-col '>
                        <h6 className='text-center text-md font-semibold'>Submit/List your apartment</h6>
                        <p className='text-center text-sm mt-4'>Chariz Homes' Property Management Services offer a full spectrum of services designed to transform properties into thriving short-stay rentals.</p>
                        <p className='text-center text-sm mt-4'>With a focus on quality, efficiency, and guest satisfaction, Chariz Homes is poised to redefine property management, delivering bespoke experiences for owners and guests alike</p>
                        <div className='flex gap-10 mt-16'>
                            <Button
                                className="!border-2 !border-[#F29254] bg-transparent"
                                type="inverted"
                                text="My Request"
                                onClick={() => navigate("/property-request")}
                            />
                            <Button
                                onClick={() => navigate("/property-submission")}
                                text="Submit New Request"
                            />
                            <Button
                                onClick={() => navigate("/property-dashboard")}
                                text="Dashboard"
                            />

                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default PropertyManagementView