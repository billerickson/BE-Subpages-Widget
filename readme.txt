=== BE Subpages Widget ===
Contributors: billerickson
Tags: widget, subpages, menu
Requires at least: 3.0
Tested up to: 3.3.2
Stable tag: 1.2
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Lists subpages of the current section

== Description ==

This widget will dynamically list a section's subpages. When on a page, it will find the section's top level page and list its children. 

It can also include the current page's subpages in listing.

You can customize the listing with the following filters: 
be_subpages_widget_args - modifies the arguments passed to wp_list_pages
be_subpages_page_title - customize the page title

Contributors:
- [billerickson](http://profiles.wordpress.org/billerickson)
- [scil](http://profiles.wordpress.org/scil/)

[Support Forum](https://github.com/billerickson/BE-Subpages-Widget/issues)

== Changelog ==

= 1.2 =
* Add class for first menu item
* Add filter for widget classes
* Add filter for widget title
* Sort by menu order
* Add a depth parameter to the args filter

= 1.1 =
* Allow deeper menu (current page's subpages)
* French Translation
* Add 'widget_subpages_current_page' class to current menu item
* Add be_subpages_page_title filter
* Thanks to Cedric Houbart of SCIL for this set of changes

= 1.0 =
* Release of plugin
