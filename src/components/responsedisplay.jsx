import React, { useState, useEffect } from 'react'
import ReactMarkdown from "react-markdown";

const Responsedisplay = ({ text, speed , search}) => {

  if (search == ""){
    return(<div className="prose max-w-none text-left p-5 bg-slate-200 rounded-xl font-semibold text-black w-full">Ask me anything about the file</div>)
  }
  text = `

#   ***?-${search}*** :
 
 ` + text 
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length - 1) {
        setDisplayText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    
    return () => clearInterval(interval);
    
  }, [text, speed]);
  
  

  return (
    <div className="prose max-w-none text-left p-8 bg-slate-200 rounded-xl  text-black font-serif w-full">
          {displayText && <ReactMarkdown skipHtml={false} hardBreaks={true} children={displayText}>{displayText}</ReactMarkdown>}
        </div>
  )
}

export default Responsedisplay
