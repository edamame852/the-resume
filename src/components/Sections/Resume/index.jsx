import { memo } from 'react';

import { SectionId, skills } from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import { SkillGroup } from './Skills';
import TimelineItem from './TimelineItem';
import i18next from 'i18next';

export default function Resume() {
  const { t } = i18next;
  const education_section = t('resume.education');

  // Education Section
  const education = [
    {
      date: education_section.first.date,
      location: education_section.first.location,
      title: education_section.first.title,
      // content: <p>{education_section.first.content}</p>
      content: education_section.first.content
    },
    {
      date: education_section.second.date,
      location: education_section.second.location,
      title: education_section.second.title,
      content: education_section.second.content,
    },
  ];

  // Experience Section
  const experience = [
    {
      date: 'March 2010 - Present',
      location: 'Awesome Development Company',
      title: 'Senior UX Engineer',
      content: (
        <p>
          Describe work, special projects, notable achievements, what technologies you have been working with, and
          anything else that would be useful for an employer to know.
        </p>
      ),
    },
    {
      date: 'March 2007 - February 2010',
      location: 'Garage Startup Studio',
      title: 'Junior bug fixer',
      content: (
        <p>
          Describe work, special projects, notable achievements, what technologies you have been working with, and
          anything else that would be useful for an employer to know.
        </p>
      ),
    },
  ];

  // Skills Section
  const skills = [
    {
      name: 'Spoken languages',
      skills: [
        {
          name: 'English',
          level: 10,
        },
        {
          name: 'Cantonese',
          level: 10,
        },
        {
          name: 'Mandarin',
          level: 9,
        },
        {
          name: 'Japanese',
          level: 6,
        },
      ],
    },
    {
      name: 'Frontend development',
      skills: [
        {
          name: 'React',
          level: 7,
        },
        {
          name: 'Typescript',
          level: 5,
        },
      ],
    },
    {
      name: 'Backend development',
      skills: [
        {
          name: 'Node.js',
          level: 8,
        },
        {
          name: 'Rust',
          level: 5,
        },
        {
          name: 'Golang',
          level: 4,
        },
      ],
    },
    {
      name: 'Python Development',
      skills: [
        {
          name: 'Pypi releases',
          level: 9,
        },
        {
          name: 'Flutter',
          level: 4,
        },
        {
          name: 'Swift',
          level: 10,
        },
      ],
    },
    {
      name: 'DevOps',
      skills: [
        {
          name: 'Pypi releases',
          level: 9,
        },
        {
          name: 'Flutter',
          level: 4,
        },
        {
          name: 'Swift',
          level: 10,
        },
      ],
    },
  ];


  return (
    <>
      <Section className="bg-neutral-100" sectionId="resume">
        <div className="flex flex-col divide-y-2 divide-neutral-300">
          <ResumeSection title="Education">
            {education.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}

          </ResumeSection>
          <ResumeSection title="Work">
            {experience.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
          <ResumeSection title="Skills">
            <p className="pb-8">Here you can show a snapshot of your skills to show off to employers</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {skills.map((skillgroup, index) => (
                <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
              ))}
            </div>
          </ResumeSection>
        </div>
      </Section>
    </>

  );
};

Resume.displayName = 'Resume';
