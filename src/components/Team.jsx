const people = [
    {
      name: 'Shams Haroon',
      role: 'Founder / CEO',
      imageUrl:
        'https://media.licdn.com/dms/image/D5603AQHsaraMo4ZItw/profile-displayphoto-shrink_200_200/0/1709501806086?e=1724889600&v=beta&t=-R3mBM7N31KzOEOlWaXFn2xY10YHDhf07BhK8DrH7KI',
      description: 'Computer Science Student at Ontario Tech University',
      linkedIn: 'https://www.linkedin.com/in/shams-haroon/',
    },
      {
        name: 'Ethan Tzortzis',
        role: '{fill in} / {fill in}',
        imageUrl:
          'https://media.licdn.com/dms/image/D5603AQENT9xZvJpLIw/profile-displayphoto-shrink_100_100/0/1701225095411?e=1724889600&v=beta&t=dlG4SOnulRKM4hJV9XxjaYZcMndW4KfFORPhT6uzXCM',
          description: 'Electrical Engineer Student at Ontario Tech University',
          linkedIn: 'https://www.linkedin.com/in/ethan-tzortzis/',
      },
      {
        name: 'Tommy M',
        role: '{fill in} / {fill in}',
        imageUrl:
          'https://media.licdn.com/dms/image/D5603AQHeiupj-DbqjA/profile-displayphoto-shrink_200_200/0/1688085903604?e=1724889600&v=beta&t=dB8lvXwpVk5Rmnf_KOX2ryWSaYBF9zGL_OINqShtQeQ',
          description: 'Finance Student at Ontario Tech University',
          linkedIn: 'https://www.linkedin.com/in/tommydmichailidis/',
      },
      {
        name: 'Vincent Wong',
        role: '{fill in} / {fill in}',
        imageUrl:
          'https://media.licdn.com/dms/image/D5603AQHIv5wB8UzJMg/profile-displayphoto-shrink_200_200/0/1709569703737?e=1724889600&v=beta&t=Rhe5tkZRJ_GOj9bDVtLV_LllFWTqC3kfbV5KGEkc5jA',
          description: 'Computer Science Student at Ontario Tech University',
          linkedIn: 'https://www.linkedin.com/in/vincentklw/',
      },
  ]
  
  export default function Team({id}) {
    return (
      <div className="bg-white py-24 sm:py-32" id={id}>
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-primary-brand sm:text-4xl">Meet our Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <a href={person.linkedIn}><li key={person.name}>
                <div className="flex items-center gap-x-6 px-2 rounded-xl hover:bg-gray-200">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-xl font-bold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-base font-semibold leading-6 text-primary-brand">{person.role}</p>
                    <p className="text-sm leading-6 text-gray-500">{person.description}</p>
                  </div>
                </div>
              </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  