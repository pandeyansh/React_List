import React, { useState } from 'react';
function Arrayofstring()
{
    const compiler=[
        {id:1,language:"Java"},
        {id:2,language:"Python"},
        {id:3,language:"C++"},
        {id:4,language:"C#"},
        {id:5,language:"JavaScript"}
    ];
    const [selectedLanguage, setSelectedLanguage]=useState('');
    const handleLanguageChange = (event)=>{
        setSelectedLanguage(event.target.value);
    };
    return(
        <div>
        <h1>Select the language</h1>
        <div>
        <label htmlFor="languageSelect">Select a language: </label>
        <select id="languageSelect" value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="">Select an option</option>
          {compiler.map((c) => (
            <option key={c.id} value={c.language}>{c.language}</option>
          ))}
        </select> 
        </div>
      {selectedLanguage && <p>You selected: {selectedLanguage}</p>}
        </div>
    );
};
export default Arrayofstring;