import React, { useState } from 'react';
import LocationIcon from "../../assets/la-icons/location-icon.svg";
import WifiIcon from "../../assets/la-icons/wifi-icon.svg";
import HomeImage from "../../assets/la-images/home-image.svg";
import StarRatings from "../../assets/la-images/star-ratings.svg";
import RatingsImage from "../../assets/la-images/ratings-image.svg";
import ReviewProfileImage from "../../assets/la-images/review-profile-image.svg";

function PropertyDetails({details}) {
  const [selectedFeat, setSelectedFeat] = useState("Homes")
    const features = [
        {
            id: "homes",
            name: "Homes",
        },
        {
            id: "mgt",
            name: "Property Management",
        },
        {
            id: "pkp",
            name: "Airport Pickup/Drop off",
        },
        {
            id: "tour",
            name: "Tour Guide",
        }
    ]
  const images = [
    details?.imageSrc,
    details?.imageSrcTwo,
    details?.imageSrcThree,
    details?.imageSrcFour,
  ];

  const Categories = [
    "Wifi",
    "Chef",
    "Hot Tub",
    "Constant Electricity",
    "Security",
    "Wifi",
    "Chef",
    "Security",
    "Chef",
    "Hot Tub",
  ]

  const data = [
    { ReviewProfileImage: ReviewProfileImage, name: 'Jon Snow', StarRatings: 'star_ratings_url_4.jpg', description: 'This charming apartment offers a cozy feel with 3 bedrooms and This charming apartment offers a cozy feel with 3 bedrooms and' },
    { ReviewProfileImage: ReviewProfileImage, name: 'Jon Snow', StarRatings: 'star_ratings_url_3.jpg', description: 'This charming apartment offers a cozy feel with 3 bedrooms and This charming apartment offers a cozy feel with 3 bedrooms and' },
    { ReviewProfileImage: ReviewProfileImage, name: 'Jon Snow', StarRatings: 'star_ratings_url_4.jpg', description: 'This charming apartment offers a cozy feel with 3 bedrooms and This charming apartment offers a cozy feel with 3 bedrooms and' },
    { ReviewProfileImage: ReviewProfileImage, name: 'Jon Snow', StarRatings: 'star_ratings_url_4.jpg', description: 'This charming apartment offers a cozy feel with 3 bedrooms and This charming apartment offers a cozy feel with 3 bedrooms and' }
  ];
  return (
    <div className='bg-[#ECECEC]'>
      <div className='flex flex-col w-full max-w-[90%] m-auto py-20'>
        <div className='w-full flex justify-between'>
          <h4 className='text-4xl font-bold'>{details?.title}</h4>
          <h4 className='text-4xl font-bold text-[#F29254]'>N{details?.price}K</h4>
        </div>
        <div className='w-full flex justify-between mt-4'>
          <p className='text-sm font-bold text-[#000] flex gap-2 justify-center items-center'><img src={LocationIcon} /> Nigeria<span className='text-[#F29254]'>Show on map</span> </p>
          <button className=' bg-[#F29254] px-10 py-2 rounded-3xl text-[#fff] text-center font-semibold flex text-xl font-bold'>Check Availability</button>
        </div>

        <div className="w-full overflow-x-auto mt-20">
          <div className="grid-container inline-grid grid-cols-2 md:grid-cols-3  lg:grid-cols-6 gap-10 p-4 w-full">
            {images.map((imageUrl, index) => (
              <div key={index} className="grid-item w-full h-52 rounded-2xl overflow-hidden">
                <img src={imageUrl} alt={`Image ${index + 1}`} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
        </div>
        <div className='w-full flex gap-4 mt-10 overflow-x-scroll'>
          {Categories.map((item, index) => (
            <div key={index} className='grid-item py-2 px-4 rounded-full bg-[#fff] flex gap-2 items-center w-fit whitespace-nowrap'>
              <img src={WifiIcon} />
              <p className=''>{item}</p>
            </div>))}
        </div>
        <div className='mt-20 w-full flex justify-between'>
          <div className='w-3/5'>
            <div className='w-full flex flex-col w-full'>
              <p className='mb-2'>{details?.description} </p>
              <br />
            </div>
            <button className=' bg-[#F29254] px-10 py-2 rounded-3xl text-[#fff] text-center font-semibold flex text-xl font-bold items-center cursor-pointer mt-6'>Check Availability</button>
          </div>
          <div className='w-1/5 h-full'>
            <div className='w-full rounded-2xl bg-[#fff] p-8 flex flex-col gap-4'>
              <h2 className='font-semibold text-xl'>Ratings</h2>
              <div className='w-full flex gap-6 mb-4 justify-between mt-10'>
                <div className='flex gap-4 flex-col'>
                  <h2 className='text-6xl font-bold text-[#F29254]'>4.5</h2>
                  <img className="max-w-[60px]" src={StarRatings} />
                </div>
                <div>
                  <img src={RatingsImage} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full mt-20'>
          <div className='w-full flex justify-between items-center'>
            <h2 className='text-xl'>Great Reviews</h2>
            <button className=' bg-[#F29254] px-10 py-2 rounded-3xl text-[#fff] text-center font-semibold flex text-xl font-bold'>Read all reviews</button>
          </div>

          <div className="flex w-full mt-4 gap-10 overflow-x-scroll">
            {data.map((item, index) => (
              <div key={index} className="!w-1/4 h-fit rounded-xl p-6 bg-[#fff]">
                <div className="flex gap-4">
                  <img className="w-[46px] h-[46px]" src={item.ReviewProfileImage} alt="Profile" />
                  <div className="flex gap-2 flex-col">
                    <h2>{item.name}</h2>
                    <img className="max-w-[60px]" src={StarRatings} alt="Stars" />
                  </div>
                </div>
                <p className="mt-4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='w-full mt-20'>
          <h2 className='font-bold text-xl mb-4'>Reviews</h2>
          <div className='p-6 rounded-2xl bg-[#fff]'>
            <ul className="list-decimal mt-4 space-y-4 ml-6">
              <li className="text-lg">Birdy Chip Apartments is a minimalistic luxurious apartment in the heart of Garki, Abuja. Birdy Chip Apartments is a minimalistic luxurious apartment in the heart of Garki, Abuja.</li>
              <li className="text-lg">Birdy Chip Apartments is a minimalistic luxurious apartment in the heart of Garki, Abuja. Birdy Chip Apartments is a minimalistic luxurious apartment in the heart of Garki, Abuja.</li>
              <li className="text-lg">Birdy Chip Apartments is a minimalistic luxurious apartment in the heart of Garki, Abuja.</li>
              <li className="text-lg">Cash is not accepted</li>
            </ul>
          </div>
        </div>
        <div className='p-6 border border-[#F29254] w-full mt-28 rounded-full flex gap-8 justify-center'>
                    {features.map((item, index) => (
                        <button 
                            onClick={() => setSelectedFeat(item?.name)}
                            key={item?.id}
                            className= {` px-6 py-2 rounded-3xl text-center font-semibold flex text-lg font-bold items-center min-w-[200px] justify-center text-center border border-[#F29254] ${selectedFeat === item?.name ? "bg-[#F29254] text-[#fff]" : "bg-[#fff] text-[#F29254]"}`}
                        >{item?.name}</button>))}
                </div>
      </div>
      <div className='h-[368px] w-full bg-[#FDDAC4] flex flex-col justify-center items-center p-14 gap-4'>
          <p className='text-lg text-[#AB4412] max-w-[872px] m-auto text-center'>We're here to help. Contact CharizHomes for inquiries, support, or more information about our services.</p>
          <input className='rounded-full bg-[#fff] max-w-[676px] m-auto w-full px-10 py-4' placeholder='Enter Your Email'></input>
          <button className='rounded-full bg-[#fff] text-[#F29254] font-bold max-w-[367px] m-auto w-full px-10 py-4 flex justify-center items-center'>Subscribe</button>
        </div>
    </div>
  )
}

export default PropertyDetails