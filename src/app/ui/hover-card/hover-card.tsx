import React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import { CiCalendar } from 'react-icons/ci';
import CalendarTailWind from '../calendar/calendar-tailwind';
import './styles.css';

const HoverCardCalendar = () => (
    <HoverCard.Root>
        <HoverCard.Trigger asChild>
            <p><CiCalendar className="w-10 h-10 cursor-pointer" /></p>
        </HoverCard.Trigger>
        <HoverCard.Portal>
            <HoverCard.Content className="HoverCardContent" sideOffset={5}>
                <CalendarTailWind fullCalendar={true} />
                <HoverCard.Arrow className="HoverCardArrow" />
            </HoverCard.Content>
        </HoverCard.Portal>
    </HoverCard.Root>
);

export default HoverCardCalendar;
