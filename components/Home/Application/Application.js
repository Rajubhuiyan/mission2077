import Image from 'next/image';
import React from 'react';

const Application = () => {
    return (
        <section className="container mx-auto px-10 md:px-35 lg:px-40 ">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mt-16 pb-10 gap-3">
                <div>
                    <div className="text-center">
                        <Image width="400" height="600" src="/images/pictures/app.png" alt=""></Image>
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl font-bold mt-10 md:mt-10 mb-8">
                        Stay safe with <br />
                        <span className="text-yellow-400"> GoCorona.</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim deterruisset eos et. An mundi noster pri, ea eos quas expetendis scripserit, affert gubergren dissentias et cum.</p>
                    <button className="bg-red-400 pt-3 pb-3 pr-7 pl-7 rounded-md text-white mt-5">Fetures</button>
                </div>
            </div>
        </section>
    );
};

export default Application;