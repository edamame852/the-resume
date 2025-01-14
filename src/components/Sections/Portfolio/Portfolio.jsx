
import i18next from 'i18next';
import Section from '../../Layout/Section';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import useDetectOutsideClick from '../../../hooks/useDetectOutsideClick';
import porfolioImage1 from './images/portfolio-1.jpg';
import porfolioImage2 from './images/portfolio-2.jpg';
import porfolioImage3 from './images/portfolio-3.jpg';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function Portfolio() {
  const { t } = i18next;
  const portfolioItems = [
    {
      title: 'Python lib (PyPI) - mlpytools',
      description: '<Beta version> Applying machine learning algorithms via python',
      url: 'https://pypi.org/project/mlpytools/',
      image: porfolioImage1,
    },
    {
      title: 'Jekyll docs hosted by github pages',
      description: 'My personal note taking website',
      url: 'https://edamame852.github.io/the-docs/',
      image: porfolioImage2,
    },
    {
      title: 'Project title 3',
      description: 'Live demo of my personal Next.js resume website',
      url: 'https://edamame852.github.io/the-resume/jp',
      image: porfolioImage3,
    },
    // {
    //   title: 'Project title 4',
    //   description: 'Give a short description of your project here.',
    //   url: 'https://reactresume.com',
    //   image: porfolioImage4,
    // },
    // {
    //   title: 'Project title 5',
    //   description: 'Give a short description of your project here.',
    //   url: 'https://reactresume.com',
    //   image: porfolioImage5,
    // },
    // {
    //   title: 'Project title 6',
    //   description: 'Give a short description of your project here.',
    //   url: 'https://reactresume.com',
    //   image: porfolioImage6,
    // },
    // {
    //   title: 'Project title 7',
    //   description: 'Give a short description of your project here.',
    //   url: 'https://reactresume.com',
    //   image: porfolioImage7,
    // },
    // {
    //   title: 'Project title 8',
    //   description: 'Give a short description of your project here.',
    //   url: 'https://reactresume.com',
    //   image: porfolioImage8,
    // },
    // {
    //   title: 'Project title 9',
    //   description: 'Give a short description of your project here.',
    //   url: 'https://reactresume.com',
    //   image: porfolioImage9,
    // },
    // {
    //   title: 'Project title 10',
    //   description: 'Give a short description of your project here.',
    //   url: 'https://reactresume.com',
    //   image: porfolioImage10,
    // },
    // {
    //   title: 'Project title 11',
    //   description: 'Give a short description of your project here.',
    //   url: 'https://reactresume.com',
    //   image: porfolioImage11,
    // },
  ];
  return (
    <>
      <Section className="bg-neutral-800" sectionId="portfolio">
        <div className="flex flex-col gap-y-8">
          <h2 className="self-center text-xxl font-bold text-white">My Current Coding Projects</h2>
          <div className=" w-full columns-2 md:columns-3 lg:columns-4">
            {portfolioItems.map((item, index) => {
              const { title, image } = item;
              return (
                <div className="pb-6" key={`${title}-${index}`}>
                  <div
                    className={classNames(
                      'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                    )}>
                    <Image alt={title} className="h-full w-full" placeholder="blur" src={image} />
                    <ItemOverlay item={item} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
Portfolio.displayName = 'Portfolio';

const ItemOverlay = ({ item: { url, title, description } }) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef(null);

  const isBrowser = typeof window !== 'undefined';
  const isMobile = isBrowser ? window.matchMedia('(pointer: coarse)').matches : false;

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, [isMobile]);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <a
      className={classNames(
        'absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300',
        { 'opacity-0 hover:opacity-80': !mobile },
        showOverlay ? 'opacity-80' : 'opacity-0',
      )}
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      target="_blank"
      rel="noreferrer">
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
          <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
          <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
        </div>
        <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
      </div>
    </a>
  );

}