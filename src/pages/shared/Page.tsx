import React from 'react'
import Layout from './Layout'

interface Props {}

const Page: React.FC<React.PropsWithChildren<Props>> = ({ 
    children 
}) => {

    return (
        <>
        <Layout children={children}/>
        </>
    );
};

export default Page;