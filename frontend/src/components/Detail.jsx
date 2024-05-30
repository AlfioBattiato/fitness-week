import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Detail = () => {
    const [course, setCourse] = useState(null); 
    const {id} =useParams()


    useEffect(() => {
        fetch(`api/v1/courses/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCourse(data)
                console.log(data)
            }
            );
    }, [course,id]);

    return (
        <>
            <h1>Courses</h1>
            <div className="row mt-5">
             
             {course!==null&&(
                       <div className="col-6 col-md-4 col-lg-3">
                       <div className="card  border border-1" 
                           style={{ height: "28rem" }}>
                           <img src="https://plus.unsplash.com/premium_photo-1672352100479-b09df32e7ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D"
                               className="card-img-top" alt="img"
                               style={{ width: "100%", height: "50%", objectFit: "cover" }} />
                           <div className="card-body">
                               <h5 className="card-title">{course.activity.name}</h5>
                               <p className="card-text d-flex fw-bold mb-1 mt-3">Date: <span class="badge text-bg-dark ms-auto">{course.slot.day}</span></p>
                               <p className="card-text d-flex fw-bold mb-1">Start at: <span class="badge text-bg-dark ms-auto">{course.slot.start}</span></p>
                               <p className="card-text d-flex fw-bold mb-3">End at: <span class="badge text-bg-dark ms-auto">{course.slot.end}</span></p>
                              <div className="d-flex">
                              <Link to={`/courses/${course.id}`} className="btn btn-secondary ">Dettagli</Link>
                             
                              </div>

                           </div>
                       </div>
                   </div>
             )}
              
            </div>
        </>
    );
};

export default Detail;