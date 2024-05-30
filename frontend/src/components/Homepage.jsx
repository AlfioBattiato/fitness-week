import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    const [courses, setCourses] = useState([]); // null buon candidato

    useEffect(() => {
        fetch('api/v1/courses')
            .then((res) => res.json())
            .then((data) => {
                setCourses(data)
                console.log(data)
            }
            );
    }, []);

    return (
        <>
            {courses.map((course) => (
                <div key={course.id}>
                    <h2>{course.activity.name}</h2>{' '}
                <div className="row">
                    <div className="col-4">Date:{course.slot.day}</div>
                    <div className="col-4">start:{course.slot.start}</div>
                    <div className="col-4">end:{course.slot.end}</div>
                </div>
                   
                </div>
            ))}
        </>
    );
};

export default Homepage;