import React from "react";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateName, updateAge } from "./action";
function Info() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  useEffect(() => {
    if (sidebarActive) {
      const scrollPosition = window.scrollY;
      const scrollbarWidth = window.innerWidth - document.body.offsetWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.top = `-${scrollPosition}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";

      const scrollPosition = document.body.style.top;
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollPosition || "0") * -1);
    }
  }, [sidebarActive]);
  
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [info, setInfo] = useState("");

  const dispatch = useDispatch();

  const handleChangeName = (event) => {
    // dispatch(updateName(event.target.value));
    setName(event.target.value);
    const name = event.target.value;
    localStorage.setItem("name", name);
    console.log(name);
  };
  const handleChangeAge = (event) => {
    // dispatch(updateAge(event.target.value));
    setAge(event.target.value);
    const age = event.target.value;
    localStorage.setItem("age", age);
  };
  const handleChangeInfo = (event) => {
    setInfo(event.target.value);
  };
  return (
    <>
      <Sidebar active={sidebarActive} setActive={setSidebarActive} />
      <div className="bg-[#FAFCFD] overflow-hidden">
        <div
          onClick={() => {
            setSidebarActive(!sidebarActive);
          }}
          className="w-20 h-20 cursor-pointer flex-shrink-0 rounded-br-[35px] bg-gradient-to-bl from-[#2399A0] 
            to-[#2C87A4] flex items-center justify-center "
        >
          <Bars3Icon
            className="w-8 h-8 flex-shrink-0 text-white"
            aria-hidden="true"
          />
        </div>
        <p
          className="text-[color:var(--TailGrids-Black-Color,#212B36)] lg:text-4xl
         not-italic font-bold leading-[55px] font-inter lg:ml-[135px] mt-[29px] md:ml-[135px] sm:ml-[50px]
         md:text-3xl sm:text-2xl"
        >
          Відомості про дитину{" "}
        </p>
        <p
          className="text-[#637381] lg:text-base md:text-[14px] sm:text-[12px] 
          lg:ml-[135px] md:ml-[135px] sm:ml-[50px] not-italic font-normal leading-[18px]"
        >
          В цьому розділі можна вказати основні дані, які допоможуть нам
          адаптуватись.
        </p>
        <div className="lg:mt-[75px] md:mt-[60px] sm:mt-[40px] lg:ml-[135px] lg:w-[450px] md:ml-[135px] md:w-[350px] sm:mx-[50px] ">
          <label
            htmlFor="name"
            className="text-[color:var(--TailGrids-Black-Color,#212B36)] lg:text-2xl md:text-xl
             sm:text-lg
             not-italic font-inter font-medium leading-[30px]"
          >
            Ім'я
          </label>
          <div className="mt-[11px]">
            <input
              type="name"
              name="name"
              id="name"
              onChange={handleChangeName}
              className="block w-full rounded-lg border-[1.5px] border-solid border-[#E0E0E0] py-1.5 px-1.5
           text-gray-900 shadow-sm 
          ring-inset ring-gray-300 placeholder:text-gray-400 lg:text-lg md:text-base sm:text-sm sm:leading-6"
              placeholder="    Будь ласка, введіть ім’я дитини"
            />
          </div>
          <p className="mt-[11px] text-[#637381] lg:text-base md:text-[14px] sm:text-[12px] not-italic font-inter font-normal  lg:leading-[26px] md:leading-[20px] sm:leading-[15px]">
            Звернення по імені часто допомагають побудувати зв’язок із дитиною.
            Груві та інші наші додатки-помічники можуть використовувати різні
            форми імені, наприклад, пом’якшену, щоб підкреслити важливі моменти
            у спілкуванні. Але щоб почати, нам потрібне ім’я до якого дитина
            звикла.
            <br />
            <br />
          </p>
          <p className="text-[#637381] lg:text-base md:text-[14px] sm:text-[12px] not-italic font-inter font-normal lg:leading-[26px] md:leading-[20px] sm:leading-[15px]">
            {" "}
            Наприклад, Каріна, або Сашко. <br />
            Будь ласка,{" "}
            <span className="font-bold">уникайте строгих форм імені</span>, як,
            наприклад, Олександр, або Ольга.
          </p>
        </div>
        <div className="lg:mt-[75px] md:mt-[60px] sm:mt-[40px] lg:ml-[135px] lg:w-[450px] md:ml-[135px] md:w-[350px] sm:mx-[50px] ">
          <label
            htmlFor="name"
            className="text-[color:var(--TailGrids-Black-Color,#212B36)] lg:text-2xl md:text-xl
             sm:text-lg
             not-italic font-inter font-medium leading-[30px]"
          >
            Вік
          </label>
          <div className="mt-[11px]">
            <input
              type="age"
              name="age"
              onChange={handleChangeAge}
              id="age"
              className="block w-full rounded-lg border-[1.5px] border-solid border-[#E0E0E0] py-1.5 px-1.5
           text-gray-900 shadow-sm 
          ring-inset ring-gray-300 placeholder:text-gray-400 lg:text-lg md:text-base sm:text-sm sm:leading-6"
              placeholder="    Будь ласка, вкажіть вік дитини"
            />
          </div>
          <p className="mt-[11px] text-[#637381] lg:text-base md:text-[14px] sm:text-[12px] not-italic font-inter font-normal  lg:leading-[26px] md:leading-[20px] sm:leading-[15px]">
            Ми використовуємо інформацію про вік, щоб адаптувати контент під
            вікову категорію дитини, і зробити повідомлення та роз’яснення, які
            будуть надходити від Груві, максимально простими та зрозумілими.
          </p>
        </div>
        <div className=" lg:mt-[75px] md:mt-[60px] sm:mt-[40px] lg:ml-[135px] lg:w-[450px] md:ml-[135px] md:w-[350px] sm:mx-[50px]">
          <label
            htmlFor="info"
            className="text-[color:var(--TailGrids-Black-Color,#212B36)] lg:text-2xl md:text-xl
             sm:text-lg
             not-italic font-inter font-medium leading-[30px]"
          >
            Чим дитина цікавиться в житті?
          </label>
          <div className="mt-[11px]">
            <textarea
              rows={4}
              name="info"
              id="info"
              onChange={handleChangeInfo}
              className="block w-full rounded-lg border-[1.5px] border-solid border-[#E0E0E0] py-1.5 px-1.5
               text-gray-900 shadow-sm 
                ring-inset ring-gray-300 placeholder:text-gray-400 lg:text-lg md:text-base sm:text-sm sm:leading-6"
              // defaultValue={`\u270E`} // PencilSquareIcon unicode value
              placeholder="&#9998; Будь-ласка, впишіть декілька інтересів дитини"
            ></textarea>
          </div>
          <p className="mt-[16px] text-[#637381] lg:text-base md:text-[14px] sm:text-[12px] not-italic font-inter font-normal  lg:leading-[26px] md:leading-[20px] sm:leading-[15px]">
            Якщо вказати сюди інтереси та цікавинки дитини, Груві зможе значно
            краще заохочувати дитину до розвитку.Наприклад, тут можна вказати
            “малювання”, “космос”, “тваринки”, “автомобілі” та ін.
          </p>
        </div>

        <div className="flex items-center space-x-3 lg:mt-[75px] md:mt-[60px] sm:mt-[40px] lg:ml-[135px] md:ml-[135px] sm:ml-[50px] ">
          <div className="relative inline-block w-10 align-middle select-none">
            <input
              type="checkbox"
              name="toggle1"
              id="toggle1"
              checked={checked1}
              onChange={() => setChecked1(!checked1)}
              className="hidden"
            />
            <label
              htmlFor="toggle1"
              className={`block lg:w-10 lg:h-5 md:w-10 md:h-5 sm:w-7 sm:h-4 rounded-full cursor-pointer transition-colors duration-200 ${
                checked1 ? "bg-[#13c296]" : "bg-gray-800"
              }`}
            ></label>
            <span
              className={`block lg:w-4 lg:h-4 md:w-4 md:h-4 sm:w-3 sm:h-3 rounded-full shadow-md absolute bottom-0.5 left-0.5 transform ${
                checked1
                  ? "lg:translate-x-5 md:translate-x-5 sm:translate-x-3 bg-white"
                  : "bg-white"
              } transition-transform duration-200`}
            ></span>
          </div>
          <span
            className="text-gray-700 select-none text-[color:var(--TailGrids-Black-Color,#212B36)]
           tlg:text-sm md:text-sm sm:text-[10px] not-italic font-medium leading-5 font-inter"
          >
            Погоджуюсь на обробку персональних даних
          </span>
        </div>
        <div className="flex mt-[16px] items-center space-x-3 lg:ml-[135px] md:ml-[135px] sm:ml-[50px] ">
          <div className="relative inline-block w-10 align-middle select-none">
            <input
              type="checkbox"
              name="toggle2"
              id="toggle2"
              checked={checked2}
              onChange={() => setChecked2(!checked2)}
              className="hidden"
            />
            <label
              htmlFor="toggle2"
              className={`block lg:w-10 lg:h-5 md:w-10 md:h-5 sm:w-7 sm:h-4 rounded-full cursor-pointer transition-colors duration-200 ${
                checked2 ? "bg-[#13c296]" : "bg-gray-800"
              }`}
            ></label>
            <span
              className={`block lg:w-4 lg:h-4 md:w-4 md:h-4 sm:w-3 sm:h-3 rounded-full shadow-md absolute bottom-0.5 left-0.5 transform ${
                checked2
                  ? "lg:translate-x-5 md:translate-x-5 sm:translate-x-3 bg-white"
                  : "bg-white"
              } transition-transform duration-200`}
            ></span>
          </div>
          <span
            className="text-gray-700 select-none text-[color:var(--TailGrids-Black-Color,#212B36)]
           lg:text-sm md:text-sm sm:text-[10px] not-italic font-medium lg:leading-5 md:leading-5 sm:leading-1 font-inter"
          >
            Дозволяю передачу персональних даних 3-м компаніям
          </span>
        </div>
        <p
          className="mt-[10px] text-[#637381] lg:text-base md:text-[14px] sm:text-[12px] not-italic lg:ml-[135px] md:ml-[135px] sm:ml-[50px]
         font-inter font-normal  lg:leading-[26px] md:leading-[20px] sm:leading-[15px] lg:w-[450px] md:w-[350px] sm:mx-[50px]"
        >
          Good Planet Academy дуже уважно ставиться до питань пов’язаних із
          обробкою персональних даних. Ми делегуємо функцію штучного інтелекту
          таким компаніям як Open AI, Google та Anthropic, тому і саме тому
          вимушені просити надати згоду на передачу персональних даних 3м
          сторонам.
        </p>
        <Link to="/">
          <button
            className="inline-flex lg:ml-[135px] md:ml-[135px] 
     sm:ml-[50px] lg:mt-[75px] md:mt-[60px] sm:mt-[40px] justify-center 
     items-center gap-2.5 w-auto h-auto lg:px-10 lg:py-3.5 md:px-10 md:py-3.5 sm:px-16 sm:py-1  sm:w-[100px] sm:h-[40px]
     rounded-[5px] bg-[#13c296] mb-[100px]"
            disabled={!checked1 || !checked2}
            onClick={() => {
              dispatch(updateName(name));
              dispatch(updateAge(age));
            }}
          >
            <span className="text-white text-center lg:text-base md:text-base sm:text-sm not-italic font-semibold leading-5">
              Продовжити
            </span>
          </button>
        </Link>
        <footer className="bottom-0 w-full text-[#797979] text-center text-xs not-italic font-normal leading-5 font-inter">
          good-planet.academy 🤍 2023
        </footer>
      </div>
    </>
  );
}

export default Info;
