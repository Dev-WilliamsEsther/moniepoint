import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import '../styles/alumni2.css'

const Alumni2 = () => {
    const [showPage, setShowPage] = useState(0);
    const [showDetails, setShowDetails] = useState(null);

    const showFull = (index) => {
        setShowDetails((id) => (index === id ? null : index));
    };
    return (
        <div className="alumni">
            <h1>
                The WIT Internship <br />
                Alumni{" "}
                <p>
                    Meet the previous Women In Tech <br />
                    interns, who are now working in <br />
                    full-time roles at Moniepoint.
                </p>
            </h1>
            {showPage === 0 ? (
                <div className="twoOne"
                style={{
                    background:
                    showDetails === 0 ?
                    "#C4E9FD"
                    : showDetails === 1 ?
                    "#D7F293" 
                    : showDetails === 2 ?
                    "#E4D6FD"
                    : "white",
                }}>
                    <div className="prevNext">
                        <button className="butt">
                            Previous
                            <button className="buttInn">Previous</button>
                        </button>
                        <h2>2021</h2>
                        <button className="butt">
                            Next
                            <button className="buttInn" onClick={() => setShowPage(1)}>
                                Next
                            </button>
                        </button>
                    </div>
                    <div className="cards" style={{ justifyContent: "center" }}>
                        {showDetails === 0 ? (
                            <div className='detailsCard'
                            onClick={() => setShowDetails(null)}
                            >
                                <div className='firstBox'>
                                    <div className='smallImg'>
                                        <img src="/Barakat.png" alt="" />
                                    </div>
                                    <h2>
                                        Barakat <br />
                                        Ajadi
                                    </h2>
                                    <p>
                                        Associate <br />
                                        Product <br />
                                        Manager
                                    </p>
                                </div>
                                <div className='secondBox'>
                                    <p>
                                    Barakat always knew she wanted a path in computer science and
                                     technology since her father got her a computer when she was very young. 
                                     She is excited about community building and the opportunity it presents to help others grow.
                                    </p>
                                    <p>
                                       At work, she’s passionate about ensuring reliability to make users happy, and her
                                       favourite things are anime, ice cream and travelling, in no particular order.
                                    </p>
                                    <span>
                                        <FaPlus/>
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="cardse" onClick={() => setShowDetails(0)}>
                            <div className="imgBox">
                                <img src="/Barakat.png" alt="" />
                            </div>
                            <div className="textBox">
                                <h2>
                                    Barakat <br />
                                    Ajadi
                                </h2>
                                <span>
                                    <FaPlus />
                                </span>
                            </div>
                        </div>
                        )}
                        
                        {showDetails === 1 ? (
                            <div className='detailsCard'
                            onClick={() => setShowDetails(null)}
                            >
                                <div className='firstBox'>
                                    <div className='smallImg'
                                    style={{
                                        background:"rgb(214, 242, 147)",
                                        borderTopLeftRadius: "0px",
                                        borderTopRightRadius: "60px",
                                        borderBottomLeftRadius: "50px",
                                    }}
                                    >
                                        <img src="/Tefe.png" alt="" />
                                    </div>
                                    <h2>
                                        Tefe <br />
                                        Oladejo
                                    </h2>
                                    <p style={{ color: "#9AAF6E"}}>
                                        Frontend <br />
                                        Engineer
                                    </p>
                                </div>
                                <div className='secondBox'>
                                    <p>
                                    Tefe enjoys travelling and taking pictures, and she is passionate about
                                     leveraging front-end development to allow people limitless access to a good life.
                                    </p>
                                    <p>
                                    She had a pretty sweet transition into tech and wrote all about it here .
                                    </p>
                                    <span>
                                        <FaPlus color="rgb(214,242,147)"/>
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="cardsee" onClick={() => setShowDetails(1)}>
                            <div className="imgBox">
                                <img src="/Tefe.png" alt="" />
                            </div>
                            <div className="textBox">
                                <h2>
                                    Tefe <br />
                                    Oladejo
                                </h2>
                                <span>
                                    <FaPlus />
                                </span>
                            </div>
                        </div>
                        )}
                        
                        {showDetails === 2 ? (
                            <div className='detailsCard'
                            onClick={() => setShowDetails(null)}
                            >
                                <div className='firstBox'>
                                    <div className='smallImg'
                                    style={{
                                        background: "rgb(228,214,253)",
                                        orderTopLeftRadius: "100px",
                                        borderBottomLeftRadius: "100px",
                                        borderBottomRightRadius: "70px",
                                    }}
                                    >
                                        <img src="/Binta.png" alt="" />
                                    </div>
                                    <h2>
                                        Binta <br />
                                        Umar
                                    </h2>
                                    <p style={{ color: "#A39BBA" }}>
                                        Backend <br />
                                        Engineer
                                    </p>
                                </div>
                                <div className='secondBox'>
                                    <p>
                                    Binta enjoys simple and effective problem-solving. 
                                    She is fascinated by how technology affects people's lives and has a knack for innovation
                                    </p>
                                    <p>
                                    She enjoys learning about healthy lifestyles, going on hikes,
                                     and seeing how her career in financial technology helps those around her with their businesses. 
                                    </p>
                                    <span>
                                        <FaPlus color=  "rgb(228,214,253)"/>
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="cardses" onClick={() => setShowDetails(2)}>
                            <div className="imgBox">
                                <img src="/Binta.png" alt="" />
                            </div>
                            <div className="textBox">
                                <h2>
                                    Binta <br />
                                    Umar
                                </h2>
                                <span>
                                    <FaPlus />
                                </span>
                            </div>
                        </div>
                        )}
                        
                    </div>
                </div>
            ) : (
                <div className="twoTwo" onClick={() => setShowPage(0)}>
                    <h2>2021</h2>
                </div>
            )}
            {showPage === 1 ? (
                <div className="twoOne"
                    style={{
                        background:
                            showDetails === 0 ?
                                "rgb(226,255,246)"
                                : showDetails === 1 ?
                                    "rgb(196, 233, 253)"
                                    : showDetails === 2 ?
                                        "rgb(214, 242, 147)"
                                        : showDetails === 3 ?
                                            "rgb(255,224,204)"
                                            : "white",
                    }}
                >
                    <div className="prevNext">
                        <button className="butt">
                            Previous
                            <button className="buttInn" onClick={() => setShowPage(0)}>
                                Previous
                            </button>
                        </button>
                        <h2>2022</h2>
                        <button className="butt">
                            Next
                            <button className="buttInn" onClick={() => setShowPage(2)}>
                                Next
                            </button>
                        </button>
                    </div>
                    <div className="cards"
                        style={{
                            justifyContent: "center",
                            overflowY: "hidden",
                        }}>
                        {showDetails === 0 ? (
                            <div
                                className='detailsCard'
                                onClick={() => setShowDetails(null)}
                            >
                                <div className='firstBox'>
                                    <div className='smallImg'
                                    style={{
                                        background:"rgb(226,255,246)",
                                        borderTopLeftRadius: "100px",
                                        borderBottomRightRadius: "60px",
                                        borderBottomLeftRadius: "60px",
                                    }}
                                    >
                                        <img src="/Chioma.png" alt="" />
                                    </div>
                                    <h2>
                                        Chioma <br />
                                        Ibekwe
                                    </h2>
                                    <p style={{color:"#99B8B2"}}>
                                        Product <br />
                                        Designer
                                    </p>
                                </div>
                                <div className='secondBox'>
                                    <p>
                                        Chioma loves crafting beautiful experiences through design.
                                    </p>
                                    <p>
                                        She had a career in Medicine & Surgery before switching to design,
                                        and she’s thrilled by the transition. She loves junk food and shows
                                        that are strange, dark and mysterious.
                                    </p>
                                    <span>
                                        <FaPlus color='#99B8B2' />
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="cardse" onClick={() => setShowDetails(0)} style={{ height: "300px" }}>
                                <div
                                    className="imgBox"
                                    style={{
                                        height: "60%",
                                        background: "rgb(226,255,246)",
                                        borderTopLeftRadius: "100px",
                                        borderBottomLeftRadius: "100px",
                                        borderBottomRightRadius: "100px",
                                    }}
                                >
                                    <img src="/Chioma.png" alt="" />
                                </div>
                                <div className="textBox">
                                    <h2>
                                        Chioma <br />
                                        Ibekwe
                                    </h2>
                                    <span>
                                        <FaPlus color="rgb(123,149,146)" />
                                    </span>
                                </div>
                            </div>
                        )}

                        {showDetails === 1 ? (
                            <div
                                className='detailsCard'
                                onClick={() => setShowDetails(null)}
                            >
                                <div className='firstBox'>
                                    <div className='smallImg'>
                                        <img src="/Joel.png" alt="" />
                                    </div>
                                    <h2>
                                        Feranmi <br />
                                        Joel
                                    </h2>
                                    <p>
                                        Technical <br />
                                        Product <br />
                                        Manager
                                    </p>
                                </div>
                                <div className='secondBox'>
                                    <p>
                                        Feranmi leverages her technology and product management expertise to develop
                                        and launch successful products with a meaningful impact on people's daily lives.
                                    </p>
                                    <p>
                                        She has a positive energy that inspires those around her and enjoys reading tweets,
                                        newsletters, and books (except autobiographies) outside of work. She’s also known
                                        for her quirky humour and love of classic films.
                                    </p>
                                    <span>
                                        <FaPlus />
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="cardse" onClick={() => setShowDetails(1)} style={{ height: "320px" }}>
                                <div className="imgBox" style={{ height: "60%" }}>
                                    <img src="/Joel.png" alt="" />
                                </div>
                                <div className="textBox">
                                    <h2>
                                        Feranmi <br />
                                        Joel
                                    </h2>
                                    <span>
                                        <FaPlus />
                                    </span>
                                </div>
                            </div>
                        )}

                        {showDetails === 2 ? (
                            <div
                                className='detailsCard'
                                onClick={() => setShowDetails(null)}
                            >
                                <div className='firstBox'>
                                    <div className='smallImg'
                                    style={{
                                        background:"rgb(214,242,147)",
                                        borderTopLeftRadius: "0px",
                                        borderTopRightRadius: "60px",
                                        borderBottomLeftRadius: "30px",
                                    }}
                                    >
                                        <img src="/Damilola.png" alt="" />
                                    </div>
                                    <h2>
                                        Damilola <br />
                                        Omolori
                                    </h2>
                                    <p style={{color:"#9AAF6E"}}>
                                        Backend <br />
                                        Engineer

                                    </p>
                                </div>
                                <div className='secondBox'>
                                    <p>
                                        Damilola loves travelling and is always on the lookout for new dishes to try.
                                    </p>
                                    <p>
                                        She wants to provide top-notch, innovative and user-friendly software that enhances
                                        people’s lives and addresses real-world issues. She also hopes that her work will help
                                        advance the field of software engineering.
                                    </p>
                                    <span>
                                        <FaPlus color="#9AAF6E"/>
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="cardsee" onClick={() => setShowDetails(2)}>
                                <div
                                    className="imgBox"
                                    style={{ objectFit: "contain", height: "60%" }}
                                >
                                    <img
                                        src="/Damilola.png"
                                        alt=""
                                        style={{ width: "100%", height: "90%" }}
                                    />
                                </div>
                                <div className="textBox">
                                    <h2>
                                        Damilola <br />
                                        Omolori
                                    </h2>
                                    <span>
                                        <FaPlus />
                                    </span>
                                </div>
                            </div>
                        )}

                        {showDetails === 3 ? (
                            <div
                                className='detailsCard'
                                onClick={() => setShowDetails(null)}
                            >
                                <div className='firstBox'>
                                    <div className='smallImg'
                                    style={{
                                        background: "rgb(255,224,204",
                                        borderTopLeftRadius: "0px",
                                        borderTopRightRadius:"50px",
                                        borderBottomLeftRadius: "60px",
                                        borderBottomRightRadius: "40px",
                                    }}
                                    >
                                        <img src="/Precious.png" alt="" />
                                    </div>
                                    <h2>
                                        Precious <br />
                                        Uzochukwu
                                    </h2>
                                    <p style={{color:"#4F1A1C"}}>
                                        Backend <br />
                                        Engineer

                                    </p>
                                </div>
                                <div className='secondBox'>
                                    <p>
                                        Precious’ ultimate goal is to own a foundation that reaches out to families
                                        who have children born with hearing defects and teach them sign language to encourage communication between them.
                                    </p>
                                    <p>
                                        She graduated with an honours degree in computer science, and when she’s not doing cool
                                        stuff with code, she loves to read books and play video games.
                                    </p>
                                    <span>
                                        <FaPlus />
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="cardses" onClick={() => setShowDetails(3)}>
                                <div
                                    className="imgBox"
                                    style={{
                                        background: "rgb(255,224,204)",
                                        borderTopRightRadius: "100px",
                                        borderTopLeftRadius: "0px",
                                    }}
                                >
                                    <img src="/Precious.png" alt="" />
                                </div>
                                <div className="textBox">
                                    <h2>
                                        Precious <br />
                                        Uzochukwu
                                    </h2>
                                    <span>
                                        <FaPlus color="rgb(255,224,204)" />
                                    </span>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            ) : (
                <div className="twoTwo" onClick={() => setShowPage(1)}>
                    <h2>2022</h2>
                </div>
            )}

            {showPage === 2 ? (
                <div className="twoOne"
                    style={{
                        background:
                            showDetails === 0 ?
                                "rgb(226,255,246)"
                                : showDetails === 1 ?
                                    "rgb(196, 233, 253)"
                                    : showDetails === 2 ?
                                        "rgb(214, 242, 147)"
                                        : showDetails === 3 ?
                                            "rgb(228, 214, 253)"
                                            : showDetails === 4 ?
                                                "rgb(255,224,204)"
                                                : "white",
                    }}
                >
                    <div className="prevNext">
                        <button className="butt">
                            Previous
                            <button className="buttInn" onClick={() => setShowPage(1)}>
                                Previous
                            </button>
                        </button>
                        <h2>2023</h2>
                        <button className="butt">
                            Next
                            <button className="buttInn" onClick={() => setShowPage(3)}>
                                Next
                            </button>
                        </button>
                    </div>
                    <div
                        className="cards"
                        style={{
                            overflowY: "hidden",
                            paddingLeft: "50px",
                            paddingRight: "50px",
                        }}
                    >
                        <div className="cardsWrap">
                            {showDetails === 0 ? (
                                <div
                                    className="detailsCard"
                                    onClick={() => setShowDetails(null)}
                                >
                                    <div className='firstBox'>
                                        <div className='smallImg'
                                            style={{
                                                background: "rgb(226,255,246)",
                                                borderTopLeftRadius: "100px",
                                                borderBottomLeftRadius: "100px",
                                                borderBottomRightRadius: "70px",
                                            }}
                                        >
                                            <img src="/Pearl.png" alt="" />
                                        </div>
                                        <h2>
                                            Pearl <br />
                                            Akpan
                                        </h2>
                                        <p>
                                            Frontend <br />
                                            Engineer
                                        </p>
                                    </div>
                                    <div className='secondBox'>
                                        <p>
                                            Pearl wanted to be a pilot at age 5 but changed course when she learnt
                                            that planes could crash. Today, she takes people on it's journeys through frontend engineering at Moniepoint.
                                        </p>
                                        <p>
                                            Although Pearl doesn’t have a favourite meal, she eats all kinds of pasta.
                                        </p>
                                        <span>
                                            <FaPlus color="rgb(123,149,146)" />
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="cardse" onClick={() => setShowDetails(0)} style={{ height: "300px" }}>
                                    <div
                                        className="imgBox"
                                        style={{
                                            height: "60%",
                                            background: "rgb(226,255,246)",
                                            borderTopLeftRadius: "100px",
                                            borderBottomLeftRadius: "100px",
                                            borderBottomRightRadius: "100px",
                                        }}
                                    >
                                        <img src="/Pearl.png" alt="" />
                                    </div>
                                    <div className="textBox">
                                        <h2>
                                            Pearl <br />
                                            Akpan
                                        </h2>
                                        <span>
                                            <FaPlus color="rgb(123,149,146)" />
                                        </span>
                                    </div>
                                </div>
                            )}

                            {showDetails === 1 ? (
                                <div className='detailsCard'
                                    onClick={() => setShowDetails(null)}
                                >
                                    <div className='firstBox'>
                                        <div
                                            className='smallImg'>
                                            <img src="/Dorcas.png" alt="" />
                                        </div>
                                        <h2>
                                            Dorcas <br />
                                            Abang
                                        </h2>
                                        <p>
                                            Technical <br />
                                            Product <br />
                                            Manager
                                        </p>
                                    </div>
                                    <div className='secondBox'>
                                        <p>
                                            When she’s not enjoying her favourite meal of Afang
                                            soup paired with Northern Tuwo, Dorcas is passionate
                                            about using technology to create positive change.
                                        </p>
                                        <p>
                                            She also loves to stay updated on tech trends through books and watching movies.
                                        </p>
                                        <span>
                                            <FaPlus />
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="cardse" onClick={() => setShowDetails(1)}>
                                    <div
                                        className="imgBox"
                                        style={{
                                            height: "60%",
                                            background: "rgb(196, 233, 253)"
                                        }}>
                                        <img src="/Dorcas.png" alt="" />
                                    </div>
                                    <div className="textBox">
                                        <h2>
                                            Dorcas <br />
                                            Abang
                                        </h2>
                                        <span>
                                            <FaPlus />
                                        </span>
                                    </div>
                                </div>
                            )}

                            {showDetails === 2 ? (
                                <div
                                    className='detailsCard'
                                    onClick={() => setShowDetails(null)}
                                >
                                    <div className='firstBox'>
                                        <div className='smallImg'
                                            style={{
                                                background: "rgb(214, 242, 147)",
                                                borderTopLeftRadius: "0px",
                                                borderTopRightRadius: "60px",
                                                borderBottomLeftRadius: "50px",
                                            }}
                                        >
                                            <img src="/Daniela.png" alt="" />
                                        </div>
                                        <h2>
                                            Daniela <br />
                                            Uzosike
                                        </h2>
                                        <p style={{ color: "rgb(153,175,110)" }}>
                                            Systems <br />
                                            Administrator
                                        </p>
                                    </div>
                                    <div className='secondBox'>
                                        <p>
                                            Daniela Uzosike is passionate about fixing things.
                                            She ties this passion to her love for repairing her toys and play tools as a child.
                                        </p>
                                        <p>
                                            This early interest led her to pursue a degree in Engineering,
                                            in order to solve real-world problems. Outside of work, Daniela loves good food and music.
                                        </p>
                                        <span>
                                            <FaPlus color="rgb(214,242,147)" />
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="cardsee" onClick={() => setShowDetails(2)}>
                                    <div
                                        className="imgBox"
                                        style={{ height: "60%" }}>
                                        <img src="/Daniela.png" alt="" />
                                    </div>
                                    <div className="textBox">
                                        <h2>
                                            Daniela <br />
                                            Uzosike
                                        </h2>
                                        <span>
                                            <FaPlus />
                                        </span>
                                    </div>
                                </div>
                            )}

                            {showDetails === 3 ? (
                                <div
                                    className='detailsCard'
                                    onClick={() => setShowDetails(null)}
                                >
                                    <div className='firstBox'>
                                        <div
                                            className='smallImg'
                                            style={{
                                                background: "rgb(228,214,253)",
                                                borderTopLeftRadius: "100px",
                                                borderBottomRightRadius: "100px",
                                                borderBottomLeftRadius: "100px",
                                            }}
                                        >
                                            <img src="/Jumai.png" alt="" />
                                        </div>
                                        <h2>
                                            Jumai <br />
                                            Tijani
                                        </h2>
                                        <p style={{ color: "rgb(228,214,253)" }}>
                                            QA <br />
                                            Engineer
                                        </p>
                                    </div>
                                    <div className='secondBox'>
                                        <p>
                                            Jumai loves to try out DIY projects that she finds
                                            interesting and is passionate about leveraging technology to improve life.
                                        </p>
                                        <p>
                                            Her first shot at software testing was at a boot camp,
                                            and she’s been on the path since. In her free time, she reads books and newsletters.
                                        </p>
                                        <span>
                                            <FaPlus color="rgb(228,214,253)" />
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="cardses" onClick={() => setShowDetails(3)}>
                                    <div className="imgBox">
                                        <img src="/Jumai.png" alt="" />
                                    </div>
                                    <div className="textBox">
                                        <h2>
                                            Jumai <br />
                                            Tijani
                                        </h2>
                                        <span>
                                            <FaPlus />
                                        </span>
                                    </div>
                                </div>
                            )}

                            {showDetails === 4 ? (
                                <div
                                    className='detailsCard'
                                    onClick={() => setShowDetails(null)}
                                >
                                    <div className='firstBox'>
                                        <div
                                            className='smallImg'
                                            style={{
                                                background: "rgb(255,224,204)",
                                                borderTopLeftRadius: "0px",
                                                borderBottomLeftRadius: "80px",
                                                borderTopRightRadius: "100px",
                                                borderBottomRightRadius: "100px",
                                            }}
                                        >
                                            <img src="/Afolabi.png" alt="" />
                                        </div>
                                        <h2>
                                            Afolabi <br />
                                            Dolapomade
                                        </h2>
                                        <p style={{ color: "#4F1A1C" }}>
                                            QA <br />
                                            Engineer
                                        </p>
                                    </div>
                                    <div className='secondBox'>
                                        <p>
                                            When she’s not ensuring the highest level of quality in software
                                            products, Afolabi is a pancake-flipping maestro.
                                        </p>
                                        <p>
                                            As a kid, she dreamt of being a professional superhero, but now she explores
                                            her superpowers by writing bug-free software and saving the day, one line of code at a time.
                                        </p>
                                        <span>
                                            <FaPlus color="rgb(255,224,204)" />
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="cardses" onClick={() => setShowDetails(4)}>
                                    <div
                                        className="imgBox"
                                        style={{
                                            background: "rgb(255,224,204)",
                                            borderTopRightRadius: "100px",
                                            borderTopLeftRadius: "0px",
                                        }}
                                    >
                                        <img
                                            src="/Afolabi.png"
                                            alt=""
                                            style={{
                                                borderBottomLeftRadius: "90px",
                                                borderBottomRightRadius: "90px",
                                            }}
                                        />
                                    </div>
                                    <div className="textBox">
                                        <h2>
                                            Afolabi <br />
                                            Dolapomade
                                        </h2>
                                        <span>
                                            <FaPlus color="rgb(255,224,204)" />
                                        </span>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            ) : (
                <div className="twoTwo" onClick={() => setShowPage(2)}>
                    <h2>2023</h2>
                </div>
            )}
            {showPage === 3 ? (
                <div
                    className="twoOne"
                    style={{
                        background:
                            showDetails === 0
                                ? "rgb(196, 233, 253)"
                                : showDetails === 1
                                    ? "rgb(228, 214, 253)"
                                    : showDetails === 2
                                        ? "rgb(214, 242, 147)"
                                        : showDetails === 3
                                            ? "rgb(255,224,204)"
                                            : showDetails === 4
                                                ? "rgb(196, 233, 253)"
                                                : showDetails === 5
                                                    ? "rgb(228, 214, 253)"
                                                    : showDetails === 6
                                                        ? "rgb(226,255,246)"
                                                        : showDetails === 7
                                                            ? "rgb(196, 233, 253)"
                                                            : "white",
                        borderBottom: "2px solid black",
                    }}
                >
                    <div className="prevNext">
                        <button className="butt">
                            Previous
                            <button className="buttInn" onClick={() => setShowPage(2)}>
                                Previous
                            </button>
                        </button>
                        <h2>2024</h2>
                        <button className="butt">
                            Next
                            <button className="buttInn">Next</button>
                        </button>
                    </div>
                    <div
                        className="cards"
                        style={{
                            overflowY: "hidden",
                            paddingLeft: "50px",
                            paddingRight: "50px",
                        }}
                    >
                        <div className="cardsWrap">
                            {showDetails === 0 ? (
                                <div
                                    className="detailsCard"
                                    onClick={() => setShowDetails(null)}
                                >
                                    <div className="firstBox">
                                        <div className="smallImg">
                                            <img src="/TomiThomas.png" alt="" />
                                        </div>
                                        <h2>
                                            Tomi <br />
                                            Thomas
                                        </h2>
                                        <p>
                                            Product <br />
                                            Designer
                                        </p>
                                    </div>
                                    <div className="secondBox">
                                        <p>
                                            Tomi believes cake is a love language, but her passion
                                            for solving problems and designing for users is just
                                            as strong. Inspired by her sibling, a graphic
                                            designer, she was drawn to product design for its
                                            blend of creativity and user focus.
                                        </p>
                                        <p>
                                            Outside of work, Tomi enjoys watching anime—always at
                                            1.5x speed because, in her words, “life’s too short
                                            for slow pacing.”
                                        </p>
                                        <span>
                                            <FaPlus />
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="cardse" onClick={() => setShowDetails(0)}>
                                    <div className="imgBox">
                                        <img src="/TomiThomas.png" alt="" />
                                    </div>
                                    <div className="textBox">
                                        <h2>
                                            Tomi <br />
                                            Thomas
                                        </h2>
                                        <span>
                                            <FaPlus />
                                        </span>
                                    </div>
                                </div>
                            )}

                            {showDetails === 1 ? (
                                <div
                                    className="detailsCard"
                                    onClick={() => setShowDetails(null)}
                                    style={{ height: "300px" }}
                                >
                                    <div className="firstBox">
                                        <div
                                            className="smallImg"
                                            style={{
                                                background: "rgb(228,214,253)",
                                                borderTopLeftRadius: "100px",
                                                borderBottomRightRadius: "100px",
                                                borderBottomLeftRadius: "100px",
                                            }}
                                        >
                                            <img src="/Hadiza.png" alt="" />
                                        </div>
                                        <h2>
                                            Hadiza <br />
                                            Umar
                                        </h2>
                                        <p>
                                            Backend <br />
                                            Engineer
                                        </p>
                                    </div>
                                    <div className="secondBox">
                                        <p>
                                            Hadiza once dreamed of becoming a neurosurgeon,
                                            inspired by Ben Carson’s Gifted Hands, but life led
                                            her to tech, where she now creates impactful solutions
                                            as a Backend Engineer at Moniepoint.
                                        </p>
                                        <p>
                                            A proud northerner, female, and Java engineer, Hadiza
                                            thrives in challenging environments and loves proving
                                            that women belong in tech. Outside of work, she dances
                                            to unwind and never says no to yam and egg—her
                                            ultimate comfort food
                                        </p>
                                        <span style={{ marginTop: "-42px" }}>
                                            <FaPlus color="rgb(228,214,253)" />
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="cardses" onClick={() => setShowDetails(1)}>
                                    <div className="imgBox">
                                        <img src="/Hadiza.png" alt="" />
                                    </div>
                                    <div className="textBox">
                                        <h2>
                                            Hadiza <br />
                                            Umar
                                        </h2>
                                        <span>
                                            <FaPlus />
                                        </span>
                                    </div>
                                </div>
                            )}

                            {showDetails === 2 ? (
                                <div
                                    className="detailsCard"
                                    onClick={() => setShowDetails(null)}
                                    style={{ height: "340px" }}
                                >
                                    <div className="firstBox">
                                        <div
                                            className="smallImg"
                                            style={{
                                                background: "rgb(214,242,147)",
                                                borderTopLeftRadius: "0px",
                                                borderTopRightRadius: "60px",
                                                borderBottomLeftRadius: "50px",
                                            }}
                                        >
                                            <img src="/RuthAdeteju.png" alt="" />
                                        </div>
                                        <h2>
                                            Ruth <br />
                                            Adetunji
                                        </h2>
                                        <p style={{ color: "rgb(153,175,110)" }}>
                                            Product <br />
                                            Manager
                                        </p>
                                    </div>
                                    <div className="secondBox">
                                        <p>
                                            Ruth’s journey into tech began at a Women in
                                            Engineering workshop during her time at Obafemi
                                            Awolowo University, where inspiring stories of
                                            trailblazing women shifted her perspective and sparked
                                            her interest in making an impact. Now an Associate
                                            Product Manager at Moniepoint, she thrives on
                                            meaningful contributions and the energy of her amazing
                                            team.
                                        </p>
                                        <p>
                                            A proud Jesus baby, Ruth loves movies, pounded yam,
                                            and creating lasting positive impacts in every space
                                            she finds herself
                                        </p>
                                        <span style={{ marginTop: "-35px" }}>
                                            <FaPlus color="rgb(214,242,147)" />
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="cardsee" onClick={() => setShowDetails(2)}>
                                    <div className="imgBox">
                                        <img src="/RuthAdeteju.png" alt="" />
                                    </div>
                                    <div className="textBox">
                                        <h2>
                                            Ruth <br />
                                            Adetunji
                                        </h2>
                                        <span>
                                            <FaPlus />
                                        </span>
                                    </div>
                                </div>
                            )}

                            {showDetails === 3 ? (
                                <div
                                    className="detailsCard"
                                    onClick={() => setShowDetails(null)}
                                >
                                    <div className="firstBox">
                                        <div
                                            className="smallImg"
                                            style={{
                                                background: "rgb(255,224,204)",
                                                borderTopLeftRadius: "0px",
                                                borderBottomLeftRadius: "100px",
                                                borderTopRightRadius: "100px",
                                                borderBottomRightRadius: "100px",
                                            }}
                                        >
                                            <img src="/Ebele.png" alt="" />
                                        </div>
                                        <h2>
                                            Ebele <br />
                                            Nnacheta
                                        </h2>
                                        <p style={{ color: "#4F1A1C" }}>
                                            Product <br />
                                            Manager
                                        </p>
                                    </div>
                                    <div className="secondBox">
                                        <p>
                                            Ebele studied accounting in university but found
                                            herself pulled into tech when the COVID lockdown
                                            flipped the script. Now a Product Manager at
                                            Moniepoint, she enjoys the diversity of knowledge her
                                            role offers—working with almost everyone and learning
                                            a little bit of everything along the way.
                                        </p>
                                        <p>
                                            Ebele is a mix of sunshine and steel, a natural
                                            dancer, and a creative soul with plenty of handy
                                            skills. Her ultimate comfort food? Oil rice and
                                            eggs—simple and undefeated!
                                        </p>
                                        <span>
                                            <FaPlus
                                                color="rgb(255,224,204)"
                                                style={{ marginTop: "-40px", marginLeft: "-30px" }}
                                            />
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="cardses" onClick={() => setShowDetails(3)}>
                                    <div
                                        className="imgBox"
                                        style={{
                                            background: "rgb(255,224,204)",
                                            borderTopRightRadius: "100px",
                                            borderTopLeftRadius: "0px",
                                        }}
                                    >
                                        <img
                                            src="/Ebele.png"
                                            alt=""
                                            style={{
                                                borderBottomLeftRadius: "90px",
                                                borderBottomRightRadius: "90px",
                                            }}
                                        />
                                    </div>
                                    <div className="textBox">
                                        <h2>
                                            Ebele <br />
                                            Nnacheta
                                        </h2>
                                        <span>
                                            <FaPlus color="rgb(255,224,204)" />
                                        </span>
                                    </div>
                                </div>
                            )}

                            {showDetails === 4 ? (
                                <div
                                    className="detailsCard"
                                    onClick={() => setShowDetails(null)}
                                    style={{ height: "340px" }}
                                >
                                    <div className="firstBox">
                                        <div className="smallImg">
                                            <img src="/GreatAmubode.png" alt="" />
                                        </div>
                                        <h2>
                                            Great <br />
                                            Amubode
                                        </h2>
                                        <p>
                                            Frontend <br />
                                            Engineer
                                        </p>
                                    </div>
                                    <div className="secondBox">
                                        <p>
                                            Great’s tech journey took off during COVID when she
                                            realized she loved working on new projects, picking up
                                            skills, and seeing her contributions come to
                                            life—plus, the money doesn’t hurt. She once dreamed of
                                            being an astronaut, but her fear of heights—and
                                            Nigeria’s lack of a space program—kept her grounded.
                                        </p>
                                        <p>
                                            Surrounded by extrovert energy throughout the day,
                                            Great recharges her introverted social battery by
                                            knitting or sticking to her new workout routine. One
                                            day, she plans to conquer her fear of heights and try
                                            skydiving and snowboarding.
                                        </p>
                                        <span>
                                            <FaPlus style={{ marginTop: "-50px", marginLeft: "-20px" }} />
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="cardse" onClick={() => setShowDetails(4)}>
                                    <div className="imgBox">
                                        <img src="/GreatAmubode.png" alt="" />
                                    </div>
                                    <div className="textBox">
                                        <h2>
                                            Great <br />
                                            Amubode
                                        </h2>
                                        <span>
                                            <FaPlus />
                                        </span>
                                    </div>
                                </div>
                            )}

                            {showDetails === 5 ? (
                                <div
                                    className="detailsCard"
                                    onClick={() => setShowDetails(null)}
                                >
                                    <div className="firstBox">
                                        <div className="smallImg"
                                            style={{
                                                background: "rgb(228, 214, 253)",
                                                borderTopLeftRadius: "100px",
                                                borderBottomLeftRadius: "100px",
                                                borderBottomRightRadius: "100px",
                                            }}
                                        >
                                            <img src="/Simidawalang.png" alt="" />
                                        </div>
                                        <h2>
                                            Simi <br />
                                            Da-Walang
                                        </h2>
                                        <p
                                            style={{ color: "rgb(228, 214, 253)" }}>
                                            Frontend <br />
                                            Engineer
                                        </p>
                                    </div>
                                    <div className="secondBox">
                                        <p>
                                            The balance of discipline and artistry has always appealed to Simi—first through her childhood fascination
                                            with gymnastics and now as a Frontend Engineer at Moniepoint.
                                            A highly visual person, she enjoys blending technical skills with creativity, experimenting
                                            with animations, transitions, and micro-interactions to design engaging user experiences.
                                        </p>
                                        <p>
                                            Outside of work, she enjoys lunch dates with friends,
                                            trying her hand at archery, and devouring tacos—her ultimate comfort food. In one word? Chill
                                        </p>
                                        <span>
                                            <FaPlus />
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="cardses" onClick={() => setShowDetails(5)}>
                                    <div className="imgBox">
                                        <img src="/Simidawalang.png" alt="" />
                                    </div>
                                    <div className="textBox">
                                        <h2>
                                            Simi <br />
                                            Da-Walang
                                        </h2>
                                        <span>
                                            <FaPlus />
                                        </span>
                                    </div>
                                </div>
                            )}

                            {showDetails === 6 ? (
                                <div
                                    className="detailsCard"
                                    onClick={() => setShowDetails(null)}
                                >
                                    <div className="firstBox">
                                        <div className="smallImg"
                                            style={{
                                                background: "rgb(226,255,246)",
                                                borderTopLeftRadius: "100px",
                                                borderBottomLeftRadius: "100px",
                                                borderBottomRightRadius: "100px",
                                            }}
                                        >
                                            <img
                                                src="/Ezeani.png"
                                                alt=""
                                            />
                                        </div>
                                        <h2>
                                            Melodie <br />
                                            Ezeani
                                        </h2>
                                        <p>
                                            Data <br />
                                            Engineer
                                        </p>
                                    </div>
                                    <div className="secondBox">
                                        <p>
                                            Melodie once dreamed of being a spy, but instead, she now uncovers insights
                                            as a Data Engineer. She loves the process of solving data challenges with logic
                                            and creativity, a passion that began during her time as a data analyst.
                                        </p>
                                        <p>
                                            Outside work, Melodie enjoys craft activities like sewing and painting
                                            and unwinds by watching anime with a plate of pasta nearby. She describes herself
                                            as brilliant—like light, bringing clarity and brightness wherever she goes
                                        </p>
                                        <span>
                                            <FaPlus />
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div
                                    className="cardse"
                                    style={{ height: "300px" }}
                                    onClick={() => setShowDetails(6)}
                                >
                                    <div
                                        className="imgBox"
                                        style={{
                                            height: "60%",
                                            background: "rgb(226,255,246)",
                                            borderTopLeftRadius: "100px",
                                            borderBottomLeftRadius: "100px",
                                            borderBottomRightRadius: "100px",
                                        }}
                                    >
                                        <img
                                            src="/Ezeani.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="textBox">
                                        <h2>
                                            Melodie <br />
                                            Ezeani
                                        </h2>
                                        <span>
                                            <FaPlus color="rgb(123,149,146)" />
                                        </span>
                                    </div>
                                </div>
                            )}

                            {showDetails === 7 ? (
                                <div
                                    className="detailsCard"
                                    onClick={() => setShowDetails(null)}
                                >
                                    <div className="firstBox">
                                        <div className="smallImg">
                                            <img src="/Celestina.png" alt="" />
                                        </div>
                                        <h2>
                                            Celestina <br />
                                            Amadi
                                        </h2>
                                        <p>
                                            Cloud  <br />
                                            Engineer
                                        </p>
                                    </div>
                                    <div className="secondBox">
                                        <p>
                                            Celestina’s curiosity and love for problem-solving led her
                                            to a career in tech. She thrives on tackling challenges and
                                            building impactful solutions, channeling her childhood dream of
                                            teaching through knowledge-sharing in her work.
                                        </p>
                                        <p>
                                            A proud plant mom with two green beauties, Celestina recharges with
                                            her ultimate comfort food—plantain and egg.”
                                        </p>
                                        <span>
                                            <FaPlus />
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="cardse" onClick={() => setShowDetails(7)}>
                                    <div className="imgBox">
                                        <img src="/Celestina.png" alt="" />
                                    </div>
                                    <div className="textBox">
                                        <h2>
                                            Celestina <br />
                                            Amadi
                                        </h2>
                                        <span>
                                            <FaPlus />
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="twoFour" onClick={() => setShowPage(3)}>
                    <h2>2024</h2>
                </div>
            )}
        </div>
    )
}

export default Alumni2