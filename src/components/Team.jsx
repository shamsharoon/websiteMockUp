import React from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from '@chakra-ui/react';

const people = [
  {
    id: 1,
    name: 'Shams Haroon',
    role: 'CEO & Lead Software Developer / Founder',
    imageUrl:
      'https://media.licdn.com/dms/image/D5603AQHsaraMo4ZItw/profile-displayphoto-shrink_200_200/0/1709501806086?e=1724889600&v=beta&t=-R3mBM7N31KzOEOlWaXFn2xY10YHDhf07BhK8DrH7KI',
    description: 'Computer Science Student at Ontario Tech University',
    moreInfo: "Shams is a Full Stack Developer that uses tools/languages like React, Three.js, SQL, and C++, Python and more. He leads software projects at Trash Tech, focusing on AI solutions for sustainable waste management.",
    linkedIn: 'https://www.linkedin.com/in/shams-haroon/',
  },
  {
    id: 2,
    name: 'Ethan Tzortzis',
    role: 'Marketing Specialist / Co-Founder',
    imageUrl:
      'https://media.licdn.com/dms/image/D5603AQENT9xZvJpLIw/profile-displayphoto-shrink_100_100/0/1701225095411?e=1724889600&v=beta&t=dlG4SOnulRKM4hJV9XxjaYZcMndW4KfFORPhT6uzXCM',
    description: 'Electrical Engineer Student at Ontario Tech University',
    moreInfo: "Ethan combines his knowledge of electrical engineering with a keen interest in technological advancements. His contributions are vital to the development of our cutting-edge solutions.",
    linkedIn: 'https://www.linkedin.com/in/ethan-tzortzis/',
  },
  {
    id: 3,
    name: 'Tommy M',
    role: 'Business Analytics/ Co-Founder',
    imageUrl:
      'https://media.licdn.com/dms/image/D5603AQHeiupj-DbqjA/profile-displayphoto-shrink_200_200/0/1688085903604?e=1724889600&v=beta&t=dB8lvXwpVk5Rmnf_KOX2ryWSaYBF9zGL_OINqShtQeQ',
    description: 'Finance Student at Ontario Tech University',
    moreInfo: "Tommy's financial acumen ensures that our projects are not only innovative but also economically viable. He plays a crucial role in the financial planning and sustainability of our ventures.",
    linkedIn: 'https://www.linkedin.com/in/tommydmichailidis/',
  },
  {
    id: 4,
    name: 'Vincent Wong',
    role: 'Creative Director / Co-Founder',
    imageUrl:
      'https://media.licdn.com/dms/image/D5603AQHIv5wB8UzJMg/profile-displayphoto-shrink_200_200/0/1709569703737?e=1724889600&v=beta&t=Rhe5tkZRJ_GOj9bDVtLV_LllFWTqC3kfbV5KGEkc5jA',
    description: 'Computer Science Student at Ontario Tech University',
    moreInfo: "Vincent's expertise in computer science helps us tackle complex challenges with innovative solutions. His technical skills are an invaluable asset to our team.",
    linkedIn: 'https://www.linkedin.com/in/vincentklw/',
  },
];

export default function Team({ id }) {
  return (
    <Box bg="white" py={24} id={id} className="sm:py-32">
      <Box maxW="7xl" mx="auto" px={6} className="grid gap-x-8 gap-y-20 lg:px-8 xl:grid-cols-3">
        <Box maxW="2xl">
          <Heading as="h2" size="xl" className="text-3xl font-bold tracking-tight text-primary-brand sm:text-4xl">
            Meet our Team
          </Heading>
          <Text mt={6} fontSize="lg" className="leading-8 text-gray-600">
            Our team at Trash Tech is comprised of talented individuals dedicated to driving innovation and sustainability. Each member brings unique skills and expertise, working together to create impactful solutions for a better future.
          </Text>
        </Box>
        <Box as="ul" role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.id}>
              <div className="flex items-center gap-x-6 px-2">
                <a href={person.linkedIn}>
                  <Image borderRadius="full" boxSize="64px" src={person.imageUrl} alt={person.name} />
                </a>
                <div>
                <a href={person.linkedIn}>
                  <Heading as="h3" size="md" className="text-2xl font-bold underline pb-1 leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </Heading>
                  </a>
                  <Text fontSize="md" className="text-base font-normal leading-6 text-primary-brand">
                    {person.role}
                  </Text>
                  <Text fontSize="sm" className="text-xs leading-6 text-gray-500">
                    {person.description}
                  </Text>
                  <Popover>
                    <PopoverTrigger>
                      <Button mt={2} variant="outline">More Info</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader className="text-lg font-bold underline"><a href={person.linkedIn}>{person.name}</ a></PopoverHeader>
                      <PopoverBody className="text-sm">
                        {person.moreInfo}
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </li>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
