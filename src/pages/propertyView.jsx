import React from 'react'
import HeroPage from '../components/PropertyView/HeroPage'
import PropertyDetails from '../components/PropertyView/PropertyDetails'
import AppLayout from '../layout/AppLayout'

function PropertyView() {
  return (
    <AppLayout>
        <HeroPage />
        <PropertyDetails />
    </AppLayout>
  )
}

export default PropertyView