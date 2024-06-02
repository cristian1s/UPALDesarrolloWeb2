const CreditCard = () => {
  return (
    <div className="px-8">
      <div className="mask pointer-events-none relative z-10 h-[160px] w-full select-none rounded-3xl bg-[#010101] p-4 backdrop-blur-2xl after:absolute after:inset-0 after:rounded-3xl after:bg-gradient-to-br after:from-white/30 after:via-white/10 after:to-white/30 after:p-px">
        <div className="-mt-6 flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            className="w-14"
            viewBox="0 0 24 24"
          >
            <path d="M16.539 9.186a4.155 4.155 0 0 0-1.451-.251c-1.6 0-2.73.806-2.738 1.963-.01.85.803 1.329 1.418 1.613.631.292.842.476.84.737-.004.397-.504.577-.969.577-.639 0-.988-.089-1.525-.312l-.199-.093-.227 1.332c.389.162 1.09.301 1.814.313 1.701 0 2.813-.801 2.826-2.032.014-.679-.426-1.192-1.352-1.616-.563-.275-.912-.459-.912-.738 0-.247.299-.511.924-.511a2.95 2.95 0 0 1 1.213.229l.15.067.227-1.287-.039.009zm4.152-.143h-1.25c-.389 0-.682.107-.852.493l-2.404 5.446h1.701l.34-.893 2.076.002c.049.209.199.891.199.891h1.5l-1.31-5.939zm-10.642-.05h1.621l-1.014 5.942H9.037l1.012-5.944v.002zm-4.115 3.275.168.825 1.584-4.05h1.717l-2.551 5.931H5.139l-1.4-5.022a.339.339 0 0 0-.149-.199 6.948 6.948 0 0 0-1.592-.589l.022-.125h2.609c.354.014.639.125.734.503l.57 2.729v-.003zm12.757.606.646-1.662c-.008.018.133-.343.215-.566l.111.513.375 1.714H18.69v.001h.001z" />
          </svg>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 opacity-80"
            viewBox="0 0 609.9 609.9"
          >
            <path
              fill="#fff"
              d="M570.3 542.5H39.5A39.6 39.6 0 0 1 0 503v-396a39.6 39.6 0 0 1 39.5-39.5h530.6c22 0 39.7 17.8 39.7 39.6v395.9c0 21.9-17.7 39.6-39.5 39.6z"
            />
            <path
              fill="#fff"
              d="M570.3 67.4H304.9v475.1h265.4c21.9 0 39.5-17.7 39.5-39.5V107a39.6 39.6 0 0 0-39.5-39.6z"
            />
            <path
              fill="#CCC"
              d="M609.8 313.1v-16.3h-213v-72l55-55h158c0-5.7-.6-11.2-1.5-16.4h-160a8 8 0 0 0-5.7 2.5l-57.4 57.3h-72V67.4h-16.4v145.7h-71.2l-57.3-57.3a8.4 8.4 0 0 0-5.8-2.5H1.7C.7 158.6 0 164 0 169.6h159l54 54v73H0v16.3h213v73l-53.9 54.3H.1c0 5.6.6 11 1.6 16.3h160.9c2.1 0 4.3-1 5.8-2.5l57.3-57.3h71.2v145.7h16.3V396.7h72.1l57.4 57.3a8 8 0 0 0 5.7 2.5h160c1-5.3 1.5-10.8 1.5-16.3H451.6l-55-55v-72zm-229.4 67.3h-151v-151h150.9v151z"
            />
            <path
              d="M609.8 313.1v-16.3h-213v-72l55-55h158c0-5.7-.6-11.2-1.5-16.4h-160a8 8 0 0 0-5.7 2.5l-57.4 57.3h-72V67.4h-8.3v162h75.5v151H305v162h8.2V396.7h72l57.5 57.3a8 8 0 0 0 5.7 2.5h160c1-5.3 1.5-10.7 1.5-16.3H451.6l-55-55v-72z"
              fill="#CCC"
            />
          </svg>
        </div>

        <div className="mt-1">
          <span className="font-mono text-xl tracking-wides text-white">
            4012 0091 9824 1881
          </span>
        </div>

        <div className="mt-2 flex justify-between">
          <span className="font-mono text-base text-white opacity-75">12/24</span>
          <span className="font-mono text-base text-white">123</span>
        </div>
      </div>
    </div>
  );
};
export default CreditCard;
