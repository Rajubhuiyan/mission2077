import Mission from "../Mission/Mission";

const Missions = () => {

    const data = [
        {
            id: 1,
            title: 'Mission',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            img: '/images/illustrators/illustrator-1.png'
        },
        {
            id: 2,
            title: 'Vission',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            img: '/images/illustrators/illustrator-2.png'
        },
        {
            id: 3,
            title: 'Goals',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            img: '/images/illustrators/illustrator-3.png'
        },

    ]


    return (
        <div   className="container mx-auto px-10 mt-10 md:px-35 lg:px-40 ">
            <h1 className="text-center text-4xl md:text-5xl font-bold pb-5">
            My Mission in <span className="text-orange-500">2022</span>
            </h1>
            <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  mt-16 gap-3 ">
                {
                    data.map(dt => <Mission data={dt} key={dt.id} />)
                }
            </div>
        </div>
    );
};

export default Missions;


