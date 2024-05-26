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
        <>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ borderRadius: '30%', overflow: 'hidden' }}>
                    <Image
                        src="/profilePic.jpg"
                        loading="lazy"
                        width="200"
                        height="200"
                        alt="Profile Picture"
                    />
                </div>
                <div className='container'>
                    <div className='item item-1'>Item 1</div>
                    <div className='item item-2'>Item 2</div>
                </div>
            </div>
            <br />
        </>
    );
}
About.displayName = 'About';