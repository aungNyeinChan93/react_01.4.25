import React from 'react';
import Card from '../components/Card';

const CardList = (props) => {
    const addedProds = { ...props, some: 'susu' }
    console.log(addedProds);
    const { age, some, message } = addedProds;
    const titles = ['title-One', 'title-two', 'title-three'];
    return (
        <React.Fragment>
            <div className='w-full h-screen'>
                <NavBar />
                <h2 style={{ textAlign: 'center', fontSize: '1.6rem', color: 'green', background: 'gray', padding: '10px', margin: '10px', borderRadius: '10px' }}>{message}</h2>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-3'>
                    <Card title={some} age={age} />
                    {
                        titles.map(item => {
                            return <Card title={item} />
                        })
                    }
                </div>
                <Footer footer='this is footer' message={message} />

            </div>
        </React.Fragment>
    );
};

const Footer = ({ footer = '', message }) => {
    return (
        <React.Fragment>
            <h3 className='px-4 py-2 bg-red-400 text-white w-full'>{footer}</h3>
            <h4>{message}</h4>
        </React.Fragment>
    )
}
const NavBar = () => {
    return (
        <React.Fragment>
            <div className='flex  px-4 py-4 bg-red-400 text-white my-4 rounded-lg '>
                <brand className='text-xl mx-10'>Logo</brand>
                <ul className='flex justify-start space-x-4 items-center'>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </div>
        </React.Fragment>
    );
}

export default CardList;