import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { Bars3Icon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
function Subscriptions() {
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

  const [numberOfMessages, setNumberOfMessages] = useState(90);
  const [price, setPrice] = useState(2);

  const linkToCup =
    "https://s3-alpha-sig.figma.com/img/2577/1d0a/ce23a4954034ca650aa7704dc863a641?Expires=1697414400&Signature=pMmC-fvQJBb2z4yPi0LThDpA8gQ8UpgHc-8Ll8aScUpHiyL7E-y0UGhusNY9f9FiMRlVV~4elizyJsX3Mq5TFmdYI8f3Yvlr0b~ZU5EiSLRTan2NxW8fQFzVM-~e1~lNn6AvivOBY8mVyAJ0vh6cFFc9mCpe6s5BWXj0A850JDiSU3CBbFJUvSAO81vAEN~AXyfMnKihlXAd7Ot9b1R1bt7Zb4LFpfts6C6iZvXliFSyx7aEt~V-sM3NMDwpTDEgguLE3bOG6NOYc61hvgHvuhEtPlU6tBb~NoVkaQEXhAPyf24kXyh58MA-dog3tcsd4nPZ8gdsmmjaS0KFo4arDg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  function getWordForm(num) {
    const lastDigit = num % 10;

    if (num > 10 && num < 20) {
      return "чашок";
    }
    if (lastDigit === 1) {
      return "чашка";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      return "чашки";
    } else {
      return "чашок";
    }
  }
  return (
    <>
      <div>
        <Sidebar active={sidebarActive} setActive={setSidebarActive} />
        <div className="bg-[#FAFCFD]  overflow-hidden">
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
            Підписки та квоти
          </p>
          <p
            className="text-[#637381] lg:text-base md:text-[14px] sm:text-[12px] 
          lg:ml-[135px] md:ml-[135px] sm:ml-[50px] not-italic font-normal leading-[18px]"
          >
            В цьому розділі можна переглянути та обрати тарифний план, який
            максимально відповідає потребам дитини.
          </p>

          <div
            className="lg:mt-[120px] md:mt-[100px] sm:mt-[50px]   
          md:h-[550px] lg:h-[620px] sm:h-[400px] w-full bg-gradient-to-r from-[#3056D3] to-[#13C296]  
          lg:mb-[170px] md:mb-[100px] sm:mb-[20px] flex items-center justify-between "
          >
            <div
              className="lg:w-[370px] lg:h-[550px] md:w-[330px] md:h-[480px] lg:ml-[130px] sm:w-[180px] sm:h-[340px]
             md:ml-[50px] sm:ml-[20px] bg-white rounded-2xl mr-5"
            >
              <p
                className="text-[#212B36] text-center lg:text-[64px] md:text-[56px] sm:text-[36px]
             font-inter not-italic font-semibold leading-[normal] lg:mt-[45px] md:mt-[40px] sm:mt-[20px]"
              >
              
                {numberOfMessages * price}
              </p>
              <p
                className="text-[#515558] text-center lg:text-base md:text-[14px] sm:text-[11px]
              not-italic font-normal lg:leading-6 md:leading-5 sm:leading-4 font-inter lg:mx-[40px] md:mx-[30px] sm:mx-[15px]"
              >
                Саме на таку кількість запитань про все на світі люб’язно
                відповість Груві
              </p>
              <row>
                <div className="flex items-center justify-center lg:mt-8 md:mt-5 sm:mt-2">
                  <div
                    onClick={() => {
                      price > 2 ? setPrice(price - 1) : setPrice(2);
                      price > 2 ? setNumberOfMessages(numberOfMessages-90): setNumberOfMessages(90);
                    }}
                    className="rounded-[30px] bg-[#d4d4d4] lg:w-[80px] lg:h-10 md:w-[60px] md:h-8 sm:w-[40px] sm:h-6
                  flex justify-center cursor-pointer items-center lg:mr-2 md:mr-2 sm:mr-1 "
                  >
                  
                    <MinusIcon className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] sm:w-[16px] sm:h-[16px] text-white" />  
                  </div>

                  <div
                    className="rounded-lg border-[1.5px] border-solid border-[#E0E0E0]
                   lg:w-[88px] lg:h-[61px] md:w-[88px] md:h-[61px] sm:w-[60px] sm:h-[41px]
                flex justify-center items-center"
                  >
                    <p
                      className="text-[color:var(--TailGrids-Text-Color,#637381)] 
                  text-center lg:text-xl md:text-xl sm:text-xs not-italic font-bold leading-6"
                    >
                      ${price}
                    </p>
                  </div>
                  <div
                    onClick={() => {
                      setPrice(price + 1);
                      setNumberOfMessages(numberOfMessages+90)
                    }}
                    className="rounded-[30px] bg-[#13C296]  lg:ml-2 md:ml-2 sm:ml-1 cursor-pointer
                   lg:w-[80px] lg:h-10 md:w-[60px] md:h-8 sm:w-[40px] sm:h-6 flex justify-center items-center"
                  >
                  
                    <PlusIcon className="wg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] sm:w-[16px] sm:h-[16px]  text-white" />  
                  </div>
                </div>
              </row>
              <p className="text-[#637381] text-center lg:text-xs md:text-xs sm:text-[10px] not-italic font-normal leading-[normal]">
                /міс. за {numberOfMessages * price} повідомлень
              </p>
              <p
                className="text-[#637381] text-center lg:text-xs md:text-xs sm:text-[10px] not-italic 
            font-normal lg:leading-5  md:leading-5  sm:leading-1"
              >
              
                Не використані повідомлення  
                <span className="font-bold">додаються</span> до повідомлень
                наступного місяця 😊
              </p>
              <div className="flex items-center justify-center relative mt-2">
                {price <= 4 &&
                  Array.from({ length: price }).map((_, index) => (
                    <img
                      key={index}
                      src={linkToCup}
                      alt="Coffee Cup"
                      className="lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-4 sm:h-4 lg:mr-2 md:mr-2 sm:mr-[1px] last:mr-0"
                    />
                  ))}
                {price > 4 &&
                  Array.from({ length: 4 }).map((_, index) => (
                    <img
                      key={index}
                      src={linkToCup}
                      alt="Coffee Cup"
                      className="absolute lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-4 sm:h-4"
                      style={{
                        left: `50%`,
                        top: `50%`,
                        transform: `translateX(${-20 + index * 5}px)`,
                        zIndex: 4 - index,
                      }}
                    />
                  ))}
              </div>
              {price > 4 ? (
                <p
                  className="text-[#637381] text-center lg:text-xs md:text-xs 
            sm:text-[10px] lg:leading-5  md:leading-5  sm:leading-1 not-italic
             font-normal leading-[normal] lg:mt-10 md:mt-8 sm:mt-4  "
                >
                  всі знання світу вартістю як  
                  <span className="font-bold">
                  
                    {price} {getWordForm(price)} кави
                  </span>  
                </p>
              ) : (
                <p
                  className="text-[#637381] text-center lg:text-xs md:text-xs 
            sm:text-[10px] lg:leading-5  md:leading-5  sm:leading-1 not-italic
           font-normal leading-[normal] lg:mt-0 md:mt-0 sm:mt-0 "
                >
                  всі знання світу вартістю як  
                  <span className="font-bold">
                  
                    {price} {getWordForm(price)} кави
                  </span>  
                </p>
              )}
              <div className="flex items-center justify-center relative lg:mt-[70px] md:mt-[40px] sm:mt-[20px] lg:mx-6 md:mx-4 sm:mx-1">
                <button className="lg:w-[322px] lg:h-[58px] md:w-[280px] md:h-[56px] sm:w-[150px] sm:h-[30px] rounded-[5px] bg-[#13C296]">
                  <p className="text-white text-center lg:text-base md:text-sm sm:text-[8px] not-italic font-bold lg:leading-6 font-inter">
                    Інвестувати в інтелект та навички
                  </p>
                </button>
              </div>
            </div>
            {/* white block */}
            <div className="flex relative sm:flex-col lg:flex-row md:flex-row ">
              <div className="  md:ml-[20px] mt-[70px] md:mt-[50px] sm:mt-[0px]">
                <p
                  className="text-white not-italic font-normal font-inter w-[30vw] md:w-[25vw] 
                sm:w-full lg:text-3xl lg:leading-10 md:text-2xl md:leading-9 sm:text-base sm:leading-4"
                >
                  Передові знання та духовність повинні бути досяжні для
                  кожного.
                </p>
                <p
                  className="text-white not-italic font-normal font-inter w-[25vw] md:w-[20vw] 
               sm:w-full lg:leading-[25px] md:text-sm md:leading-6 sm:text-xs sm:leading-2 sm:mt-[10px]"
                >
                  Ми в Good Planet Academy віримо, що іскра інтелекту і
                  духовності горить в кожному, и саме тому и знання и досвід
                  повинні також бути доступними кожному. Кожна дитина тут для
                  того, щоб реалізуватись.
                </p>
              </div>
              <div className="lg:mt-[320px] md:mt-[220px] mr-[170px] md:mr-[5px] sm:mt-[0px] sm:mx-auto">
                <img
                  src={require("../images/groovy-love.png")}
                  alt="Groovy Love"
                  className="w-[250px] h-[250px] md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px]"
                />
              </div>
            </div>
            <div
        className="absolute sm:top-[220px] sm:left-[40vw] sm:w-[60px] sm:h-[60px] sm:rounded-[60px] sm:border-[10px] 
        md:top-[270px] md:left-[35vw] md:w-[70px] md:h-[70px] md:rounded-[70px] md:border-[10px] 
        lg:top-[250px] lg:left-[30vw] lg:w-[98px] lg:h-[98px] lg:rounded-[98px] lg:border-[20px] border-solid border-[#f5dede0a] z-30"
      ></div>
      <div
        className="absolute sm:top-[350px] sm:left-[50vw] sm:w-[60px] sm:h-[60px] sm:rounded-[60px] sm:border-[10px] 
        md:top-[400px] md:left-[45vw] md:w-[70px] md:h-[70px] md:rounded-[70px] md:border-[10px] 
        lg:top-[400px] lg:left-[50vw] lg:w-[98px] lg:h-[98px] lg:rounded-[98px] lg:border-[20px] border-solid border-[#f5dede0a] z-30"
      ></div>
      <div
        className="absolute sm:top-[450px] sm:left-[40vw] sm:w-[60px] sm:h-[60px] sm:rounded-[60px] sm:border-[10px] 
        md:top-[350px] md:left-[75vw] md:w-[70px] md:h-[70px] md:rounded-[70px] md:border-[10px] 
        lg:top-[600px] lg:left-[0vw] lg:w-[98px] lg:h-[98px] lg:rounded-[98px] lg:border-[20px] border-solid border-[#f5dede0a] z-30"
      ></div>
      <div className="absolute sm:top-[240px] sm:left-[80vw] sm:w-[60px] sm:h-[60px] sm:rounded-[60px] sm:border-[10px] 
        md:top-[700px] md:left-[5vw] md:w-[70px] md:h-[70px] md:rounded-[70px] md:border-[10px] 
        lg:top-[500px] lg:left-[60vw] lg:w-[98px] lg:h-[98px] lg:rounded-[98px] lg:border-[20px] border-solid border-[#f5dede0a] z-30"
      ></div>
          </div>
        </div>
        <footer className="bottom-0 w-full text-[#797979] text-center text-xs not-italic font-normal leading-5 font-inter">
          good-planet.academy 🤍 2023
        </footer>
      </div>
    </>
  );
}
export default Subscriptions;
