import { useEffect, useState } from "react";
import { FaTicketAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { reset } from "../features/tickets/ticketSlice";

import mobile5 from "../asset/img/Home.png";
import mobile6 from "../asset/img/Monthly.png";
import mobile7 from "../asset/img/Payments.png";
import mobile8 from "../asset/img/Sendmoney.png";
import mobile9 from "../asset/img/Settings.png";

function Home() {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(reset());
  }, []);

  const images = [
    {
      image: mobile5,
    },
    {
      image: mobile6,
    },
    {
      image: mobile7,
    },
    {
      image: mobile8,
    },
    {
      image: mobile9,
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <div className="max">
      <div className="flex gap-5 flex-col md:flex-row justify-between mt-12 items-center">
        <div>
          <div className="text-center md:text-left">
            <h2>Which phone complaint do have?</h2>
            <p className="my-4 text-base md:text-xl lg:text-2xl">
              Please choose from an option below
            </p>
          </div>

          <div className="form-control flex items-center flex-col md:flex-row flex-wrap gap-3">
            <div className="my-3">
              <Link to="/create-ticket">
                <button className="btn">
                  Create new Ticket <FaTicketAlt className="ml-3" />
                </button>
              </Link>
            </div>

            <div className="my-3">
              <Link to="/tickets">
                <button className="btn">
                  View my Tickets <FaTicketAlt className="ml-3" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="logo w-2/5">
          <div className="waitlist-img">
            <div className="mobile-img max-w-xs max-h-xs md:max-w-xs md:max-h-xs">
              <img src={images[currentIndex].image} alt="mobile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
