import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Convert =({language, text}) => {
  const [translated, setTranslated] = useState('');
  const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, 
      {
        params: {
          q: text,
          target: language.value,
          key: KEY
        }
      }) 
      // First data is info from axios response, second data is actual response data
      setTranslated(data.data.translations[0].translatedText);
    }
    // Function invoked anytime language or text is changed or when component first mounts
    doTranslation();
  }, [language, text]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  )
}
export default Convert;