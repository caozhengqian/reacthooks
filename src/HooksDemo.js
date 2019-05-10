import React, {useState} from 'react';


export default function HooksDemo(props) {
    const [name,setName] = useState('Mary');
    const [surname,setSurname] = useState('Poppins');

    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleSurnameChange(e) {
        setSurname(e.target.value)
    }
    return(
        <div>
          <div>
              <input
                  value={name}
                  onChange={handleNameChange}
                  />
          </div>
            <div>
                <input
                    value={surname}
                    onChange={handleSurnameChange}
                />
            </div>
        </div>
    );
} ;
