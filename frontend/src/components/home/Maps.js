import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Stack from '@mui/material/Stack'

const Maps = () => {

    // look into embedding outside of an iframe
    //https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-html

    //const [mapUrl, setMapUrl] = useState("https://www.google.com/maps/embed/v1/view?key=" + process.env.REACT_APP_GOOGLE_MAPS_KEY + "&center=35.6587301,139.7457922&zoom=13&language=ja") //tokyo start
    const [mapUrl, setMapUrl] = useState("https://www.google.com/maps/embed/v1/view?key=" + process.env.REACT_APP_GOOGLE_MAPS_KEY + "&center=52.8447467,-0.6154744&zoom=6&language=ja") //uk start
    
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setMapUrl("https://www.google.com/maps/embed/v1/view?key=" + process.env.REACT_APP_GOOGLE_MAPS_KEY + "&center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=13&language=ja")
            })
        }
    }, [])

    return(
        <div className='homeComponent'>
            <div className='homeTitle'>
                <h2>Explore The World In Japanese!</h2>
            </div>
            <div className='homeContents'>
                <Stack justifyContent='center' spacing={2} sx={{width: '100%'}}> 
                    <iframe
                        title='JapaneseMap'
                        width="100%"
                        height="400px"
                        referrerPolicy="no-referrer-when-downgrade"
                        src={mapUrl}
                        style={{"border" :"1px solid"}}
                    >
                    </iframe>
                    <p>Did you know by setting your language in Google Maps to Japanese, foreign place names are transliterated and displayed in Katakana? By allowing location access, you can explore where you are right now! This is a great way to improve your Katakana skills. Don't know Katakana? Learn about it { <Link to={window.location.href + "lessons"}>here!</Link>} </p>
                </Stack>
            </div>
        </div>
    )
}

export default Maps