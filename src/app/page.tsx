'use client'
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import CalendarTailWind from "./ui/calendar/calendar-tailwind";
import { CardEvent } from "./ui/card-event/card-event";
import { popularsArray, concertsArray, theatersArray } from "./ui/card-event/arrCardEvents";
import { MobileCalendar } from "./ui/calendar/calendar-mobile";
import HoverCardCalendar from "./ui/hover-card/hover-card";
import sun from '../../public/Sun.svg';
import Link from "next/link";

const buttonArr = [
  'с ребенком',
  'всей семьей',
  'с парнем'
]

export default function Home() {
  return (
    <main className="grid grid-cols-1 min-h-screen gap-[40px] md:gap-[60px] lg:gap-[100px]  justify-center">
      <section className="flex flex-row w-full justify-center">
        <div className="flex flex-row flex-wrap gap-3 mx-[10px] p-0 lg:mx-0 w-full lg:w-[70%]">
          <div className="flex lg:mb-10">
            <h1 className="mr-2">Афиша Москвы</h1>
            <div className="flex md:hidden"><MobileCalendar /></div>
          </div>
          {/* ссылка на МТС LIVE */}
          <Link href="/live" className="flex md:hidden gap-2 items-center">
            <Image src={sun} alt='МТС LIVE лето' />
            <p className="underline underline-offset-4 cursor-pointer">MTC Live лето</p>
          </Link>
          <div className="flex flex-row w-full items-center pt-2 md:pt-8 lg:pt-16">
            <div className="flex flex-row w-full items-center first:ju">
              <span className="hidden md:block">
                <HoverCardCalendar />
              </span>
              <CalendarTailWind fullCalendar={false} />
            </div>
          </div>
          <input
            className="border-solid border-[1.5px] rounded-sm text-black border-[#060606] w-[100%] p-4 "
            type="text"
            placeholder="поиск события c MTC LIVE лето" />
          <div className="justify-center flex flex-row flex-wrap w-full  items-center mt-7 gap-2 md:gap-[20px]" >
            <p className="flex justify-center mb-[20px] md:mb-0 text-sm">с кем Вы хотите пойти?</p>
            <div className="flex flex-wrap justify-center gap-4 min-w-[50%]">
              {buttonArr.map((item, index) => (
                <button
                  className="flex w-[120px] items-center justify-between  px-[10px] py-[8px]  border-solid border-[1.5px] rounded-sm border-[#060606]"
                  key={index}>
                  <p>{item}</p>
                  <IoMdClose className="pt-[1px]" />
                </button>
              ))}
            </div>
            {/* ссылка на МТС LIVE */}
            <Link href="/live" className="hidden md:flex gap-2 items-center">
              <Image src={sun} alt='МТС LIVE лето' />
              <p className="underline underline-offset-4 cursor-pointer">MTC Live лето</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-row flex-wrap  gap-3 w-full px-[10px] md:px-[20px] lg:px-[80px]">
        <div className="flex flex-row items-center justify-between w-[calc(100vw-20px)] md:w-[calc(100vw-40px)]">
          <h2 className="">Популярные</h2>
          {/* <h2 className="">Популярные</h2> */}
        </div>
        <CardEvent arrays={popularsArray} />
      </section>
      <section className="flex flex-row  flex-wrap  gap-3 w-full px-[10px] md:px-[20px] lg:px-[80px]">
        <div className="flex flex-row items-center justify-between w-[calc(100vw-20px)] md:w-[calc(100vw-40px)]">
          <h2 className="">Концерты</h2>
        </div>
        <CardEvent arrays={concertsArray} />
      </section>
      <section className="flex flex-row flex-wrap  gap-3 w-full px-[10px] md:px-[20px] lg:px-[80px]">
        <div className="flex flex-row items-center justify-between w-[calc(100vw-20px)] md:w-[calc(100vw-40px)]">
          <h2 className="">Театр</h2>
        </div>
        <CardEvent arrays={theatersArray} />
      </section>
    </main>
  );
}
