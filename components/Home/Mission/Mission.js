import Image from "next/image";


const Mission = ({data}) => {
    return (
        <div className="bg-gray-300 p-10 rounded-2xl">
            <div className="text-center">
            <Image  width="170" height="150" src={data?.img} alt=""></Image>
            </div>
            <h1 className="text-3xl font-bold mt-5 mb-5">{data?.title}</h1>
            <p>{data?.description}</p>
        </div>
    );
};

export default Mission;