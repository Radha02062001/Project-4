import React from "react";

const Spans=()=>{
    const [onColorChange,setColor]=React.useState(false)

    const backcolor=<h1 className='backcolor'onClick={(e)=>{
        e.preventDefault()
        setColor(true)
        }}>Change</h1>
      
      const reset=<h1 className='reset' onClick={(e)=>{
       e.preventDefault()
      setColor(false)}}>Reset</h1>

    return(
        
          <div className="App" style={{backgroundColor : onColorChange ? 'violet':'pink'}}>
            {backcolor}
            {reset}
          </div>
    );
};


export default Spans;
