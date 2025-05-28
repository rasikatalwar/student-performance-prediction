import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

function CourseDetail() {
  let {course_id}=useParams();
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-4">
          <img src="/logo512.png" className="img-thumbnail" alt="..."/>
        </div>
        <div className="col-8"> 
          <h3>Course Title: Introduction to Artificial Intelligence</h3>
          <p>Discover the fundamentals of Artificial Intelligence in our introductory course. Ideal for beginners, this program covers key AI concepts, machine learning, and practical applications. Gain hands-on experience, delve into real-world examples, and explore the ethical dimensions of AI. Whether you're entering the field or aiming to understand AI's impact, this course is your gateway to a dynamic world of innovation and technology.</p>
          <p className="fw-bold">Course By: <a href="#">Teacher 1</a></p>
          <p className="fw-bold">Duration : 3 Hours 30 Minutes</p>
          <p className="fw-bold">Total Enrolled : 350 Students</p>
          <p className="fw-bold">Ratings : 4.5/5</p>
        </div>
      </div>
      {/* Course Videos */}
      <div className="card mt-4">
        <h5 className="card-header">
          Course Videos
        </h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Introduction <button className="btn btn-sm btn-danger float-end"><i class="bi-youtube"></i></button></li>
          <li className="list-group-item">Setup Project</li>
          <li className="list-group-item">Start With Functional Component</li>
        </ul>
      </div>
      <h3 className="pb-1 mb-4 mt-5">Related Courses</h3>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <Link to="/detail/1"><img src="/logo512.png" className="card-img-top" alt="..." /></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="/detail/1">Artificial Intelligence</Link></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="/logo512.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><a href="#">Digital Electronics</a></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="/logo512.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><a href="#">Data Structures</a></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
