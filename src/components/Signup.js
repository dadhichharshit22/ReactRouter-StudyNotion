import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Signup = ({setLoggedIn}) => {
    
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false); 

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event){
  event.preventDefault();
   if(formData.password !== formData.confirmPassword){
    toast.error("Password do not match");
    return;
   }
   setLoggedIn(true);
   toast.success("Account Created");

   const accountData = {
     ...formData
   }
   console.log("Printing account data");
   console.log(accountData);

   navigate("/dashboard");
  }
  return (
    <div>
      {/* student-Instructor Tab */}
      <div>
        <button>Student</button>

        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div>
          {/* firstName && lastName */}
          <label>
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onClick={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
            />
          </label>

          <label>
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onClick={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
            />
          </label>
        </div>

        {/* Email Address */}
        <label>
          <p>
            Email Address <sup>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onClick={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
          />
        </label>

        {/* Password && confirmPassword */}

        <div>
          <label>
            <p>
              Create Password <sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onClick={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          <label>
            <p>
              Confirm Password <sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              onClick={changeHandler}
              placeholder="Enter Confirm Password"
              value={formData.confirmPassword}
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        <button> Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
