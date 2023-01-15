import { useEffect, useRef, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { AwardIcon, Cambridge, School, SchoolIcon, SheikhMansour } from "./assets";
import { IoMdPeople } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import LaptopIcon from "./assets/laptop.webp";
import RadioIcon from "./assets/radio.webp";
import MobileIcon from "./assets/mobile.webp";
import GirlAwardIcon from "./assets/girlAward.jpeg";
import EmirateIcon from "./assets/emirate.jpg";
import AbuZabiIcon from "./assets/AbuZabi.jpg";
import DubaiIcon from "./assets/dubaiCampus.jpg";
import SharjahIcon from "./assets/Sharjah.jpg";
import AlAinIcon from "./assets/AlAin.jpg";
import MbzCityIcon from "./assets/MbzCity.jpg";
import InternationIcon from "./assets/international.png";
import CogniaIcon from "./assets/cognia.png";
import UnitedNationIcon from "./assets/unitedNation.png";
import GraduatesIcon from "./assets/graduates.jpg";
import HallIcon from "./assets/hall.jpg";
import { Typewriter } from "react-simple-typewriter";
import { AiOutlineArrowDown, AiOutlineArrowLeft } from "react-icons/ai";
import styles from "./index.css"
function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");
  const [isOpen, setIsOpen] = useState(undefined);
  // const { scrollYProgress } = useViewportScroll();
  // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.2]);
  const [width, setWidth] = useState(0);
  const carousal = useRef();
  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: "#F3F4F6",
      mixBlendMode: "difference",
    },
  };
  const variantImage = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const variantDetailCards = {
    initial: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX - 16,
        y: e.clientY - 16,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    setWidth(carousal.current.scrollWidth - carousal.current.offsetWidth);
  }, []);
  return (
    <div className="h-screen   text-black">
      <motion.div
        variants={variants}
        animate={cursorVariant}
        className="md:bg-black md:border-2 z-20 border-black  pointer-events-none md:h-[20px] md:w-[20px] rounded-full fixed top-0 left-0 md:visible invisible"
      ></motion.div>
      <Navbar />

      <video
        autoPlay
        loop
        muted
        id="video"
        className="absolute center -z-20 w-auto min-w-full min-h-full object-cover  max-w-none"
      >
        <source src={Cambridge} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute center -z-10 bg-[rgba(0,0,0,0.6)] bg-blend-multiply w-auto min-w-full min-h-full  max-w-none"></div>
      <div className="md:flex relative  bg-center bg-cover md:bg-transparent  justify-start   flex  md:min-h-[86vh]  items-center w-full px-4  md:px-0 ">
        <div className="select-none p-10      font-[Roboto] flex-1 flex flex-col tracking-normal text-[32px]   md:text-[4rem] md:leading-[80px] md:w-[35%] text-left ">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline "
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <span className="text-[#E6F4F1] text-[22px] font-SansPro leading-8 block">Nurturing Minds, Shaping Futures </span>
              <span className="inline  font-bold  text-slate-50 drop-shadow-lg">
                Emirate National School
              </span>{" "}
              <span className="text-transparent text-white   text-[2rem] block">
                
                {/* <Typewriter
                loop={true}
                words={[
                  " Secure Your Child's Future",
                  " set your child for academic excellence",
                  " unlock your child's full potential",
                  " give your child world-class education",
                ]}
                cursor="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              ></Typewriter> */}
              </span>
            </motion.div>
            <span className="   text-[22px] font-[Nunito] leading-tight text-left block md:text-[2rem]">
              <span className="text-white  text-[21px] text-start">
                {" "}
                Registration for Academic Year <br /> 2022-2023{" "}
                <span className="block  text-start md:text-[2rem] text-[#FF864A] font-medium font-Lato">
                  {" "}
                  IS NOW OPEN
                </span>
              </span>
            </span>
            <div className=" flex md:gap-10 gap-5  md:flex-row font-normal text-lg mt-10">
   
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="px-4 py-2 flex font-normal w-fit  font-[Lato] whitespace-nowrap items-center bg-[#1c6d6c] text-slate-100 md:px-5 md:py-3 border-2    border-solid border-[#1c6d6c] rounded-md md:font-semibold tracking-[1px]"
              >
                Register Online{" "}
                <span>
                  <AiOutlineArrowDown className="animate-bounce ml-4" />
                </span>
              </motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="px-4 py-2 flex font-[Lato] items-center bg-slate-100 md:px-5 md:py-3 border-2 border-solid border-[#1c6d6c] rounded-md md:font-semibold  md:tracking-[1px] w-fit whitespace-nowrap"
              >
                Enroll Now
              </motion.div>
            </div>
        </div>
      

        {/* <motion.div
          animate="visible"
          variants={variantImage}
          transition={{ duration: 1 }}
          initial="hidden"
          className="flex flex-1 h-full "
        >
          <img className="object-contain" src={SchoolIcon} alt="" />
        </motion.div> */}
      </div>
      <div className="bg-gray-50 py-12 flex items-center justify-center flex-col  gap-10   ">
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="md:text-[2rem] mt-12 font-Montserrat font-bold "
        >
         In Collaboration with
        </div>

        <div className="flex-wrap md:flex-row flex-col flex gap-[6rem]   rounded-lg">
          <div className="bg-slate-200 rounded-full flex justify-center w-[8rem] h-[8rem] items-centers p-6">
          <img
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="w-[6rem] hover:scale-110 transition-all duration-150 object-contain"
            src={InternationIcon}
            alt=""
            />
            </div>
          <div className="bg-slate-200 rounded-full flex justify-center w-[8rem] h-[8rem] items-centers p-6">
          <img
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="w-[6rem] object-contain hover:scale-110 transition-all duration-150"
            src={CogniaIcon}
            alt=""
          />
            </div>
            <div className="bg-slate-200 rounded-full flex justify-center w-[8rem] h-[8rem] items-centers p-6">
          <img
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="w-[6rem] object-contain hover:scale-110 transition-all duration-150"
            src={UnitedNationIcon}
            alt=""
            />
            </div>
        </div>
      </div>


<div class="container my-24 px-6 mx-auto">

  <section class="mb-32 text-gray-800 text-center lg:text-left">
   
    <div class="container mx-auto xl:px-32 text-center lg:text-left">
      <div class=" lg:grid-cols-2 flex items-center">
        <div class="mb-12 lg:mb-0">
          <div
            class="relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
            style={{background: "hsla(0, 0%, 100%, 0.55)", backdropFilter: "blur(30px)", zIndex: 1}}
          >
            <h2 class="text-3xl font-bold mb-4 display-5">Why is it so great?</h2>
            <p class="text-gray-500 mb-12">
            Emirates National School (ENS) is an exceptional educational institution that offers a diverse curriculum, experienced staff, extracurricular activities, all across 6 campuses in UAE.
            </p>

            <div class="grid md:grid-cols-4 gap-x-6">
              <div class="mb-12 md:mb-0">
                <h2 class="text-3xl font-bold font-Montserrat text-dark mb-4">15442</h2>
                <h5 class="text-lg font-medium text-gray-500 mb-0">Total students</h5>
              </div>

              <div class="mb-12 md:mb-0">
                <h2 class="text-3xl font-bold text-dark font-Montserrat mb-4">3515</h2>
                <h5 class="text-lg font-medium text-gray-500 mb-0">Graduates</h5>
              </div>

              <div class="">
                <h2 class="text-3xl font-bold text-dark font-Montserrat mb-4">1400</h2>
                <h5 class="text-lg font-medium text-gray-500 mb-0">Staff</h5>
              </div>

              <div class="">
                <h2 class="text-3xl  font-Montserrat font-bold text-dark mb-4">6</h2>
                <h5 class="text-lg font-medium text-gray-500 mb-0">Campuses</h5>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            src={SheikhMansour}
            className="w-[60rem] shadow-lg fancy-border-radius object-contain rotate-lg-6 rounded-[53% 47% 52% 48% / 36% 41% 59% 64%] "
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

</div>

<section>
    <div class="bg-black text-white py-8">
    <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
      <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8" onMouseEnter={textEnter}
            onMouseLeave={textLeave}>
        <p class="ml-2 text-yellow-300 uppercase tracking-loose" >Admission Process</p>
        <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Admission Process of ENS</p>
        <p class="text-sm md:text-base text-gray-50 mb-4">
          Here’s your guide to the addmission process 2023. Go through all the steps to know the exact process of the
          addmission.
        </p>
        <a href="#"
        class="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
        Explore Now</a>
      </div>
      <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div class="container mx-auto w-full h-full">
          <div class="relative wrap overflow-hidden p-10 h-full">
            <div class="border-2-2 border-yellow-555 absolute h-full border"
              style={{right: "50%", border: "2px solid #FFC100", borderRadius: "1%"}}></div>
            <div class="border-2-2 border-yellow-555 absolute h-full border"
              style={{left:" 50%", border:" 2px solid #FFC100", borderRadius:" 1%"}}></div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="order-1 w-5/12 px-1 py-4 text-right" onMouseEnter={textEnter}
            onMouseLeave={textLeave}>
                <p class="mb-3 text-base text-yellow-300">1-6 March, 2023</p>
                <h4 class="mb-3 font-bold text-lg md:text-2xl">Registration</h4>
                <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100" >
                  choose your favourite ENS campus and register in that campus by filling the admission form corresponding to that
                  campus :)
                </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between items-center w-full right-timeline" onMouseEnter={textEnter}
            onMouseLeave={textLeave}>
              <div class="order-1 w-5/12"></div>
              <div class="order-1  w-5/12 px-1 py-4 text-left">
                <p class="mb-3 text-base text-yellow-300">6-9 March, 2023</p>
                <h4 class="mb-3 font-bold text-lg md:text-2xl">Assessment Test</h4>
                <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  Pass in the assessment test conducted by ENS. The Roll number for your registered campus will be sent to you via email. Use those docs to appear in test and show your talent.
                </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline" onMouseEnter={textEnter}
            onMouseLeave={textLeave}>
              <div class="order-1 w-5/12"></div>
              <div class="order-1 w-5/12 px-1 py-4 text-right">
                <p class="mb-3 text-base text-yellow-300"> 10 March, 2023</p>
                <h4 class="mb-3 font-bold text-lg md:text-2xl">Result Declaration</h4>
                <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  The ultimate genius will be revealed by our judging panel on 10th March, 2023 and the resukts will be
                  announced on the ENS portal and will be mailed to you.
                </p>
              </div>
            </div>

            <div class="mb-8 flex justify-between items-center w-full right-timeline" onMouseEnter={textEnter}
            onMouseLeave={textLeave}>
              <div class="order-1 w-5/12"></div>

              <div class="order-1  w-5/12 px-1 py-4">
                <p class="mb-3 text-base text-yellow-300">12 March, 2023</p>
                <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left">Seat Distribution</h4>
                <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  The candidate passed assessment will be contacted by our team for their addresses and the relevent campus will reserved seat for 
                  candidate.
                </p>
              </div>
            </div>
          </div>
          <img onMouseEnter={textEnter}
            onMouseLeave={textLeave} class="mx-auto  -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
        </div>
      </div>
    </div>
  </div>
  </section>

