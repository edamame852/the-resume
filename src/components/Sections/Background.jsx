//Thanks Sling Academy


import i18next from 'i18next';
import backgroundImage from "../../assets/header-background.webp";

export default function Background() {
    const { t } = i18next;
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
                    flexDirection: 'column', // Change to column layout
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}
            >
                <h1 style={{ fontSize: 50, color: 'white', fontStyle: 'inherit' }}>{t("background.intro")}</h1>
                <div style={{ fontSize: '1rem' }}> {/* Adjust font size for the rest of the text */}
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
            </div>
        </div>
    );
}