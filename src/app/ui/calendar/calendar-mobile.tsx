"use client";

import { Drawer } from "vaul";
import CalendarTailWind from "./calendar-tailwind";
import { CiCalendar } from "react-icons/ci";
import { format, parse, startOfToday } from "date-fns";
import { useState } from "react";

export function MobileCalendar() {
    let today = startOfToday();
    let [currentMonth, setCurrentMonth] = useState(format(today, "LLLL-yyyy"));
    let firstDayCurrentMonth = parse(currentMonth, "LLLL-yyyy", new Date());
    return (
        <Drawer.Root shouldScaleBackground>
            <Drawer.Trigger asChild>
                <button><CiCalendar className="w-6 h-6 cursor-pointer" /></button>
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0 pl-4 pt-8">
                    {/* {format(firstDayCurrentMonth, "LLLL yyyy")} */}
                    <CalendarTailWind fullCalendar={true} />

                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}