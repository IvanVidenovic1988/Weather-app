import BottomData from './BottomData';

import './Bottom.css'


export default function Bottom ({ weather }) {

    return (
      
        <div className="bottom">

            <div className='feels-like'>
              <BottomData 
                data={weather.feels_like}
                text='Feels Like'
              />
            </div>

            <div className="humidity">
              <BottomData 
                data={weather.humidity}
                text='Humidity'
              />
            </div>

            <div className="wind">
              <BottomData 
                data={weather.wind_speed}
                text='Wind'
              />
            </div>

        </div>
    );
};

