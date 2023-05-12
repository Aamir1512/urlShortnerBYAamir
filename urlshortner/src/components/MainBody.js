import React from 'react';
import '../index.css';
import { useState } from 'react';
import axios from 'axios';

export default function MainBody() {

    const [inpUrl, setInpUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('type a URL to short it');
    const [targetUrl, setTargetUrl] = useState('');
  
    const updateUrl = (event) => {
      setInpUrl(event.target.value);
    }
  
    const shortURL = () => {
      const url = `https://api.shrtco.de/v2/shorten?url=${inpUrl}`
      axios.get(`${url}`)
        .then((response) => {
          console.log(response.data.result);
          setShortenedUrl(response.data.result.short_link);
          setTargetUrl(response.data.result.full_short_link);
        })
  
    }

    const copyUrl = () => {
        navigator.clipboard.writeText(shortenedUrl);
    }
  
    return (
        <div className="outerDiv">
            <div className='mainBody'>
                <div className="innerBody">
                    <h1 className="heading">
                        Paste your URL to be shortened
                    </h1>
                    <input type="text" value={inpUrl} onChange={updateUrl} className="text" />
                    <div className="btnDiv">
                        <button className='btn urlBtn' onClick={shortURL}>SHORTEN URL</button>
                        <button className='btn copyBtn' onClick={copyUrl} >COPY TO CLIPBOARD</button>
                    </div>
                    <p className="shortenUrl"><a href={targetUrl} target='_blank' rel="noreferrer"  className="shortenUrl">{shortenedUrl}</a></p>
                    <p className="about">URL Shortner is a free tool to shorten a URL or reduce a link use our URL Shortner to create a shortened link making it easy to remember</p>
                </div>
            </div>
        </div>
    )
}
