import React from 'react';
import styles from './page.module.css';

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
                    <p>
                        Aucun prérequis spécifique n'est nécessaire pour participer à cette formation. Elle est ouverte
                        à
                        toute personne souhaitant se lancer en tant qu'auto-entrepreneur ou améliorer la gestion de son
                        activité existante.
                    </p>
                </section>

                <section>
                    <h2>4. Format de la Formation</h2>
                    <ul>
                        <li><strong>Type :</strong> E-learning (Formation en ligne)</li>
                        <li><strong>Accès à la Plateforme :</strong> L’accès à la formation se fait via notre plateforme
                            dédiée de formation en ligne. Les informations de connexion sont envoyées par e-mail après
                            votre inscription.
                        </li>
                        <li><strong>Disponibilité :</strong> La plateforme est accessible 24 heures sur 24, 7 jours sur
                            7, permettant de suivre les cours à votre propre rythme.
                        </li>
                    </ul>
                </section>

                {/* Add other sections in the same way */}
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
                    <p>
                        La formation est composée de 13 modules totalisant 11 heures et 30 minutes réparties comme suit
                        :
                    </p>
                    <ul>
                        <li><strong>1 : Du projet à la structure</strong></li>
                        <ul>
                            <li>1.1 Comment bien définir son activité ? (1 heure)</li>
                            <li>1.2 Quel statut juridique choisir ? (45 minutes)</li>
                            <li>1.3 Comment réaliser son projet sans s’installer en indépendant ? (1 heure 15 minutes)
                            </li>
                            <li>1.4 Quelles formalités remplir ? (1 heure 30 minutes)</li>
                            <li>1.5 Quelles aides pouvez-vous obtenir ? (30 minutes)</li>
                        </ul>
                        <li><strong>2 : L’exercice indépendant</strong></li>
                        <ul>
                            <li>2.1 Comment se rémunérer ? (45 minutes)</li>
                            <li>2.2 Quelle protection sociale choisir ? (45 minutes)</li>
                            <li>2.3 Comment se constituer une retraite ? (1 heure)</li>
                            <li>2.4 Comment bien choisir son régime fiscal ? (30 minutes)</li>
                            <li>2.5 Comment anticiper la fin d’activité ? (45 minutes)</li>
                        </ul>
                        <li><strong>3 : Les outils du travailleur indépendant</strong></li>
                        <ul>
                            <li>3.1 Comment gérer son activité au quotidien ? (1 heure)</li>
                            <li>3.2 Quels sont les contrats utiles au développement de l’activité ? (45 minutes)</li>
                            <li>3.3 Comment recruter ses salariés ? (1 heure)</li>
                        </ul>
                    </ul>
                </section>

                {/* Add more sections as needed */}
            </div>
        </div>
    );
};

export default CGU;
