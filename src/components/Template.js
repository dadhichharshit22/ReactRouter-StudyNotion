import React from "react";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import frameImage from "../assets/frame.png";

const Template = ({ title, desc1, desc2, image, formtype, setLoggedIn }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>
        {formtype === "signup" ? <Signup setIsLoggedIn={setLoggedIn}/> : <Login setIsLoggedIn={setLoggedIn}/>}

        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>

        <button>
          <p>Sign in With Google</p>
        </button>
      </div>

      <div>
        <img
          src={frameImage}
          alt="FrameImage"
          width={558}
          height={504}
          loading="lazy"
        />

        <img
          src={image}
          alt="StudentImage"
          width={558}
          height={504}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Template;
