import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faAirbnb, faAmazon, faBehanceSquare } from '@fortawesome/free-brands-svg-icons'

export default function LogoCloud() {
    return (
      <div className=" py-24 sm:py-32 relative -translate-y-10 sm:-translate-y-52">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>
          {/* TODO: change logo brands */}
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <div className="flex justify-center items-center col-span-2 max-h-12 w-full object-contain lg:col-span-1"><FontAwesomeIcon icon={faLinkedin} style={{color: "#87c535", }} className="text-5xl" /></div>
            <div className="flex justify-center items-center col-span-2 max-h-12 w-full object-contain lg:col-span-1"><FontAwesomeIcon icon={faInstagram} style={{color: "#87c535"}} className="text-5xl" /></div>
            <div className="flex justify-center items-center col-span-2 max-h-12 w-full object-contain lg:col-span-1"><FontAwesomeIcon icon={faAirbnb} style={{color: "#87c535"}} className="text-5xl" /></div>
            <div className="flex justify-center items-center col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"><FontAwesomeIcon icon={faAmazon} style={{color: "#87c535"}} className="text-5xl" /></div>
            <div className="flex justify-center items-center col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"><FontAwesomeIcon icon={faBehanceSquare} style={{color: "#87c535"}} className="text-5xl" /></div>
          </div>
        </div>
      </div>
    )
  }
  