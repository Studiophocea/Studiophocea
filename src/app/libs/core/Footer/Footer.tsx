import React from 'react';
import classes from './Footer.module.css';
import Link from "next/link";

export const Footer = () => {


    return (
        <div className={classes.container} id="home">
            <Link href="/cgu"><p className={classes.link}>Conditions Générales d'Utilisation</p></Link>
            <p className={classes.copyright}>© studio phocea</p>
        </div>
    );
};
