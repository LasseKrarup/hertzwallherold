import { useEffect, useState } from 'react';

const useScroll = () => {
    const [scroll, setScroll] = useState();
  
    useEffect(() => {
      const handleWindowScroll = () => setScroll(window.scrollY);
      window.addEventListener("scroll", handleWindowScroll);
      return () => window.removeEventListener("scroll", handleWindowScroll);
    }, []);
  
    // Return the scroll so we can use it in our components
    return { scroll };
}

export default useScroll