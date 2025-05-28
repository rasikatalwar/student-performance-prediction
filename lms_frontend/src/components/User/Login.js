import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">User Login</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-block">Login</button>
                </div>
              </form>
            </div>
            <div className="card-footer text-center">
              <p className="mb-0">
                Don't have an account? <Link to="/user-register">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
