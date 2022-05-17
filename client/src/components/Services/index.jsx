import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const ServicesCard = ({ icon, title, subtitle, color }) => {
    return (
        <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
            <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
                {icon}
            </div>
            <div className="ml-5 flex flex-col flex-1">
                <h1 className="text-lg font-bold mt-2 text-white">{title}</h1>
                <p className="text-sm mt-2 text-white md:w-9/12">{subtitle}</p>
            </div>
        </div>
    )
}

const Services = () => {
    return (
        <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start">
                    <h1 className='text-white text-3xl sm:text-5xl py-2'>
                        Services that we
                        <br />
                        continue to improve
                    </h1>
                </div>
            </div>

            <div className="flex-1 flex-col justify-start items-center">
                <ServicesCard
                    icon={<BsShieldFillCheck />}
                    title="Security"
                    subtitle="We are always on the lookout for the best security practices to protect your data."
                    color="bg-[#2952e3]"
                />
                <ServicesCard
                    icon={<BiSearchAlt />}
                    title="Search"
                    subtitle="We are always on the lookout for the best security practices to protect your data."
                    color="bg-[#8945F8]"
                />
                <ServicesCard
                    icon={<RiHeart2Fill />}
                    title="Love"
                    subtitle="We are always on the lookout for the best security practices to protect your data."
                    color="bg-[#F84550]"
                />
            </div>
        </div>
    )
}

export default Services;
