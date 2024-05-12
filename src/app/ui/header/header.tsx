'use client';
import React from 'react';
import Image from 'next/image'
import * as Menubar from '@radix-ui/react-menubar';
import logo from '../../../../public/logo.png';
import group from '../../../../public/Group.png';
import { ChevronRightIcon } from '@radix-ui/react-icons';

import './styles.css';
import Link from 'next/link';


const RADIO_ITEMS = ['Andy', 'Benoît', 'Luis'];
const CHECK_ITEMS = ['Always Show Bookmarks Bar', 'Always Show Full URLs'];

export const HeaderComponent = () => {

    const [checkedSelection, setCheckedSelection] = React.useState([CHECK_ITEMS[1]]);
    const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);

    return (
        <nav className='flex  justify-between w-[100%] items-center py-[10px] px-[10px] md:px-[20px]  lg:py-[40px] lg:px-[80px]   '>
            <Link href="/" className='cursor-pointer'>
                <Image
                    src={logo}
                    alt="логотип"
                    role='banner'
                    className='w-[60px]  md:w-[90px] ' />
            </Link>

            <Menubar.Root className="MenubarRoot">

                <Menubar.Menu>
                    <Menubar.Trigger className="MenubarTrigger underline underline-offset-4]"><p>выбрать другой город</p></Menubar.Trigger>

                </Menubar.Menu>

                <Menubar.Menu>
                    <Menubar.Trigger className="MenubarTrigger"><Image src={group} alt='настройки' /> <p>настройки</p></Menubar.Trigger>
                    <Menubar.Portal>
                        <Menubar.Content className="MenubarContent" align="start" sideOffset={5} alignOffset={-3}>
                            <Menubar.Item className="MenubarItem">
                                Что то <div className="RightSlot">⌘ Z</div>
                            </Menubar.Item>
                            <Menubar.Item className="MenubarItem">
                                Ещё что то <div className="RightSlot">⇧ ⌘ Z</div>
                            </Menubar.Item>
                            <Menubar.Separator className="MenubarSeparator" />
                            <Menubar.Sub>
                                <Menubar.SubTrigger className="MenubarSubTrigger">
                                    выпадающее меню
                                    <div className="RightSlot">
                                        <ChevronRightIcon />
                                    </div>
                                </Menubar.SubTrigger>

                                <Menubar.Portal>
                                    <Menubar.SubContent className="MenubarSubContent" alignOffset={-5}>
                                        <Menubar.Item className="MenubarItem">Настройки</Menubar.Item>
                                        <Menubar.Separator className="MenubarSeparator" />
                                        <Menubar.Item className="MenubarItem">1</Menubar.Item>
                                        <Menubar.Item className="MenubarItem">2</Menubar.Item>
                                        <Menubar.Item className="MenubarItem">3</Menubar.Item>
                                    </Menubar.SubContent>
                                </Menubar.Portal>
                            </Menubar.Sub>

                        </Menubar.Content>
                    </Menubar.Portal>
                </Menubar.Menu>

                <Menubar.Menu>
                    <Menubar.Trigger className="MenubarTrigger bg-gray-200 h-8 w-8 md:h-12 md:w-16 lg:h-12 lg:w-24 "><p>войти</p></Menubar.Trigger>
                    <Menubar.Portal>
                    </Menubar.Portal>
                </Menubar.Menu>


            </Menubar.Root>
        </nav>
    )
};
