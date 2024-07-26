import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();   /* get our state from context store */
  return (
    <div>
      <h3>Welcome, {user}</h3>
    </div>
  );
};

export default Profile;
