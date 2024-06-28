import { ArrowPathIcon,  LockClosedIcon, ComputerDesktopIcon, BellAlertIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Real-Time Detection',
    description:
      'Our advanced AI detects and classifies waste in real-time, ensuring immediate and accurate sorting.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Automated Sorting',
    description:
      'Streamline operations with our automated sorting solutions, reducing manual labor and operational costs.',
    icon: LockClosedIcon,
  },
  {
    name: 'Data Analytics',
    description:
      'Gain insights with comprehensive data analytics, tracking waste types, volumes, and recycling efficiency.',
    icon: ArrowPathIcon,
  },
  {
    name: 'High Accuracy',
    description:
      'Utilizing state-of-the-art AI technology, our system achieves high accuracy in waste classification and sorting.',
    icon: BellAlertIcon,
  },
]

export default function Features({id}) {
  return (
    <div className="bg-white py-24 sm:py-32" id={id}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-bold leading-7 pb-5 text-primary-brand">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Revolutionize Waste Management
          </p>
          <p className="mt-6 font-semibold text-lg leading-8 text-gray-600">
          Pioneering innovative solutions to minimize environmental impact and maximize resource efficiency, paving the way for a greener future.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-brand">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
