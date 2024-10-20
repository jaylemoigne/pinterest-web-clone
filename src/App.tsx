import React, { useState, useEffect } from "react";
import VerticalNavbar from "./components/VerticalNavbar";
import HorizontalNavBar from "./components/HorizontalNavBar";
import Content from "./components/Content";
import { FaPinterest } from "react-icons/fa";

// Loading Component
const LoadingScreen = () => {
  return (
    <div style={styles.loadingContainer}>
      <h1 style={styles.loadingText}>
        <img
          src="images/loading.gif"
          alt="Loading"
          className="text-9xl text-emerald-700"
        />
      </h1>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data loading (replace with your data fetching logic)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after content is loaded
    }, 3000); // Simulate 2 seconds of loading time

    // Clean up timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <HorizontalNavBar />
          <VerticalNavbar />
          <Content />
        </div>
      )}
    </>
  );
};

const styles = {
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "white",
  },
  loadingText: {
    fontSize: "2rem",
    color: "#333",
  },
  mainContent: {
    textAlign: "center",
    padding: "2rem",
  },
};

export default App;
