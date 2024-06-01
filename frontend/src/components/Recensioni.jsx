import React from 'react';
import { FaUserCircle, FaStar } from 'react-icons/fa';

function Recensioni() {
    const reviews = [
        {
            name: "John Doe",
            review: "Excellent service, highly recommended!",
            icon: <FaUserCircle size={40} />,
            stars: 5
        },
        {
            name: "Jane Smith",
            review: "Great quality products and fast delivery.",
            icon: <FaUserCircle size={40} />,
            stars: 4
        },
        {
            name: "Sam Wilson",
            review: "Customer support was very helpful and friendly.",
            icon: <FaUserCircle size={40} />,
            stars: 5
        }
    ];
    const social = [
        {
            name: "YouTube",
            url: "https://www.fixfit.it/images/ico_youtube_large.png",
            follower: "620,000 + Followers",
            text: "Follow the live sessions and receive the new workouts",
        },
        {
            name: "Facebook",
            url: "https://www.fixfit.it/images/ico_facebook_large.png",
            follower: "130,000 + Followers",
            text: "Watch Video Previews",
        },
        {
            name: "Instagram",
            url: "https://www.fixfit.it/images/ico_instagram_large.png",
            follower: "120,000 + Followers",
            text: "Stay Updated With the Stories",
        }
    ];

 


    return (
        <div className="container mt-5">
            <h1 className="text-center text-white pt-5">Our Customers' Reviews</h1>
            <div className="row mt-5">
                {reviews.map((review, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px', height: '100%' }}>
                            <div className="d-flex align-items-center mb-3">
                                {review.icon}
                                <h5 className="ms-3">{review.name}</h5>
                                <div className="ms-auto">
                                    {Array.from({ length: review.stars }, (_, i) => (
                                        <FaStar key={i} size={20} style={{ color: '#00B67A' }} />
                                    ))}
                                </div>
                            </div>
                            <p>{review.review}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row mt-3">
                {social.map((socialItem, index) => (
                    <div className="col-md-4   " key={index}>
                        <div className="card shadow mb-4" style={{padding: '20px', borderRadius: '10px', height: '100%' }}>
                            <div className="d-flex justify-content-center text-center align-items-center mb-3">
                                <img src={socialItem.url} alt={socialItem.name} />
                            
                            </div>
                            <p className=' text-center fw-semibold text-secondary mb-1'>{socialItem.follower}</p>
                            <p className=' text-center  text-secondary mb-0'>{socialItem.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        
        </div>
    );
}

export default Recensioni;
