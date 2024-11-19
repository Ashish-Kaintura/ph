import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <div
        className="p-8 "
        style={{
          background: "rgb(16,16,17)",
          backgroundImage:
            "linear-gradient(90deg, rgba(16,16,17,1) 0%, rgba(54,56,58,1) 91%)",
        }}
      >
        <div className=" block justify-center">
          <div className="sm:flex block justify-center gap-x-8 mt-4 items-center">
            <div className="sm:w-96 sm:h-52 b p-4 ">
              <div>
                <h2 className="text-2xl font-raleway tracking-widest text-[#AD8B3A]">
                  The Punarnava
                </h2>
                <p className="text-sm font-sans text-white mt-2">
                  Village – Bhitarli, Kimadi, Lambidhar – Mussoorie Road,
                  Dehradun, Uttarakhand, India - 248001
                </p>
                <span className="text-sm font-sans text-white ">
                  Reservation: +91 7217011476
                </span>
                <br />
                <span className="text-sm font-sans text-white mt-2">
                  Email: reservation@thepunarnava.com
                </span>
                <br />
                <br />
                <span className="text-sm font-sans text-white ">
                  Jyoti Singh: Vice President Sales & Marketing
                </span>
                <br />
                <span className="text-sm font-sans text-white mt-2">
                  Phone: +91 6260540070
                </span>
                <br />
                <span className="text-sm font-sans text-white mt-2">
                  Email: jyoti@thepunarnava.com
                </span>
              </div>
            </div>
            <div className="sm:block hidden w-[2px] bg-[#AD8B3A] h-48  rounded-sm"></div>
            <div className="sm:w-96 sm:h-52  p-4">
              <div>
                <h2 className="text-2xl font-raleway tracking-widest text-[#AD8B3A]">
                  Booking Partner
                </h2>

                <p className="text-sm font-sans text-white mt-2">
                  Tarun: +91 9711017568
                </p>

                <br />
                <span className="text-sm font-sans text-white mt-2">
                  Mail: Book@thepunarnava.com
                </span>
              </div>
            </div>
          </div>

          <div className="sm:flex block justify-center gap-x-8 mt-8 ">
            <div className="sm:w-96 sm:h-52 p-4 ">
              <div>
                <h2 className="text-2xl font-raleway tracking-widest text-[#AD8B3A]">
                  Quick Links
                </h2>
                <div className="flex justify-between ">
                  <ul className="text-white font-sans font-thin  ">
                    <li className="mt-2">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="mt-2">
                      <Link href="/about-us">About Us</Link>
                    </li>

                    <li className="mt-2">
                      <Link href="/contact-us">Contact Us</Link>
                    </li>

                    <li className="mt-2">
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                  </ul>
                  <ul className="text-white font-sans font-thin  ">
                    <li className="mt-2">
                      <Link href="/destination-wedding">
                        Destination Wedding
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link href="/meeting-and-events">Meeting And Event</Link>
                    </li>
                    <li className="mt-2">
                      <Link href="/Room-suites">Room & Suites</Link>
                    </li>
                    <li className="mt-2">
                      <Link href="/wellness-and-spa">Wellness & Spa</Link>
                    </li>
                  </ul>
                  <ul className="text-white font-sans font-thin  ">
                    <li className="mt-2">
                      <Link href="/activities">Activities</Link>
                    </li>
                    <li className="mt-2">
                      <Link href="/facilities">Facilities</Link>
                    </li>
                    <li className="mt-2">
                      <Link href="/gallery">Gallery</Link>
                    </li>
                    <li className="mt-2">
                      <Link href="/blogs">Blogs</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="sm:block hidden w-[2px] bg-[#AD8B3A] h-48  rounded-sm"></div>
            <div className="sm:w-96 sm:h-52 p-4 ">
              <h2 className="text-2xl font-raleway tracking-widest text-[#AD8B3A] pb-6">
                Follow Us
              </h2>
              <section className="flex justify-start gap-x-12 px-4 items-center">
                <a href="https://www.facebook.com/thepunarnavaresort">
                  <button className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1.1em"
                      viewBox="0 0 448 512"
                      strokeWidth="0"
                      fill="currentColor"
                      stroke="currentColor"
                      className="w-5"
                    >
                      <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
                    </svg>
                    <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                      Facebook
                    </span>
                  </button>
                </a>
                <a href="https://www.linkedin.com/company/the-punarnava-resort/">
                  <button className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1.1em"
                      viewBox="0 0 512 512"
                      strokeWidth="0"
                      fill="currentColor"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
                    </svg>
                    <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                      Linkedin
                    </span>
                  </button>
                </a>
                <a href="https://www.instagram.com/thepunarnavaresort/">
                  <button className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#a21caf] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1.2em"
                      viewBox="0 0 24 24"
                      strokeWidth="1"
                      fill="currentColor"
                      stroke="currentColor"
                      className="w-5"
                    >
                      <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                    </svg>
                    <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                      Instagram
                    </span>
                  </button>
                </a>
              </section>
              <section className="flex justify-start gap-x-12 px-5 items-center mt-8">
                <a href="https://x.com/ThePunarnava_">
                  <button className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      strokeWidth="0"
                      fill="currentColor"
                      stroke="currentColor"
                    >
                      <path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path>
                    </svg>
                    <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                      x
                    </span>
                  </button>
                </a>
                <a href="https://in.pinterest.com/thepunarnavaresort/">
                  <button className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#E60023] from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 448 512"
                      strokeWidth="0"
                      className="w-5 h-5"
                      fill="currentColor"
                      stroke="currentColor"
                    >
                      <path d="M448 80v352c0 26.5-21.5 48-48 48H154.4c9.8-16.4 22.4-40 27.4-59.3 3-11.5 15.3-58.4 15.3-58.4 8 15.3 31.4 28.2 56.3 28.2 74.1 0 127.4-68.1 127.4-152.7 0-81.1-66.2-141.8-151.4-141.8-106 0-162.2 71.1-162.2 148.6 0 36 19.2 80.8 49.8 95.1 4.7 2.2 7.1 1.2 8.2-3.3.8-3.4 5-20.1 6.8-27.8.6-2.5.3-4.6-1.7-7-10.1-12.3-18.3-34.9-18.3-56 0-54.2 41-106.6 110.9-106.6 60.3 0 102.6 41.1 102.6 99.9 0 66.4-33.5 112.4-77.2 112.4-24.1 0-42.1-19.9-36.4-44.4 6.9-29.2 20.3-60.7 20.3-81.8 0-53-75.5-45.7-75.5 25 0 21.7 7.3 36.5 7.3 36.5-31.4 132.8-36.1 134.5-29.6 192.6l2.2.8H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path>
                    </svg>
                    <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                      Pinterest
                    </span>
                  </button>
                </a>
                <a href="https://www.youtube.com/channel/UC6U9pJg6edqzxvSbz-YTqAQ">
                  <button className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#CD201F] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 576 512"
                      strokeWidth="0"
                      fill="currentColor"
                      stroke="currentColor"
                    >
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                    </svg>
                    <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                      Youtube
                    </span>
                  </button>
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex justify-center bg-[#AD8B3A] py-2">
        <h2 className="text-center text-white font-sans">
          Design And Develop by Risezonic @copyRight to{" "}
          <a
            href="https://www.risezonic.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Risezonic
          </a>
        </h2>
      </footer>
    </>
  );
}
