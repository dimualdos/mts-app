import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

export const Footer = () => {

    return (
        <footer className="flex flex-col gap-4 w-full bg-gray-200 p-4 md:p-10">
            <h3>+7 (800) 250-20-86</h3>
            <div className="flex gap-2 md:gap-4 ">
                <p>Документы ПАО МТС</p>
                <p>контакты</p>
                <p>Раскрытие информации</p>
            </div>
            <div className="flex gap-2 md:gap-4 ">
                <p>Узнай больше про возможности для людей с ограниченными возможностями</p>
            </div>
            <div className="flex gap-2 md:gap-4 ">
                <p className="flex">2024 <span className="flex flex-row items-center"><MdKeyboardDoubleArrowLeft />МТС<MdKeyboardDoubleArrowRight /></span>все права защищены</p>
            </div>

        </footer>
    )
}