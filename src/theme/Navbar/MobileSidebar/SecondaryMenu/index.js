import React from 'react';
import {useNavbarSecondaryMenu, useThemeConfig} from '@docusaurus/theme-common';
import Translate from '@docusaurus/Translate';

function SecondaryMenuBackButton(props) {
  return (
    <button {...props} type="button" className="clean-btn navbar-sidebar__back">
      <Translate
        id="theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel"
        description="The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)">
        ← Back to main menu
      </Translate>
    </button>
  );
} // The secondary menu slides from the right and shows contextual information
// such as the docs sidebar


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

export default function NavbarMobileSidebarSecondaryMenu() {
  const isPrimaryMenuEmpty = useThemeConfig().navbar.items.length === 0;
  const secondaryMenu = useNavbarSecondaryMenu();
  const isInIframe = useInIframe();
  
  return (
    <>
      {/* edge-case: prevent returning to the primaryMenu when it's empty */}
      {!isPrimaryMenuEmpty && !isInIframe && (
        <SecondaryMenuBackButton onClick={() => secondaryMenu.hide()} />
      )}
      {secondaryMenu.content}
    </>
  );
}
