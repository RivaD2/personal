import {useState, useEffect} from 'react';

const Route = ({path, children}) => {
  // Piece of state is just to get route to update
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    //Listen for dispatched event from Link
    window.addEventListener('popstate', onLocationChange);
    // Clean up function
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);
  return currentPath === path ? children : null;
};
export default Route;