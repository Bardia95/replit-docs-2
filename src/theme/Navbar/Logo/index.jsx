import React from 'react';
import Logo from '@theme/Logo';
import Link from '@docusaurus/Link';

function useInIframe() {
  const [isInIframe, setIsInIframe] = React.useState(null);
  
  React.useEffect(() => {
    try {
      setIsInIframe(!window.top.location.hostname);
    } catch (e) {
      setIsInIframe(true);
    }  
  })
  
  return isInIframe;
}



export default function NavbarLogo() {
  const isInIframe = useInIframe();
  
  return (
    <span>
       {isInIframe
         ? 
         <Link className="navbar__brand" to="/">Docs</Link> 
         : 
         <Logo
          className="navbar__brand"
          imageClassName="navbar__logo"
          titleClassName="navbar__title text--truncate"
        />
       }
    </span>
 )    
}