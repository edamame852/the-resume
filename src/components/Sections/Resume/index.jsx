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
      name: skills_section.languages.title,
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
          name: skills_section.frontend.fourth,
          level: 6,
        },
        {
          name: skills_section.frontend.fifth,
          level: 5,
        },
      ],
    },
    {
      name: skills_section.backend.title,
      skills: [
        {
          name: skills_section.backend.first,
          level: 6,
        },
        {
          name: skills_section.backend.second,
          level: 6,
        },
      ],
    },
    {
      name: skills_section.python.title,
      skills: [
        {
          name: skills_section.python.first,
          level: 8,
        },
        {
          name: skills_section.python.second,
          level: 5,
        },
        {
          name: skills_section.python.third,
          level: 8,
        },
        {
          name: skills_section.python.fourth,
          level: 7,
        },
        {
          name: skills_section.python.fifth,
          level: 7,
        },
        {
          name: skills_section.python.sixth,
          level: 7,
        },
      ],
    },
    {
      name: skills_section.devOps.title,
      skills: [
        {
          name: skills_section.devOps.first,
          level: 9,
        },
        {
          name: skills_section.devOps.second,
          level: 7,
        },
        {
          name: skills_section.devOps.third,
          level: 6,
        },
        {
          name: skills_section.devOps.fourth,
          level: 6,
        },
        {
          name: skills_section.devOps.fifth,
          level: 5,
        },
        {
          name: skills_section.devOps.sixth,
          level: 5,
        },
        {
          name: skills_section.devOps.seventh,
          level: 6,
        },
      ],
    },
    {
      name: skills_section.life.title,
      skills: [
        {
          name: skills_section.life.first,
          level: 7,
        },
        {
          name: skills_section.life.second,
          level: 6,
        },
        {
          name: skills_section.life.third,
          level: 8,
        },
        {
          name: <a href="http://www.google.com">{skills_section.life.fourth + "(Click me!)"}</a>,
          level: 6,
        },
        {
          name: skills_section.life.fifth,
          level: 6,
        }
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
