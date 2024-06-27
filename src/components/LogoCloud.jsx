import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faAirbnb, faAmazon, faBehanceSquare } from '@fortawesome/free-brands-svg-icons'

export default function LogoCloud() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>
          {/* TODO: change logo brands */}
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <div className="flex justify-center items-center"><FontAwesomeIcon icon={faLinkedin} style={{color: "#87c535", }} className="text-5xl" /></div>
            <div className="flex justify-center items-center"><FontAwesomeIcon icon={faInstagram} style={{color: "#87c535"}} className="text-5xl" /></div>
            <div className="flex justify-center items-center"><FontAwesomeIcon icon={faAirbnb} style={{color: "#87c535"}} className="text-5xl" /></div>
            <div className="flex justify-center items-center"><FontAwesomeIcon icon={faAmazon} style={{color: "#87c535"}} className="text-5xl" /></div>
            <div className="flex justify-center items-center"><FontAwesomeIcon icon={faBehanceSquare} style={{color: "#87c535"}} className="text-5xl" /></div>
          </div>
        </div>
      </div>
    )
  }
  