import React from 'react';

const Footer = () => {

    const date = new Date().getFullYear();
    return (
        <section className="text-center bg-black pb-4 mt-5">
            <div className="container mx-auto px-10 mt-10 md:px-35 lg:px-40 ">
                <div className="p-4 md:p-16">
                    <h1 className="text-2xl font-bold pb-3 text-white">
                        Mission <span className="text-red-600">2022</span>
                    </h1>
                    <p className="text-white">Hard work, Perseverance, and Determination for 2022</p>

                </div>
                <small className="text-gray-600">©Raju Ahmed Bhuiyan. {date?.toString()}</small>
            </div>
        </section>
    );
};

export default Footer;