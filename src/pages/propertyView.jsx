import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import HeroPage from '../components/PropertyView/HeroPage'
import PropertyDetails from '../components/PropertyView/PropertyDetails'
import AppLayout from '../layout/AppLayout';
import Loader from '../library/Loader/Loader';
import { getPropertyDetails } from '../redux/features/auth/actions';

function PropertyView() {
    const dispatch = useDispatch()
    const location = useLocation()
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState("")
    const searchParams = new URLSearchParams(location.search);

    const paramValue = searchParams.get('id');

    const getListingDetails = async () => {
        setLoading(true)
        const {status, data} = await dispatch(getPropertyDetails(paramValue))
        setLoading(false)
        if(status){
            setDetails(data)
        }
    }

    useEffect(() => {
        getListingDetails()
    },[])
    return (
        <AppLayout>
            {loading ? <div className='mt-32'><Loader /></div> :
                <div className='w-full flex flex-col'>
                    <HeroPage details={details} />
                    <PropertyDetails details={details}/>
                </div>
            }
        </AppLayout>
    )
}

export default PropertyView