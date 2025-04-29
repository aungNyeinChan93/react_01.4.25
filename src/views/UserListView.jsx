import React from 'react';
import User from '../components/User';
import axios from 'axios';

const fetchUser = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/users');
    return data;
};
const users = await fetchUser();

const UserList = () => {
    return (
        <React.Fragment>
            <div className="mx-10 rounded-lg my-10 bg-red-100 ">
                <table className="min-w-full divide-y-2 divide-gray-200">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr className="*:font-medium *:text-gray-900">
                            <th className="px-3 py-2 whitespace-nowrap">ID</th>
                            <th className="px-3 py-2 whitespace-nowrap">Email</th>
                            <th className="px-3 py-2 whitespace-nowrap">User Name</th>
                            <th className="px-3 py-2 whitespace-nowrap">Password</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {
                            users.map(user => {
                                return <User user={user} key={user.id} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};

export default UserList;