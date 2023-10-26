import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import "./styles/Login.css";
import { Toast } from './components/ApiResponse';

function VerifyEmail() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');
  const [verificationStatus, setVerificationStatus] = useState('verifying');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!token) {
      setVerificationStatus('failed');
      setErrorMessage('Token not found');
      return;
    }

 
    fetch(`https://skyfitzz.up.railway.app/api/v1/user/verify-user/${token}`, {
      method: 'PATCH',
    })
      .then(async (response) => {
        if (response.ok) {
          // Verification successful
          setVerificationStatus('verified');
        } else {
          // Verification failed
          setVerificationStatus('failed');
          const errorData = await response.json();
          setErrorMessage(errorData.message); // Set the error message from the response
        }
      })
      .catch((error) => {
        Toast.fire({
          icon: "error",
          title: error
        })
        setVerificationStatus('failed');
        setErrorMessage('An error occurred during verification');
      });
  }, [token]);

  useEffect(() => {
    // Redirect the user after a few seconds when verification is successful
    if (verificationStatus === 'verified') {
      setTimeout(() => {
        navigate('/login');
      }, 5000); // 5 seconds delay
    }
  }, [verificationStatus, navigate]);

  return (
    <div className="verify-email-container">
      <div className="verify-email-content">
        {verificationStatus === 'verifying' && <p>verifying...</p>}
        {verificationStatus === 'verified' && <p>Verification successful! Redirecting to login...</p>}
        {verificationStatus === 'failed' && (
          <div>
            <p>{errorMessage}</p>
            {/* Add a button or link here to trigger email resend */}
          </div>
        )}
      </div>
    </div>
  );
}

export default VerifyEmail;
