import React from 'react';
import Link from 'next/link';
import { ComputerDesktopIcon, CodeBracketIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

interface Category {
  _id: number;
  name: string;
  icon: string;
}

const categories: Category[] = [
  { _id: 1, name: 'Front-end', icon: 'desktop' },
  { _id: 2, name: 'Back-end', icon: 'code' },
  { _id: 3, name: 'Mobile', icon: 'mobile' },
];

function CategoryListItem({ category }: { category: Category }) {
  const type = category.name.replace('-', '').toLowerCase();
  
  const getIcon = () => {
    switch (category.icon) {
      case 'desktop':
        return <ComputerDesktopIcon className="w-12 h-12 text-yellow-400" />;
      case 'code':
        return <CodeBracketIcon className="w-12 h-12 text-yellow-400" />;
      case 'mobile':
        return <DevicePhoneMobileIcon className="w-12 h-12 text-yellow-400" />;
      default:
        return <ComputerDesktopIcon className="w-12 h-12 text-yellow-400" />;
    }
  };

  return (
    <Link 
      href={`/challenges?type=${type}`}
      className="challenge-link"
    >
      <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center cursor-pointer">
        {getIcon()}
        <h3 className="text-gray-800 text-xl font-semibold mt-4">{category.name}</h3>
      </div>
    </Link>
  );
}

export function CategoriesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
      {categories.map((category) => (
        <CategoryListItem category={category} key={category._id} />
      ))}
    </div>
  );
}