<?php
/**
 * Plugin Name:       Content Inserter
 * Description:       A custom content inserter block with predefined allowed blocks
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            Ben Beard
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       content-inserter
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


function create_content_inserter_block() {
    register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_content_inserter_block' );
