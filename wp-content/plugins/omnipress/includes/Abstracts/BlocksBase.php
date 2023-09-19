<?php
/**
 * Abstract class for blocks registration class handler.
 *
 * @package Omnipress
 */

namespace Omnipress\Abstracts;

/**
 * Exit if accessed directly.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Abstract class for blocks registration class handler.
 *
 * @since 1.1.0
 */
abstract class BlocksBase {

	/**
	 * The "Late Static Binding" class name.
	 *
	 * @var string
	 */
	private static $called_by = '';

	/**
	 * Blocks directory path.
	 *
	 * @var string
	 */
	protected static $dirpath = '';

	/**
	 * Blocks args.
	 *
	 * @var array
	 */
	protected static $blocks = array();

	/**
	 * Returns full path to blocks directory.
	 *
	 * @return string
	 */
	abstract public static function get_dirpath();

	/**
	 * Returns blocks arguments as key:value paired array.
	 * key: being the foldername
	 * value: being the arguments for the block or `register_block_type` function args.
	 *
	 * @see {https://developer.wordpress.org/reference/functions/register_block_type} For `register_block_type` parameters.
	 * @return array
	 */
	abstract public static function get_blocks();

	/**
	 * Init blocks
	 *
	 * @return void
	 */
	public static function init() {

		$blocks = static::get_blocks();
		ksort( $blocks );

		self::$called_by = get_called_class();
		self::$dirpath   = trailingslashit( wp_normalize_path( static::get_dirpath() ) );
		self::$blocks    = $blocks;

		add_action( 'init', array( __CLASS__, 'init_blocks' ) );

		if ( method_exists( self::$called_by, 'register_category' ) ) {
			add_filter( 'block_categories_all', array( self::$called_by, 'register_category' ), PHP_INT_MAX );
		}
	}

	/**
	 * Initialize everything related to our blocks.
	 *
	 * @return void
	 */
	public static function init_blocks() {
		self::validate_blocks();
		self::register_blocks();
	}

	/**
	 * Validate blocks args and generated blocks folders.
	 *
	 * @return void
	 */
	public static function validate_blocks() {
		$blocks_folders = @scandir( self::$dirpath ); // @phpcs:ignore

		if ( is_array( $blocks_folders ) && ! empty( $blocks_folders ) ) {
			foreach ( $blocks_folders as $blocks_folder ) {

				if ( '.' === $blocks_folder || '..' === $blocks_folder ) {
					continue;
				}

				$folderpath = self::$dirpath . $blocks_folder;

				if ( ! is_dir( $folderpath ) ) {
					continue;
				}

				if ( ! file_exists( $folderpath . '/block.json' ) ) {
					/**
					 * Bail if current folder is not a block folder.
					 */
					continue;
				}

				if ( ! isset( self::$blocks[ $blocks_folder ] ) ) {
					/* translators: %s is the folder name of the generated block. */
					throw new \Exception( sprintf( __( '"%s" block is missing in blocks args. Please check the block args and generated blocks.', 'omnipress' ), $blocks_folder ) );
				}
			}
		}

	}

	/**
	 * Register blocks.
	 *
	 * @return void
	 */
	public static function register_blocks() {
		if ( is_array( self::$blocks ) && ! empty( self::$blocks ) ) {
			foreach ( self::$blocks as $foldername => $args ) {
				register_block_type( self::$dirpath . $foldername, $args );
			}
		}
	}

}
