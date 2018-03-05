import React from 'react';
import { Table } from 'semantic-ui-react'

export default () => (
    <div>
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Endpoint</Table.HeaderCell>
                    <Table.HeaderCell>Method</Table.HeaderCell>
                    <Table.HeaderCell>Query Params</Table.HeaderCell>
                    <Table.HeaderCell>Response</Table.HeaderCell>
                    <Table.HeaderCell>Notes</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row positive>
                    <Table.Cell>/api/new</Table.Cell>
                    <Table.Cell>GET</Table.Cell>
                    <Table.Cell><code>url: [url] *Required</code></Table.Cell>
                    <Table.Cell><code>success: true, short_link: http://shrinkthis.herokuapp.com/:id</code></Table.Cell>
                    <Table.Cell>Must be a valid URL. API does a basic cleanup of URL string including adding <code>http://</code> protocol if missing.</Table.Cell>

                </Table.Row>
                <Table.Row>
                    <Table.Cell colSpan='5'><strong>Sample Request:</strong> <code>/api/new?url=http://www.youtube.com</code></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell colSpan='5'><strong>Sample Response:</strong> <code>success: true, short_link: http://shrinkthis.herokuapp.com/150</code></Table.Cell>
                </Table.Row>
                <Table.Row positive>
                    <Table.Cell>/api/:id</Table.Cell>
                    <Table.Cell>GET</Table.Cell>
                    <Table.Cell><code>:id [url] *Required</code></Table.Cell>
                    <Table.Cell>Redirects to URL if found.</Table.Cell>
                    <Table.Cell></Table.Cell>

                </Table.Row>
                <Table.Row>
                    <Table.Cell colSpan='5'><strong>Sample Request:</strong> <code>http://shrinkthis.herokuapp.com/150</code></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell colSpan='5'><strong>Sample Request:</strong> <code>Redirects to http://www.youtube.com</code></Table.Cell>
                </Table.Row>

            </Table.Body>

        </Table>
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Error Response</Table.HeaderCell>
                    <Table.HeaderCell>Response Status</Table.HeaderCell>
                    <Table.HeaderCell>Troubleshooting</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell><code>{`success: false, msg: 'Link Id was invalid or not found.'`}</code></Table.Cell>
                    <Table.Cell>404 NOT FOUND</Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell><code>{`success: false, msg: 'Your query was empty.'`}</code></Table.Cell>
                    <Table.Cell>400 BAD REQUEST</Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell><code>{`success: false, msg: 'Your query is missing a URL parameter.'`}</code></Table.Cell>
                    <Table.Cell>400 BAD REQUEST</Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell><code>{`success: false, msg: 'Please enter a valid url.'`}</code></Table.Cell>
                    <Table.Cell>400 BAD REQUEST</Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>
            </Table.Body>

        </Table>
    </div>

    //     <div>
    //         <h4>Error Responses</h4>
    //         <p><strong>Code:</strong> </p>
    //         <p><strong>Content: </strong><code>{`success: false, msg: 'Link Id was invalid or not found.'`}</code></p>
    //         <hr />
    //         <p><strong>Code:</strong> 400 BAD REQUEST</p>
    //         <p><strong>Content: </strong><code>{`success: false, msg: 'Your query was empty.'`}</code></p>
    //         <hr />
    //         <p><strong>Code:</strong> 400 BAD REQUEST</p>
    //         <p><strong>Content: </strong><code>{`success: false, msg: 'Your query is missing a URL parameter.'`}</code></p>
    //         <hr />
    //         <p><strong>Code:</strong> 400 BAD REQUEST</p>
    //         <p><strong>Content: </strong><code>{`success: false, msg: 'Please enter a valid url.'`}</code></p>
    //     </div>


    // </div>
)