import React, { useState } from 'react';
import { useEffect } from 'react';
import { gitHubUsers } from '../database/db'
import GitHubUser from '../components/GitHubUser';

const GH_users = await gitHubUsers();
const UseEffectTest = () => {

    const [value, setValue] = useState(0);

    const [size, setSize] = useState(window.innerWidth);

    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState('');


    useEffect(() => {
        window.addEventListener('resize', () => {
            setSize(window.innerWidth)
        })
        return () => {
            window.removeEventListener('resize', () => {
                setSize(window.innerWidth)
            })
        }
    }, [size]);

    const [users, setUser] = useState([]);

    useEffect(() => {
        try {
            setUser(GH_users);
            setLoading(false)
        } catch (error) {
            setError(error)
        }
    }, []);


    if (isLoading) {
        return <h3 className='text-center text-red-600'>{isLoading && 'Loading...'}</h3>
    }

    if (isError) {
        return <h3>{isError}</h3>
    }

    return (
        <React.Fragment>
            <div className='text-center'>
                <h1>{value}</h1>
                <button onClick={() => setValue((value) => value + 1)}>+</button>
                <h3> {size} px</h3>
            </div>

            <div className="grid grid-cols-4 gap-4" >
                {
                    users.map(user => {
                        return <GitHubUser user={user} key={user.id} />
                    })
                }
            </div>

        </React.Fragment>
    );
};

export default UseEffectTest;