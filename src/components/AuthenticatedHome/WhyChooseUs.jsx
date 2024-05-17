import React from 'react';
import PersonalizedIcon from "../../assets/la-icons/personalized-icon.svg";
import LifestyleIcon from "../../assets/la-icons/lifestyle-icon.svg";
import AwardsIcon from "../../assets/la-icons/award-icon.svg";
import STLocation from "../../assets/la-icons/st-location.svg";
import GiftIcon from "../../assets/la-icons/gift-icon.svg";
import TestimonialImage from "../../assets/la-images/testimonial-image.svg";

function WhyChooseUs() {
    const services = [
        { id: 1, name: 'Personalized Experiences Tailored to Your Preferences', image: PersonalizedIcon },
        { id: 2, name: 'Wide Range of Lifestyle Services Under One Roof', image: LifestyleIcon },
        { id: 3, name: 'Commitment to Quality, Comfort, and Convenience', image: AwardsIcon },
        { id: 4, name: 'Strategic locations for easy access to local attractions', image: STLocation },
        { id: 5, name: 'Exclusive Deals and Offers for Our Community Members', image: GiftIcon },
    ];

    const testimonials = [
        { id: 1, name: 'Jamie Lannister', message: 'Really nice idea, this adds a little flavor to all those dummy-texts! I can recommend setting up keystrokes for this, it\'ll speed up the process a lot!' },
        { id: 1, name: 'Jamie Lannister', message: 'Really nice idea, this adds a little flavor to all those dummy-texts! I can recommend setting up keystrokes for this, it\'ll speed up the process a lot!' },
        { id: 1, name: 'Jamie Lannister', message: 'Really nice idea, this adds a little flavor to all those dummy-texts! I can recommend setting up keystrokes for this, it\'ll speed up the process a lot!' },
        { id: 1, name: 'Jamie Lannister', message: 'Really nice idea, this adds a little flavor to all those dummy-texts! I can recommend setting up keystrokes for this, it\'ll speed up the process a lot!' },
        // Add more testimonials as needed
    ];

    return (
        <div className='flex flex-col w-full min-h-screen bg-[#ECECEC] '>

            <div className='w-full h-full flex flex-col justify-center py-10 gap-10 max-w-[90%] m-auto'>
                <h2 className='text-5xl text-[#F29254] font-medium text-center'>Testimonials</h2>
                <p className='text-lg text-[#565656] text-center'>Read / watch stories from our satisfied guests who've experienced the warmth and excellence of CharizHomes.</p>
                <div className='p-10 '>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
                        {testimonials.map(testimonial => (
                            <div key={testimonial.id} className="rounded-2xl border border-orange-500 py-10 px-4 text-center bg-[#fff] gap-4 flex flex-col">
                                <img src={TestimonialImage} alt={testimonial.name} className="w-137 h-137 rounded-full mx-auto mb-4" />
                                <p className="font-bold text-xl">{testimonial.name}</p>
                                <p className='text-sm'>{testimonial.message}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs