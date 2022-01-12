import Image from 'next/image';
import React from 'react';

const Community = () => {
    return (
        <section className="container mx-auto px-10 mt-10 md:px-35 lg:px-40 ">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:mt-20 pb-10 gap-3">
            <div>
                <h1 className="text-5xl font-semibold mt-10 md:mt-10 mb-8">
                    Know our <br />
                    Global Community
                </h1>
                <p>Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim deterruisset eos et. An mundi noster pri, ea eos quas expetendis scripserit, affert gubergren dissentias et cum.</p>
                <button className="bg-red-400 pt-3 pb-3 pr-7 pl-7 rounded-md text-white mt-5">Read the  Documentation</button>
            </div>
            <div>
                <Image width="500" height="500" src="/images/pictures/project.png" alt=""></Image>
            </div>
        </div>
        </section>
    );
};

export default Community;