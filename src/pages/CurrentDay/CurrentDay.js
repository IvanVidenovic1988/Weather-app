import Top from '../../components/Top.js'
import Bottom from '../../components/Bottom.js'

import './CurrentDay.css'

export default function CurrentDay({ weather }) {

  

    return (
      
        <div className='container'>

          <div className='current-time'>
            <p>{weather.date}</p>
          </div>
          
          <Top 
            weather={weather}
          />
      
          <Bottom 
            weather={weather}
          />
        
        </div>
    );
};