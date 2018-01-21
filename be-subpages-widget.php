<?php
/*
Plugin Name: BE Subpages Widget
Plugin URI: http://www.billerickson.net
Description: Display section subpages, using a WordPress widget or Gutenberg block
Version: 2.0
Author: Bill Erickson
Author URI: http://www.billerickson.net
License: GPLv2
*/

//  Exit if accessed directly.
defined('ABSPATH') || exit;

// Include the original widget
require_once( plugin_dir_path( __FILE__ ) . 'widget.php' );

/**
 * Enqueue block editor-only JavaScript and CSS
 *
 */
function be_subpages_widget_block_editor_scripts()
{

    // Make paths variables so we don't write em twice ;)
    $blockPath = '/assets/js/editor.blocks.js';
    $editorStylePath = '/assets/css/blocks.editor.css';

    // Enqueue the bundled block JS file
    wp_enqueue_script(
        'be-subpages-widget-block-js',
        plugins_url( $blockPath, __FILE__ ),
        [ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-api' ],
        filemtime( plugin_dir_path(__FILE__) . $blockPath )
    );

    // Enqueue optional editor only styles
/*
    wp_enqueue_style(
        'be-subpages-widget-block-editor-css',
        plugins_url( $editorStylePath, __FILE__),
        [ 'wp-blocks' ],
        filemtime( plugin_dir_path( __FILE__ ) . $editorStylePath )
    );
*/
}
add_action( 'enqueue_block_editor_assets', 'be_subpages_widget_block_editor_scripts' );


/**
 * Enqueue front end and editor JavaScript and CSS
 */
function be_subpages_widget_block_scripts()
{
    // Make paths variables so we don't write em twice ;)
    $stylePath = '/assets/css/blocks.style.css';

    // Enqueue frontend and editor block styles
    wp_enqueue_style(
        'be-subpages-widget-block-css',
        plugins_url($stylePath, __FILE__),
        [ 'wp-blocks' ],
        filemtime(plugin_dir_path(__FILE__) . $stylePath )
    );

}
//add_action( 'enqueue_block_assets', 'be_subpages_widget_block_scripts');

/**
 * Register callback for block
 *
 */
function be_subpages_widget_register_block_callback() {

	if( ! function_exists( 'register_block_type' ) )
		return;

	register_block_type( 'be/list-subpages', [
	    'render_callback' => 'be_subpages_widget_block_callback',
	] );

}
add_action( 'plugins_loaded', 'be_subpages_widget_register_block_callback' );

/**
 * Callback for block
 *
 */
function be_subpages_widget_block_callback( $attributes ) {

	$loop = new WP_Query( array(
		'post_type' => 'page',
		'post_parent' => intval( $attributes[ 'parentId' ] ),
		'orderby' => 'menu_order',
		'order' => 'ASC',
	));

	$output = '';
	if( $loop->have_posts() ):
		$output .= '<ul class="wp-block-be-list-subpages">';
		while( $loop->have_posts() ) : $loop->the_post();
			$output .= '<li><a href="' . get_permalink() . '">' . get_the_title() . '</a></li>';
		endwhile;
		$output .= '</ul>';
	endif;
	wp_reset_postdata();

	return $output;
}
