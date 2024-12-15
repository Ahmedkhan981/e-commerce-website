"use client";
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaComment } from 'react-icons/fa';

interface Post {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  comments: number;
}

const FeaturedPosts: FC = () => {
  const posts: Post[] = [
    {
      id: 1,
      image: '/card-3.jpeg',
      title: 'Loudest à la Madison #1 (L\'Integral)',
      description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
      date: '22 April 2021',
      comments: 10,
    },
    {
      id: 2,
      image: '/card-2.jpeg',
      title: 'Loudest à la Madison #1 (L\'Integral)',
      description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
      date: '22 April 2021',
      comments: 10,
    },
    {
      id: 3,
      image: '/card-1.jpeg',
      title: 'Loudest à la Madison #1 (L\'Integral)',
      description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
      date: '22 April 2021',
      comments: 10,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-3xl font-bold mb-4">Featured Posts</h2>
      <p className="text-center mb-8">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xs text-gray-500">Google</span>
                <span className="text-xs text-gray-500">Trending</span>
                <span className="text-xs text-gray-500">New</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{post.date}</span>
                <div className="flex items-center space-x-1">
                  <FaComment />
                  <span>{post.comments} comments</span>
                </div>
              </div>
              <Link href="#" className="text-blue-500 hover:underline mt-4 block">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
