import React, { useContext } from 'react';
import NameContext from '../context/NameContext';


const Form = (props) => {
    // Using the context I created.  Imported above

const {name, setName} = useContext(NameContext);
    
    return(
        
        <div className="form">
            <form>
                <p>
                    <label htmlFor="name">Enter Name : </label>
                    <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </p>
            </form>
        </div>
    )
}

export default Form;