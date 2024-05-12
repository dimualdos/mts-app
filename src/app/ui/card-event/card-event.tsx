'use client'
import Image from "next/image";
import { BsGeoAlt } from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import { FC } from "react";
import theater from '../../../../public/theater.jpg';

interface PropsArr {
    arrays: {
        img: StaticImageData;
        title: string;
        where: string;
        wereInDudleArrow: string;
        date: string;
        time: string;
        servicesArr: {
            services: string;
            icon: StaticImageData;
        }[]
    }[]
}

export const CardEvent: FC<PropsArr> = (arrays) => {
    return (
        <div className="flex flex-row flex-wrap gap-3">
            {arrays?.arrays?.map((item, index) => (
                (<div key={index} className="flex flex-col md:flex-1 gap-2 lg:min-h-[500px] justify-between max-w-[calc(100vw-20px)] md:max-w-[calc(46vw)] lg:max-w-[calc(27vw)] mb-[20px] lg:mb-0">
                    <div className="flex flex-col align-middle gap-2">
                        <Image src={item?.img} alt={item?.title} className="w-full" />
                        <h3 className="mb-3">{item?.title}</h3>
                        <div className="flex flex-row items-center gap-1">
                            <BsGeoAlt />
                            <p className="flex flex-row gap-1">{item?.where}
                                {item?.wereInDudleArrow && <span className="flex flex-row items-center"><MdKeyboardDoubleArrowLeft />{item?.wereInDudleArrow}<MdKeyboardDoubleArrowRight /></span>}
                            </p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <IoMdTime />
                            <div className="flex flex-row gap-4">
                                <time>{item?.date}</time>
                                <time>{item?.time}</time>
                            </div>

                        </div>
                        <div className="flex flex-row flex-wrap gap-2">
                            {item?.servicesArr?.map((value, indexService) => (
                                (<div className="flex flex-row items-center border-black border-2 rounded-sm gap-2 p-2" key={indexService}>
                                    <Image src={value.icon} alt={value.services} className="w-6 h-6" />
                                    <p>{value.services}</p>
                                </div>)))
                            }
                        </div>
                    </div>
                    <button className="max-w-full min-w-full h-6 text-center py-2 bg-gray-200 rounded-sm cursor-pointer">Купить билет</button>
                </div>)
            ))}
        </div >
    )
}

export const CardLivePageEvent: FC<PropsArr> = (arrays) => {
    return (
        <div className="flex flex-row flex-wrap gap-3">
            {arrays?.arrays?.map((item, index) => {
                return <div
                    key={index}
                    className="flex flex-col md:flex-1 relative gap-2 lg:min-h-[500px] justify-between max-w-[calc(100vw-20px)] md:max-w-[calc(46vw)] lg:max-w-[calc(27vw)]">
                    <Image src={item?.img} alt='gagarina' className="w-full  h-[400px] bg-cover bg-center relative" />

                    <div className="flex flex-col justify-around  w-full h-full lg:h-[80%] bg-black/40 gap-2 text-white z-10 absolute">
                        {/* верхний блок */}
                        <div className="flex flex-row px-2 justify-between w-full  items-center ">
                            <div className="flex items-center">
                                <IoMdTime />
                                <div className="flex flex-row gap-4">
                                    <time>{item?.date}</time>
                                    <time>{item?.time}</time>
                                </div>
                            </div>
                            <button className=" h-6 max-w-40 text-center p-2 bg-white text-black rounded-sm cursor-pointer">Купить билет</button>
                        </div>


                        <div className="flex flex-col gap-2 px-2 w-full">
                            {/* название мероприятия */}
                            <div >
                                <p className="mb-3 ">{item?.title}</p>
                                <div className="flex flex-row items-center gap-1">
                                    <BsGeoAlt />
                                    <p className="flex flex-row gap-1">{item?.where}
                                        {item?.wereInDudleArrow && <span className="flex flex-row items-center"><MdKeyboardDoubleArrowLeft />{item?.wereInDudleArrow}<MdKeyboardDoubleArrowRight /></span>}
                                    </p>
                                </div>
                            </div>
                            {/* доп возможности */}
                            <div className="flex flex-row flex-wrap px-2 gap-2">
                                {item?.servicesArr?.map((value, indexService) => (
                                    (<div className="flex flex-row items-center border-white border-2 rounded-sm gap-2 p-2" key={indexService}>
                                        <Image src={value.icon} alt={value.services} className=" bg-white w-6 h-6 rounded-sm" />
                                        <p>{value.services}</p>
                                    </div>)))
                                }
                            </div>
                        </div>

                    </div>
                </div>
            })}
        </div >
    )
}