import React from 'react';
import { Segment, Button, Icon, Message } from 'semantic-ui-react';

const LinkList = (props) => {

    return (
        <div>
            {
                props.links
                    .map(link => (
                        <Segment color='green'>
                            <h3>{link.short}</h3>
                            <p>{link.long}</p>
                        </Segment>
                        // <Message 
                        // header={link.short}
                        // color='green'
                        // content={link.long}                        
                        // />
                    ))
            }
        </div>
    )
}

export default LinkList;