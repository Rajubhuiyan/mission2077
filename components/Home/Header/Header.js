import Image from "next/image";


const Header = () => {
    return (
        <>
            <header   className="container mx-auto px-10 py-10 md:px-35 lg:px-40 ">
                <div>
                    <div className="grid md:grid-cols-2 gap-5 ">
                        <div className="flex content-center items-center">
                            <div>
                                <div className="border-l-4 border-red-600 pl-4">
                                    <h1 className="text-5xl	font-bold">Stay Focused on</h1>
                                    <h1 className="text-5xl	font-bold text-amber-400 mt-3">Mission 2022</h1>
                                </div>
                                <p className="text-sm mt-5">
                                    Lorem ipsum dolor sit amet, usu cu esse possit referrentur, at eam falli deterruisset. No duo populo animal noluisse, enim
                                </p>
                                <button className="bg-red-400 pt-3 pb-3 pr-7 pl-7 rounded-md text-white mt-5">Explore Now</button>
                            </div>
                        </div>
                        <div className="ml-6">
                            <Image width="500" height="600" src="/images/person/person-0.png" alt=""></Image>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;