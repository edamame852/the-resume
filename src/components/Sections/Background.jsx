import i18next from 'i18next';
import backgroundImage from "../../assets/header-background.webp";
import InstagramIcon from '../Icons/InstgramIcon';

export default function Background() {
    const { t } = i18next;

    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/miller_cyc/', '_blank');
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
                    borderRadius: '10px',
                    maxWidth: '1000px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}
            >
                <h1 style={{ fontSize: 50, color: 'white', fontStyle: 'inherit' }}>{t("background.intro")}</h1>
                <div style={{ fontSize: '1rem' }}>
                    <br />
                    <p style={{ fontSize: "0.9rem" }} className="text-stone-200 sm:text-base lg:text-md">
                        {t('background.description.entry1')}
                        <strong className="text-stone-50 underline">{t('background.description.entry2')}</strong>
                        {t('background.description.entry3')}
                        <strong className="text-stone-100">{t('background.description.entry4')}</strong>
                        {t('background.description.entry5')}
                    </p>
                    <br />
                    <p style={{ fontSize: "0.9rem" }} className="text-stone-200 sm:text-base lg:text-lg">
                        {t('background.description.entry6')}
                        <strong className="text-stone-100">{t('background.description.entry7')}</strong>
                        {t('background.description.entry8')}
                        <strong className="text-stone-100">{t('background.description.entry9')}</strong>
                        {t('background.description.entry10')} <strong className="text-stone-100">{t('background.description.entry11')}</strong>.
                    </p>
                </div>
                <br />
                <p style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <a href="#" onClick={handleInstagramClick} style={{ cursor: 'pointer' }}>
                        <InstagramIcon size={8} color='light-purple' />
                    </a>
                </p>
            </div>
        </div>
    );
}