{/*       
      <div className="bg-slate-50 p-16 relative flex flex-col  items-center ">
        <div className="md:text-lg text-sm font-[Roboto] text-[#16a35a]">
          Our success
        </div>
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="md:text-[2rem] text-[1rem] m-10 mb-20 w-full md:w-[35%] text-center   font-bold font-[Lato] text-gray-900 select-none "
        >
          <span className="bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-teal-800 via-pink-500 to-neutral-900">
            {" "}
            "Achieving Greatness":
          </span>{" "}
          <span className="text-slate-800 text-[1.8rem] block">
            <Typewriter
              loop={true}
              words={[
                " How Our School Became a Leader in Education!",
                " School's outstanding performance!",
                " Reasons for high achievements!",
              ]}
              cursor="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            ></Typewriter>
          </span>
        </div>
        <div className="flex w-full mb-10 justify-evenly flex-wrap gap-10">
          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 1 }}
            variants={variantDetailCards}
            initial="initial"
            animate="visible"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className=" border-2 border-gray-400 shadow-lg bg-sky-300 rounded-lg flex flex-col items-center  p-16"
          >
            <motion.div whileHover={{ y: -10 }}>
              <IoMdPeople className="w-10 h-10 text-blue-500 " />
            </motion.div>
            <div className="font-mono text-[2rem] font-semibold ">12442</div>
            <div
              className="font-[Lato]  font-normal whitespace-nowrap
              
            "
            >
              Total Students
            </div>
          </motion.div>
          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            variants={variantDetailCards}
            initial="initial"
            animate="visible"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="p-16 border-2 border-gray-400 shadow-lg  rounded-lg flex flex-col items-center"
          >
            <motion.div whileHover={{ y: -10 }}>
              <FaUserGraduate className="w-10 h-10 text-green-600 " />
            </motion.div>
            <div className="font-mono text-[2rem] font-semibold ">3515</div>
            <div className="font-[Lato]  font-normal ">Graduates</div>
          </motion.div>

          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            variants={variantDetailCards}
            initial="initial"
            animate="visible"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="p-16 border-2 border-gray-400 shadow-lg bg-yellow-400 rounded-lg flex flex-col items-center"
          >
            <motion.div whileHover={{ y: -10 }}>
              <IoPersonSharp className="w-10 h-10 text-red-500 " />
            </motion.div>
            <div className="font-mono text-[2rem] font-semibold ">1400</div>
            <div className="font-[Lato]  font-normal ">Total Staff</div>
          </motion.div>

          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            variants={variantDetailCards}
            initial="initial"
            animate="visible"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="p-16 border-2 border-gray-400 shadow-lg bg-purple-600 rounded-lg flex flex-col items-center"
          >
            <motion.div whileHover={{ y: -10 }}>
              <FaSchool className="w-10 h-10 text-yellow-500 " />
            </motion.div>
            <div className="font-mono text-[2rem] font-semibold ">6</div>
            <div className="font-[Lato]  font-normal ">Campuses</div>
          </motion.div>
        </div>
      </div> */}


      <section class="flex justify-center md:py-32">
  <div class="flex flex-wrap mx-auto md:flex-nowrap p-12">

    <a href="">
      <div class="flex w-full">
        <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
          <img class="object-contain object-center w-full rounded-t-xl lg:h-48 md:h-36" src={LaptopIcon} alt="blog"/>
          <div class="px-6 py-8">
            <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
              <span class=""> Enroll now</span>
            </h4>
            <p class="mt-4 text-base font-normal text-gray-500 leading-relax">Enroll now in the top schools of UAE and get access to world-class education and facilities. Join the diverse community of ambitious students.</p>
          </div>
        </div>
      </div>
    </a>

    <a href="">
      <div class="flex w-full">
        <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
          <img class="object-contain object-center w-full rounded-t-xl lg:h-48 md:h-36" src={RadioIcon} alt="blog"/>
          <div class="px-6 py-8">
            <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
              <span class=""> Online Payment</span>
            </h4>
            <p class="mt-4 text-base font-normal text-gray-500 leading-relax">Easily make online payments for your Emirates school enrollment. Secure and convenient, our online payment system ensures a smooth process for you.</p>
          </div>
        </div>
      </div>
    </a>

    <a href="">
      <div class="flex w-full">
        <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
          <img class="object-contain object-center w-full rounded-t-xl lg:h-48 md:h-36" src={MobileIcon} alt="blog"/>
          <div class="px-6 py-8">
            <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
              <span class="">Online support</span>
            </h4>
            <p class="mt-4 text-base font-normal text-gray-500 leading-relax">Get online support for your Emirates school enrollment. Our dedicated team is available to assist you with any questions or concerns you may have.</p>
          </div>
        </div>
      </div>
    </a>

  </div>
