import { useState } from "react";
import styles from "./authLayout.module.css";
import Login from "../Login/Login.jsx";
import SignUp from "../SignUp/SignUp.jsx";
import About from "../About/About.jsx";
import { useLocation } from "react-router-dom";
// import Layout from "../../Layout/Layout.jsx";

export default function AuthLayout() {
  const navStateData = useLocation();
  const [isLogin, setisLogin] = useState(true); // Renamed the setter to match the state
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to toggle between SignUp and Login forms
  const toggleForm = () => {
    setIsTransitioning(true); // Start the transition
    setTimeout(() => {
      setisLogin((prev) => !prev); // Change the component after fade-out
      setIsTransitioning(false); // End the transition after fade-in
    }, 500); // 500ms - CSS transition duration
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div
            className={`${styles.formContainer} ${
              isTransitioning ? styles.fadeOut : styles.fadeIn
            }`}
          >
            {isLogin ? (
              <Login onSwitch={toggleForm} useLocData={navStateData} />
            ) : (
              <SignUp onSwitch={toggleForm} />
            )}
          </div>
          <div className={styles.about}>
            <About />
          </div>
        </div>
      </div>
    </>
  );
}
