import {
    Bars3Icon,
    ChatBubbleLeftEllipsisIcon,
    ClipboardDocumentCheckIcon,
    LanguageIcon,
    CheckCircleIcon,
    SparklesIcon,
    SpeakerWaveIcon,
    ArrowTrendingUpIcon,
    LightBulbIcon,
    ShareIcon,
  } from "@heroicons/react/24/outline";
  import dots from "../images/dots.svg";
  import { useState } from "react";
  import Sidebar from "./Sidebar";
  import { useEffect } from "react";
  function Onboarding() {
    const [sidebarActive, setSidebarActive] = useState(false);
  
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
    return (
      <>
        <div>
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
            <p className="text-4xl not-italic font-bold font-inter lg:pl-[135px] lg:mt-[-30px] sm:text-3xl sm:pl-10 md:text-4xl md:pl-24 sm:mt-[20px]">
              Можливості та цінності
            </p>
            <p className="text-gray-600 text-base not-italic font-normal lg:pl-[135px] leading-4 font-inter sm:text-sm sm:pl-10 md:text-base md:pl-24">
              Сюди ми помістили те, що надихає продовжувати нас самих, та те, для
              чого ми займаємось Good Planet Academy
            </p>
            <p className="lg:text-3xl lg:w-374 not-italic font-semibold font-inter lg:pl-[135px] pt-[81px] sm:text-2xl sm:w-full sm:pl-[30px] md:text-[28px] md:pl-[50px] sm:text-[26px] md:w-3/4 ">
              Подаруйте вашій дитині <br className="hidden sm:block" /> доступ до
              <span className="text-[#ECA842]"> всіх знань світу!</span>
            </p>
  
            <div className="lg:pl-[297px] mt-[-13px] absolute opacity-40 sm:pl-[100px] md:pl-[290px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="29"
                viewBox="0 0 192 29"
                fill="none"
                className="sm:w-[144px] md:w-[168px]"
              >
                <path
                  d="M93.3054 0.372942C81.3195 -1.06104 57.971 1.72757 35.8339 7.23645L30.6084 8.53863C15.9195 12.205 7.98467 14.7611 2.36515 17.6373C0.171896 18.7601 -0.0197837 18.9098 0.00141162 19.4839C0.0336653 20.3217 0.382927 20.2575 4.42248 18.6724C8.60256 17.0321 12.3246 15.9673 22.5058 13.4996C56.5334 5.25179 72.3396 2.84066 89.8824 3.22296C93.3202 3.29749 98.7522 4.39333 98.7153 5.00474C98.666 5.8211 95.0872 7.97898 86.8505 12.1581C76.7173 17.2992 70.5256 20.8075 69.9399 21.7391C68.9387 23.3318 69.8468 24.7803 71.9866 25.006C73.2095 25.135 73.4901 25.1143 79.1714 24.4677C95.483 22.6141 105.87 22.0607 119.887 22.2988C141.233 22.6618 154.777 23.8376 180.15 27.5323C189.267 28.86 189.74 28.8987 191.465 28.4515L191.495 28.4439C192.049 28.3038 192.2 27.1845 191.679 26.8326C190.338 25.9286 189.425 25.7257 181.52 24.5822C155.022 20.7482 141.032 19.5033 120.672 19.1707C109.964 18.9954 105.182 19.0906 97.3445 19.6358C91.9863 20.0084 77.8213 21.3568 75.8285 21.6832C74.7416 21.862 79.576 19.1817 88.0407 14.9136C98.7485 9.51371 100.912 7.90997 101.082 5.24903C101.274 2.24857 99.4562 1.10856 93.3054 0.372942Z"
                  fill="url(#paint0_linear_10_62)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_10_62"
                    x1="96"
                    y1="0"
                    x2="96"
                    y2="28.7081"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EBE0AA" />
                    <stop offset="1" stop-color="#BDAD59" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="grid lg:gap-7 md:gap-7 sm:gap-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 md:mr-[50px] md:ml-[50px] lg:mr-[135px] lg:ml-[135px] sm:mr-[30px] sm:ml-[30px]">
              <div className="col-span-1">
                <div className="relative mt-[35px] lg:h-1/3 sm:h-1/6 sm:block md:hidden lg:hidden sm:mb-1">
                  <div className="flex flex-col-reverse justify-center items-center h-full">
                    <img
                      alt="Girl"
                      src={require("../images/girl.png")}
                      className="h-full w-full object-fill"
                    />
                  </div>
                </div>
  
                <div className="w-[100%] lg:h-1/3 md:h-1/3 sm:h-1/6 md:w-[100%] lg:w-[100%]  mt-[62px]">
                  <div className="first">
                    <div className="lg:w-16 lg:h-16 flex-shrink-0 bg-[#FBD06F] rounded-[18px] flex items-center justify-center md:w-[53px] md:h-[53px] sm:w-[50px] sm:h-[50px]">
                      <ChatBubbleLeftEllipsisIcon className="lg:w-8 lg:h-8 text-white md:w-6 md:h-6 sm:w-6 sm:h-6" />
                    </div>
                    <p className="lg:pt-[31px] text-gray-900 lg:text-xl not-italic font-semibold leading-8 font-inter md:text-[16px] sm:text-[14px] md:pt-[17px] sm:pt-[10px]">
                      У сучасній формі
                    </p>
                    <p className="text-[#637381] lg:text-base not-italic font-normal leading-6 font-inter md:text-[13px] sm:text-[12px]">
                      Чат та голосовий помічник. Це саме ті форми взаємодії, які
                      наповнюють нашу реальність і максимально відповідають духу
                      часу. Саме так сьогодні виглядає сучасна грамота.
                    </p>
                  </div>
                </div>
                <div className="w-[100%] lg:h-1/3 md:h-1/3 sm:h-1/6 md:w-[100%] lg:w-[100%] lg:mt-5 md:mt-3">
                  <div className="second">
                    <div className="lg:w-16 lg:h-16 flex-shrink-0 bg-[#A097FF] rounded-[18px] flex items-center justify-center  md:w-[53px] md:h-[53px] sm:w-[50px] sm:h-[50px]">
                      <ClipboardDocumentCheckIcon className="lg:w-8 lg:h-8 text-white md:w-6 md:h-6  sm:w-6 sm:h-6" />
                    </div>
                    <p className="lg:pt-[31px] text-gray-900 lg:text-xl not-italic font-semibold leading-8 font-inter sm:text-[14px] md:text-[16px] md:pt-[17px]  sm:pt-[10px]">
                      Домашнє завдання?
                    </p>
                    <p className="text-[#637381] lg:text-base not-italic font-normal leading-6 font-inter md:text-[13px] sm:text-[12px]">
                      Груві допоможе із будь-яким домашнім завданням, пояснюючи та
                      задаючи потрібні дитині питання-підказки.
                    </p>
                  </div>
                </div>
                <div className="lg:h-1/3 md:h-1/3 sm:h-1/6 w-[100%]  lg:hidden md:hidden sm:block">
                  <div className="sixth">
                    <div className="lg:w-16 lg:h-16  flex-shrink-0 bg-[#FBD06F] rounded-[18px] flex items-center justify-center  md:w-[53px] md:h-[53px] sm:w-[50px] sm:h-[50px]">
                      <SpeakerWaveIcon className="lg:w-8 lg:h-8 text-white md:w-6 md:h-6 sm:w-6 sm:h-6" />
                    </div>
                    <p className="lg:pt-[31px] text-gray-900 lg:text-xl not-italic font-semibold leading-8 font-inter md:text-[16px] sm:text-[14px] md:pt-[17px]  sm:pt-[10px]">
                      Спілкуйтесь голосом
                    </p>
                    <p className="text-[#637381] lg:text-base not-italic font-normal leading-6 font-inter md:text-[13px] sm:text-[12px]">
                      Діти обожнюють говорити. Тепер у них справді є можливість
                      поговорити про все на всі світі і знати більше всіх.
                    </p>
                  </div>
                </div>
                <div className="w-[100%] lg:h-1/3 md:h-1/3 sm:h-1/6 lg:hidden md:hidden sm:block">
                  <div className="sixth">
                    <div className="lg:w-16 lg:h-16 flex-shrink-0 bg-[#4BA0FF] rounded-[18px] flex items-center justify-center  md:w-[53px] md:h-[53px] sm:w-[50px] sm:h-[50px]">
                      <SparklesIcon className="lg:w-8 lg:h-8 text-white md:w-6 md:h-6  sm:w-6 sm:h-6" />
                    </div>
                    <p className="lg:pt-[31px] text-gray-900 lg:text-xl not-italic font-semibold leading-8 font-inter md:text-[16px] sm:text-[14px] md:pt-[17px]  sm:pt-[10px]">
                      Терпеливий вчитель
                    </p>
                    <p className="text-[#637381] lg:text-base not-italic font-normal leading-6 font-inter md:text-[13px] sm:text-[12px]">
                      Груві вміє терпеливо, послідовно та просто пояснювати про
                      майже все на світі — в тому числі і предмети шкільної
                      програми, не втомлюючись шукати все нові і нові слова та
                      підходи.
                    </p>
                  </div>
                </div>
                <div className="w-[100%] lg:h-1/3 md:h-1/3 sm:h-1/6 md:w-[100%] lg:w-[100%] sm:mb-5 mb-4 md:mb-0 md:mr-4 z-20 relative">
                  <div className="third">
                    <img
                      alt="Groovy Meditation"
                      src={require("../images/groovy-meditation.png")}
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="relative mt-[35px] lg:h-1/3 md:h-1/3 sm:h-1/6  sm:block md:hidden lg:hidden">
                  <div className="seventh flex flex-col-reverse justify-center items-center h-[100%]">
                    <img
                      alt="Woman and daughter"
                      src={require("../images/woman.png")}
                      className="h-full w-full  lg:mt-[34px] md:mt-[20px] sm:mt-[10px] object-fill" // Используем lg:mt-[20px] для отступа сверху
                    />
                    <img
                      alt="Family"
                      src={require("../images/family.png")}
                      className="h-full w-full object-center"
                    />
                  </div>
                </div>
  
                <div className="w-[100%] lg:h-1/3 md:h-1/3 sm:h-1/6 md:w-[100%] sm:mb-[0px] lg:w-[100%] md:pr-0 mt-[62px]">
                  <div className="first">
                    <div className="lg:w-16 lg:h-16 flex-shrink-0 bg-[#4BA0FF] rounded-[18px] flex items-center justify-center md:w-[53px] md:h-[53px] sm:w-[50px] sm:h-[50px]">
                      <LanguageIcon className="lg:w-8 lg:h-8 text-white md:w-6 md:h-6  sm:w-6 sm:h-6" />
                    </div>
                    <p className="lg:pt-[31px] text-gray-900 lg:text-xl not-italic font-semibold leading-8 font-inter md:text-[16px] sm:text-[14px] md:pt-[17px]  sm:pt-[10px]">
                      Всіма мовами світу
                    </p>
                    <p className="text-[#637381] lg:text-base not-italic font-normal leading-6 font-inter md:text-[13px] sm:text-[12px]">
                      Діти швидко вчать нові мови, чому б не дати їм цю
                      можливість? Груві вміє креативити на різних мовах і легко
                      може допомогти з опануванням нових.
                    </p>
                  </div>
                </div>
                <div className="w-[100%] lg:h-1/3 md:h-1/3 sm:h-1/6 md:w-[100%] lg:w-[100%] lg:mt-5 md:mt-3 sm:mb-[0px]">
                  <div className="fifth">
                    <div className="lg:w-16 lg:h-16 flex-shrink-0 bg-[#48DB7A] rounded-[18px] flex items-center justify-center  md:w-[53px] md:h-[53px] sm:w-[50px] sm:h-[50px]">
                      <CheckCircleIcon className="lg:w-8 lg:h-8 text-white md:w-6 md:h-6  sm:w-6 sm:h-6" />
                    </div>
                    <p className="lg:pt-[31px] text-gray-900 lg:text-xl not-italic font-semibold leading-8 font-inter md:text-[16px] sm:text-[14px] md:pt-[17px]  sm:pt-[10px]">
                      Лише безпечний контент
                    </p>
                    <p className="text-[#637381] lg:text-base not-italic font-normal leading-6 font-inter md:text-[13px] sm:text-[12px]">
                      Груві говорить з дитиною лише про те, що відповідає її віку.
                      По всьому іншому — обережно радить іти по думці батьків 😉
                    </p>
                  </div>
                </div>
                <div className="lg:h-1/3 md:h-1/3 sm:h-1/6 w-[100%] sm:mt-[2px]  lg:hidden md:hidden sm:block">
                  <div className="sixth">
                    <div className="lg:w-16 mt-[-2px] lg:h-16 flex-shrink-0 bg-[#48DB7A] rounded-[18px] flex items-center justify-center  md:w-[53px] md:h-[53px] sm:w-[50px] sm:h-[50px]">
                      <LightBulbIcon className="lg:w-8 lg:h-8 text-white md:w-6 md:h-6  sm:w-6 sm:h-6" />
                    </div>
                    <p className="lg:pt-[31px] text-gray-900 lg:text-xl not-italic font-semibold leading-8 font-inter md:text-[16px] sm:text-[14px] md:pt-[17px]  sm:pt-[10px]">
                      Запалюйте креативність
                    </p>
                    <p className="text-[#637381] lg:text-base not-italic font-normal leading-6 font-inter md:text-[13px] sm:text-[12px]">
                      Всі дітки — мрійники і творці. Ми це розуміємо, і тому
                      створили для них можливість творити, в команді зі штучним
                      інтелектом.
                    </p>
                  </div>
                </div>
                <div className="w-[100%] lg:h-1/3 md:h-1/3 sm:h-1/6 sm:mt-[2px] lg:hidden md:hidden sm:block ">
                  <div className="sixth">
                    <div className="lg:w-16 lg:h-16 flex-shrink-0 bg-[#A097FF] rounded-[18px] flex items-center justify-center  md:w-[53px] md:h-[53px] sm:w-[50px] sm:h-[50px]">
                      <ArrowTrendingUpIcon className="lg:w-8 lg:h-8 text-white md:w-6 md:h-6  sm:w-6 sm:h-6" />
                    </div>
                    <p className="lg:pt-[31px] text-gray-900 lg:text-xl not-italic font-semibold leading-8 font-inter md:text-[16px] sm:text-[14px] md:pt-[17px]  sm:pt-[10px]">
                      Ціль — навчити
                    </p>
                    <p className="text-[#637381] lg:text-base not-italic font-normal leading-6 font-inter md:text-[13px] sm:text-[12px]">
                      Груві розуміє, що діти шукають швидких відповідей, особливо
                      на домашнє завдання, і майже ніколи не дає їх, замінюючи
                      питаннями, які наштовхують дитину на роздуми і
                      самостійність.
                    </p>
                  </div>
                </div>
  
                <div className="lg:h-1/3 md:h-1/3 sm:h-1/6 w-[100%] sm:mb-[450px] lg:hidden md:hidden sm:block  ">
                  <div className="sixth">
                    <div className="lg:w-16 lg:h-16 flex-shrink-0 bg-[#4BA0FF] rounded-[18px] flex items-center justify-center  md:w-[53px] md:h-[53px] sm:w-[50px] sm:h-[50px]">
                      <ShareIcon className="lg:w-8 lg:h-8 text-white md:w-6 md:h-6  sm:w-6 sm:h-6" />
                    </div>
                    <p className="lg:pt-[31px] text-gray-900 lg:text-xl not-italic font-semibold leading-8 font-inter md:text-[16px] sm:text-[14px] md:pt-[17px]  sm:pt-[10px]">
                      Послідовне мишлення
                    </p>
                    <p className="text-[#637381] lg:text-base not-italic font-normal leading-6 font-inter  md:text-[13px] sm:text-[12px]">
                      Осмислене спілкування у форматі “питання-відповідь” дуже
                      важливе для розвитку послідовного мишлення. Груві — майстер
                      логічних висновків і готовий цьому навчати.
                    </p>
                  </div>
                </div>
  
                <div className="w-[100%] h-1/3 md:w-[100%] lg:w-[100%]  lg:mt-5 md:mt-3 lg:block md:block sm:hidden">
                  <div className="sixth">
                    <div className="lg:w-16 lg:h-16 flex-shrink-0 bg-[#4BA0FF] rounded-[18px] flex items-center justify-center  md:w-[53px] md:h-[53px] sm:w-[50px] sm:h-[50px]">
                      <SparklesIcon className="lg:w-8 lg:h-8 text-white md:w-6 md:h-6  sm:w-6 sm:h-6" />
                    </div>
                    <p className="lg:pt-[31px] text-gray-900 lg:text-xl not-italic font-semibold leading-8 font-inter md:text-[16px] sm:text-[14px] md:pt-[17px]  sm:pt-[10px]">
                      Терпеливий вчитель
                    </p>
                    <p className="text-[#637381] lg:text-base not-italic font-normal leading-6 font-inter md:text-[13px] sm:text-[12px]">
                      Груві вміє терпеливо, послідовно та просто пояснювати про
                      майже все на світі — в тому числі і предмети шкільної
                      програми, не втомлюючись шукати все нові і нові слова та
                      підходи.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 lg:block md:block sm:hidden">
                <div className="relative  h-1/2 md:w-[100%] lg:w-[100%] lg:mb-[85px] lg:mt-[-50px] md:pr-0 md:h-[38%] md:mt-0 sm:hidden md:block lg:block">
                  <div className="flex flex-col-reverse justify-center items-center h-full">
                    <img
                      alt="Girl"
                      src={require("../images/girl.png")}
                      className="h-auto w-[85%] object-fill pl-[20px]"
                    />
                  </div>
                </div>
  
                <div className="h-1/3 w-[100%] md:w-[100%] lg:w-[100%]  md:mt-[28px] lg:mt-[87px]">
                  <div className="sixth">
                    <div className="lg:w-16 lg:h-16 flex-shrink-0 bg-[#FBD06F] rounded-[18px] flex items-center justify-center  md:w-[53px] md:h-[53px] sm:w-[50px] sm:h-[50px]">
                      <SpeakerWaveIcon className="lg:w-8 lg:h-8 text-white md:w-6 md:h-6 sm:w-6 sm:h-6" />
                    </div>
                    <p className="lg:pt-[31px] text-gray-900 lg:text-xl not-italic font-semibold leading-8 font-inter md:text-[16px] sm:text-[14px] md:pt-[17px]  sm:pt-[10px]">
                      Спілкуйтесь голосом
                    </p>
                    <p className="text-[#637381] lg:text-base not-italic font-normal leading-6 font-inter md:text-[13px] sm:text-[12px]">
                      Діти обожнюють говорити. Тепер у них справді є можливість
                      поговорити про все на всі світі і знати більше всіх.
                    </p>
                  </div>
                </div>
                <div className="w-[100%] h-1/3 md:w-[100%] lg:w-[100%] lg:mt-[23px] md:mt-3 ">
                  <div className="sixth">
                    <div className="lg:w-16 lg:h-16 flex-shrink-0 bg-[#A097FF] rounded-[18px] flex items-center justify-center  md:w-[53px] md:h-[53px] sm:w-[50px] sm:h-[50px]">
                      <ArrowTrendingUpIcon className="lg:w-8 lg:h-8 text-white md:w-6 md:h-6  sm:w-6 sm:h-6" />
                    </div>
                    <p className="lg:pt-[31px] text-gray-900 lg:text-xl not-italic font-semibold leading-8 font-inter md:text-[16px] sm:text-[14px] md:pt-[17px]  sm:pt-[10px]">
                      Ціль — навчити
                    </p>
                    <p className="text-[#637381] lg:text-base not-italic font-normal leading-6 font-inter md:text-[13px] sm:text-[12px]">
                      Груві розуміє, що діти шукають швидких відповідей, особливо
                      на домашнє завдання, і майже ніколи не дає їх, замінюючи
                      питаннями, які наштовхують дитину на роздуми і
                      самостійність.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 lg:block md:block sm:hidden">
                <div className="relative h-1/2 md:w-full lg:w-full lg:mb-[54px] pr-4 lg:mt-[-50px] md:pr-0 md:h-[38%] md:mt-0 sm:hidden md:block lg:block">
                  <div className="seventh flex flex-col-reverse justify-center items-center h-auto">
                    <img
                      alt="Woman and daughter"
                      src={require("../images/woman.png")}
                      className="flex-grow max-w-full max-h-[46%] lg:mt-[17px] md:mt-[10px] z-10"
                    />
                    <div className="relative flex-grow max-w-full max-h-[46%] lg:mb-[17px] md:mb-[10px]">
                      <img
                        alt="Family"
                        src={require("../images/family.png")}
                        className="w-full h-full object-cover z-20 relative"
                      />
                      <div
                        className="absolute right-[-120px] top-[-40px] w-[300px] h-full z-10 bg-contain bg-no-repeat lg:block md:hidden"
                        style={{ backgroundImage: `url(${dots})` }}
                      ></div>
                    </div>
                  </div>
                </div>
  
                <div className="h-1/3 w-[100%] md:w-[100%] lg:w-[100%] lg:mb-4 md:mt-[28px] lg:mt-[90px]">
                  <div className="sixth">
                    <div className="lg:w-16 mt-[-2px] lg:h-16 flex-shrink-0 bg-[#48DB7A] rounded-[18px] flex items-center justify-center  md:w-[53px] md:h-[53px] sm:w-[50px] sm:h-[50px]">
                      <LightBulbIcon className="lg:w-8 lg:h-8 text-white md:w-6 md:h-6  sm:w-6 sm:h-6" />
                    </div>
                    <p className="lg:pt-[31px] text-gray-900 lg:text-xl not-italic font-semibold leading-8 font-inter md:text-[16px] sm:text-[14px] md:pt-[17px]  sm:pt-[10px]">
                      Запалюйте креативність
                    </p>
                    <p className="text-[#637381] lg:text-base not-italic font-normal leading-6 font-inter md:text-[13px] sm:text-[12px]">
                      Всі дітки — мрійники і творці. Ми це розуміємо, і тому
                      створили для них можливість творити, в команді зі штучним
                      інтелектом.
                    </p>
                  </div>
                </div>
                <div className="h-1/3 w-[100%]  md:w-[100%] lg:w-[100%] lg:mt-[22px] md:mt-[14px] ">
                  <div className="sixth">
                    <div className="lg:w-16 lg:h-16 flex-shrink-0 bg-[#4BA0FF] rounded-[18px] flex items-center justify-center  md:w-[53px] md:h-[53px] sm:w-[50px] sm:h-[50px]">
                      <ShareIcon className="lg:w-8 lg:h-8 text-white md:w-6 md:h-6  sm:w-6 sm:h-6" />
                    </div>
                    <p className="lg:pt-[31px] text-gray-900 lg:text-xl not-italic font-semibold leading-8 font-inter md:text-[16px] sm:text-[14px] md:pt-[17px]  sm:pt-[10px]">
                      Послідовне мишлення
                    </p>
                    <p className="text-[#637381] lg:text-base not-italic font-normal leading-6 font-inter  md:text-[13px] sm:text-[12px]">
                      Осмислене спілкування у форматі “питання-відповідь” дуже
                      важливе для розвитку послідовного мишлення. Груві — майстер
                      логічних висновків і готовий цьому навчати.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="relative ">
              <div
                className="z-0 absolute sm:top-[-20vh] sm:left-[-10vw] sm:w-[130px] sm:h-[130px] sm:rounded-[130px] sm:border-[30px] 
      md:top-[-20vh] md:left-[-5vw] md:w-[150px] md:h-[150px] md:rounded-[150px] md:border-[40px] 
      lg:top-[-16vh] lg:left-[-3vw] lg:w-[300px] lg:h-[300px] lg:rounded-[300px] lg:border-[80px] 
      border-solid border-[rgba(0,0,0,0.04)]"
              ></div>
              <div
                className="absolute sm:top-[45px] sm:left-[40vw] sm:w-[60px] sm:h-[60px] sm:rounded-[60px] sm:border-[10px] 
      md:top-[110px] md:left-[25vw] md:w-[70px] md:h-[70px] md:rounded-[70px] md:border-[10px] 
      lg:top-[150px] lg:left-[30vw] lg:w-[98px] lg:h-[98px] lg:rounded-[98px] lg:border-[20px] border-solid border-[#f5dede0a] z-30"
              ></div>
  
              <div
                className="absolute sm:top-[45px] sm:right-[-7vw] sm:w-[120px] sm:h-[120px] sm:rounded-[120px] sm:border-[20px] 
      md:top-[90px] md:right-[-9vw] md:w-[190px] md:h-[190px] md:rounded-[190px] md:border-[25px] 
      lg:top-[100px] lg:right-[-6vw] lg:w-[326px] lg:h-[326px] rounded-[326px] border-[45px] border-solid border-[#f5dede0a] z-30"
              ></div>
            </div>
  
            <div className="lg:mt-[190px] md:mt-[130px] sm:mt-[70px]   md:h-[470px] lg:h-[470px] sm:h-[300px] w-full bg-gradient-to-r from-[#3056D3] to-[#13C296]  lg:mb-[170px] md:mb-[100px] sm:mb-[20px]">
              <p
                className="lg:pt-[70px] md:pt-[55px] sm:pt-[55px] text-white text-center lg:text-[36px] not-italic 
              font-bold lg:leading-10 md:text-[24px] sm:leading-9 sm:text-[24px] md:leading-9 font-inter"
              >
                Готові спробувати?
              </p>
              <p
                className=" text-white text-center lg:text-[40px] not-italic font-normal lg:leading-10 
              md:text-[24px] md:leading-9  sm:text-[24px] sm:leading-9 font-inter"
              >
                Зареєструйтесь вже зараз
              </p>
              <p
                className="text-white text-center lg:text-[16px] not-italic 
              font-normal lg:leading-5 font-inter mt-6 md:text-[13px] md:leading-4 sm:text-[11px] sm:leading-3 px-1"
              >
                Ми дуже раді, що Груві знайшов місце серед додатків вашої дитини.{" "}
                <br />
                Схоже, що залишилось лише зареєструватись і розкрити його
                потенціал на повну!
              </p>
              <button
                className="rounded-[5px] bg-[#13c296] lg:w-[400px]   md:w-[400px]  sm:w-[250px] lg:h-[60px] md:h-[50px] sm:h-[50px]
               mx-auto flex items-center lg:mt-[38px] md:mt-[31px] sm:mt-[39px]"
              >
                <p className="text-white text-center text-base not-italic font-medium leading-6 font-inter mx-auto sm:hidden">
                  Зареєструвати дитячий обліковий запис
                </p>
                <p className="text-white text-center text-base not-italic font-medium leading-6 font-inter mx-auto sm:block">
                  Зареєструвати дитину
                </p>
              </button>
            </div>
            <div className="relative sm:ml-[-45px] sm:top-[-12vh] md:ml-[-90px] md:mt-[-110px] lg:ml-[-160px] lg:mt-[-270px]">
              <div
                className="sm:w-[163px] sm:h-[163px] sm:rounded-[163px] sm:border-[20px] sm:top-[100vh]
      md:w-[163px] md:h-[163px] md:rounded-[163px] md:border-[22.5px] 
      lg:w-[326px] lg:h-[326px] lg:rounded-[326px] lg:border-[45px] stroke-[20px] order-solid border-[#FFFFFF0A] z-30"
              ></div>
            </div>
            <div className="relative sm:left-[282.5px]  sm:top-[-24vh] md:left-[565px] md:mt-[7vh] lg:left-[1130px] lg:mt-[-6vh]">
              <div
                className="sm:w-[49px] sm:h-[49px] sm:rounded-[49px] sm:border-[10px] 
              md:w-[49px] md:h-[49px] md:rounded-[49px] md:border-[10px] 
             lg:w-[98px] lg:h-[98px] lg:rounded-[98px] lg:border-[20px] stroke-[20px] order-solid border-[#f9f9f90a] z-30"
              ></div>
            </div>
          </div>
          <Sidebar active={sidebarActive} setActive={setSidebarActive} />
        </div>
      </>
    );
  }
  export default Onboarding;
  