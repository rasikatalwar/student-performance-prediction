import { Link } from 'react-router-dom';

function Registration() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">User Registration</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="fullName" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="confirmPassword" />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-success btn-block">Register</button>
                </div>
              </form>
            </div>
            <div className="card-footer text-center">
              <p className="mb-0">
                Already have an account? <Link to="/user-login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
