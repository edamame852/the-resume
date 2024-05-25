import classNames from 'classnames';
import { memo } from 'react';

const Section = memo(({ children, sectionId, noPadding = false, className }) => {
    return (
        <section
            id={sectionId}
            className={classNames(className, {
                'px-4 py-16 md:py-24 lg:px-8': !noPadding,
            })}
        >
            <div className={classNames({ 'mx-auto max-w-screen-lg': !noPadding })}>{children}</div>
        </section>
    );
});

Section.displayName = 'Section';
export default Section;