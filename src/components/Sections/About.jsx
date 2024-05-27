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
import DownloadIcon from '../Icons/DownloadIcon';

export default function About() {
    const profileImageSrc = profilePic; // refactoring description and aboutItems
    const { t } = i18next;
    const description = t('about.description');
    const aboutItems = [
        { label: t('about.aboutItems.label.location'), text: t('about.aboutItems.text.location'), Icon: MapIcon },
        { label: t('about.aboutItems.label.age'), text: '26', Icon: CalendarIcon },
        { label: t('about.aboutItems.label.nationality'), text: t('about.aboutItems.text.nationality'), Icon: FlagIcon },
        { label: t('about.aboutItems.label.interests'), text: t('about.aboutItems.text.interests'), Icon: SparklesIcon },
        { label: t('about.aboutItems.label.undergrad'), text: t('about.aboutItems.text.undergrad'), Icon: AcademicCapIcon },
        { label: t('about.aboutItems.label.masters'), text: t('about.aboutItems.text.masters'), Icon: AcademicCapIcon },
        {
            label: t('about.aboutItems.label.employment'),
            text: t('about.aboutItems.text.employment'),
            Icon: BuildingOffice2Icon,
        },
    ];
    return (
        <section className='bg-neutral-800 px-4 py-16 md:py-24 lg:px-8'>
            <div className='mx-auto max-w-screen-lg'>
                <div className='grid grid-cols-1 gap-y-4 md:grid-cols-4'>

                    <div className='col-span-1 flex justify-center md:justify-start'>{/* This is the photos section */}
                        <div className='relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32'>
                            <Image src={profilePic} />
                        </div>
                    </div>

                </div>


            </div>
        </section>

    );
}
About.displayName = 'About';