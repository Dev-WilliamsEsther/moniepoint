import { useState } from "react";
import '../styles/faqs.css'
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const faqs = [
  { id: 1, question: "What is Moniepoint?", answer: "Moniepoint is an all-in-one financial services platform for every African, everywhere. In simple terms, if you need to pay for anything in Nigeria, odds are you’re going to pay at a Moniepoint terminal, to a Moniepoint business account, from a Moniepoint personal account. Pretty sweet, right?Moniepoint Inc. helps 10 million businesses and individuals access seamless payments, banking, credit, and business management tools. Through our subsidiaries, process $22 billion monthly for our customers. Okay, we’ll stop tooting our horn now." },
  { id: 2, question: "How long is the internship?", answer: "The internship is 6 months long or 6 months short. Depending on how you see the glass." },
  { id: 3, question: "Can I get retained after the internship?", answer: "Absolutely. Think of the internship as an exclusive women-only pass to join the team. You’ll be assessed at the end of the internship and offered a full-time position based on your performance." },
  { id: 4, question: "What is the recruitment process?",
     answer: "The recruitment process involves; \n - General and psychometric assessment.\n - Technical assessment.\n - A behavioural and technical interview with the hiring manager.\n -All interview stages are Virtual. We know this probably sounds like a lot, but we promise our recruiters don’t bite. You’ve got this!" },
  { id: 5, question: "I don’t think I have enough experience. Will I get in?", answer: "You’ll never know until you try. What we can assure you of is that we’ll give every application a fair review." },
  { id: 6, question: "Is it a paid internship?", answer: "How awkward would it be if we said No? But yes. You’ll be paid a competitive salary. We know it has a bad rep, but we mean “competitive” in a good way *wink" },
  { id: 7, question: "Is the internship open to only women?", answer: "Thankfully, yes. Sorry guys, but you’ll have to sit this one out. Although, we have other opportunities that are open to men as well." },
  { id: 8, question: "Why is the internship open to women only?", answer: "Women have always been central to the growth and evolution of technology. Yet, statistics show that women remain underrepresented in the technology industry. Bummer isn’t it?Women should be encouraged to pursue paths in building technology solutions, and their innovations should be celebrated and supported. That’s what we’re doing with the Moniepoint Women in Tech Internship." },
  { id: 9, question: "Does Moniepoint have other internship programs?", answer: "Sure. We accept internships on a rolling basis through our partnerships with universities to train young people, or through direct applications. Don’t be afraid to shoot your shot."}
];

const Faqs = () => {
  const [openFaq, setOpenFaqs] = useState(null);

  const handleClick = (id) => {
    setOpenFaqs((prevState) => (prevState === id ? null : id));
  };

  return (
    <div className="faq-container">
      {faqs.map((faq) => (
        <div className={`FaqContainer ${openFaq === faq.id ? "open" : ""}`} key={faq.id}>
          <div className="questionAndIconHolder" onClick={() => handleClick(faq.id)}>
            <h2>{faq.question}</h2>
            {openFaq === faq.id ? <FiMinus size={20} /> : <GoPlus size={20} />}
          </div>
          <p className="answerWrapper">{faq.answer}  </p>
        </div>
      ))}
    </div>
  );
};

export default Faqs;
