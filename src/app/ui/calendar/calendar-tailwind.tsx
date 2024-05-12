import { FC, Fragment, useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, Transition } from "@headlessui/react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { RxDotsVertical } from "react-icons/rx";
import './style.css';

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  setDefaultOptions,
  startOfToday,
  startOfWeek,
} from "date-fns";
import { ru } from 'date-fns/locale';

import exp from "constants";
import clsx from "clsx";
import HoverCardCalendar from "../hover-card/hover-card";

interface ICalendar {
  fullCalendar: boolean
}

const meetings = [
  {
    id: 1,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2024-05-11T13:00",
    endDatetime: "2024-05-11T14:30",
  },
  {
    id: 2,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2024-05-20T09:00",
    endDatetime: "2024-05-20T11:30",
  },
  {
    id: 3,
    name: "Dries Vincent",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2024-05-20T17:00",
    endDatetime: "2024-05-20T18:30",
  },
  {
    id: 4,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2024-06-09T13:00",
    endDatetime: "2024-06-09T14:30",
  },
  {
    id: 5,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2024-05-13T14:00",
    endDatetime: "2024-05-13T14:30",
  },
];

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

const CalendarTailWind: FC<ICalendar> = (fullCalendar) => {
  const fullCalendarData = fullCalendar.fullCalendar
  setDefaultOptions({ locale: ru })
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "LLLL-yyyy"));
  let [currentWeek, setCurrentWeek] = useState(format(today, "dd-MMM"));
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState(null);

  useEffect(() => {
    let formatSlectedDay: any = format(selectedDay, "EEEEEE");

    setSelectedDayOfWeek(formatSlectedDay)
  }, [selectedDay]);

  const onClickArroy = () => {
    setSelectedDayOfWeek(null)
  }

  let firstDayCurrentMonth = parse(currentMonth, "LLLL-yyyy", new Date());
  let firstDayCurrentWeek = parse(currentWeek, "dd-MMM", new Date());

  let daysMonth = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
  });

  let daysWeek = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentWeek, { weekStartsOn: 1 }),
    end: endOfWeek(firstDayCurrentWeek, { weekStartsOn: 1 }),
  });

  const choiceCalendar = fullCalendarData ? daysMonth : daysWeek;

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "LLLL-yyyy"));
  }


  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "LLLL-yyyy"));
  }
  function previousWeek() {
    let firstDayNextWeek = add(firstDayCurrentWeek, { weeks: -1 });
    setCurrentWeek(format(firstDayNextWeek, "dd-MMM"));
  }
  function nextWeek() {
    let firstDayNextWeek = add(firstDayCurrentWeek, { weeks: 1 });
    setCurrentWeek(format(firstDayNextWeek, "dd-MMM"));
  }

  let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  );


  return (

    <div className={clsx("mx-auto w-[90%]",
      { "min-max-w-[350px]": choiceCalendar === daysMonth },
      { "w-full md:w-[70%]": choiceCalendar === daysWeek }
    )}>
      <div className="md:grid md:grid-cols-1 md:divide-x md:divide-gray-200">
        <div className={clsx(
          "flex flex-row",
          { "flex-wrap": fullCalendarData },
          { "items-center": !fullCalendarData },
        )}>
          <div className={clsx("flex flex-row  items-center justify-between",
            { 'w-full': fullCalendarData }
          )}>
            {/* иконка календаря и текущий месяц */}

            {/* текущий месяц в недельном календаре*/}
            <p className={clsx("flex-auto font-semibold mr-1 md:mr-4 lg:mr-8 text-xs lg:text-2xl",
              { "underline underline-offset-4": !fullCalendarData }
            )}>
              {fullCalendarData ? format(firstDayCurrentMonth, "LLLL yyyy") : format(firstDayCurrentWeek, "LLLL")}
            </p>

            {/* кнопки */}
            <div className="flex">
              {/* кнопка влево */}
              <button
                type="button"
                onClick={fullCalendarData ? previousMonth : previousWeek}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Предыдущий месяц</span>
                <FaChevronLeft onClick={() => onClickArroy()} className="cursor-pointer w-4 h-4 text-black" aria-hidden="true" />
              </button>
              {/* кнопка вправо появляется на недельном календаре на маленьких экранах */}
              {/* {!fullCalendarData && <button
                onClick={fullCalendarData ? nextMonth : nextWeek}
                type="button"
                className="flex md:hidden my-1.5 mr-1.5 ml-2  flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Следующий месяц</span>
                <FaChevronRight onClick={() => onClickArroy()} className="cursor-pointer w-4 h-4 text-black" aria-hidden="true" />
              </button>} */}
              {/* кнопка вправо в полной версии */}
              {fullCalendarData && <button
                onClick={fullCalendarData ? nextMonth : nextWeek}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Следующий месяц</span>
                <FaChevronRight onClick={() => onClickArroy()} className="cursor-pointer w-4 h-4 text-black" aria-hidden="true" />
              </button>}

            </div>

          </div>
          {/* календарь */}
          <div className={clsx(
            { "min-max-w-[350px]": choiceCalendar === daysMonth },
            { "w-full": choiceCalendar === daysWeek }
          )}>
            {/* Дни недели появляются над календарем в полной версии календаря */}
            {fullCalendarData && <div className="grid grid-cols-7 mt-10 leading-6 text-center text-lg">
              <div>пн</div>
              <div>вт</div>
              <div>ср</div>
              <div>чт</div>
              <div>пт</div>
              <div>сб</div>
              <div>вс</div>
            </div>}
            {/* сам календарь */}
            <div className={clsx("grid grid-cols-7 mt-2 justify-items-center")}>
              {choiceCalendar.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={
                    classNames(
                      dayIdx === 0 && colStartClasses[getDay(day)],
                      "min-w-[40px] pt-3 flex items-center justify-center px-0 mx-0"
                    )} >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && "text-black",
                      !isEqual(day, selectedDay) &&
                      isToday(day) &&
                      "text-red-500",
                      !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      isSameMonth(day, firstDayCurrentMonth) &&
                      "text-gray-900",
                      !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      !isSameMonth(day, firstDayCurrentMonth) &&
                      "text-gray-400",
                      (isEqual(day, selectedDay) && !fullCalendarData && selectedDayOfWeek) ? "borderTop" : 'borderTopNone',
                      isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      "borderTop",
                      // !isEqual(day, selectedDay) && "hover:bg-gray-200",
                      (isEqual(day, selectedDay) && !!selectedDayOfWeek) &&
                      "font-extrabold  ",
                      "px-0 mx-0 flex justify-center text-2xl cursor-pointer pt-3 min-w-[40px]"
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")} >
                      {format(day, "d")}
                    </time>
                  </button>
                  {/* синяя кнопка для отметки о событиях */}
                  {/* <div className="w-1 h-1 mx-auto mt-1">
                      {meetings.some((meeting) =>
                        isSameDay(parseISO(meeting.startDatetime), day)
                      ) && (
                          <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                        )}
                    </div> */}
                </div>
              ))}
              {/* Дни недели появляются под календарем в недельной версии календаря */}
              {!fullCalendarData && arrDays.map((day, dayIdx) =>
              (<div
                key={dayIdx}
                className={clsx(classNames(dayIdx === 0 && colStartClasses[getDay(day)],
                  "flex justify-center py-3 text-lg  min-w-[42px] px-0 mx-0"),
                  {
                    "borderBottom font-extrabold ": selectedDayOfWeek === day
                  }
                )}>
                {day}
              </div>))}
            </div>
          </div>
          {/* кнопка вправо появляется на недельном календаре */}
          {!fullCalendarData && <button
            onClick={fullCalendarData ? nextMonth : nextWeek}
            type="button"
            className=" my-1.5 mr-1.5 ml-2 md:flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Следующий месяц</span>
            <FaChevronRight onClick={() => onClickArroy()} className="cursor-pointer w-4 h-4 text-black" aria-hidden="true" />
          </button>}
        </div>
        {/* <section className="mt-12 md:mt-0 md:pl-14">
            <h4 className="font-semibold text-gray-900">
              Расписание{" "}
              <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                {format(selectedDay, "MMM dd, yyy")}
              </time>
            </h4>
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((meeting) => (
                  <Meeting meeting={meeting} key={meeting.id} />
                ))
              ) : (
                <p>Нет событий сегодня.</p>
              )}
            </ol>
          </section> */}
      </div>
    </div>

  );
}


