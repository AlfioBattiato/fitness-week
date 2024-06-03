import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { LOGIN } from '../redux/actions';

const Detail = () => {
    const [course, setCourse] = useState(null);
    const { id } = useParams()
    const user = useSelector((state) => state.user)
    const navigate = useNavigate()
    const [profileImage, setProfileImage] = useState(null);

    
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        day: '',
        start: '',
        end: '',
        img: '',
    });

    
    const submitLogin = (ev) => {
        ev.preventDefault();
        axios
            .get('/sanctum/csrf-cookie')
            .then(() => {
                const body = new FormData();
                body.append('name', formData.name);
                body.append('description', formData.description);
                body.append('day', formData.day);
                body.append('start', formData.start);
                body.append('end', formData.end);
               ;
                if (profileImage) {
                    body.append('activity_img', profileImage)
                }

                return axios.post('/register', body);
            })
            .then(() => axios.get('/api/user'))
            .then((res) => {
                navigate('/')
              
            });

    };

    

    const updateInputValue = (ev) => {
        setFormData((oldFormData) => ({
            ...oldFormData,
            [ev.target.name]: ev.target.value,
        }));
    };

    const updateImageField = (ev) => {
        updateInputValue(ev);
        setProfileImage(ev.target.files[0]);
    };


    useEffect(() => {



        axios(`/api/v1/courses/${id}`)
            .then((res) => {
                setCourse(res.data.data)
                setFormData(res.data.data)
                console.log(res.data.data)
            }
        );

    }, []);

    
  




    return (
        <>
            <div className="container-fluid my-5 py-5">
                <h1>Courses</h1>
                <div className="row mt-5">

                    {course !== null && (
                        <>
                            <div className="col-12 col-lg-6">
                                <div className="card  border border-1"
                                    style={{ height: "28rem" }}>
                                    <img src={course.activity.activity_img}
                                        className="card-img-top" alt="img"
                                        style={{ width: "100%", height: "50%", objectFit: "cover" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{course.activity.name}</h5>
                                        <p className="card-text d-flex fw-bold mb-1 mt-3">Date: <span className="badge text-bg-dark ms-auto">{course.slot.day}</span></p>
                                        <p className="card-text d-flex fw-bold mb-1">Start at: <span className="badge text-bg-dark ms-auto">{course.slot.start}</span></p>
                                        <p className="card-text d-flex fw-bold mb-3">End at: <span className="badge text-bg-dark ms-auto">{course.slot.end}</span></p>
                                        <div className="d-flex">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                {/* qua ci vanno gli slot orari */}
                            </div>
                            {/* da qui parte la sezione admin */}
                            {user?.role === 'admin' && (
                                <div className="col-12 col-lg-6">
                                    <h1 className='text-center'>Edit course</h1>

                                    <form onSubmit={(ev) => submitLogin(ev)} noValidate>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                onChange={(ev) => updateInputValue(ev)}
                                                value={formData.activity.name}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">
                                            description
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="description"
                                                name="description"
                                                onChange={(ev) => updateInputValue(ev)}
                                                value={formData.activity.description}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="day" className="form-label">
                                            day
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="day"
                                                name="day"
                                                onChange={(ev) => updateInputValue(ev)}
                                                value={formData.slot.day}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="start" className="form-label">
                                            start
                                            </label>
                                            <input
                                                type="time"
                                                className="form-control"
                                                id="start"
                                                name="start"
                                                onChange={(ev) => updateInputValue(ev)}
                                                value={formData.slot.start}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="end" className="form-label">
                                            end
                                            </label>
                                            <input
                                                type="time"
                                                className="form-control"
                                                id="end"
                                                name="end"
                                                onChange={(ev) => updateInputValue(ev)}
                                                value={formData.slot.end}
                                            />
                                        </div>
                                 
                                        <div className="mb-3">
                                            <label htmlFor="activity_img" className="form-label">
                                                Activity image
                                            </label>
                                            <input
                                                className="form-control"
                                                type="file"
                                                id="activity_img"
                                                name="activity_img"
                                                onChange={(ev) => updateImageField(ev)}
                                                // value={formData.activity.activity_img}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-success">
                                            Edit
                                        </button>
                                    </form>
                                </div>
                            )}

                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Detail;