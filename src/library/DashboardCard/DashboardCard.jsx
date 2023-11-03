import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

function DashboardCard({ icon, heading, subheading }) {
    return (
        <div className='w-full border border-[#D9D9D9] rounded-lg p-6'>
            <img src={icon} />
            <div className='mt-3'>
                <h4 className='text-xl font-semibold'>{heading}</h4>
                <p className='text-sm font-semibold text-[#7D828D]'>{subheading}</p>

            </div>

        </div>
    )
}

export default DashboardCard


DashboardCard.propTypes = {
    icon: PropTypes?.any,
    heading: PropTypes?.string,
    subheading: PropTypes?.string,
};

const Styles = styled.div`
    width: 100%;
    
`