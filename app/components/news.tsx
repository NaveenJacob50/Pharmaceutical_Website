import React from 'react';
import NewsCard1 from './newsCard1';
import NewsCard2 from './newsCard2';
import NewsCard3 from './newsCard3';
import NewsCard4 from './newsCard4';
import NewsCard5 from './newsCard5';

const News = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-blue-950 text-sm font-semibold mt-5">OUR BLOG</p>
      <h1 className="text-slate-700 md:text-4xl font-2xl font-bold mt-2 mb-6">Latest News</h1>
      
      <div
        className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-6 mb-6"
        style={{ gridAutoRows: '1fr' }} 
      >
        <div className="md:w-80 w-72 rounded-2xl row-span-2">
          <NewsCard1 />
        </div>
        <div className="md:w-80 w-72 rounded-2xl">
          <NewsCard2 />
        </div>
        <div className="md:w-80 w-72 rounded-2xl row-span-2">
          <NewsCard1 />
        </div>
        <div className="md:w-80 w-72 rounded-2xl">
          <NewsCard2 />
        </div>
        <div className="md:w-80 w-72 rounded-2xl row-span-2">
          <NewsCard4 />
        </div>
        <div className="md:w-80 w-72 rounded-2xl row-span-2">
          <NewsCard5 />
        </div>
        <div className="md:w-80 w-72 rounded-2xl">
          <NewsCard3/>
        </div>
        <div className="md:w-80 w-72 rounded-2xl">
          <NewsCard3/>
        </div>
      </div>
    </div>
  );
};

export default News;
