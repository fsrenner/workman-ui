import { useLocation } from 'react-router-dom';

function Home() {
  const { state } = useLocation()

  return state 
    ? <div>The User is: {JSON.stringify(state.user)}</div> 
    : <div>This is the Home component</div>;
}

export default Home;
