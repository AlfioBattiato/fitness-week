import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import Recensioni from './Recensioni';

const Homepage = () => {
    const [courses, setCourses] = useState([]); // null buon candidato
    const navigate = useNavigate()
    useEffect(() => {
        axios('api/v1/courses')
            .then((res) => {
                setCourses(res.data)
                // console.log(data)
            }
            );
    }, []);

    return (
        <>

            <Header></Header>
            <div className='container mt-5'>
                <h1 className='text-center'>Our Courses</h1>
                <h4 className='text-secondary text-center'>Più di 1000 workout gratuiti per raggiungere la tua forma migliore</h4>
                <div className="row gy-4 mt-5">
                    {courses.map((course) => (
                        <div className="col-6 col-md-4 col-lg-3" key={course.id}>
                            <p className="card-title text-purple fw-semibold text-center">{course.activity.name}</p>

                            <img src={course.activity.activity_img}
                                className=" shadow cursor" alt="img"
                                style={{ width: "100%", height: "15rem", objectFit: "cover" }}
                                onClick={() => navigate(`/detail/${course.id}`)} />
                            <p className="card-title text-secondary text-center fs-14 mt-2">{course.activity.description}</p>
                            <div className="d-flex gap-2 align-items-center mt-2">

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" className="bi bi-clock-history" viewBox="0 0 16 16">
                                    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
                                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
                                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
                                </svg>

                                {/* <p className="card-title text-dark fw-semibold fs-14 ">{course.activity.duration}.00 Min</p> */}

                            </div>




                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-black">

                <Recensioni></Recensioni>
            </div>
        </>
    );
};

export default Homepage;