import React from 'react';

const PackagesPage = () => {
    return (
        <section className='h-screen'>
            <div className="bg-yellow-100 border-l-4  border-yellow-500 text-yellow-700 p-4">
                <div className="flex items-center">
                    <svg
                        className="w-6 h-6 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1 8h.01M12 9a1 1 0 10-2 0 1 1 0 002 0zm-7.938 4H20.938a1.5 1.5 0 001.314-2.03l-4.472-9.111a1.5 1.5 0 00-1.314-.859H7.474a1.5 1.5 0 00-1.314.859L1.688 10.97A1.5 1.5 0 003 13z"
                        ></path>
                    </svg>
                    <p>This route is currently under development. Features may not work as expected.</p>
                </div>
            </div>
        </section>

    );
};

export default PackagesPage;