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
  const experience_section = t('resume.experience');
  const skills_section = t('resume.skills');

  // function generateArray()

  // Education Section
  const education = [
    {
      date: education_section.first.date,
      location: education_section.first.location,
      title: education_section.first.title,
      content: <p>{education_section.first.content}</p>
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
      date: experience_section.first.date,
      location: experience_section.first.location,
      title: experience_section.first.title,
      content: <p>{experience_section.first.content}</p>,
    },
    {
      date: experience_section.second.date,
      location: experience_section.second.location,
      title: experience_section.second.title,
      content: (
        <p>
          {experience_section.second.content}
        </p>
      ),
    },
  ];

  // Skills Section
  const skills = [
    {
      name: (
        <p>
          {skills_section.languages.title}
        </p>
      ),
      skills: [
        {
          name: skills_section.languages.first,
          level: 10,
        },
        {
          name: skills_section.languages.second,
          level: 10,
        },
        {
          name: skills_section.languages.third,
          level: 9,
        },
        {
          name: skills_section.languages.fourth,
          level: 5,
        },
        {
          name: skills_section.languages.fifth,
          level: 7,
        },
        {
          name: skills_section.languages.sixth,
          level: 3,
        }
      ],
    },
    {
      name: skills_section.frontend.title,
      skills: [
        {
          name: skills_section.frontend.first,
          level: 5,
        },
        {
          name: skills_section.frontend.second,
          level: 5,
        },
        {
          name: skills_section.frontend.third,
          level: 4,
        },
        {
          name: 'i18next',
          level: 6,
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
          name: 'Java',
          level: 6,
        },
        {
          name: 'Springboot',
          level: 6,
        },
      ],
    },
    {
      name: 'Python Development',
      skills: [
        {
          name: 'Pypi releases',
          level: 8,
        },
        {
          name: 'logger',
          level: 5,
        },
        {
          name: 'Pandas',
          level: 8,
        },
        {
          name: 'poetry',
          level: 7,
        },
        {
          name: 'pytest',
          level: 7,
        },
        {
          name: 'tox',
          level: 7,
        },
      ],
    },
    {
      name: 'DevOps',
      skills: [
        {
          name: 'Github Action',
          level: 9,
        },
        {
          name: 'Jenkins',
          level: 7,
        },
        {
          name: 'Docker',
          level: 6,
        },
      ],
    },
    {
      name: 'Life',
      skills: [
        {
          name: 'Snowboarding',
          level: 7,
        },
        {
          name: 'Cooking',
          level: 7,
        },
        {
          name: 'Diving',
          level: 8,
        },
        {
          name: <a href="http://www.google.com">{"Auto AV systems (Click me!)"}</a>,
          level: 8,
        },
      ],
    },
  ];


  return (
    <>
      <Section className="bg-neutral-100" sectionId="resume">
        <div className="flex flex-col divide-y-2 divide-neutral-300">
          <ResumeSection title={education_section.name}>
            {education.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}

          </ResumeSection>
          <ResumeSection title={experience_section.name}>
            {experience.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
          <ResumeSection title={skills_section.name}>
            <p className="pb-8">{skills_section.content}</p>
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
