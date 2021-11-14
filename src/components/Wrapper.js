import React, {useState} from 'react';
import NameContext from '../context/NameContext';

const Wrapper = (props) => {
    // setting the state that I will use with context
    const [name, setName] = useState("Chris");
    // deconstructing the children from props
    const {children} = props;

    return(
        // giving the children access to that state
        <NameContext.Provider value={{name, setName}}>
            {children}
        </NameContext.Provider>
    )

}

export default Wrapper;