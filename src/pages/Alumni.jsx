

import React, { useState } from "react";
import { ImCross, ImPlus } from "react-icons/im";


const profilesByYear = {
  2021: [
    {
      id: 1,
      name: "Barakat",
      surname: "Ajadi",
      image: "/Barakat.png",
      color: "#C4E9FD",
      bG:"#C4E9FD",
      height: "h-80",
      imageHeight: "h-36",
      imageStyle: "rounded-tl-[100px]",
      width:"w-130",
      minwidth:"w-34",
      minheight:"h-24",
      position:"Associate Product Manager",
      content1:"Barakat always knew she wanted a path in computer science and technology since her father got her a computer when she was very young. She is excited about community building and the opportunity it presents to help others grow",
      content2:"At work, she’s passionate about ensuring reliability to make users happy, and her favourite things are anime, ice cream and travelling, in no particular order.",
    },
    {
      id: 2,
      name: "Tefe",
      surname: "Oladejo",
      image: "/Tefe.png",
      color: "#D6F293",
      bG:"#D6F293",
      height: "h-82",
      imageHeight: "h-44",
      imageStyle: "rounded-bl-[80px] rounded-tr-[80px]",
      width:"w-130",
      minwidth:"w-34",
      minheight:"h-24",
      position:"Frontend Engineer",
      content1: "Tefe enjoys travelling and taking pictures, and she is passionate about leveraging front-end development to allow people limitless access to a good life.",
      content2:"She had a pretty sweet transition into tech and wrote all about it here ."
    },
    {
      id: 3,
      name: "Binta",
      surname: "Umar",
      image: "/Binta.png",
      color: "#E4D6FD",
      bG:"#E4D6FD",
      height: "h-76",
      imageHeight: "h-36",
      imageStyle: "rounded-tl-[60px] rounded-bl-[80px] rounded-br-[60px]",
      width:"w-130",
      minwidth:"w-34",
      minheight:"h-24",
      position:"Backend Engineer",
      content1:"Binta enjoys simple and effective problem-solving. She is fascinated by how technology affects people's lives and has a knack for innovation.",
      content2:"She enjoys learning about healthy lifestyles, going on hikes, and seeing how her career in financial technology helps those around her with their businesses. ."
    },
  ],
  2022: [
    {
      id: 1,
      name: "Chioma",
      surname: "Eze",
      image: "/Chioma.png",
      color: "#AED9FF",
      height: "h-70",
      imageHeight: "h-36",
      imageStyle: "rounded-bl-[60px] rounded-tr-[60px]",
      width:"w-130",
      minwidth:"w-34",
      minheight:"h-24",
      position:"Product Designer",
      content1:"Chioma loves crafting beautiful experiences through design.",
      content2:"She had a career in Medicine & Surgery before switching to design, and she’s thrilled by the transition. She loves junk food and shows that are strange, dark and mysterious."
    },
    {
      id: 2,
      name: "Feranmi",
      surname: "Joel",
      image: "/Joel.png",
      color: "#FFEBAF",
      height: "h-76",
      imageHeight: "h-44",
      imageStyle: "rounded-tl-[100px]",
      width:"w-130",
      minwidth:"w-34",
      minheight:"h-26",
      position:"Technical Product Manager",
      content1:"Feranmi leverages her technology and product management expertise to develop and launch successful products with a meaningful impact on people's daily lives.",
      content2:"She has a positive energy that inspires those around her and enjoys reading tweets, newsletters, and books (except autobiographies) outside of work. She’s also known for her quirky humour and love of classic films."
    },
    {
      id: 3,
      name: "Damilola",
      surname: "Omolori",
      image: "/Damilola.png",
      color: "#AED9FF",
      height: "h-80",
      imageHeight: "h-36",
      imageStyle: "rounded-bl-[60px] rounded-tr-[60px]",
      width:"w-130",
      minwidth:"w-34",
      minheight:"h-24",
      position:"Backend Engineer",
      content1:"Damilola loves travelling and is always on the lookout for new dishes to try.",
      content2:"She wants to provide top-notch, innovative and user-friendly software that enhances people’s lives and addresses real-world issues. She also hopes that her work will help advance the field of software engineering."
    },
    {
      id: 4,
      name: "Precious",
      surname: "Uzochukwu",
      image: "/Precious.png",
      color: "#AED9FF",
      height: "h-70",
      imageHeight: "h-36",
      imageStyle: "rounded-bl-[60px] rounded-tr-[60px]",
      width:"w-130",
      minwidth:"w-34",
      minheight:"h-24",
      position:"Backend Engineer",
      content1:"Precious’ ultimate goal is to own a foundation that reaches out to families who have children born with hearing defects and teach them sign language to encourage communication between them.",
      content2:"She graduated with an honours degree in computer science, and when she’s not doing cool stuff with code, she loves to read books and play video games."
    },
  ],
  2023: [
    {
      id: 1,
      name: "Pearl",
      surname: "Akpan",
      image: "/Pearl.png",
      color: "#B5EAD7",
      height: "h-70",
      imageHeight: "h-36",
      imageStyle: "rounded-bl-[100px]",
      width:"w-130",
      minwidth:"w-34",
      minheight:"h-24",
      position:"Frontend Enginner",
      content1:"Pearl wanted to be a pilot at age 5 but changed course when she learnt that planes could crash. Today, she takes people on it's journeys through frontend engineering at Moniepoint.",
      content2:"Although Pearl doesn’t have a favourite meal, she eats all kinds of pasta."
    },
    {
      id: 2,
      name: "Dorcas",
      surname: "Abang",
      image: "/Dorcas.png",
      color: "#F8C8DC",
      height: "h-76",
      imageHeight: "h-44",
      imageStyle: "rounded-tr-[80px] rounded-bl-[80px]",
      width:"w-130",
      minwidth:"w-34",
      minheight:"h-24",
      position:"Technical Product Manager",
      content1:"When she’s not enjoying her favourite meal of Afang soup paired with Northern Tuwo, Dorcas is passionate about using technology to create positive change.",
      content2:'She also loves to stay updated on tech trends through books and watching movies.'
    },
    {
      id: 3,
      name: "Daniela",
      surname: "Uzosike",
      image: "/Daniela.png",
      color: "#F8C8DC",
      height: "h-80",
      imageHeight: "h-44",
      imageStyle: "rounded-tr-[80px] rounded-bl-[80px]",
      width:"w-130",
      minwidth:"w-34",
      minheight:"h-24",
      position:"Systems Administrator",
      content1:"Daniela Uzosike is passionate about fixing things. She ties this passion to her love for repairing her toys and play tools as a child.",
      content2:"This early interest led her to pursue a degree in Engineering, in order to solve real-world problems. Outside of work, Daniela loves good food and music."
    },
    {
      id: 4,
      name: "Jumai",
      surname: "Tijani",
      image: "/Jumai.png",
      color: "#F8C8DC",
      height: "h-70",
      imageHeight: "h-44",
      imageStyle: "rounded-tr-[80px] rounded-bl-[80px]",
      width:"w-130",
      minwidth:"w-34",
      minheight:"h-24",
      position:"QA Engineer",
      content1:"Jumai loves to try out DIY projects that she finds interesting and is passionate about leveraging technology to improve life.",
      content2:"Her first shot at software testing was at a boot camp, and she’s been on the path since. In her free time, she reads books and newsletters."
    },
    {
      id: 5,
      name: "Afolabi",
      surname: "Dolapomade",
      image: "/Afolabi.png",
      color: "#F8C8DC",
      height: "h-70",
      imageHeight: "h-44",
      imageStyle: "rounded-tr-[80px] rounded-bl-[80px]",
      width:"w-130",
      minwidth:"w-34",
      minheight:"h-24",
      position:"QA Engineer",
      content1:"When she’s not ensuring the highest level of quality in software products, Afolabi is a pancake-flipping maestro.",
      content2:"As a kid, she dreamt of being a professional superhero, but now she explores her superpowers by writing bug-free software and saving the day, one line of code at a time."
    },
  ],
  2024: [
    {
      id: 1,
      name: "Tomi",
      surname: "Thomas",
      image: "/TomiThomas.png",
      color: "#C5DFF8",
      height: "h-72",
      imageHeight: "h-36",
      imageStyle: "rounded-tl-[100px]",
      width:"w-130",
      minwidth:"w-34",
      minheight:"h-24",
      position:"Product Designer",
      content1:"Tomi believes cake is a love language, but her passion for solving problems and designing for users is just as strong. Inspired by her sibling, a graphic designer, she was drawn to product design for its blend of creativity and user focus.",
      content2:"Outside of work, Tomi enjoys watching anime—always at 1.5x speed because, in her words, “life’s too short for slow pacing.”"
    },
    {
      id: 2,
      name: "Hadiza",
      surname: "Umar",
      image: "/Hadiza.png",
      color: "#F1EAB9",
      height: "h-70",
      imageHeight: "h-44",
      imageStyle: "rounded-tl-[80px] rounded-br-[80px]",
      width:"w-130",
      minwidth:"w-34",
      minheight:"h-24",
      position:"Backend Enginner",
      content1:"Hadiza once dreamed of becoming a neurosurgeon, inspired by Ben Carson’s Gifted Hands, but life led her to tech, where she now creates impactful solutions as a Backend Engineer at Moniepoint.",
      content2:"A proud northerner, female, and Java engineer, Hadiza thrives in challenging environments and loves proving that women belong in tech. Outside of work, she dances to unwind and never says no to yam and egg—her ultimate comfort food"
    },
    {
      id: 3,
      name: "Ruth",
      surname: "Adetunji",
      image: "/RuthAdeteju.png",
      color: "#F1EAB9",
      height: "h-76",
      imageHeight: "h-36",
      imageStyle: "rounded-tr-[60px] rounded-bl-[60px]",
      width:"w-130",
      minwidth:"w-34",
      minheight:"h-24",
      position:"Product Manager",
      content1:"Ruth’s journey into tech began at a Women in Engineering workshop during her time at Obafemi Awolowo University, where inspiring stories of trailblazing women shifted her perspective and sparked her interest in making an impact. Now an Associate Product Manager at Moniepoint, she thrives on meaningful contributions and the energy of her amazing team.",
      content2:"A proud Jesus baby, Ruth loves movies, pounded yam, and creating lasting positive impacts in every space she finds herself."
    },
    {
      id: 4,
      name: "Ebele",
      surname: "Nnacheta",
      image: "/Ebele.png",
      color: "#AED9FF",
      height: "h-70",
      imageHeight: "h-36",
      imageStyle: "rounded-bl-[60px] rounded-tr-[60px]",
      width:"w-130",
      minwidth:"w-34",
      minheight:"h-24",
      position:"Product Manager",
      content1:"Ebele studied accounting in university but found herself pulled into tech when the COVID lockdown flipped the script. Now a Product Manager at Moniepoint, she enjoys the diversity of knowledge her role offers—working with almost everyone and learning a little bit of everything along the way.",
      content2:"Ebele is a mix of sunshine and steel, a natural dancer, and a creative soul with plenty of handy skills. Her ultimate comfort food? Oil rice and eggs—simple and undefeated!"
    },
    {
      id: 5,
      name: "Great",
      surname: "Amubode",
      image: "/GreatAmubode.png",
      color: "#AED9FF",
      height: "h-74",
      imageHeight: "h-36",
      imageStyle: "rounded-bl-[60px] rounded-tr-[60px]",
      width:"w-130",
      minwidth:"w-34",
      minheight:"h-24",
      position:"Frontend Enginner",
      content1:"Great’s tech journey took off during COVID when she realized she loved working on new projects, picking up skills, and seeing her contributions come to life—plus, the money doesn’t hurt. She once dreamed of being an astronaut, but her fear of heights—and Nigeria’s lack of a space program—kept her grounded.",
      content2:"Surrounded by extrovert energy throughout the day, Great recharges her introverted social battery by knitting or sticking to her new workout routine. One day, she plans to conquer her fear of heights and try skydiving and snowboarding."
    },
    {
      id: 6,
      name: "Simi",
      surname: "Da-Walang",
      image: "/Simidawalang.png",
      color: "#AED9FF",
      height: "h-70",
      imageHeight: "h-36",
      imageStyle: "rounded-bl-[60px] rounded-tr-[60px]",
      width:"w-130",
      minwidth:"w-34",
      minheight:"h-24",
      position:"Frontend Enginner",
      content1:"The balance of discipline and artistry has always appealed to Simi—first through her childhood fascination with gymnastics and now as a Frontend Engineer at Moniepoint. A highly visual person, she enjoys blending technical skills with creativity, experimenting with animations, transitions, and micro-interactions to design engaging user experiences.",
      content2:"Outside of work, she enjoys lunch dates with friends, trying her hand at archery, and devouring tacos—her ultimate comfort food. In one word? Chill."
    },
    {
      id: 7,
      name: "Melodie",
      surname: "Ezeani",
      image: "/Ezeani.png",
      color: "#AED9FF",
      height: "h-70",
      imageHeight: "h-36",
      imageStyle: "rounded-bl-[60px] rounded-tr-[60px]",
      width:"w-130",
      minwidth:"w-34",
      minheight:"h-24",
      position:"Data Engineer",
      content1:"Melodie once dreamed of being a spy, but instead, she now uncovers insights as a Data Engineer. She loves the process of solving data challenges with logic and creativity, a passion that began during her time as a data analyst.",
      content2:"Outside work, Melodie enjoys craft activities like sewing and painting and unwinds by watching anime with a plate of pasta nearby. She describes herself as brilliant—like light, bringing clarity and brightness wherever she goes."
    },
    {
      id: 8,
      name: "Celestina",
      surname: "Amadi",
      image: "/Celestina.png",
      color: "#AED9FF",
      height: "h-74",
      imageHeight: "h-36",
      imageStyle: "rounded-bl-[60px] rounded-tr-[60px]",
      width:"w-130",
      minwidth:"w-34",
      minheight:"h-24",
      position:"Cloud Engineer",
      content1:"Celestina’s curiosity and love for problem-solving led her to a career in tech. She thrives on tackling challenges and building impactful solutions, channeling her childhood dream of teaching through knowledge-sharing in her work.",
      content2:"A proud plant mom with two green beauties, Celestina recharges with her ultimate comfort food—plantain and egg."
    },
  ],
};

