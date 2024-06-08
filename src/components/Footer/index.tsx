'use client'

import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className={`flex-col justify-start text-zinc-700 items-center text-center`}
      id="contato"
    >
      <div className={`relative flex flex-col justify-center items-center mx-auto`}>
        <span
          className={`text-4xl lg:text-6xl text-center font-allura text-sky-700 xl:pt-12`}
        >
          Comedoria Empório da Brisa
        </span>

        <span className={`text-lg lg:text-2xl pb-1 tracking-wider flex-wrap text-sky-700`}>
          Praia de Itapuama - PE
        </span>

        <span
          className={`text-xs lg:text-xl tracking-widest flex-wrap text-sky-700`}
        >
          Entre em Contato:
        </span>

        <div className={`flex justify-center items-center gap-6 z-40`}>
          <div className={`animate-wiggle`}>
            <span className={`text-red-500`}>
              <Link
                href="https://www.instagram.com/emporiodabrisa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo size={46} />
              </Link>
            </span>
          </div>

          <div className={`animate-wiggle`}>
            <span className={`text-green-600`}>
              <Link
                href="https://wa.me/5581985008651"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappLogo size={56} />
              </Link>
            </span>
          </div>
        </div>
      </div>

      <svg className={`relative flex justify-center items-center mx-auto rounded-full overflow-hidden z-10 -mt-36`} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 900">
        <defs>
          <linearGradient id="bg" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgba(93, 150, 242, 0.6)' }}></stop>
            <stop offset="100%" style={{ stopColor: 'rgba(38, 89, 190, 0.06)' }}></stop>
          </linearGradient>
          <path id="wave" fill="url(#bg)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
      s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"></path>
        </defs>
        <g>
          <use xlinkHref="#wave" opacity=".3">
            <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="8s" calcMode="spline" values="270 230; -334 180; 270 230" keyTimes="0; .5; 1" keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite"></animateTransform>
          </use>
          <use xlinkHref="#wave" opacity=".6">
            <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="6s" calcMode="spline" values="-270 230;243 220;-270 230" keyTimes="0; .6; 1" keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite"></animateTransform>
          </use>
          <use xlinkHref="#wave" opacity=".9">
            <animateTransform attributeName="transform" attributeType="XML" type="translate" dur="4s" calcMode="spline" values="0 230;-140 200;0 230" keyTimes="0; .4; 1" keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite"></animateTransform>
          </use>
        </g>
      </svg>

      <p className="font-bad-script text-center text-sky-700">© 2024 Todos os direitos reservados.</p>
    </footer>
  )
}