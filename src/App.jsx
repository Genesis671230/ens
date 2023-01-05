import { useEffect, useRef, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { AwardIcon, SchoolIcon } from "./assets";
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
    <div className="h-screen bg-[#ffffff] text-black">
      <motion.div
        variants={variants}
        animate={cursorVariant}
        className="md:bg-black md:border-2 z-20 border-black  pointer-events-none md:h-[20px] md:w-[20px] rounded-full fixed top-0 left-0 md:visible invisible"
      ></motion.div>
      <Navbar />

      <div className="md:flex  md:bg-transparent xs:bg-[url('./assets/school.jpg')] items-center w-full px-4 py-10 md:py-32 md:px-20 ">
        <div className="select-none font-[Roboto] flex-1 flex flex-col tracking-normal text-[32px]   md:text-[4rem] md:leading-[80px] md:w-[35%] text-left ">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline "
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Join the{" "}
            <motion.div className="inline  font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-[#4538f3]">
              {" "}
              Emirate National School
            </motion.div>{" "}
            and
            <span className="text-slate-900 text-[3rem] block">
              <Typewriter
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
              ></Typewriter>
            </span>
          </motion.div>
          <span className="mt-16 text-[22px] font-[Nunito] leading-tight text-left block md:text-[2rem]">
            <span className="">
              {" "}
              Registration for Academic Year 2022-2023{" "}
              <span className="block md:text-[3rem] text-[#4538f3] font-extrabold font-[Roboto]">
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
              className="px-4 py-2 flex font-[Lato] items-center bg-[#f49d0c] md:px-5 md:py-3 border-2 border-solid border-yellow-500 rounded-md md:font-semibold  md:tracking-[1px] w-fit whitespace-nowrap"
            >
              Enroll Now
            </motion.div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="px-4 py-2 flex font-normal w-fit  font-[Lato] whitespace-nowrap items-center bg-[#4538f3] text-slate-100 md:px-5 md:py-3 border-2    border-solid border-[#4538f3] rounded-md md:font-semibold tracking-[1px]"
            >
              Register Online{" "}
              <span>
                <AiOutlineArrowDown className="animate-bounce ml-4" />
              </span>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate="visible"
          variants={variantImage}
          transition={{ duration: 1 }}
          initial="hidden"
          className="flex flex-1 h-full "
        >
          <img className="object-contain" src={SchoolIcon} alt="" />
        </motion.div>
      </div>

      <div className="bg-slate-50 p-16 flex flex-col  items-center ">
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
      </div>

      <div
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className=" bg-gray-100 py-20 flex flex-col relative items-center "
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
              <div className="px-4 py-2 flex font-normal  font-[Lato] whitespace-nowrap items-center bg-[#4538f3] text-slate-100 md:px-5 md:py-3 border-2    border-solid border-[#4538f3] rounded-md md:font-semibold tracking-[1px]">
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
              <div className="px-4 py-2 flex font-normal  font-[Lato] whitespace-nowrap items-center bg-[#4538f3] text-slate-100 md:px-5 md:py-3 border-2    border-solid border-[#4538f3] rounded-md md:font-semibold tracking-[1px]">
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
              <div className="px-4 py-2 flex font-normal  font-[Lato] whitespace-nowrap items-center bg-[#4538f3] text-slate-100 md:px-5 md:py-3 border-2    border-solid border-[#4538f3] rounded-md md:font-semibold tracking-[1px]">
                Online Support
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-24 gap-10 flex flex-col  items-start px-16 ">
        <div className="md:text-[4rem] text-[2rem] font-[Nunito] font-bold text-transparent  bg-clip-text bg-gradient-to-l from-sky-500 via-rose-400 to-amber-600 text-[#4538f3]">
          Latest News
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
                    <div className="px-2 mt-4 py-1 flex font-normal  font-[Lato] whitespace-nowrap items-center bg-purple-600 text-slate-900 md:px-3 md:py-2 border-2    border-solid  rounded-md md:font-semibold tracking-[1px] w-fit">
                      Read more
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="bg-gray-50 py-24  gap-10 flex flex-col  items-center px-16 ">
        <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="">
          <div className="md:text-[4rem] text-center   text-sm px-32 mb-10 font-[Roboto] ">
            <span className="text-transparent bg-clip-text bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-fuchsia-700 via-zinc-600 to-cyan-700">
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
                      className="p-6 rounded-sm bg-slate-200"
                    >
                      <div className="p-4">
                        <h4 className="text-xl font-semibold tracking-tight text-transparent  bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-lime-100 via-pink-900 to-violet-400">
                          {item.name}
                        </h4>
                        <p className="mb-2 leading-normal ">{item.desc}</p>
                        <button className="px-4 mt-5 py-2 text-sm text-black bg-green-500 rounded shadow">
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

      <div className="bg-gray-100 py-24  gap-10 flex flex-col  items-center px-16  ">
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="md:text-[4rem] mt-12 font-[Nunito] font-bold  text-transparent  bg-clip-text bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-200 via-amber-900 to-green-200"
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
      </div>
    </div>
  );
}

export default App;
