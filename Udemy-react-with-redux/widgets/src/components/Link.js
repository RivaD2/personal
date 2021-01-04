import React from 'react'

const Link = ({className, href, children}) => {
  const onClick = e => {
    // metaKey for Mac, ctrl for Windows/ allows users to open new tab to navigate to new url
    if(e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    // Changes URL but doesn't allow full page refresh
    window.history.pushState({}, '', href);
      // Tell dropdown components that data/url just changed
      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent);
  };

  return (
    <a 
      onClick={onClick}
      className={className} 
      href={href} 
      children={children}>
    </a>
  )
}
export default Link;