import React from 'react';
import styles from './page.module.css';

//<li><strong>Hébergement du Site :</strong>
//                             <ul>
//                                 <li>Hébergeur : GitHub, Inc.</li>
//                                 <li>Adresse : 88 Colin P. Kelly Jr St, San Francisco, CA 94107, États-Unis</li>
//                                 <li>Infrastructure : GitHub Pages utilise une infrastructure cloud pour héberger les
//                                     sites,
//                                     avec des serveurs répartis dans différents centres de données.
//                                 </li>
//                             </ul>
//                         </li>

const CGU = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <h1>Conditions Générales d'Utilisation (CGU)</h1>

                <section>
                    <h2>1. Objet</h2>
                    <p>
                        Les présentes Conditions Générales d'Utilisation (CGU) définissent les modalités et conditions
                        d'utilisation des services proposés par Studio Phocéa, dont le siège social est situé au 6
                        boulevard Curie, 13013 Marseille, France. Elles régissent l'accès et la participation à la
                        formation "Comment créer et gérer une auto-entreprise" en format E-learning, ainsi que les
                        modalités d'accueil et les conditions de déroulement de la prestation.
                    </p>
                </section>

                <section>
                    <h2>2. Mentions Légales</h2>
                    <ul>
                        <li><strong>Dénomination Sociale :</strong> Studio Phocéa</li>
                        <li><strong>Forme Juridique :</strong> SASU</li>
                        <li><strong>Siège Social :</strong> 6 boulevard Curie, 13013 Marseille, France</li>
                        <li><strong>Numéro SIRET :</strong> 913 955 357 00011</li>
                        <li><strong>Directeur de la Publication :</strong> Eric Favata, Président</li>
                        <li><strong>Contact :</strong>
                            <ul>
                                <li>Email : gregoryfavatapro@gmail.com</li>
                                <li>Téléphone : +33 6 35 31 73 90</li>
                            </ul>
                        </li>
                        <li><strong>Hébergement du Site :</strong>
                            <ul>
                                <li>Hébergeur : GitHub, Inc.</li>
                                <li>Adresse : 88 Colin P. Kelly Jr St, San Francisco, CA 94107, États-Unis</li>
                                <li>Infrastructure : GitHub Pages utilise une infrastructure cloud pour héberger les
                                    sites,
                                    avec des serveurs répartis dans différents centres de données.
                                </li>
                            </ul>

                        </li>
                    </ul>
                </section>

                <section>
                    <h2>3. Prérequis</h2>
                    <p>Aucun prérequis spécifique n'est nécessaire pour participer à cette formation. Elle est ouverte à
                        toute personne souhaitant se lancer en tant qu'auto-entrepreneur ou améliorer la gestion de son
                        activité existante.</p>
                </section>

                <section>
                    <h2>4. Format de la Formation</h2>
                    <ul>
                        <li><strong>Type :</strong> E-learning (Formation en ligne) ou Présentielle</li>
                        <li><strong>Accès à la Plateforme :</strong> L’accès à la formation se fait via notre plateforme
                            dédiée de formation en ligne. Les informations de connexion sont envoyées par e-mail après
                            votre inscription.
                        </li>
                        <li><strong>Disponibilité :</strong> La plateforme est accessible 24 heures sur 24, 7 jours sur
                            7, permettant de suivre les cours à votre propre rythme.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>5. Objectifs de la Formation</h2>
                    <ul>
                        <li>Comprendre les étapes pour créer une auto-entreprise.</li>
                        <li>Maîtriser les aspects juridiques, fiscaux et sociaux liés à l'auto-entrepreneuriat.</li>
                        <li>Développer des compétences en gestion de l'activité quotidienne.</li>
                        <li>Apprendre à recruter et à gérer des salariés.</li>
                        <li>Optimiser les processus de rémunération et de protection sociale.</li>
                        <li>Élaborer une stratégie de retraite efficace.</li>
                        <li>Savoir choisir et rédiger des contrats de travail.</li>
                        <li>Anticiper et gérer la fin d’activité.</li>
                    </ul>
                </section>

                <section>
                    <h2>6. Durée de la Formation</h2>
                    <p>La formation est composée de 13 modules totalisant 11 heures et 30 minutes réparties comme suit
                        :</p>
                    <ul>
                        <li><strong>1 : Du projet à la structure</strong>
                            <ul>
                                <li>1.1 Comment bien définir son activité ? (1 heure)</li>
                                <li>1.2 Quel statut juridique choisir ? (45 minutes)</li>
                                <li>1.3 Comment réaliser son projet sans s’installer en indépendant ? (1 heure 15
                                    minutes)
                                </li>
                                <li>1.4 Quelles formalités remplir ? (1 heure 30 minutes)</li>
                                <li>1.5 Quelles aides pouvez-vous obtenir ? (30 minutes)</li>
                            </ul>
                        </li>
                        <li><strong>2 : L’exercice indépendant</strong>
                            <ul>
                                <li>2.1 Comment se rémunérer ? (45 minutes)</li>
                                <li>2.2 Quelle protection sociale choisir ? (45 minutes)</li>
                                <li>2.3 Comment se constituer une retraite ? (1 heure)</li>
                                <li>2.4 Comment bien choisir son régime fiscal ? (30 minutes)</li>
                                <li>2.5 Comment anticiper la fin d’activité ? (45 minutes)</li>
                            </ul>
                        </li>
                        <li><strong>3 : Les outils du travailleur indépendant</strong>
                            <ul>
                                <li>3.1 Comment gérer son activité au quotidien ? (1 heure)</li>
                                <li>3.2 Quels sont les contrats utiles au développement de l’activité ? (45 minutes)
                                </li>
                                <li>3.3 Comment recruter ses salariés ? (1 heure)</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>7. Modalités et Délais d’Accès</h2>
                    <ul>
                        <li><strong>Modalités d’Accès :</strong> Inscription en ligne via le site web de la formation.
                        </li>
                        <li><strong>Délais d’Accès :</strong>
                            <ul>
                                <li>Dans le cas du CPF, un délai de 10 jour ouvré doit être respecté.</li>
                                <li>Pour un financement personnel, les identifiants de connexion sont envoyés par
                                    courriel dans un délai de 24 heures après inscription.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>8. Tarifs</h2>
                    <p><strong>Formation Complète :</strong> 1500 € TTC</p>
                </section>

                <section>
                    <h2>9. Contacts</h2>
                    <ul>
                        <li>Email : gregoryfavatapro@gmail.com</li>
                        <li>Téléphone : +33 6 35 31 73 90</li>
                        <li>Adresse : 6 boulevard Curie, 13013 Marseille, France</li>
                    </ul>
                </section>

                <section>
                    <h2>10. Méthodes Mobilisées</h2>
                    <ul>
                        <li><strong>Cours en Ligne :</strong> Documents téléchargeables, cours écrits sous forme de
                            diaporama.
                        </li>
                        <li><strong>Supports Écrits :</strong> "Le guide de l’auto-entrepreneur".</li>
                        <li><strong>Exercices Pratiques :</strong> Études de cas.</li>
                        <li><strong>Suivi Personnalisé :</strong> Entretien avec le formateur en cas de difficultés,
                            forums de discussion, accès à un conseiller.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>11. Modalités d’Évaluation</h2>
                    <ul>
                        <li><strong>Évaluations Continues :</strong> Quiz et tests après chaque module pour valider les
                            acquis.
                        </li>
                        <li><strong>Certificat de Formation :</strong> Délivré à la fin de la formation après validation
                            de tous les modules.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>12. Accessibilité aux Personnes Handicapées</h2>
                    <p>
                        La formation est accessible aux personnes handicapées. Des aménagements spécifiques peuvent être
                        mis en place sur demande, tels qu’une assistance personnalisée. Pour toute demande particulière
                        concernant l’accessibilité, merci de nous contacter à l’avance pour que nous puissions mettre en
                        place les aménagements nécessaires.
                    </p>
                </section>

                <section>
                    <h2>13. Accompagnement des Publics Bénéficiaires</h2>
                    <h3>1. Suivi Individualisé :</h3>
                    <ul>
                        <li><strong>Tutorat :</strong> Chaque participant est assigné à un tuteur qui assure un suivi
                            régulier, répond aux questions et offre un soutien personnalisé.
                        </li>
                        <li><strong>Entretiens Réguliers :</strong> Sessions de coaching individuel si nécessaire pour
                            discuter des progrès, des difficultés rencontrées, et ajuster le plan de formation.
                        </li>
                        <li><strong>Feedback Continu :</strong> Retours réguliers sur les travaux et performances, avec
                            des conseils pour améliorer les compétences et atteindre les objectifs.
                        </li>
                    </ul>
                    <h3>2. Groupes de Travail et Forums :</h3>
                    <ul>
                        <li><strong>Communauté d’Apprentissage :</strong> Création de groupes de travail et de forums de
                            discussion en ligne pour favoriser l’entraide et le partage d’expériences entre
                            participants.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>14. Modalités d'Accueil et Conditions de Déroulement de la Prestation</h2>
                    <ul>
                        <li><strong>Modalités d'Accueil :</strong> Les modalités d’accueil sont formalisées et diffusées
                            par :
                            <ul>
                                <li>Email de Bienvenue : Envoi d’un email contenant toutes les informations d’accueil et
                                    les premières instructions de connexion.
                                </li>
                                <li>Entretien téléphonique : Entretien téléphonique d’accueil et d’aide à la première
                                    connexion.
                                </li>
                            </ul>
                        </li>
                        <li><strong>Conditions de Déroulement :</strong> Les conditions de déroulement de la prestation
                            sont formalisées et diffusées via :
                            <ul>
                                <li>Calendrier de Formation : Planning détaillé des sessions de formation en ligne.</li>
                                <li>Programme de Formation : Description des contenus et objectifs de chaque module
                                    (accessible sur notre site internet).
                                </li>
                                <li>Méthodes Pédagogiques : Explication des méthodes utilisées (quiz, forums).</li>
                                <li>Évaluation des Connaissances : Modalités d’évaluation des acquis des apprenants tout
                                    au long de la formation.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p>Ces modalités et conditions sont communiquées aux apprenants par le biais de courriels, du site
                        web, et des entretiens téléphoniques pour assurer une transparence et une organisation
                        optimale.</p>
                </section>

                <section>
                    <h2>15. Propriété Intellectuelle</h2>
                    <p>
                        Tous les contenus de la formation, y compris les textes, images, vidéos, logos, graphismes,
                        documents téléchargeables, sont protégés par les lois en vigueur sur la propriété
                        intellectuelle. Toute
                        reproduction, distribution, modification, ou utilisation à des fins commerciales ou autres sans
                        l'autorisation expresse de Studio Phocéa est strictement interdite.
                    </p>
                </section>

                <section>
                    <h2>16. Confidentialité et Protection des Données Personnelles</h2>
                    <p>
                        Studio Phocéa s'engage à protéger la confidentialité des informations personnelles des
                        apprenants.
                        Les données collectées lors de l'inscription et pendant la formation sont utilisées uniquement
                        pour la
                        gestion de la formation et ne sont jamais partagées avec des tiers sans le consentement
                        préalable de
                        l'apprenant, sauf en cas de nécessité légale.
                    </p>
                </section>

                <section>
                    <h2>17. Limitations de Responsabilité</h2>
                    <p>
                        Studio Phocéa ne pourra être tenu responsable des dommages directs ou indirects résultant de
                        l'accès ou de l'utilisation de la plateforme de formation, y compris les interruptions de
                        service, pertes
                        de données, virus ou autres problèmes techniques.
                    </p>
                </section>

                <section>
                    <h2>18. Droit Applicable et Juridiction Compétente</h2>
                    <p>
                        Les présentes CGU sont régies par le droit français. En cas de litige relatif à l'exécution ou à
                        l'interprétation des présentes CGU, et à défaut de résolution amiable, les tribunaux compétents
                        seront ceux du ressort de la Cour d'Appel de [votre région].
                    </p>
                </section>

                <section>
                    <h2>19. Acceptation des Conditions Générales d’Utilisation</h2>
                    <p>
                        L’inscription à la formation implique l’acceptation pleine et entière des présentes Conditions
                        Générales d’Utilisation. Studio Phocéa se réserve le droit de modifier ces conditions à tout
                        moment,
                        toute modification étant applicable dès sa publication sur le site web ou sa communication aux
                        apprenants.
                    </p>
                    <p>Ces conditions générales d'utilisation permettent de formaliser les modalités d'accueil et de
                        déroulement de la prestation tout en intégrant les mentions légales obligatoires pour assurer la
                        conformité de l'entreprise.</p>
                </section>
            </div>
        </div>
    );
};

export default CGU;