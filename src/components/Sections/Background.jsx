import i18next from 'i18next';
import backgroundImage from "../../assets/header-background.webp";
import InstagramIcon from '../Icons/InstgramIcon';
import LinkedinIcon from '../Icons/LinkedinIcon';
import YoutubeIcon from '../Icons/YoutubeIcon';
import GithubIcon from '../Icons/GithubIcon';
import DownloadIcon from '../Icons/DownloadIcon';

export default function Background() {
    const { t } = i18next;
    const paragraphSize = "0.9rem";
    const iconSize = 7;
    const resumeInput = t("background.hero.resume");

    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/miller_cyc/', '_blank');
    };
    const handleLinkedinIconClick = () => {
        window.open('https://www.linkedin.com/in/milton-chow-8103b4171/', '_blank');
    };
    const handleYoutubeIconClick = () => {
        window.open('https://www.youtube.com/@Taking_You_To', '_blank');
    };
    const handleGithubIconClick = () => {
        window.open('https://github.com/edamame852', '_blank');
    };
    const handleResumeIconClick = () => {
        window.open('https://docs.google.com/document/d/1a6TKTO8iEPA03VYfYEwXsmwIIETobmPR98sWrw08ZGg/edit?usp=sharing', '_blank');
    };

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "100vh",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            }}
        >
            {/* Centered Overlay */}
            <div
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '2rem',
                    borderRadius: '50px',
                    maxWidth: '1000px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}
            >
                <h1 style={{ fontSize: 60, color: 'white', fontStyle: 'inherit', fontFamily: 'sans-serif', fontWeight: 'bold' }}>{t("background.intro")}</h1>
                <div style={{ fontSize: '1rem' }}>
                    <br />
                    <p style={{ fontSize: paragraphSize, fontFamily: 'sans-serif' }} className="text-stone-200 sm:text-base lg:text-md">
                        {t('background.description.entry1')}
                        <strong className="text-stone-50 underline">{t('background.description.entry2')}</strong>
                        {t('background.description.entry3')}
                        <strong className="text-stone-100">{t('background.description.entry4')}</strong>
                        {t('background.description.entry5')}
                    </p>
                    <br />
                    <p style={{ fontSize: paragraphSize, fontFamily: 'sans-serif' }} className="text-stone-200 sm:text-base lg:text-lg">
                        {t('background.description.entry6')}
                        <strong className="text-stone-100">{t('background.description.entry7')}</strong>
                        {t('background.description.entry8')}
                        <strong className="text-stone-100">{t('background.description.entry9')}</strong>
                        {t('background.description.entry10')} <strong className="text-stone-100">{t('background.description.entry11')}</strong>.
                    </p>
                </div>
                <br />
                <p style={{ display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                    <a href="#" onClick={handleInstagramClick} style={{ cursor: 'pointer' }}>
                        <InstagramIcon size={iconSize} style={{ color: 'purple' }} />
                    </a>
                    <a href="#" onClick={handleLinkedinIconClick} style={{ cursor: 'pointer' }}>
                        <LinkedinIcon size={iconSize} style={{ color: '#0A66C2' }} />
                    </a>
                    <a href="#" onClick={handleYoutubeIconClick} style={{ cursor: 'pointer' }}>
                        <YoutubeIcon size={iconSize} style={{ color: '#FF0000' }} />
                    </a>
                    <a href="#" onClick={handleGithubIconClick} style={{ cursor: 'pointer' }}>
                        <GithubIcon size={iconSize} style={{ color: 'white' }} />
                    </a>
                </p>
                {/* I'm generalizeing DownloadIcon here, This section is for resume downloading action */}
                <p style={{ display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                    <a href="#" onClick={handleResumeIconClick} style={{ cursor: 'pointer' }}>
                        <DownloadIcon input={resumeInput} size={5.4} style={{ color: 'white' }} />
                    </a>
                </p>
            </div>
        </div>
    );
}