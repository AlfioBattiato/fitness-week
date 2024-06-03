import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

function Dashboard() {
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState(user.email);
  const [display, setDisplay] = useState('none');

  const handleResetPassword = (event) => {
    axios.post("/forgot-password", { email });
    setDisplay('block')
  };
  const resetName = (event) => {
    axios.post("/forgot-password", { email });
    setDisplay('block')
  };

  return (
    <>
      <div className="container my-5 py-5">
        <div className="alert alert-success my-3" style={{display:display}} role="alert">
        A link for the reset of your password has been sent to your email. Check your inbox!
        </div>






        {/* //////////////////////////////////////////////////// */}
        <div className="row">
          <div className="col-12 col-md-6">
            <img src={user.profile_img} alt="profile_img" className="img_profile2" />
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-6">
                <p className="fw-bold">
                  User: <span className="text-dark">{user.name}</span>
                </p>
              </div>
              <div className="col-6">
                <p className="fw-bold text-primary change" 
                onClick={resetName}>Change</p>
              </div>
              <hr />
              <div className="col-6">
                <p className="fw-bold">
                  Email: <span className="text-dark ">{user.email}</span>
                </p>
              </div>
              <div className="col-6">
                <p className="fw-bold text-primary change ">Change</p>
              </div>
              <hr />
              <div className="col-6">
                <p className="fw-bold">
                  Password: <span className="text-dark">************</span>
                </p>
              </div>
              <div className="col-6">
                <p className="fw-bold text-primary change" onClick={handleResetPassword}>
                  Change
                </p>
                <p className="text-success"></p>
              </div>
              <hr />
              <div className="col-6">
                <p className="fw-bold">
                  Created at: <span className="text-dark">{user.created_at.slice(0, 10)}</span>
                </p>
              </div>
              <hr />
            </div>
          </div>
        </div>
        {/* <form onSubmit={handleResetPassword} style={{ display: "none" }}>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button type="submit">Reset Password</button>
                </form> */}
      </div>
    </>
  );
}

export default Dashboard;
