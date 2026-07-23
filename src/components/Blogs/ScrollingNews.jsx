import React from 'react';
import Marquee from 'react-fast-marquee';
import './ScrollingNews.css';

import performingArts from '../../assets/leerand-photos/children-podium.jpg';
import outdoorLearning from '../../assets/leerand-photos/swimmer-zoomed.jpg';
import scienceFair from '../../assets/main_entry_points/science-whiteboard-with-student-writing-1196x1396.webp';
import juniorPlay from '../../assets/hero_imgs/girls_toy.jpg';
import communityDay from '../../assets/photos/selected/sports-day-finish-line-race.jpg';
import sportsDayFinish from '../../assets/photos/selected/sports-day-finish-line-race.jpg';
import graduationDay from '../../assets/leerand-photos/graduants-zoomed-in.jpg';


const blogItems = [
  {
    title: 'Early Years discovery morning welcomes new families',
    category: 'Admissions',
    date: '20 September 2026',
    image: juniorPlay,
    imageAlt: 'Young learners playing outdoors',
    status: 'Upcoming',
  },
  {
    title: 'Leerand Sports Day brings houses together in colour and competition',
    category: 'Sports',
    date: '29 June 2026',
    image: sportsDayFinish,
    imageAlt: 'Learners sprinting to the finish line during Leerand Sports Day',
    status: 'Happened',
  },
  {
    title: 'Graduation Day celebrates achievement, growth and new beginnings',
    category: 'School News',
    date: '20 September 2026',
    image: graduationDay,
    imageAlt: 'Young learners playing outdoors',
    status: 'Upcoming',
  },
  {
    title: 'Outdoor learning week opens new conversations beyond class',
    category: 'School Life',
    date: '22 August 2026',
    image: outdoorLearning,
    imageAlt: 'Pupils outdoors during school life activities',
    status: 'Upcoming',
  },
  {
    title: 'Creative Arts celebrates performance, music and confidence',
    category: 'Arts',
    date: '14 July 2026',
    image: performingArts,
    imageAlt: 'Students performing on stage',
    status: 'Happened',
  },
  // {
  //   title: 'Young innovators prepare for the Leerand science showcase',
  //   category: 'Academics',
  //   date: '12 September 2026',
  //   image: scienceFair,
  //   imageAlt: 'A pupil writing on a science whiteboard',
  //   status: 'Upcoming',
  // },
  // {
  //   title: 'Community leadership day highlights service, teamwork and care',
  //   category: 'Community',
  //   date: '3 October 2025',
  //   image: communityDay,
  //   imageAlt: 'Leerand pupils walking together',
  //   status: 'Upcoming',
  // },
];

const ScrollingNews = () => {
  const handleBlogWheel = (event) => {
    const isVerticalIntent = Math.abs(event.deltaY) > Math.abs(event.deltaX);

    if (!isVerticalIntent) return;

    const scrollContainer = event.currentTarget.closest('.site-scroll-container');
    if (!scrollContainer) return;

    event.preventDefault();
    scrollContainer.scrollBy({ top: event.deltaY, left: 0, behavior: 'auto' });
  };

  return (
    <section className="scrolling-news-wrapper">
      <div className="marquee-border-top" />
      <Marquee
        pauseOnHover
        gradient={false}
        speed={38}
        direction="left"
        className="marquee-text"
      >
        <span className="marquee-inner">Latest News + Blogs</span>
        <span className="marquee-inner">Events Around Leerand</span>
      </Marquee>
      <div className="marquee-border-bottom" />

      <div className="news-intro">
        <span className="news-eyebrow">Campus rhythm</span>
        <h2>Stories from the week, the term and the wider Leerand community.</h2>
      </div>

      <div className="blogs-container-wrapper" onWheel={handleBlogWheel}>
        <div className="blogs-container">
          {blogItems.map((item) => (
            <article className="blog-card" key={item.title}>
              <div className="blog-image-wrap">
                <img src={item.image} alt={item.imageAlt} className="blog-image" />
                <span className="blog-status">{item.status}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">{item.category}</span>
                  <span className="blog-date">{item.date}</span>
                </div>
                <h3 className="blog-title">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="all-posts-row">
        <span className="all-posts-label">All Posts</span>
        <button className="all-posts-arrow-btn" aria-label="View all posts">
          <span className="all-posts-arrow-circle">
            <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21" cy="21" r="21" fill="#F5C518" />
              <g transform="translate(13, 14)">
                <path
                  d="M14,0h-2c0,2.39,1.06,4.53,2.73,6H0v2h14.73c-1.67,1.47-2.73,3.61-2.73,6h2c0-3.31,2.69-6,6-6v-2c-3.31,0-6-2.69-6-6Z"
                  fill="black"
                />
              </g>
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default ScrollingNews;
