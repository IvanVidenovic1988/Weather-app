import './FutureThreeDays.css'

export default function FutureSevenDays({ data }) {

    return (

        <div>

            <div className='name'>
                <h2>{data.name}</h2>
            </div>
            
            <div className='wrapper'>
                {data.weather.map((day) => (

                <div key={day.id}>

                    <div className='current-time'>
                         <p>{day.date}</p>
                    </div>

                    <div className='day'>

                        <div className='max-min'>
                            <div className='max-temp'>
                                <p>max-temp</p>
                                <h2>{day.maxTemp}*C</h2>
                            </div>

                            <div className='min-temp'>
                                <p>min-temp</p>
                                <h2>{day.minTemp}*C</h2>
                            </div>
                        </div>

                        <div className='desc'>
                            <div className='description'>
                                <p>{day.description}</p>
                            </div>

                            <div className='img'>
                                <img 
                                    src={day.icon}
                                    alt='slika'
                                />
                            </div>
                        </div>    

                    </div>

                    <div className='extras'>

                        <div className='wind-speed'>
                            <p>{day.wind_speed}</p>
                            <p>Wind Speed</p>
                        </div>

                        <div className='chanse-of-rain'>
                            <p>{day.chanse_of_rain} %</p>
                            <p>Chanse of Rain</p>
                        </div>
                        
                    </div>
                </div>

                ))}
            </div>
         
        </div>
    );
};

