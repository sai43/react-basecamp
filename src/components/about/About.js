import React, {useState } from 'react';

function About() {
  const [showDiv] = useState(false);
  return (
        <div>
          { showDiv === false ?
          <h1>About Page  - true </h1>
          : <h1> About Page - false </h1>
          }
            
        </div>
  );
}

export default About;
