import { useEffect, useState } from "react";
import '../../frontends/auths/auth.scss';

const Register = () => {

  const [userInput, setUseUserInput] = useState({
    name:"", email:"", password:"", password_confirmation:""
  });

  const { name, email, password, password_confirmation } = userInput;
  const _setUseUserInput = ( e:React.ChangeEvent<HTMLInputElement> ) => {
    setUseUserInput((prevState) => {
      return ({...prevState,[e.target.name]:e.target.value})
    })
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  },[]);

  return (
    <div className="travel_register">
      <div className="container">
          <div className="form-wrapper border rounded">
            <h1 className="form-header">User Register</h1>
            <form className="row g-3 align-items-center">
              <div className="mb-3 col-12">
                <label htmlFor="name" className="form-label">User Name</label>
                <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e) => _setUseUserInput(e)} placeholder="Your Name"/>
              </div>
              <div className="mb-3 col-12">
                <label htmlFor="email" className="form-label">User Email</label>
                <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => _setUseUserInput(e)} placeholder="Your Email"/>
              </div>

              <div className="mb-3 col-12">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e) => _setUseUserInput(e)} placeholder="Your Password"/>
              </div>

              <div className="mb-3 col-12">
                <label htmlFor="password_confirmation" className="form-label">Password Confirmation</label>
                <input type="password" className="form-control" id="password_confirmation" name="password_confirmation" value={password_confirmation} onChange={(e) => _setUseUserInput(e)} placeholder="Your Password Confirmation"/>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-secondary bg-secondary w-100">
                  Register
                </button>
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Register
