import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import PhoneProvider from 'ringcentral-widgets/lib/PhoneProvider';
import CallingSettingsPage from 'ringcentral-widgets/containers/CallingSettingsPage';
import RegionSettingsPage from 'ringcentral-widgets/containers/RegionSettingsPage';
import DialerPage from 'ringcentral-widgets/containers/DialerPage';
import SettingsPage from 'ringcentral-widgets/containers/SettingsPage';
import WelcomePage from 'ringcentral-widgets/containers/WelcomePage';
import ActiveCallsPage from 'ringcentral-widgets/containers/ActiveCallsPage';
import CallHistoryPage from 'ringcentral-widgets/containers/CallHistoryPage';
import ConversationPage from 'ringcentral-widgets/containers/ConversationPage';

import MessagesPage from 'ringcentral-widgets/containers/MessagesPage';

import AlertContainer from 'ringcentral-widgets/containers/AlertContainer';

import MainView from '../MainView';
import AppView from '../AppView';


export default function App({
  phone,
  hostingUrl,
}) {
  return (
    <PhoneProvider phone={phone}>
      <Provider store={phone.store} >
        <Router history={phone.routerInteraction.history} >
          <Route
            component={routerProps => (
              <AppView
                hostingUrl={hostingUrl}
              >
                {routerProps.children}
              </AppView>
            )} >
            <Route
              path="/"
              component={() => (
                <WelcomePage>
                  <AlertContainer
                    callingSettingsUrl="/settings/calling"
                    regionSettingsUrl="/settings/region"
                  />
                </WelcomePage>
              )}
            />
            <Route
              path="/"
              component={routerProps => (
                <MainView>
                  {routerProps.children}
                  <AlertContainer
                    callingSettingsUrl="/settings/calling"
                    regionSettingsUrl="/settings/region"
                  />
                </MainView>
              )} >
              <Route
                path="/settings"
                component={routerProps => (
                  <SettingsPage
                    params={routerProps.location.query}
                    regionSettingsUrl="/settings/region"
                    callingSettingsUrl="/settings/calling"
                    showAudio={false}
                    showFeedback={false}
                  />
                )}
              />
              <Route
                path="/settings/region"
                component={RegionSettingsPage}
              />
              <Route
                path="/settings/calling"
                component={CallingSettingsPage}
              />
              <Route
                path="/calls"
                component={ActiveCallsPage}
              />
               <Route
                path="/messages"
                component={MessagesPage}
              />
              <Route
                path="/conversations/:conversationId"
                component={props => (
                  <ConversationPage
                    params={props.params}
                    showContactDisplayPlaceholder={false}
                  />
                )} />
              <Route
                path="/settings/calling"
                component={CallingSettingsPage}
              />
              <Route
                path="/dialer"
                component={DialerPage}
              />
               <Route
                path="/history"
                component={() => (
                  <CallHistoryPage
                    showContactDisplayPlaceholder={false}
                  />
                )}
              />
            </Route>
          </Route>
        </Router>
      </Provider>
    </PhoneProvider>
  );
}

App.propTypes = {
  phone: PropTypes.object.isRequired,
  hostingUrl: PropTypes.string.isRequired,
};