// события
function Meeting({ meeting }: any) {
  let startDateTime = parseISO(meeting.startDatetime);
  let endDateTime = parseISO(meeting.endDatetime);

  return (
    <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
      <Image
        src={meeting.imageUrl}
        alt=""
        className="flex-none w-10 h-10 rounded-full"
      />
      <div className="flex-auto">
        <p className="text-gray-900">{meeting.name}</p>
        <p className="mt-0.5">
          <time dateTime={meeting.startDatetime}>
            {format(startDateTime, "h:mm a")}
          </time>{" "}
          -{" "}
          <time dateTime={meeting.endDatetime}>
            {format(endDateTime, "h:mm a")}
          </time>
        </p>
      </div>
      <Menu
        as="div"
        className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
      >
        <div>
          <MenuButton className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
            <span className="sr-only">Open options</span>
            <RxDotsVertical className="w-6 h-6" aria-hidden="true" />
          </MenuButton>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItem className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <MenuItem>
                {({ active }: any) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Edit
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }: any) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Cancel
                  </a>
                )}
              </MenuItem>
            </div>
          </MenuItem>
        </Transition>
      </Menu>
    </li>
  );
}

let colStartClasses = [
  "",
  "col-start-1",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
];

const arrDays = [
  "пн", "вт", "ср", "чт", "пт", "сб", "вс",
]


export default CalendarTailWind;


