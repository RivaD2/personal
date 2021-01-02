import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);
  
  // Runs anytime term changes
  useEffect(() => {
    const timerId = setTimeout(() => {
        // Anytime useEffect changes, I queue up change to debouncedTerm
        // Timer updates setDebouncedTerm
        setDebouncedTerm(term);
    }, 1000);

    // Cleanup to cancel timer
    // I clear previous timer if user changes term too quickly
    return () => {
        clearTimeout(timerId);
    }
    // Term changes when user types in input
  }, [term]);

  // We hit this function whenever a change to 
  // setDebouncedTerm is changed and processed
  // This useEffect will run whenever I first render component so a search immediately happens
  useEffect(() => {
    const search = async () => {
        const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
                // Axios will take these key value pairs and append onto url automatically
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: debouncedTerm
            },
        });
        setResults(data.query.search);
    };
    // Search is called when useEffect is called and a request is made
    search();
    // Array controls when overall function is executed
    // Whatever elements are passed in will cause function to execute 
    // again when one or more element changes
    }, [debouncedTerm]);

  const renderedResults = results.map(result => {
    return <div key={result.pageid} className="item">
        <div className="right floated content">
            <a 
                className="ui button"
                href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                Go
            </a>
        </div>
        <div className="content">
            <div className="header">
                {result.title}
            </div>
            {/* only using this for this practice app ONLY*/}
            <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
        </div>
    </div>
 });

  return (
    <div>
        <div className="ui form">
            <div className="field">
            <label>Enter Search Term</label>
            <input 
                className="input" 
                value={term}
                onChange={e => setTerm(e.target.value)}
            />
            </div>
        </div>
        <div className="ui celled list">
            {renderedResults}
        </div>
    </div>
  )
};
export default Search;