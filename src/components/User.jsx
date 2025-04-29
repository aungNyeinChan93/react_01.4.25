import React from 'react';

const User = ({ user }) => {
    const { id, email, username, password } = user;
    return (
        <React.Fragment>
            <tr className="*:text-gray-900 *:first:font-medium">
                <td className="px-3 py-2 whitespace-nowrap">{id}</td>
                <td className="px-3 py-2 whitespace-nowrap">{email}</td>
                <td className="px-3 py-2 whitespace-nowrap">{username}</td>
                <td className="px-3 py-2 whitespace-nowrap">{password}</td>
            </tr>
        </React.Fragment>
    );
};

export default User;