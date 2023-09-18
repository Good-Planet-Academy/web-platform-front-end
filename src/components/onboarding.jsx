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
        <div className="bg-[#FAFCFD] overflow-x-hidden">
          <div
            onClick={() => {
              setSidebarActive(!sidebarActive);
            }}
            className="w-20 h-20 cursor-pointer flex-shrink-0 rounded-br-[35px] bg-gradient-to-bl from-[#2399A0] to-[#2C87A4] flex items-center justify-center"
          >
            <Bars3Icon
              className="w-8 h-8 flex-shrink-0 text-white"
              aria-hidden="true"
            />
          </div>
          <p className="text-4xl not-italic font-bold font-inter pl-[135px] mt-[-30px]">
            Можливості та цінності
          </p>
          <p className="text-gray-600 text-base not-italic font-normal pl-[135px] leading-4 font-inter">
            Сюди ми помістили те, що надихає продовжувати нас самих, та те, для
            чого ми займаємось Good Planet Academy
          </p>
          <p className="text-3xl w-374 not-italic font-semibold font-inter pl-[135px] pt-[81px]">
            Подаруйте вашій дитині <br /> доступ до
            <span className="text-[#ECA842]"> всіх знань світу!</span>
          </p>
          <div className="pl-[297px] mt-[-13px] absolute opacity-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="192"
              height="29"
              viewBox="0 0 192 29"
              fill="none"
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
          <div className="grid grid-cols-4 gap-7 pl-[135px] pr-[135px]">
            <div className="col-span-1">
              <div className="w-[270px] pb-4 pr-4 mt-[62px]">
                <div className="first">
                  <div className="w-16 h-16 flex-shrink-0 bg-[#FBD06F] rounded-[18px] flex items-center justify-center">
                    <ChatBubbleLeftEllipsisIcon className="w-8 h-8 text-white" />
                  </div>
                  <p className="pt-[31px] text-gray-900 text-xl not-italic font-semibold leading-8 font-inter">
                    У сучасній формі
                  </p>
                  <p className="text-[#637381] text-base not-italic font-normal leading-6 font-inter">
                    Чат та голосовий помічник. Це саме ті форми взаємодії, які
                    наповнюють нашу реальність і максимально відповідають духу
                    часу. Саме так сьогодні виглядає сучасна грамота.
                  </p>
                </div>
              </div>
              <div className="w-[270px] mb-4 mr-4 mt-[56px]">
                <div className="second">
                  <div className="w-16 h-16 flex-shrink-0 bg-[#A097FF] rounded-[18px] flex items-center justify-center">
                    <ClipboardDocumentCheckIcon className="w-8 h-8 text-white" />
                  </div>
                  <p className="pt-[31px] text-gray-900 text-xl not-italic font-semibold leading-8 font-inter">
                    Домашнє завдання?
                  </p>
                  <p className="text-[#637381] text-base not-italic font-normal leading-6 font-inter">
                    Груві допоможе із будь-яким домашнім завданням, пояснюючи та
                    задаючи потрібні дитині питання-підказки.
                  </p>
                </div>
              </div>
              <div className="w-[270px] mb-4 mr-4 mt-[56px] z-20 relative">
                <div className="third">
                  <img
                    alt="Groovy Meditation"
                    src={require("../images/groovy-meditation.png")}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-[270px] pb-4 pr-4 mt-[62px]">
                <div className="first">
                  <div className="w-16 h-16 flex-shrink-0 bg-[#4BA0FF;] rounded-[18px] flex items-center justify-center">
                    <LanguageIcon className="w-8 h-8 text-white" />
                  </div>
                  <p className="mt-[31px] text-gray-900 text-xl not-italic font-semibold leading-8 font-inter">
                    Всіма мовами світу
                  </p>
                  <p className="text-[#637381] text-base not-italic font-normal leading-6 font-inter">
                    Діти швидко вчать нові мови,чому б не дати їм цю можливість?
                    Груві вміє креативити на різних мовах і легко може допомогти
                    з опануванням нових.
                  </p>
                </div>
              </div>
              <div className="w-[270px] mb-4 mr-4 pt-[77px]">
                <div className="fifth">
                  <div className="w-16 h-16 flex-shrink-0 bg-[#48DB7A] rounded-[18px] flex items-center justify-center">
                    <CheckCircleIcon className="w-8 h-8 text-white" />
                  </div>
                  <p className="pt-[31px] text-gray-900 text-xl not-italic font-semibold leading-8 font-inter">
                    Лише безпечний контент
                  </p>
                  <p className="text-[#637381] text-base not-italic font-normal leading-6 font-inter">
                    Груві говорить з дитиною лише про те, що відповідає її віку.
                    По все інше — обережно радить іти по думку батьків 😉
                  </p>
                </div>
              </div>
              <div className="w-[270px] mb-4 mr-4 pt-[56px]">
                <div className="sixth">
                  <div className="w-16 h-16 flex-shrink-0 bg-[#4BA0FF] rounded-[18px] flex items-center justify-center">
                    <SparklesIcon className="w-8 h-8 text-white" />
                  </div>
                  <p className="pt-[31px] text-gray-900 text-xl not-italic font-semibold leading-8 font-inter">
                    Терпеливий вчитель
                  </p>
                  <p className="text-[#637381] text-base not-italic font-normal leading-6 font-inter">
                    Груві вміє терпеливо, послідовно та просто пояснювати про
                    майже все на світі — в тому числі і предмети шкільної
                    програми, не втомлюючись шукати все нові і нові слова та
                    підходи.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-[270px] pb-4 pr-4 mt-[-77px] pl-[30px]">
                <div className="w-[270px] mb-4 mr-4">
                  <div className="seventh">
                    <img alt="Girl" src={require("../images/girl.png")} />
                  </div>
                </div>
                <div className="w-[270px] mb-4 mr-4 mt-[65px]">
                  <div className="sixth">
                    <div className="w-16 h-16 flex-shrink-0 bg-[#FBD06F] rounded-[18px] flex items-center justify-center">
                      <SpeakerWaveIcon className="w-8 h-8 text-white" />
                    </div>
                    <p className="pt-[31px] text-gray-900 text-xl not-italic font-semibold leading-8 font-inter">
                      Спілкуйтесь голосом
                    </p>
                    <p className="text-[#637381] text-base not-italic font-normal leading-6 font-inter">
                      Діти обожнюють говорити. Тепер у них справді є можливість
                      поговорити про все на всі світі і знати більше всіх..
                    </p>
                  </div>
                </div>
                <div className="w-[270px] mb-4 mr-4 mt-[72px]">
                  <div className="sixth">
                    <div className="w-16 h-16 flex-shrink-0 bg-[#A097FF] rounded-[18px] flex items-center justify-center">
                      <ArrowTrendingUpIcon className="w-8 h-8 text-white" />
                    </div>
                    <p className="pt-[31px] text-gray-900 text-xl not-italic font-semibold leading-8 font-inter">
                      Ціль — навчити
                    </p>
                    <p className="text-[#637381] text-base not-italic font-normal leading-6 font-inter">
                      Груві розуміє, що діти шукають швидких відповідей,
                      особливо на домашнє завдання, і майже ніколи не дає їх,
                      замінюючи питаннями, які наштовхують дитину на роздуми і
                      самостійність.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="relative h-[410x]">
                <div
                  className="absolute right-[-70px] top-[-110px] w-[300px] h-1/2 z-0 bg-contain bg-no-repeat"
                  style={{ backgroundImage: `url(${dots})` }}
                ></div>
                <div className="flex flex-col h-full">
                  <div className="flex flex-col">
                    <div className="relative flex-grow">
                      <img
                        alt="Family"
                        src={require("../images/family.png")}
                        className="h-[195px] mb-[35px] mt-[-70px]"
                      />
                    </div>
                    <div className="relative flex-grow h-[177px]">
                      <img
                        alt="Woman and daughter"
                        src={require("../images/woman.png")}
                        className="h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[270px] mb-4 mr-4 pt-[60px]">
                <div className="sixth">
                  <div className="w-16 h-16 flex-shrink-0 bg-[#48DB7A] rounded-[18px] flex items-center justify-center">
                    <LightBulbIcon className="w-8 h-8 text-white" />
                  </div>
                  <p className="pt-[31px] text-gray-900 text-xl not-italic font-semibold leading-8 font-inter">
                    Запалюйте креативність
                  </p>
                  <p className="text-[#637381] text-base not-italic font-normal leading-6 font-inter">
                    Всі дітки — мрійники і творці. Ми це розуміємо, і тому
                    створили для них можливість творити, в команді зі штучним
                    інтелектом.
                  </p>
                </div>
              </div>
              <div className="w-[270px] mb-4 mr-4 pt-[54px]">
                <div className="sixth">
                  <div className="w-16 h-16 flex-shrink-0 bg-[#4BA0FF] rounded-[18px] flex items-center justify-center">
                    <ShareIcon className="w-8 h-8 text-white" />
                  </div>
                  <p className="pt-[31px] text-gray-900 text-xl not-italic font-semibold leading-8 font-inter">
                    Послідовне мишлення
                  </p>
                  <p className="text-[#637381] text-base not-italic font-normal leading-6 font-inter">
                    Осмислене спілкування у форматі “питання-відповідь” дуже
                    важливе для розвитку послідовного мишлення. Груві — майстер
                    логічних висновків і готовий цьому навчати.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative ">
            <div className="z-0 absolute top-[-220px] left-[-4vw] w-[300px] h-[300px] rounded-[300px] border-[80px] border-solid border-[rgba(0,0,0,0.04)]"></div>

            <div className="absolute top-[80px] left-[30vw] w-[98px] h-[98px] rounded-[98px] border-[20px] border-solid border-[#FFFFFF0A] z-30"></div>

            <div className="absolute top-[значение] right-[-10vw] w-[326px] h-[326px] rounded-[326px] border-[45px] border-solid border-[#FFFFFF0A] z-30"></div>
          </div>

          <div className="mt-[130px] h-[470px] w-full bg-gradient-to-r from-[#3056D3] to-[#13C296]  mb-[70px]">
            <p className="pt-[70px] text-white text-center text-[36px] not-italic font-bold leading-10 font-inter">
              Готові спробувати?
            </p>
            <p className=" text-white text-center text-[40px] not-italic font-normal leading-10 font-inter">
              Зареєструйтесь вже зараз
            </p>
            <p className="text-white text-center text-[16px] not-italic font-normal leading-5 font-inter mt-6">
              Ми дуже раді, що Груві знайшов місце серед додатків вашої дитини.{" "}
              <br />
              Схоже, що залишилось лише зареєструватись і розкрити його
              потенціал на повну!
            </p>
            <button className="rounded-[5px] bg-[#13c296] w-[400px] h-[60px] mx-auto flex items-center mt-[38px]">
              <p className="text-white text-center text-base not-italic font-medium leading-6 font-inter mx-auto">
                Зареєструвати дитячий обліковий запис
              </p>
            </button>
          </div>
          {/* <div className="relative ml-[-160px] mt-[-270px]">
          <div className="w-[326px] h-[326px] rounded-[326px] border-[45px] stroke-[20px] order-solid border-[#FFFFFF0A] z-30"></div>
        </div>
        <div className="relative left-[1130px] mt-[-180px]">
          <div className="w-[98px] h-[98px] rounded-[98px] border-[20px] stroke-[20px] order-solid border-[#FFFFFF0A] z-30"></div>
        </div> */}
        </div>
        <Sidebar active={sidebarActive} setActive={setSidebarActive} />
      </div>
    </>
  );
}
export default Onboarding;
