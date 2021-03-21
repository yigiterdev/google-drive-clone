import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CenteredContainer from './CenteredContainer';
function Profile() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  async function handleLogout() {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <CenteredContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">
            <FontAwesomeIcon icon={faUpload} /> yigiterDrive | Profile
          </h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong>
          {' ' + currentUser.email}
          <Link to="/update-profile" className="btn btn-success w-100 mt-3">
            {' '}
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/" className="btn btn-success m-4">
          Back to Dashboard
        </Link>
        <Button
          variant="link btn btn-success text-light m-4"
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </div>
    </CenteredContainer>
  );
}

export default Profile;
