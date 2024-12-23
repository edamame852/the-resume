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

import Section from '../Layout/Section';

import profilePic from "../../assets/profilePic.jpg";

export default function About() {
    const profileImageSrc = profilePic; // refactoring description and aboutItems
    const { t } = i18next;
    const description = t('about.description');

    // Birthday Logic added on Dec 15, 2024
    const birthday = new Date('1998-01-06');
    const calculateAge = (birthday) => {
        const today = new Date();
        let age = today.getFullYear() - birthday.getFullYear();
        const month = today.getMonth() - birthday.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
            age--;
        }
        return age;
    };
    const age = calculateAge(birthday);

    const aboutItems = [
        { label: t('about.aboutItems.label.location'), text: t('about.aboutItems.text.location'), Icon: MapIcon },
        { label: t('about.aboutItems.label.age'), text: age.toString(), Icon: CalendarIcon },
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
        <Section className="bg-neutral-800" sectionId="about">
            <div className={classNames('grid grid-cols-1 gap-y-4', { 'md:grid-cols-4': !!profileImageSrc })}>
                {!!profileImageSrc && (
                    <div className="col-span-1 flex justify-center md:justify-start">
                        <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
                            <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
                        </div>
                    </div>
                )}
                <div className={classNames('col-span-1 flex flex-col gap-y-6', { 'md:col-span-3': !!profileImageSrc })}>
                    <div className="flex flex-col gap-y-2">
                        <h2 className="text-4xl font-bold text-white">{t('about.aboutMe')}</h2>
                        <p className="prose prose-sm text-gray-300 sm:prose-base">{description}</p>
                    </div>
                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {aboutItems.map(({ label, text, Icon }, idx) => (
                            <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                                {Icon && <Icon className="h-5 w-5 text-white" />}
                                <span className="text-sm font-bold text-white">{label}:</span>
                                <span className=" text-sm text-gray-300">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>

    );
}
About.displayName = 'About';