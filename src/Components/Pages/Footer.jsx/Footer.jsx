import React from "react";

const Footer = () => {
  return (
    <footer class="bg-gray-800 text-gray-300">
      <div class="container mx-auto p-4">
        <div class=" grid md:grid-cols-2 lg:grid-cols-3 gap-20 ">
          <div>
            <h1 class="text-2xl font-bold">MAHMUDA</h1>
            <p class="text-sm font-light">APARTMENTS</p>
            <div class="mt-4">
              <p class="text-sm font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi.
              </p>
            </div>
          </div>
          <div class="grid lg:grid-cols-2 md:gap-4">
            <div>
              <h2 class="text-lg font-bold">Services.</h2>
              <ul class="list-disc mt-4 pl-5">
                <li>Resturent & Bar</li>
                <li>Swimming Pool</li>
                <li>Restaurant</li>
                <li>Conference Apartment</li>
              </ul>
            </div>
            <div>
              <h2 class="text-lg font-bold">Contact Us.</h2>
              <div class="flex gap-4 mt-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-light">Phone Number</p>
                  <p class="text-sm font-light">+987 876 765 76 577</p>
                </div>
              </div>
              <div class="flex gap-4 mt-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-light">Email</p>
                  <p class="text-sm font-light">info@w</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <ul class="list-disc mt-4 pl-5">
              <li>Gaming Zone</li>
              <li>Marrige Party</li>
              <li>Party Planning</li>
              <li>Tour Consultancy</li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="footer footer-center dark:bg-gray-400  text-base-content p-4">
        <aside>
          <p className="text-white">
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </footer>
  );
};

export default Footer;
