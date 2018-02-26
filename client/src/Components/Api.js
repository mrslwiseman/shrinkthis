import React from 'react';

export default () => (
    <div className='api-details'>
        <h2>API Endpoints</h2>
        <div>
            <h3>URL</h3>
            <p><code>/new</code></p>
            <hr />
            <div>
                <h3>Method</h3>
                <p><code>GET</code></p>
            </div>
            <hr />
            <div>
                <h3>URL Params</h3>
                <h4>Required:</h4>
                <p><code>url=[string]</code></p>
            </div>
            <hr />
            <h4>Rules:</h4>
            <ul>
                <li>Must be a valid URL.</li>
                <li>API does a basic cleanup of URL string including adding <code>http://</code> protocol if missing.</li>
            </ul>
        </div>
        <hr />
        <div>
            <h4>Error Responses</h4>
            <p><strong>Code:</strong> 404 NOT FOUND</p>
            <p><strong>Content: </strong><code>{`success: false, msg: 'Link Id was invalid or not found.'`}</code></p>
            <hr />
            <p><strong>Code:</strong> 400 BAD REQUEST</p>
            <p><strong>Content: </strong><code>{`success: false, msg: 'Your query was empty.'`}</code></p>
            <hr />
            <p><strong>Code:</strong> 400 BAD REQUEST</p>
            <p><strong>Content: </strong><code>{`success: false, msg: 'Your query is missing a URL parameter.'`}</code></p>
            <hr />
            <p><strong>Code:</strong> 400 BAD REQUEST</p>
            <p><strong>Content: </strong><code>{`success: false, msg: 'Please enter a valid url.'`}</code></p>
        </div>


    </div>
)