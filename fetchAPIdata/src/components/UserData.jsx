import React from 'react'

function UserData({ users }) {
    return (
        <>
            {
                users.map((curUser, index) => {
                    const { id, name, email, address, phone} = curUser;
                    return (
                        <tr key={index}>
                            <td>{name}</td>
                            <td>{address.street}, {address.city} {address.zipcode}</td>
                            <td>{[phone]}</td>
                            <td>{email}</td>
                        </tr>
                    )
                })
            }

        </>
    )
}

export default UserData
