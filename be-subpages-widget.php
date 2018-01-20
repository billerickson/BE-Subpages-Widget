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
