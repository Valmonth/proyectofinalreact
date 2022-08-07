import React from 'react';
import '../styles/loading.css'
import { Spinner } from "react-bootstrap";
import Logo from "../public/loading.gif";

const LoadingScreen = () => {
    return (
        <div>
             <div className="overlay">
      <Spinner animation="grow" variant="secondary" />
    </div>
    
        </div>
    );
};

export default LoadingScreen;