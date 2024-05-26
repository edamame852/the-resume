import {
    AcademicCapIcon,
    BuildingOffice2Icon,
    CalendarIcon,
    FlagIcon,
    MapIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import i18next from 'i18next';
import { memo } from 'react';
import Section from '../Layout/Section';

import profilePic from "../../assets/profilePic.jpg";

export default function About() {
    const profileImageSrc = profilePic; // refactoring description and aboutItems
    const { t } = i18next;
    const description = t('about.description');
    // const aboutItems = [
    //     { label: t('about.aboutItems.label.location'), text: t('about.aboutItems.text.location'), Icon: MapIcon },
    //     { label: t('about.aboutItems.label.age'), text: '26', Icon: CalendarIcon },
    //     { label: t('about.aboutItems.label.nationality'), text: t('about.aboutItems.text.nationality'), Icon: FlagIcon },
    //     { label: t('about.aboutItems.label.interests'), text: t('about.aboutItems.text.interests'), Icon: SparklesIcon },
    //     { label: t('about.aboutItems.label.undergrad'), text: t('about.aboutItems.text.undergrad'), Icon: AcademicCapIcon },
    //     { label: t('about.aboutItems.label.masters'), text: t('about.aboutItems.text.masters'), Icon: AcademicCapIcon },
    //     {
    //         label: t('about.aboutItems.label.employment'),
    //         text: t('about.aboutItems.text.employment'),
    //         Icon: BuildingOffice2Icon,
    //     },
    // ];
    return (
        <>
            <Image alt="about-me-image" className="h-full w-full object-cover" style={{ minWidth: "50%", minHeight: "50%", maxWidth: "50%", maxHeight: "50%" }} src={profileImageSrc} />
            <div className={classNames('grid grid-cols-1 gap-y-4', { 'md:grid-cols-4': !!profileImageSrc })}>
                {!!profileImageSrc && (
                    <div className="col-span-1 flex justify-center md:justify-start">
                        <div className="relative h-16 w-16 overflow-hidden rounded-xl md:h-24 md:w-24">
                            <Image alt="about-me-image" className="h-full w-full object-cover" style={{ minWidth: "50%", minHeight: "50%", maxWidth: "50%", maxHeight: "50%" }} src={profileImageSrc} />
                        </div>
                    </div>
                )}
                <div className={classNames('col-span-1 flex flex-col gap-y-6', { 'md:col-span-3': !!profileImageSrc })}>
                    <div className="flex flex-col gap-y-2">
                        <h2 className="text-2xl font-bold text-white">{t('about.aboutMe')}</h2>
                        <p className="prose prose-sm text-gray-300 sm:prose-base">{description}</p>
                    </div>
                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    </ul>
                </div>
            </div>
        </>



        /* // This is a failed attempt
        // <div className='mx-auto max-w-screen-lg'>
        //     <div className='flex flex-col md:flex-row'>
        //         <div className='md:w-1/2'>
        //             <div */
        //                 style={{
        //                     backgroundImage: `url(${backgroundImage.src})`,
        //                     backgroundPosition: 'center',
        //                     backgroundSize: 'cover',
        //                     backgroundRepeat: 'no-repeat',
        //                     width: '100%',
        //                     height: '500px', // Adjust the height as needed
        //                 }}
        //             ></div>
        //         </div>
        //         <div className='md:w-1/2 flex flex-col gap-y-6 md:ml-4'>
        //             <div className='flex flex-col gap-y-2'>
        //                 <h2 className='text-2xl font-bold text-white'>{t('about.aboutMe')}</h2>
        //                 <p className='prose prose-sm text-gray-300 sm:prose-base'>{t('about.description')}</p>
        //             </div>
        //             {aboutItems.map((item, index) => (
        //                 <div key={index} className='flex items-center gap-x-2 text-gray-300'>
        //                     <item.Icon className='w-5 h-5' />
        //                     <span>{item.label}:</span>
        //                     <span>{item.text}</span>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
    );
}
About.displayName = 'About';