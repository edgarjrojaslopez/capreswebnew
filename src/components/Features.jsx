const Features = () => {
  return (
    <div className="mx-auto mt-24 px-4 py-12 sm:max-w-xl md:mt-auto md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-16">
      <div className="row-gap-8 grid gap-8 lg:grid-cols-3">
        <div className="border border-4 border-gray-700/80 p-6 sm:text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 sm:mx-auto sm:h-24 sm:w-24">
            <svg
              className="sm:h-20 h-12  text-blue-400 w-12 sm:w-20"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Nuestros Socios</h6>
          <p className="mb-3 max-w-md text-sm text-gray-900 sm:mx-auto">
            Cheese on toast airedale the big cheese. Danish fontina cheesy grin
            airedale danish
          </p>
          <a
            href="/"
            aria-label=""
            className="hover:text-deep-purple-800 inline-flex items-center font-semibold text-blue-400 transition-colors duration-200"
          >
            Leer mas...
          </a>
        </div>
        <div className="border border-4 border-gray-700/80 p-6 sm:text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 sm:mx-auto sm:h-24 sm:w-24">
            <svg
              className="h-12 w-12 text-blue-400 sm:h-20 sm:w-20"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">
            Servicios que prestamos
          </h6>
          <p className="mb-3 max-w-md text-sm text-gray-900 sm:mx-auto">
            Satoshi Nakamoto launched lots of decentralisation when Litecoin
            required
          </p>
          <a
            href="/"
            aria-label=""
            className="hover:text-deep-purple-800 inline-flex items-center font-semibold text-blue-400 transition-colors duration-200"
          >
            Leer mas...
          </a>
        </div>
        <div className="border border-4 border-gray-700/80 p-6 sm:text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 sm:mx-auto sm:h-24 sm:w-24">
            <svg
              className="h-12 w-12 text-blue-400 sm:h-20 sm:w-20"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Contáctanos</h6>
          <p className="mb-3 max-w-md text-sm text-gray-900 sm:mx-auto">
            Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i
            mechad
          </p>
          <a
            href="/"
            aria-label=""
            className="hover:text-deep-purple-800 inline-flex items-center font-semibold text-blue-400 transition-colors duration-200"
          >
            Leer mas...
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
