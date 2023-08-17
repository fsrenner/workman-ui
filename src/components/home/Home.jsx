import { useEffect, useState } from 'react';

import User from '../users/User';

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isLoggedInUser = localStorage.getItem('user');
    if (isLoggedInUser) {
      setUser(JSON.parse(isLoggedInUser));
    }
  }, []);

  return user 
    ? <User user={user} />
    : <div>This is the Home component</div>;
}

export default Home;
