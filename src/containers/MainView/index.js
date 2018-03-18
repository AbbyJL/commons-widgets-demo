import React from 'react';
import { connect } from 'react-redux';

import callingOptions from 'ringcentral-integration/modules/CallingSettings/callingOptions';
import withPhone from 'ringcentral-widgets/lib/withPhone';

import TabNavigationView from 'ringcentral-widgets/components/TabNavigationView';

import CallsIcon from 'ringcentral-widgets/assets/images/Calls.svg';
import SettingsIcon from 'ringcentral-widgets/assets/images/Settings.svg';
import HistoryIcon from 'ringcentral-widgets/assets/images/CallHistory.svg';
import DialPadIcon from 'ringcentral-widgets/assets/images/DialPadNav.svg';
import MessagesIcon from 'ringcentral-widgets/assets/images/Messages.svg';

import CallsHoverIcon from 'ringcentral-widgets/assets/images/CallsHover.svg';
import SettingsHoverIcon from 'ringcentral-widgets/assets/images/SettingsHover.svg';
import HistoryHoverIcon from 'ringcentral-widgets/assets/images/CallHistoryHover.svg';
import DialPadHoverIcon from 'ringcentral-widgets/assets/images/DialPadHover.svg';
import MessagesHoverIcon from 'ringcentral-widgets/assets/images/MessagesHover.svg';




const TABS = [
  {
    icon: DialPadIcon,
    activeIcon: DialPadHoverIcon,
    label: 'Dial Pad',
    path: '/dialer',
  },
  {
    icon: CallsIcon,
    activeIcon: CallsHoverIcon,
    label: 'Calls',
    path: '/calls',
    isActive: currentPath => (
      currentPath === '/calls' || currentPath === '/calls/active'
    ),
  },
  {
    icon: HistoryIcon,
    activeIcon: HistoryHoverIcon,
    label: 'History',
    path: '/history',
  },
  {
    icon: MessagesIcon,
    activeIcon: MessagesHoverIcon,
    label: 'Messages',
    path: '/messages',
    isActive: currentPath => (
      currentPath === '/messages' || currentPath.indexOf('/conversations/') !== -1
    ),
  },
  {
    icon: SettingsIcon,
    activeIcon: SettingsHoverIcon,
    label: 'Settings',
    path: '/settings',
    isActive: currentPath => (
      currentPath.substr(0, 9) === '/settings'
    ),
  }
];

function mapToProps(_, {
  phone: {
    routerInteraction,
  },
}) {
  return {
    tabs: TABS,
    currentPath: routerInteraction.currentPath,
  };
}
function mapToFunctions(_, {
  phone: {
    routerInteraction,
  }
}) {
  return {
    goTo: (path) => {
      if (path) {
        routerInteraction.push(path);
      }
    },
  };
}

const MainView = withPhone(connect(
  mapToProps,
  mapToFunctions
)(TabNavigationView));

export default MainView;