const Alumni = () => {

  const [content,setContent] = useState(null)

  const handleStory = (index) => {
    setContent(index)
  }
  const handleClose = () => {
    setContent(null)
  }
  // this arranges the year accordingly  ['2021', '2022', '2023', '2024']
  const years = Object.keys(profilesByYear).sort();
  // console.log(years)

  const [currentYearIndex, setCurrentYearIndex] = useState(0);
  const [openYear, setOpenYear] = useState(null);

  // allows us know the particular year tab thats open
  const currentYear = years[currentYearIndex];

  //  allows you go back a previous year
  const handlePrevious = (e) => {
    e.stopPropagation();
    setCurrentYearIndex((prev) => (prev > 0 ? prev - 1 : years.length - 1));
    setOpenYear(
      years[currentYearIndex > 0 ? currentYearIndex - 1 : years.length - 1]
    );
  };

  //  allows you go forward by a  year

  const handleNext = (e) => {
    // the e.stopPropagation(); is a javascript function that stops the bubbling of an event to parent elements, preventing any parent event handlers from being executed.
    // in simple english it doesn't allow a function run when its not supposed to.
    e.stopPropagation();
    setCurrentYearIndex((prev) => (prev < years.length - 1 ? prev + 1 : 0));
    setOpenYear(
      years[currentYearIndex < years.length - 1 ? currentYearIndex + 1 : 0]
    );
  };

  const toggleYear = (year) => {
    setOpenYear(openYear === year ? null : year);
    if (openYear !== year) {
      const yearIndex = years.indexOf(year);
      setCurrentYearIndex(yearIndex);
    }
  };

  return (
    <div className="w-full flex flex-col">
      {years.map((year) => (
        <div
          key={year}
          className={`w-full border-b-[3px] border-black transition-all duration-300 ${openYear === year ? "" : ""}`}
        >
          {openYear !== year ? (
            <div
              onClick={() => toggleYear(year)}
              className="w-full h-[50vh] border-b-[3px] border-black bg-white hover:bg-[#CED3DD] cursor-pointer flex items-center justify-center transition-all duration-300"
            >
              <h1 className="text-[160px] font-bold text-black flex justify-center">
                {year}
              </h1>
            </div>
          ) : (
            <>
              <div
                onClick={() => toggleYear(year)}
                className="w-full h-[20vh] bg-white  cursor-pointer border-b-2 border-black transition-all duration-300"
              >
                <div className="w-full h-full flex justify-around items-center">
                  <button
                    onClick={(e) => {
                      handlePrevious(e);
                      e.stopPropagation();
                    }}
                    className="w-60 h-16 bg-[#FFEBAF] rounded-4xl shadow-[0px_6px_0px_5px_black]"
                  >
                    Previous
                  </button>
                  <h1 className="text-[85px] text-black font-bold flex justify-center">
                    {currentYear}
                  </h1>
                  <button
                    onClick={(e) => {
                      handleNext(e);
                      e.stopPropagation();
                    }}
                    className="w-60 h-16 bg-[#FFEBAF] rounded-4xl shadow-[0px_6px_0px_5px_black]"
                  >
                    Next
                  </button>
                </div>
              </div>
              <div className="w-full min-h-[60vh] bg-pink-400 border-x-2 border-black flex justify-center items-center overflow-y-auto ">
              <div
                onClick={(e) => e.stopPropagation()}
                className="w-full max-h-[70vh] flex  overflow-x-auto overflow-y-hidden bg-violet-300 mx-5"
              >
                <div className="w-max h-100 bg-rose-800 flex items-center gap-7 "
                style={{paddingLeft:"20px"}}
                >
                  {profilesByYear[currentYear].map((profile,index) => (
                    <>
                    {
                      content === index ? <div className={`${profile.width} ${profile.height} flex justify-around items-center bg-sky-800 border border-black rounded-2xl`}>
                        <div className="w-36 h-70 bg-fuchsia-600 flex flex-col justify-around">
                          <div className={`${profile.minwidth} ${profile.minheight} ${profile.imageStyle}`} 
                          style={{backgroundColor:profile.color}}
                          >
                            <img className="w-full" src={profile.image} alt="" />
                          </div>
                          <h2 className="text-2xl font-medium leading-6">
                            {profile.name} <br /> {profile.surname}
                          </h2>
                          <h2 className="text-2xl font-medium leading-6 "
                          style={{color:profile.color}}
                          >{profile.position}</h2>
                        </div>
                        <div className="w-80 h-72 bg-emerald-400 flex flex-col justify-around">
                          <p >{profile.content1}</p>
                          <p >{profile.content2}</p>
                          <ImCross size={22} style={{marginLeft:"84%" , color:profile.color }}
                          onClick={handleClose}
                          />
                        </div>
                      </div> : <div
                      key={profile.id}
                      className={`w-72 ${profile.height} bg-white rounded-3xl border-2 border-black flex justify-center items-center flex-col gap-8`}
                    >
                      <div
                        className={`w-60 ${profile.imageHeight}  ${profile.imageStyle} flex`}
                        style={{backgroundColor:profile.color}}
                      >
                        <img
                          className="w-full "
                          src={profile.image}
                          alt={`${profile.name} ${profile.surname}`}
                        />
                      </div>
                      <div className="w-60 h-14 bg-amber-900 flex justify-between items-center">
                        <h2 className="text-2xl font-medium leading-6">
                          {profile.name} <br /> {profile.surname}
                        </h2>
                        <ImPlus onClick={()=>handleStory(index)} className="text-2xl font-normal"
                        style={{color:profile.color}}/>
                      </div>
                    </div>
                    }
                    
                    
                  </>
                  ))}
                </div>
              </div>
            </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Alumni;