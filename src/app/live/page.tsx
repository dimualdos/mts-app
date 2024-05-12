'use client'
import Image from "next/image";
import { IoMdClose } from "react-icons/io"
import ovz from '../../../public/OVZ.svg'
import { CardEvent, CardLivePageEvent } from "../ui/card-event/card-event";
import { concertsArray, popularsArray, theatersArray } from "../ui/card-event/arrCardEvents";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from "next/link";

const menuArr = [{
    name: 'Вся афиша',
    href: '1'
}, {
    name: 'МТС LIVE лето',
    href: '/live'
}, {
    name: 'Театры',
    href: '1'
}, {
    name: 'Концерты',
    href: '1'
}, {
    name: 'Мюзиклы',
    href: '1'
}, {
    name: 'Детям',
    href: '1'
}]
const buttonArr = [
    { name: 'самое популярное', icon: '' },
    { name: 'вход с детьми', icon: '' },
    { name: 'доступно', icon: ovz }
]
export default function Page() {
    const pathname = usePathname();
    return (
        <main className="grid grid-cols-1 min-h-screen gap-[20px] md:gap-[40px] lg:gap-[60px] ">
            <div className="flex flex-row w-full justify-center items-start">
                <div className="flex flex-row flex-wrap gap-3 mx-[10px]  p-0 lg:mx-0 w-full lg:w-[70%]">
                    <menu className="flex flex-row justify-between w-full gap-3 flex-wrap">
                        {menuArr.map((link, index) =>
                        (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    'flex h-[48px] grow items-center justify-center  rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red-200 md:p-2 md:px-3',
                                    {
                                        'text-red-600': pathname === link.href,
                                    },
                                )}
                            > <h4 key={index} className=" cursor-pointer">{link.name}</h4>
                            </Link>
                        )
                        )}
                    </menu>
                    <input
                        className="border-solid h-[40px] border-[1.5px] rounded-sm text-black border-[#060606] w-[100%] p-4 "
                        type="text"
                        placeholder="поиск события концерта, доступной площадки" />
                    <div className="justify-center flex flex-row flex-wrap w-full  items-center mt-7 gap-2 md:gap-[20px]" >
                        <p className="flex justify-center mb-[20px] md:mb-0 text-sm">еще не решили на какое событие пойти?</p>
                        <div className="flex flex-wrap justify-center gap-4 min-w-[50%]">
                            {buttonArr.map((item, index) => (
                                <button
                                    className="flex w-[120px] items-center justify-between  px-[10px] py-[8px]  border-solid border-[1.5px] rounded-sm border-[#060606]"
                                    key={index}>
                                    <p>{item.name}</p>
                                    {item.icon && <Image src={item.icon} alt="icon" width={20} height={20} />}
                                    <IoMdClose className="pt-[1px]" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <section className="flex flex-row flex-wrap  gap-3 w-full px-[10px] md:px-[20px] lg:px-[80px]">
                <div className="flex flex-row items-center justify-between w-[calc(100vw-20px)] md:w-[calc(100vw-40px)]">
                    <h2 className="">МТС LIVE Лето Хиты</h2>
                    {/* <h2 className="">Популярные</h2> */}
                </div>
                <CardLivePageEvent arrays={popularsArray} />
            </section>
            <section className="flex flex-row flex-wrap  gap-3 w-full px-[10px] md:px-[20px] lg:px-[80px]">
                <div className="flex flex-row items-center justify-between w-[calc(100vw-20px)] md:w-[calc(100vw-40px)]">
                    <h2 className="">Концерты с МТС LIVE Лето</h2>
                    {/* <h2 className="">Популярные</h2> */}
                </div>
                <CardLivePageEvent arrays={popularsArray} />
            </section>
            <section className="flex flex-row  flex-wrap  gap-3 w-full px-[10px] md:px-[20px] lg:px-[80px]">
                <div className="flex flex-row items-center justify-between w-[calc(100vw-20px)] md:w-[calc(100vw-40px)]">
                    <h2 className="">Шоу программы с МТС LIVE Лето</h2>
                </div>
                <CardLivePageEvent arrays={concertsArray} />
            </section>
            <section className="flex flex-row flex-wrap  gap-3 w-full px-[10px] md:px-[20px] lg:px-[80px]">
                <div className="flex flex-row items-center justify-between w-[calc(100vw-20px)] md:w-[calc(100vw-40px)]">
                    <h2 className="">Театральные постановки с МТС LIVE Лето</h2>
                </div>
                <CardLivePageEvent arrays={theatersArray} />
            </section>
            <section className="flex flex-row flex-wrap  gap-3 w-full px-[10px] md:px-[20px] lg:px-[80px]">
                <h3>О площадке и  особых возможностях</h3>
                <p>МТС Live Лето — новый центр притяжения, где можно интересно провести время с семьёй и друзьями. Пространство объединяет различные зоны отдыха, фудкорт и транформируемую концертную площадку с комфортными сидячими местами, просторным танцпартером, вмещающую в различных конфигурациях от 1500 до 8 000 человек.Оборудован стадион подъемниками для инвалидов и других маломобильных групп населения</p>
            </section>
        </main>
    )
}