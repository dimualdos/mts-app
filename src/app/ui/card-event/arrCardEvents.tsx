import gagarina from '../../../../public/gagarina.jpg';
import urban from '../../../../public/urban.jpg';
import mosckow from '../../../../public/moskow.jpg';
import concert from '../../../../public/concert.jpg';
import concert1 from '../../../../public/concert1.jpg';
import concert2 from '../../../../public/concert2.jpg';
import theater from '../../../../public/theater.jpg';
import theater1 from '../../../../public/theater1.jpg';
import theater2 from '../../../../public/theater2.jpg';



import manAStroller from '../../../../public/man_in_a_stroller.svg'
import strollerWC from '../../../../public/stroller_wc.svg'
import taxi from '../../../../public/taxi.svg'
import noBarier from '../../../../public/no_barier.svg'
import ovz from '../../../../public/OVZ.svg'
import ovzChild from '../../../../public/OVZ-Child.svg'
import ramp from '../../../../public/ramp.png'

export const popularsArray = [
    {
        img: gagarina,
        title: 'Концерт Полины Гагариной',
        where: 'Олимпийский комплекс',
        wereInDudleArrow: 'Лужники',
        date: '07.05.2024',
        time: '19:00',
        servicesArr: [
            {
                services: 'туалет для инвалидов',
                icon: strollerWC,
            },
            {
                services: 'пандус',
                icon: ovzChild,
            },
        ]
    },
    {
        img: urban,
        title: 'Первый большой концерт WHITE GALLOWS',
        where: 'Клуб',
        wereInDudleArrow: 'Урбан',
        date: '17.05.2024',
        time: '21:00',
        servicesArr: [
            {
                services: 'туалет для инвалидов',
                icon: strollerWC,
            },
        ]
    },
    {
        img: mosckow,
        title: 'Москва слезам не верит',
        where: 'Гастрономический мюзикл',
        wereInDudleArrow: '',
        date: '07.05.2024',
        time: '19:00',
        servicesArr: [
            {
                services: 'туалет для инвалидов',
                icon: strollerWC,
            },
            {
                services: 'пандус',
                icon: ovzChild,
            },
            {
                services: 'пандус',
                icon: ovzChild,
            },
        ]
    }
]

export const concertsArray = [
    {
        img: concert,
        title: 'Концерт Линды',
        where: 'Академ Джаз клуб',
        wereInDudleArrow: '',
        date: '07.05.2024',
        time: '20:30',
        servicesArr: [
            {
                services: 'туалет для инвалидов',
                icon: strollerWC,
            },
            {
                services: 'пандус',
                icon: ovzChild,
            },
            {
                services: 'безбарьерная среда',
                icon: noBarier,
            },
        ]
    },
    {
        img: concert1,
        title: 'Концерт Просто Лера. Говая программа',
        where: 'Клуб',
        wereInDudleArrow: '1930 Moscow',
        date: '17.05.2024',
        time: '19:00',
        servicesArr: [
            {
                services: 'туалет для инвалидов',
                icon: strollerWC,
            },
            {
                services: 'пандус',
                icon: ovzChild,
            },
            {
                services: 'безбарьерная среда',
                icon: noBarier,
            },
            {
                services: 'туалет для инвалидов',
                icon: strollerWC,
            },
        ]
    },
    {
        img: concert2,
        title: 'Концерт Green Apelsin',
        where: 'Клуб',
        wereInDudleArrow: 'Base',
        date: '07.05.2024',
        time: '18:00',
        servicesArr: [
            {
                services: 'туалет для инвалидов',
                icon: strollerWC,
            },
            {
                services: 'пандус',
                icon: ovzChild,
            },
            {
                services: 'пандус',
                icon: ovzChild,
            },
        ]
    }
]
export const theatersArray = [
    {
        img: theater,
        title: 'Спектакль "Гример"',
        where: 'Усадьба Салтыковых-Чертковых',
        wereInDudleArrow: '',
        date: '07.05.2024',
        time: '20:00',
        servicesArr: [
            {
                services: 'услуги сопровождения',
                icon: manAStroller,
            },
            {
                services: 'туалет для инвалидов',
                icon: strollerWC,
            },
            {
                services: 'пандус',
                icon: ovzChild,
            },
            {
                services: 'безбарьерная среда',
                icon: noBarier,
            },
        ]
    },
    {
        img: theater1,
        title: 'Мюзикл "Волосы"',
        where: 'Театр музыки и драмы п/о Стаса Намина',
        wereInDudleArrow: '',
        date: '17.05.2024',
        time: '19:00',
        servicesArr: [
            {
                services: 'туалет для инвалидов',
                icon: strollerWC,
            },
            {
                services: 'пандус',
                icon: ovzChild,
            },
            {
                services: 'безбарьерная среда',
                icon: noBarier,
            },
            {
                services: 'туалет для инвалидов',
                icon: strollerWC,
            },
        ]
    },
    {
        img: theater2,
        title: 'Мюзикл "Ромео VS Джульета"',
        where: 'Театр Оперетты',
        wereInDudleArrow: '',
        date: '07.05.2024',
        time: '18:00',
        servicesArr: [
            {
                services: 'туалет для инвалидов',
                icon: strollerWC,
            },
            {
                services: 'пандус',
                icon: ovzChild,
            },
            {
                services: 'пандус',
                icon: ovzChild,
            },
        ]
    }
]



const servicesLimitedPerson = [
    {
        services: 'услуги сопровождения',
        icon: manAStroller,
    },
    {
        services: 'туалет для инвалидов',
        icon: strollerWC,
    },
    {
        services: 'вызов такси',
        icon: taxi,
    },
    {
        services: 'безбарьерная среда',
        icon: noBarier,
    },
    {
        services: 'доступно людям с ОВЗ',
        icon: ovz,
    },
    {
        services: 'с детьми',
        icon: ovzChild,
    },
    {
        services: 'пандус',
        icon: ovzChild,
    },
]

