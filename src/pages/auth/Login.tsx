import { useState } from "react";
const Login = () => {
  
  const [userInput, setUseUserInput] = useState({
    email:"",
    password:"",
  });
  const { email, password } = userInput;

  const _setUseUserInput = ( e:React.ChangeEvent<HTMLInputElement> ) => {
    setUseUserInput((prevState) => {
      return ({...prevState,[e.target.name]:e.target.value})
    })
  }

  return (
    <div className="travel_login">
      <div className="container">
        <div className="form-wrapper border rounded">
          <h1 className="form-header">User Login</h1>
          <form className="row g-3 align-items-center">
              <div className="mb-3 col-12">
                <label htmlFor="email" className="form-label">User Email</label>
                <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => _setUseUserInput(e)} placeholder="Your Email"/>
              </div>

              <div className="mb-3 col-12">
                <label htmlFor="password" className="form-label">User Password</label>
                <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e) => _setUseUserInput(e)} placeholder="Your Password"/>
              </div>

              <div className="col-12">   
                    <button type="submit" className="btn btn-secondary bg-secondary w-100">
                      Login
                    </button>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login

