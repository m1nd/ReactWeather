import React from 'react'
import Nav from 'Nav'

export default (props) => {
    return (
        <div>
            <Nav/>
            <h2>Main Component</h2>
            { props.children }
        </div>
    );
}
