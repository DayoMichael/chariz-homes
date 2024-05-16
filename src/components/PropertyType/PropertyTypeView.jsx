import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import BackIcon from "../../assets/la-icons/back-icon.svg";
import AprtImage from "../../assets/la-images/aprt-image.svg";
import DuplexesImage from "../../assets/la-images/duplexes-image.svg";
import VillasImage from "../../assets/la-images/villas-image.svg";
import Footer from '../Footer';

const GridItem = ({ imageUrl, name }) => (
    <div className="flex flex-col items-left cols-span-1">
        <div className="w-[100%] h-[262px] overflow-hidden rounded mb-2">
            <img src={imageUrl} alt="Profile" className="object-cover w-full h-full" />
        </div>
        <p className="font-bold text-left pl-4">{name}</p>
    </div>
);

function PropertyTypeView() {
    const navigate = useNavigate()
    const data = [
        { imageUrl: AprtImage, name: 'Apartments' },
        { imageUrl: VillasImage, name: 'Villas' },
        { imageUrl: DuplexesImage, name: 'Duplexes' }, 
        { imageUrl: AprtImage, name: 'Apartments' },
        { imageUrl: VillasImage, name: 'Villas' },
        { imageUrl: DuplexesImage, name: 'Duplexes' }, 
        { imageUrl: AprtImage, name: 'Apartments' },
        { imageUrl: VillasImage, name: 'Villas' },
        { imageUrl: DuplexesImage, name: 'Duplexes' },
    ];
    return (
        <Styled>
            <div className='bg-[#ECECEC] mt-20 min-h-screen'>
                <div className='flex flex-col w-full max-w-[90%] m-auto py-20 h-full'>
                    <div className='flex justify-between'>
                        <img src={BackIcon} className="cursor-pointer w-[40px] md:w-[80px]" onClick={() => navigate("/")} />
                        <h2 className='text-2xl md:text-4xl font-bold items-center text-center flex text-[#F29254]'>Browse by property type</h2>
                        <div className='gap-6 opacity-0 border border-[#F29254] px-6 py-2 items-center justify-center bg-[#fff] rounded-full h-fit'>
                        </div>
                    </div>
                    <div className="flex grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-10 mt-10">
                        {data.map((item, index) => (
                            <GridItem key={index} imageUrl={item.imageUrl} name={item.name} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </Styled>
    )
}

export default PropertyTypeView

const Styled = styled.div`
    

`