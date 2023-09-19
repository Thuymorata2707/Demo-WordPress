<?php
/**
 * Main class for handling blocks registration.
 *
 * @package Omnipress
 */

namespace Omnipress;

use Omnipress\Abstracts\BlocksBase;

/**
 * Exit if accessed directly.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Main class for handling blocks registration.
 *
 * @since 1.1.0
 */
class Blocks extends BlocksBase {

	/**
	 * {@inheritDoc}
	 */
	public static function get_dirpath() {
		return OMNIPRESS_PATH . 'assets/blocks';
	}

	/**
	 * {@inheritDoc}
	 */
	public static function get_blocks() {
		return array(
			'heading'    => array(),
			'slider'     => array(),
			'custom-css' => array(),
			'team'       => array(),
		);
	}

	/**
	 * {@inheritDoc}
	 */
	public static function register_category( $block_categories ) {
		return array_merge(
			array(
				array(
					'slug'  => 'omnipress',
					'title' => __( 'Omnipress', 'omnipress' ),
				),
			),
			$block_categories,
		);
	}
}
