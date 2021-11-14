import React, {useContext} from 'react';
import NameContext from '../context/NameContext';

const Navbar = (props) => {
    // Using the context I created.  Imported above
    const {name} = useContext(NameContext);

    return(
        <div className="navBar">
            <h1 className="navHeader">Go {name}! &nbsp;</h1>;
        </div>
    )
}

export default Navbar;