</section>


      {/* <div
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className=" bg-slate-50 py-20 flex flex-col relative items-center "
      >
        <div className="text-[2rem] font-[Lato] mt-10 mb-4 text-transparent bg-clip-text bg-gradient-to-tl from-emerald-500 via-fuchsia-900 to-pink-500 text-gray-900">
          ENS Online Services
        </div>
        <div className="text-center">
          Connect with ENS Anytime, Anywhere with Our Online Services
        </div>
        <div className=" flex p-10 flex-col items-center   justify-between w-full ">
          <div className="flex flex-wrap justify-center  gap-10">
            <div className="flex justify-center  flex-col items-center gap-10">
              <motion.div
                layout="position"
                transition={{ layout: { duration: 1, type: "spring" } }}
                className=""
              >
                <motion.div whileInView={{ opacity: [0, 1] }}>
                  <img
                    className="w-[16rem ] hover:scale-110 transition-all duration-300 h-[16rem] object-cover"
                    src={LaptopIcon}
                    alt=""
                    onClick={() => setIsOpen(1)}
                  />
                </motion.div>
                {isOpen === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-[20rem] bg-slate-100 p-4 absolute invisible md:visible top-36 right-10"
                  >
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Et eos ullam veritatis! Perspiciatis ullam voluptatum
                      omnis quisquam reiciendis? Molestiae pariatur tempora
                      nihil aspernatur mollitia soluta dolorem autem odio
                      excepturi repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit quidem distinctio ullam vel.
                    </p>
                  </motion.div>
                )}
              </motion.div>
              <div className="px-4 py-2 flex font-normal  font-[Lato] whitespace-nowrap items-center bg-[#1c6d6c] text-slate-100 md:px-5 md:py-3 border-2    border-solid border-[#1c6d6c] rounded-md md:font-semibold tracking-[1px]">
                Enroll Now
              </div>
            </div>
            <div className="flex justify-center  flex-col items-center gap-10">
              <motion.div
                layout="position"
                transition={{ layout: { duration: 1, type: "spring" } }}
              >
                <motion.div whileInView={{ opacity: [0, 1] }}>
                  <img
                    className="w-[16rem] h-[16rem] object-cover hover:scale-110 transition-all duration-300"
                    src={RadioIcon}
                    alt=""
                    onClick={() => setIsOpen(2)}
                  />
                </motion.div>
                {isOpen === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-[20rem] bg-slate-100 p-4 absolute invisible md:visible top-36 right-10"
                  >
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Et eos ullam veritatis! Perspiciatis ullam voluptatum
                      omnis quisquam reiciendis? Molestiae pariatur tempora
                      nihil aspernatur mollitia soluta dolorem autem odio
                      excepturi repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit quidem distinctio ullam vel.
                    </p>
                  </motion.div>
                )}
              </motion.div>
              <div className="px-4 py-2 flex font-normal  font-[Lato] whitespace-nowrap items-center bg-[#1c6d6c] text-slate-100 md:px-5 md:py-3 border-2    border-solid border-[#1c6d6c] rounded-md md:font-semibold tracking-[1px]">
                Online Payment
              </div>
            </div>
            <div className="flex justify-center  flex-col items-center gap-10">
              <motion.div
                layout="position"
                transition={{ layout: { duration: 1, type: "spring" } }}
                style={{ borderRadius: "1rem" }}
                className=""
              >
                <motion.div whileInView={{ opacity: [0, 1] }}>
                  <img
                    className="w-[16rem] hover:scale-110 transition-all duration-300 h-[16rem] object-cover"
                    src={MobileIcon}
                    alt=""
                    onClick={() => setIsOpen(3)}
                  />
                </motion.div>
                {isOpen === 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-[20rem] bg-slate-100 p-4 absolute invisible md:visible top-36 right-10"
                  >
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Et eos ullam veritatis! Perspiciatis ullam voluptatum
                      omnis quisquam reiciendis? Molestiae pariatur tempora
                      nihil aspernatur mollitia soluta dolorem autem odio
                      excepturi repellendus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit quidem distinctio ullam vel.
                    </p>
                  </motion.div>
                )}
              </motion.div>
              <div className="px-4 py-2 flex font-normal  font-[Lato] whitespace-nowrap items-center bg-[#1c6d6c] text-slate-100 md:px-5 md:py-3 border-2    border-solid border-[#1c6d6c] rounded-md md:font-semibold tracking-[1px]">
                Online Support
              </div>
            </div>
          </div>
        </div>
      </div> */}


      <div className="bg-gray-50 py-24  gap-10 flex flex-col  items-center px-16 ">
        <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="">
          <div className="md:text-[4rem] text-center   text-sm px-32 mb-10 font-[Roboto] ">
            <span className="">
              Our Campuses
            </span>
          </div>

          <div className="md:text-[24px]  text-sm px-32 mb-10 font-[Lato] text-slate-800">
            Join Our Dynamic Learning Community
          </div>
        </div>

        <div className="flex  w-full mb-10 justify-center   flex-wrap gap-16">
          <div className="flex  w-full mb-10 justify-evenly flex-wrap gap-10">
            <motion.div
              ref={carousal}
              whileTap={{ cursor: "grabbing" }}
              className="cursor-grab overflow-hidden "
            >
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className="flex   "
              >
                {[
                  {
                    img: DubaiIcon,
                    name: "Dubai City Campus",
                    desc: "Dubai Campus offer exclusive access to modern education with talented faculties.",
                  },
                  {
                    img: EmirateIcon,
                    name: " MBZ City Campus",
                    desc: " Discover the Learning Oasis of MBZ City: Emirate National School Campus.",
                  },
                  {
                    img: GirlAwardIcon,
                    name: " Abu Dhabi Campus",
                    desc: "   Nurturing the Leaders of Tomorrow at Emirate National School's Abu Dhabi Campus.",
                  },
                  {
                    img: GraduatesIcon,
                    name: " Sharjah Campus",
                    desc: "  A Thriving Learning Community at Sharjah's Emirate National School Campus.",
                  },
                  {
                    img: HallIcon,
                    name: "Al-Ain Campus",
                    desc: "   A World-Class Education in the Heart of Al Ain: Emirate National School Campus.",
                  },
                ].map((item) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    className=" flex flex-col p-4 items-center rounded-[2rem] min-w-[30rem] object-cover overflow-hidden"
                  >
                    <img
                      src={item.img}
                      className="pointer-events-none  rounded-tl-md rounded-tr-md h-full w-full hover:scale-105  transition-all duration-500
                  object-cover"
                      alt=""
                    />
                    <div
                      onMouseEnter={textEnter}
                      onMouseLeave={textLeave}
                      className="p-6 rounded-sm w-full bg-slate-200"
                    >
                      <div className="p-4 ">
                        <h4 className="text-xl  font-semibold font-Montserrat ">
                          {item.name}
                        </h4>
                        <button className=" px-6 mt-5 py-3 text-sm text-white bg-[#1c6d6c]  shadow">
                          Read more
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Latest News</h1>

            <p className="max-w-lg mx-auto mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium
                quia tempore delect
            </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            <div>
                <img className="relative z-10 object-cover w-full rounded-md h-96" src={AwardIcon} alt=""/>

                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                        All the features you want to know
                    </a>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                        laudantium quia tempore delect
                    </p>

                    <p className="mt-3 text-sm text-white w-fit md:px-6 md:py-3 bg-[#1c6d6c]">Read more</p>
                </div>
            </div>

            <div>
                <img className="relative z-10 object-cover w-full rounded-md h-96" src={EmirateIcon} alt=""/>

                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                        How to use sticky note for problem solving
                    </a>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                        laudantium quia tempore delect
                    </p>

                    <p className="mt-3 text-sm text-white w-fit md:px-6 md:py-3 bg-[#1c6d6c]">Read more</p>
                </div>
            </div>
            <div>
                <img className="relative z-10 object-cover w-full rounded-md h-96" src={GirlAwardIcon} alt=""/>

                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                        How to use sticky note for problem solving
                    </a>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                        laudantium quia tempore delect
                    </p>

                    <p className="mt-3 text-sm text-white w-fit md:px-6 md:py-3 bg-[#1c6d6c]">Read more</p>
                </div>
            </div>
            <div>
                <img className="relative z-10 object-cover w-full rounded-md h-96" src={
                  GraduatesIcon} alt=""/>

                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                        How to use sticky note for problem solving
                    </a>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                        laudantium quia tempore delect
                    </p>

                  <p className="mt-3 text-sm text-white w-fit md:px-6 md:py-3 bg-[#1c6d6c]">Read more</p>
                </div>
            </div>
        </div>
    </div>
</section>


<section className="bg-white dark:bg-gray-900">
    <div className="h-[32rem] bg-gray-100 dark:bg-gray-800">
        <div className="container px-6 py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">The Executive Team</h1>

            <div className="flex justify-center mx-auto mt-6">
                <span className="inline-block w-40 h-1 bg-[#1c6d6c] rounded-full"></span>
                <span className="inline-block w-3 h-1 mx-1 bg-[#1c6d6c] rounded-full"></span>
                <span className="inline-block w-1 h-1 bg-[#1c6d6c] rounded-full"></span>
            </div>

            <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
            </p>
        </div>
    </div>

    <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
                <img className="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Dr. Shawn Lee Dilly</h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Director General</p>

                <div className="flex mt-3 -mx-2">
                    <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-[#1C6D6C] dark:hover:text-blue-400" aria-label="Reddit">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z">
                            </path>
                        </svg>
                    </a>

                    <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-[#1C6D6C] dark:hover:text-blue-400" aria-label="Facebook">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                            </path>
                        </svg>
                    </a>

                    <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-[#1C6D6C] dark:hover:text-blue-400" aria-label="Github">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>

            <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
                <img className="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Mrs. Iram Shaikah Jilani</h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Head of VS & IB Curriculum</p>

                <div className="flex mt-3 -mx-2">
                    <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-[#1C6D6C] dark:hover:text-blue-400" aria-label="Reddit">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z">
                            </path>
                        </svg>
                    </a>

                    <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-[#1C6D6C] dark:hover:text-blue-400" aria-label="Facebook">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                            </path>
                        </svg>
                    </a>

                    <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-[#1C6D6C] dark:hover:text-blue-400" aria-label="Github">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>

            <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
                <img className="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Eng. Mohammed Almaeeni</h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Deputy D.G of Administration & Finance</p>

                <div className="flex mt-3 -mx-2">
                    <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-[#1C6D6C] dark:hover:text-blue-400" aria-label="Reddit">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z">
                            </path>
                        </svg>
                    </a>

                    <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-[#1C6D6C] dark:hover:text-blue-400" aria-label="Facebook">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                            </path>
                        </svg>
                    </a>

                    <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-[#1C6D6C] dark:hover:text-blue-400" aria-label="Github">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

      {/* <div className="bg-[#324B4A] py-24 gap-10 flex flex-col  items-start px-16 ">
        <div className="md:text-[4rem] text-[2rem] font-Lato  font-bold ">
          <span className="text-white tracking-[6px]">
            Latest News
          </span>
        </div>

        <div className="flex  w-full mb-10 justify-evenly flex-wrap gap-10">
          <motion.div
            ref={carousal}
            whileTap={{ cursor: "grabbing" }}
            className="cursor-grab overflow-hidden "
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex   "
            >
              {[
                AwardIcon,
                EmirateIcon,
                GirlAwardIcon,
                GraduatesIcon,
                HallIcon,
              ].map((item) => (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  className="shadow-lg flex flex-col p-4 items-center rounded-[2rem] min-w-[30rem] object-cover overflow-hidden"
                >
                  <img
                    src={item}
                    className="pointer-events-none  rounded-tl-md rounded-tr-md h-full w-full hover:scale-105  transition-all duration-500
                  object-cover"
                    alt=""
                  />
                  <div
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    className="p-6 bg-slate-200 rounded-sm"
                  >
                    <div>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Incidunt cupiditate fuga dolorem ducimus
                    </div>
                    <div className="px-2 mt-4 py-1 flex font-normal  font-[Lato] whitespace-nowrap items-center bg-[#1c6d6c] text-slate-50 md:px-6 md:py-3 border-2    border-solid   md:font-semibold tracking-[1px] w-fit">
                      Read more
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div> */}


<section className="bg-white dark:bg-gray-900">
    <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
        <div className="flex justify-center xl:w-1/2">
            <img className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt=""/>
        </div>

        <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                Download our free mobile app
            </h2>

            <p className="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut corporis esse dolorum, illum, consectetur earum provident alias dolore omnis quis tempore voluptatum excepturi ea numquam? Aperiam fugiat consequuntur nostrum odio. </p>

            <div className="mt-6 sm:-mx-2">
                <a href="#" className="inline-flex items-center justify-center w-full px-5 py-3 overflow-hidden text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                    <svg className="w-5 h-5 mx-2 fill-current"  x="0px" y="0px" viewBox="0 0 512 512" >
                        <g>
                            <g>
                                <path d="M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302c41.355,0,75,33.645,75,75V407z"></path>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498C306.487,136.719,307.375,129.981,305.646,123.531z"></path>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z"></path>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z"></path>
                            </g>
                        </g>
                    </svg>

                    <span className="mx-2">
                        Get it on the App Store
                    </span>
                </a>

                <a href="#"
                    className="inline-flex items-center justify-center w-full px-5 py-3 mt-4 overflow-hidden text-white transition-colors duration-300 bg-[#1C6D6C] rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    <svg className="w-5 h-5 mx-2 fill-current" viewBox="-28 0 512 512.00075" >
                        <path d="m432.320312 215.121094-361.515624-208.722656c-14.777344-8.53125-32.421876-8.53125-47.203126 0-.121093.070312-.230468.148437-.351562.21875-.210938.125-.421875.253906-.628906.390624-14.175782 8.636719-22.621094 23.59375-22.621094 40.269532v417.445312c0 17.066406 8.824219 32.347656 23.601562 40.878906 7.390626 4.265626 15.496094 6.398438 23.601563 6.398438s16.214844-2.132812 23.601563-6.398438l361.519531-208.722656c14.777343-8.53125 23.601562-23.8125 23.601562-40.878906s-8.824219-32.347656-23.605469-40.878906zm-401.941406 253.152344c-.21875-1.097657-.351562-2.273438-.351562-3.550782v-417.445312c0-2.246094.378906-4.203125.984375-5.90625l204.324219 213.121094zm43.824219-425.242188 234.21875 135.226562-52.285156 54.539063zm-6.480469 429.679688 188.410156-196.527344 54.152344 56.484375zm349.585938-201.835938-80.25 46.332031-60.125-62.714843 58.261718-60.773438 82.113282 47.40625c7.75 4.476562 8.589844 11.894531 8.589844 14.875s-.839844 10.398438-8.589844 14.875zm0 0">
                        </path>
                    </svg>

                    <span className="mx-2">
                        Get it on Google Play
                    </span>
                </a>
            </div>
        </div>
    </div>
</section>




      {/* <div className="bg-gray-100 py-24  gap-10 flex flex-col  items-center px-16  ">
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="md:text-[4rem] mt-12 font-Montserrat font-bold "
        >
          Our Partners
        </div>

        <div className="flex-wrap md:flex-row flex-col flex gap-[6rem] bg-slate-100 p-10 rounded-lg">
          <img
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="w-[12rem] hover:scale-110 transition-all duration-150 object-contain"
            src={InternationIcon}
            alt=""
          />
          <img
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="w-[12rem] object-contain hover:scale-110 transition-all duration-150"
            src={CogniaIcon}
            alt=""
          />
          <img
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="w-[12rem] object-contain hover:scale-110 transition-all duration-150"
            src={UnitedNationIcon}
            alt=""
          />
        </div>
      </div>


      <div className="flex-wrap md:flex-row flex-col justify-evenly flex gap-[6rem] bg-slate-200 py-20  border-0 p-10 rounded-lg">
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="flex flex-col flex-wrap gap-4"
        >
          <div className="text-[21px] font-semibold font-[Montserrat] text-green-700">
            About Us
          </div>
          <div className="text-[18px] font-[Nunito]">
            <div>Welcome Message</div>
            <div>Mission and Vision</div>
            <div>Management Team</div>
            <div>Board Members</div>
          </div>
        </div>
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="flex flex-col flex-wrap gap-4"
        >
          <div className="text-[21px] font-semibold font-[Montserrat] text-green-700">
            Academics
          </div>
          <div className="text-[18px] font-[Nunito]">
            <div>Curriculum</div>
            <div>Graduation Requirement</div>
            <div>Accredidations</div>
            <div>Assessments and Reporting</div>
          </div>
        </div>
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="flex flex-col flex-wrap gap-4"
        >
          <div className="text-[21px] font-semibold font-[Montserrat] text-green-700">
            Admission
          </div>
          <div className="text-[18px] font-[Nunito]">
            <div>Admission Process</div>
            <div>Admission Policy</div>
            <div>Tuition Policies & Procedures</div>
            <div>School Fees</div>
            <div>Bus Canteen & Uniform</div>
            <div>Registration Offices</div>
          </div>
        </div>
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="flex flex-col flex-wrap gap-4"
        >
          <div className="text-[21px] font-semibold font-[Montserrat] text-green-700">
            Campuses
          </div>
          <div className="text-[18px] font-[Nunito]">
            <div>Dubai City Campus</div>
            <div>Abu Dhabi Campus</div>
            <div>Al Ain Campus</div>
            <div>Sharjah Campus</div>
            <div>MBZ City Campus</div>
          </div>
        </div>
      </div> */}

      <footer class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-8 mx-auto">
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div>
                <div class="text-xs font-medium text-gray-400 uppercase">
                    About Us
                </div>

                <a href="#" class="block mt-5 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                 Welcome Message
                </a>
                <a href="#" class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                    Mission and vision
                </a>
                <a href="#" class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                Management team
                </a>
                <a href="#" class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                    Board members
                </a>
                
                <a href="#" class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                    Browser Support
                </a>
                <a href="#" class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                    IntelliSense
                </a>
            </div>

            <div>
                <div class="text-xs font-medium text-gray-400 uppercase">
                    Academic
                </div>

                <a href="#" class="block mt-5 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                    Curriculum
                </a>
                <a href="#" class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                    Graduation Requirement
                </a>
                <a href="#" class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                    Accredidations
                </a>
                <a href="#" class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                    Assessments and Reporting
                </a>
        
                <a href="#" class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                    Browser Support
                </a>
                <a href="#" class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                    Online payment  
                </a>
            </div>

            <div>
                <div class="text-xs font-medium text-gray-400 uppercase">
            Admission 
                </div>

                <a href="#" class="block mt-5 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                    Admission process
                </a>
                <a href="#" class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                    Admission policy
                </a>
                <a href="#" class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                      Tuition policies & procedures
                </a>
                <a href="#" class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                    School fee
                </a>
          
                <a href="#" class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                    Bus canteen & uniform
                </a>
                <a href="#" class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                    Registration office
                </a>
            </div>

            <div>
                <div class="text-xs font-medium text-gray-400 uppercase">
                   Campuses
                </div>

                <a href="#" class="block mt-5 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                    Dubai city campus
                </a>
                <a href="#" class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                  Abu Dhabi Campus
                </a>
                <a href="#" class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                    Al Ain Campus
                </a>
                <a href="#" class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                    Sharjah Campus
                </a>
     
                <a href="#" class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                    MBZ city campus
                </a>
                <a href="#" class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                    IntelliSense
                </a>
            </div>
        </div>

        <hr class="my-10 border-gray-200 dark:border-gray-700"/>

        <div class="sm:flex sm:items-center sm:justify-between">
            <p class="text-sm text-gray-400">© Copyright 2023. All Rights Reserved.</p>

            <div class="flex mt-3 -mx-2 sm:mt-0">
                <a href="#" class="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z">
                        </path>
                    </svg>
                </a>

                <a href="#" class="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Facebook">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                        </path>
                    </svg>
                </a>

                <a href="#" class="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Github">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                        </path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</footer>

    </div>
  );
}

export default App;
