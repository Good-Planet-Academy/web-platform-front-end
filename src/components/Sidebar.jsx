import React, { useState, useRef } from "react";
import {
  XMarkIcon,
  PencilIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import treangle from "../images/treangle.svg";
import trapezia from "../images/trapezia.svg";
import groovyMeditation from "../images/groovy-meditation.png";
const Sidebar = ({ active, setActive }) => {
  const [name, setName] = useState("Каріна");
  const [age, setAge] = useState("6 років");

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const toggleSidebar = () => {
    setActive(!active);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black z-40 transition-opacity ${
          active ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`fixed top-0 left-0 h-[100%] lg:w-[25%] md:w-[45%] sm:w-[100%] xs:w-[100%] z-50 bg-white transform transition-transform ${
          active ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-0 right-0 w-20 h-20 cursor-pointer flex-shrink-0 rounded-bl-[35px] bg-gradient-to-bl from-[#2399A0] to-[#2C87A4] flex items-center justify-center"
          onClick={toggleSidebar}
        >
          <XMarkIcon
            className="w-8 h-8 flex-shrink-0 text-white"
            aria-hidden="true"
          />
        </button>
        <div className="name-field flex mt-[133px] border-l-[5px] border-[#CDDFDB] ml-[20px] pl-[15px] items-start space-x-4">
          <div className="flex flex-col space-y-2 w-[80%]">
            <input
              ref={nameInputRef}
              type="text"
              value={name}
              onChange={handleChangeName}
              className="name-input font-inter text-[24px] font-semibold leading-[30px] outline-none"
              readOnly={true}
            />
            <input
              ref={ageInputRef}
              type="text"
              value={age}
              onChange={handleChangeAge}
              className="age-input font-inter text-[14px] font-medium leading-[20px] outline-none"
              readOnly={true}
            />
          </div>
          <button className="pencil-icon mt-4 ml-6">
            <PencilIcon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex items-center mr-[20px] h-[50px] shrink-0 rounded-[5px] bg-[#13c296] mt-[47px] ml-[20px] cursor-pointer">
          <PlusCircleIcon
            className="w-6 h-6 flex-shrink-0 text-white ml-[11px]"
            aria-hidden="true"
          />
          <p className="ml-2 text-white text-lg font-medium leading-6 font-inter">
            Додати дитячий обл. запис
          </p>
        </div>

        <div className="flex items-center mr-[20px]  shrink-0 mt-[47px] cursor-pointer">
          <svg
            className="w-6 h-6 flex-shrink-0 text-[#4C6179] ml-[31px]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.9999 2.40002C6.66264 2.40002 7.1999 2.93728 7.1999 3.60002V4.80002H8.3999C9.06264 4.80002 9.5999 5.33728 9.5999 6.00002C9.5999 6.66277 9.06264 7.20002 8.3999 7.20002H7.1999V8.40002C7.1999 9.06277 6.66264 9.60002 5.9999 9.60002C5.33716 9.60002 4.7999 9.06277 4.7999 8.40002V7.20002H3.5999C2.93716 7.20002 2.3999 6.66277 2.3999 6.00002C2.3999 5.33728 2.93716 4.80002 3.5999 4.80002H4.7999V3.60002C4.7999 2.93728 5.33716 2.40002 5.9999 2.40002ZM5.9999 14.4C6.66264 14.4 7.1999 14.9373 7.1999 15.6V16.8H8.3999C9.06264 16.8 9.5999 17.3373 9.5999 18C9.5999 18.6628 9.06264 19.2 8.3999 19.2H7.1999V20.4C7.1999 21.0628 6.66264 21.6 5.9999 21.6C5.33716 21.6 4.7999 21.0628 4.7999 20.4V19.2H3.5999C2.93716 19.2 2.3999 18.6628 2.3999 18C2.3999 17.3373 2.93716 16.8 3.5999 16.8H4.7999V15.6C4.7999 14.9373 5.33716 14.4 5.9999 14.4Z"
              fill="#4C6179"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.3998 2.40002C14.9443 2.40002 15.4206 2.7666 15.5599 3.29295L16.9749 8.63874L20.9995 10.9606C21.371 11.1749 21.5998 11.5712 21.5998 12C21.5998 12.4289 21.371 12.8251 20.9995 13.0394L16.9749 15.3613L15.5599 20.7071C15.4206 21.2334 14.9443 21.6 14.3998 21.6C13.8554 21.6 13.3791 21.2334 13.2398 20.7071L11.8247 15.3613L7.80023 13.0394C7.42876 12.8251 7.1999 12.4289 7.1999 12C7.1999 11.5712 7.42876 11.1749 7.80023 10.9606L11.8247 8.63874L13.2398 3.29295C13.3791 2.7666 13.8554 2.40002 14.3998 2.40002Z"
              fill="#4C6179"
            />
          </svg>
          <p className="ml-2 text-[#212B36] text-[18px] not-italic font-medium leading-6 font-inter">
            Про проект та цінності
          </p>
        </div>
        <div className="flex items-center mr-[20px]  shrink-0 mt-[20px] cursor-pointer">
          <svg
            className="w-6 h-6 flex-shrink-0 text-[#4C6179] ml-[31px]"
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <path
              d="M0 9.5C0 4.25329 4.25329 0 9.5 0V9.5H19C19 14.7467 14.7467 19 9.5 19C4.25329 19 0 14.7467 0 9.5Z"
              fill="#4C6179"
            />
            <path
              d="M11.875 0.299194C15.2134 1.15843 17.8416 3.78666 18.7007 7.12505H11.875V0.299194Z"
              fill="#4C6179"
            />
          </svg>
          <p className="ml-2 text-[#212B36] text-[18px] not-italic font-medium leading-6 font-inter">
            Підписки та квоти
          </p>
        </div>
        <div className="flex items-center mr-[20px]  shrink-0 mt-[20px] cursor-pointer">
          <svg
            className="w-6 h-6 flex-shrink-0 text-[#4C6179] ml-[31px]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20.9368 13.0733C21.3433 12.8701 21.6001 12.4546 21.6001 12C21.6001 11.5455 21.3433 11.13 20.9368 10.9267L4.13675 2.52672C3.71111 2.3139 3.19993 2.37271 2.83373 2.67663C2.46754 2.98054 2.31553 3.47213 2.44627 3.9297L4.16055 9.92969C4.30774 10.4449 4.7786 10.8 5.31438 10.8L10.8001 10.8C11.4628 10.8 12.0001 11.3373 12.0001 12C12.0001 12.6628 11.4628 13.2 10.8001 13.2L5.31438 13.2C4.77861 13.2 4.30774 13.5552 4.16055 14.0704L2.44627 20.0704C2.31553 20.5279 2.46754 21.0195 2.83373 21.3234C3.19993 21.6274 3.71111 21.6862 4.13675 21.4734L20.9368 13.0733Z"
              fill="#4C6179"
            />
          </svg>
          <p className="ml-2 text-[#212B36] text-[18px] not-italic font-medium leading-6 font-inter">
            Напишіть нам
          </p>
        </div>

        <div className="absolute lg:mt-[23vh] md:mt-[38vh] sm:mt-[25vh] left-0">
          <img src={treangle} alt="Treangle" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center lg:h-[30%] sm:h-[20%] xs:h-[10%]">
          <img src={trapezia} alt="Trapezia" className="w-full " />
          <img
            src={groovyMeditation}
            alt="Groovy Meditation"
            className="absolute lg:w-[130px] lg:h-[145px] lg:ml-[180px] sm:w-[100px] sm:h-[120px] sm:ml-[170px] "
          />
          <p className="absolute text-white lg:text-[18px] not-italic font-bold leading-[normal] font-inter lg:bottom-[90px] 
          lg:left-[7px]  lg:mt-[30px] sm:text-[14px] sm:bottom-[40px] sm:left-[10px] sm:mt-[30px]">
            Good Planet Academy
          </p>
          <p className="absolute text-[#FEFEFE] lg:text-sm not-italic font-normal leading-[normal] 
          font-inter lg:bottom-[67px] lg:left-[10px]  lg:mt-[30px] sm:text-[10px] sm:bottom-[25px] sm:left-[10px]">
            Простір свідомих батьків
          </p>
          <p className="absolute text-[#EEE] text-[11px] not-italic font-normal leading-[normal] font-inter bottom-[10px] left-10 ml-[-30px] mt-[30px]">
            {" "}
            Створено з любов’ю, людьми, які цінують Всесвіт.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
