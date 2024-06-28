import Spline from '@splinetool/react-spline';
import { useState} from 'react';

export default function Hero({ id }) {

  return (
    <div className="relative isolate md:-translate-y-40 px-6 pt-14 lg:px-8" id={id}>
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8cc63f] to-[#fff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-center">
          <div className="flex flex-col gap-5 justify-center items-center md:items-start">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Want to Learn More About Recycling?
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Trash Tech leverages cutting-edge AI to automate waste sorting and optimize recycling processes, ensuring minimal environmental impact and maximum efficiency.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://trash-it.azurewebsites.net/"
                className="rounded-md bg-primary-brand px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-primary-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Try Now
              </a>
            </div>
          </div>
          <div className="w-full h-[600px] md:w-full md:h-[700px] mt-32 md:mt-0">
              <Spline scene="https://prod.spline.design/eWuTfAK0BonC9F1B/scene.splinecode"/>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#8cc63f] to-[#fff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
}
