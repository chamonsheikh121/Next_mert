import React from 'react';

const NMContainer = ({children}:{children: React.ReactNode}) => {
    return (
        <div className='px-20 mx-auto'>
            {children}
        </div>
    );
};

export default NMContainer;