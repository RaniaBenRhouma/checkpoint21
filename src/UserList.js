import React from 'react';

const UserList = (props) => {
    return ( <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Adress</th>
                <th>Phone</th>
            </tr>

            {props.listOfUsers.map(el=> <tr key={el.id}>
            <td>{el.name}</td>
            <td>{el.email}</td>
            <td>{el.address.city}</td>
            <td>{el.phone}</td>
            </tr>)}

        </table>
    </div> );
}
 
export default UserList;