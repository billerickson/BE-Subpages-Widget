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
