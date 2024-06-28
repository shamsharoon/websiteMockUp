
// can pass as props
const stats = [
    { id: 1, name: 'Dedicated Team members', value: '4' },
    { id: 2, name: 'Received industry feedback from professionals at Microsoft', value: 'Professional' },
    { id: 3, name: 'Beta Tests', value: ' 100+' },
  ]
  
  export default function Stats() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 font-bold text-primary-brand">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-primary- sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  