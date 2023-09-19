<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'thuynguyen' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '^Nd~]&/RU$0vk@W?Q=1yd!!I)=wBSoMDZpwS1@;_|#(icYl_/Ib_[`/[%Nx!a@u[' );
define( 'SECURE_AUTH_KEY',  '-R~r52K&*QhX-@3)~U{[%-X;P5rs/UvA*Ceq5np)a5hv%lgiuMKy|gA_XUZ/# 7*' );
define( 'LOGGED_IN_KEY',    'DXMW~emA{7=j:3l{M2=w$k$X>Oev9bz%rwEO>keXiOd`5,NFdrfy?Q(U8tk#VKN8' );
define( 'NONCE_KEY',        'BV-i:=XDn0c4U{3/Hi?}%5^N9&zjwo_`N 1w*Jj:EoX$fSuSj`3<@n/r$T+qk]l9' );
define( 'AUTH_SALT',        '0Tj!y:>F9WG}_b7X.7s,1A+%r?xc_Vn$TPkw~{;|Qo+r+2QGygyfqz{RlmnUe8AB' );
define( 'SECURE_AUTH_SALT', 'W7j#P&-d|&%OWt(EO`9S`JQ0~DWP+?`%boNcqN%0,U/HA}qZ<#|^JShs!.~OM1|;' );
define( 'LOGGED_IN_SALT',   '#sj$5^hrAI_- tUYM@w0`_S7]sa,y8@X%s0>z}Swv_ P!!.k F-;G NOVryV_;1}' );
define( 'NONCE_SALT',       'QLv0G+`9r1(dnV$[|pkkFn-,M*)k%>XyMKeLVs-Z2ub5wTM=d{ZON@d`/dbwLS]s' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
