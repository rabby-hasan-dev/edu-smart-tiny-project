import React, { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className='max-w-[1320px] mx-auto '>
            {children}

        </div>
    );
};

export default Container;