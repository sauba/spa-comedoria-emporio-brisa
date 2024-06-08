'use client'
import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className={`w-full flex-col justify-center items-center text-center`}
      id="contato"
    >
      <div className={`absolute z-40 left-0 right-0`}>
        <Image className={`cursor-none mx-auto pt-80 opacity-90`} src={`/logo.svg`} width={240} height={240} alt="Comedoria Empório da Brisa" priority />
        <div className={`flex justify-center items-center gap-6 z-40`}>
          <div className={`animate-wiggle`}>
            <span className={`text-red-500`}>
              <Link
                href="https://www.instagram.com/emporiodabrisa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo size={48} />
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
                <WhatsappLogo size={48} />
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className={`relative z-10`}>
        <svg className={`
          bg-gradient-to-tr
          from-own-blue
          to-transparent
          flex
          justify-center
          items-center
          mx-auto
          rounded-t-full
          overflow-hidden
          `}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 1600 900">
          <defs>
            <linearGradient id="bg" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(96, 225, 235, 0.6)' }}></stop>
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
      </div>

      <p className="relative font-bad-script text-center text-zinc-50 -mt-8 z-50">© 2024 Todos os direitos reservados.</p>
    </footer>
  )
}