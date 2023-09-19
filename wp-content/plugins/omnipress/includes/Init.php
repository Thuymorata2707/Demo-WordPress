<?php
/**
 * Main file for omnipress plugin.
 *
 * @package Omnipress
 */

namespace Omnipress;

use Omnipress\Admin\Admin;
use Omnipress\RestApi\RestApi;

/**
 * Exit if accessed directly.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Main file for omnipress plugin.
 *
 * @since 1.1.0
 */
class Init {

	/**
	 * This object instance.
	 *
	 * @var \Omnipress\Init
	 */
	protected static $instance = null;

	/**
	 * Returns this object instance.
	 *
	 * @return \Omnipress\Init
	 */
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Class construct.
	 */
	public function __construct() {
		Blocks::init();
		Admin::init();
		RestApi::init();
	}

}
