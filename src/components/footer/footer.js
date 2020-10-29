import React from 'react'
import './footer.css'
import JumiaLogo from '../../jumia-logo.svg';

function Footer() {
    const services = [
        {
            title: 'Aide & FAQ',
            link: '#'
        },
        {
            title: 'Contactez-nous',
            link: '#'
        },
        {
            title: 'Modes de paiment',
            link: '#'
        },
        {
            title: 'Modes de livraison',
            link: '#'
        },
        {
            title: 'Signaler un Produit',
            link: '#'
        }

    ];
    const abouts = [
        {
            title: 'Qui sommes-nous',
            link: '#'
        },
        {
            title: 'Carriéres',
            link: '#'
        },
        {
            title: 'Politique de Confidentialité',
            link: '#'
        },
        {
            title: 'Conditions Générales dUtilistation',
            link: '#'
        }

    ];

    const gagnez = [
        {
            title: 'Devenez Ambassadeur Jumia',
            link: '#'
        },
        {
            title: 'Devenez partenaire de Jumia',
            link: '#'
        }
    ]

    const pays = [
        {
            title: 'Cote dIvoire',
            link: '#'
        },
        {
            title: 'Nigeria',
            link: '#'
        },
        {
            title: 'Egypt',
            link: '#'
        },
        {
            title: 'Senegal',
            link: '#'
        },
        {
            title: 'Ghana',
            link: '#'
        },
        {
            title: 'Tunisie',
            link: '#'
        },
        {
            title: 'Kenya',
            link: '#'
        },
        {
            title: 'Uganda',
            link: '#'
        },
        {
            title: 'Maroc',
            link: '#'
        },
    ]

    const socials = [
        {
            icon: <i className="fab fa-facebook-f"></i>,
            link: '#'
        },
        {
            icon: <i className="fab fa-twitter"></i>,
            link: '#'
        },
        {
            icon: <i className="fab fa-instagram"></i>,
            link: '#'
        },
    ]

    const paiments = [
        {
            icon: <i className="fab fa-paypal"></i>,
            link: '#'
        }
    ]

    const middle_sections = [
        {
            title: 'SERVICE CLIENT',
            content: services
        },
        {
            title: 'A PROPOS',
            content: abouts
        },
        {
            title: 'GANGNEZ DE LARGENT AVEC JUMIA',
            content: gagnez
        },
        {
            title: 'SITES JUMIA',
            content: pays,
            classRow: 'row last-section',
            className: 'col-6'
        },
        {
            title: 'RETROUVEZ-NOUS SUR',
            content: socials
        },
        {
            title: 'MODES DE PAIMENTS',
            content: paiments
        },
    ]

    return (
        <div className="footer">
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img
                                className="footer__logo"
                                alt=""
                                src={JumiaLogo}
                            />
                        </div>
                        <div className="col-6 footer_col-form">
                            <h6 className="footer_section-title"><strong>NOUVEAU SUR JUMIA ?</strong></h6>
                            <p className="footer_section-content">Inscrivez-vous a nos communications pour recevoir nos meilleures offres!</p>
                            <div className="row footer_offers-form">
                                <input className="col-8" placeholder="Entrez votre adresse e-mail" />
                                <button className="col footer-button">HOMME</button>
                                <button className="col footer-button">FEMME</button>
                            </div>

                        </div>
                        <div className="col">
                            <div className="media footer_media-icon">
                                <i className="fas fa-shopping-basket basket"></i>
                                <div className="media-body ml-3">
                                    <h6 className="footer_section-title"><strong>JUMIA DANS VOTRE POCHE!</strong></h6>
                                    <p className="footer_section-content">Telechargez notre application gratuite</p>
                                    <div className="row footer_app-links">
                                        <button className="col footer-button"><i className="fab fa-apple"></i> App Store</button>
                                        <button className="col footer-button"><i className="fab fa-google-play"></i> Google Play</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_middle">
                <div className="container">
                    <div className="row">
                        {middle_sections.map((section, index) => (
                            <div key={index} className="col-3 footer_section">
                                <h6 className="footer_section-title"><strong>{section.title}</strong></h6>
                                <ul className={section.classRow}>
                                    {section.content.map((item, index) => (
                                        <li key={index} className={section.className + ' footer_section-content'}><a href={item.link}>{item.title}</a></li>
                                    ))}
                                </ul>
                                {section.content.map((item, index) => (
                                    <span key={index} className="footer_section-content footer_icons"><a href={item.link}>{item.icon}</a></span>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row">
                        <div className="col">1</div>
                        <div className="col">1</div>
                        <div className="col">1</div>
                        <div className="col">1</div>
                        <div className="col">1</div>
                        <div className="col">1</div>
                        <div className="col">1</div>
                        <div className="col">1</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
