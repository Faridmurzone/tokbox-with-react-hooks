import React from 'react';
import { OTSession, OTPublisher, OTStreams, OTSubscriber, preloadScript } from 'opentok-react';
import Keys from './config.js';

function Subscriber() {
  return (
    <div>
        <OTSession 
          apiKey={Keys.API_KEY} 
          sessionId={Keys.SESSION_ID} 
          token={Keys.TOKEN}>
        <OTPublisher />
        <OTStreams>
          <OTSubscriber />
        </OTStreams>
      </OTSession>
    </div>
  );
}

export default preloadScript(Subscriber)