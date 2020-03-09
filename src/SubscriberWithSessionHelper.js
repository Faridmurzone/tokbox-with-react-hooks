import React, {useState, useEffect} from 'react';
import { createSession, preloadScript, OTPublisher, OTSubscriber } from 'opentok-react';
import Keys from './config.js';

const SubscriberWithSessionHelper = () => {
    const [sessionHelper, setSessionHelper] = useState({
        apikey: '',
        sessionid: '',
        token: ''    
        })
    const [streams, setStreams] = useState()
    
    useEffect(() => {
      let helper = createSession({
        apiKey: Keys.API_KEY,
        sessionId: Keys.SESSION_ID,
        token: Keys.TOKEN,
        onStreamsUpdated: stream => setStreams(stream) 
      });
      setSessionHelper(helper)
  
      return () => sessionHelper.disconnect()
    }, [])
   
   
    return (
        <div>
        Stream...
          <OTPublisher session={sessionHelper.session} />
          {streams && streams.map(stream => {
            return (
              <OTSubscriber
                key={stream.id}
                session={sessionHelper.session}
                stream={stream}
              />
            );
          })}
        </div>
      );
  }
  
  export default preloadScript(SubscriberWithSessionHelper);
  