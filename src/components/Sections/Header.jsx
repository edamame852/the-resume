import React, { memo } from 'react';
import classNames from 'classnames';


const Header = memo(({ inputs }) => {
  const baseClass =
    '-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100';
  const activeClass = classNames(baseClass, 'text-orange-500');
  const inactiveClass = classNames(baseClass, 'text-neutral-100');
  return (
    <header className="fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block">
      <nav className="flex justify-between">
        <div className="flex gap-x-8">
          {inputs.selectLanguage.label}
        </div>
        {/* <div>
          <div className="mr-4">{inputs[0]}</div> <div className="mr-4">{inputs[1]}</div>
          <label className="text-neutral-50 mb-2" htmlFor="language-select">
            {t('header.missingCountryFlag')}
          </label>
          <a
            className="text-neutral-50 mr-10 mb-2"
            href="https://chromewebstore.google.com/detail/country-flag-fixer/jhcpefjbhmbkgjgipkhndplfbhdecijh">
            {t('header.href')}
          </a>
          <label className="text-neutral-100" htmlFor="language-select">
            {t('header.selectLanguage.label')}
          </label>
          <select
            className="ml-2 rounded-md bg-neutral-800 py-1 px-2 text-neutral-100"
            id="language-select"
            onChange={e => handleLanguageChange(e.target.value)}
            style={{
              paddingRight: '2rem', // Increase the right padding to make space for the arrow
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 0.5rem center', // Adjust the position of the arrow icon
              appearance: 'none', // Remove the default arrow
            }}
            value={router.locale}>
            <option value="en">{t('header.selectLanguage.english')}</option>
            <option value="jp">{t('header.selectLanguage.japanese')} </option>
          </select>
        </div> */}
      </nav>
    </header>
  );
});
Header.displayName = 'Header';
export default Header;