=== BE Subpages Widget ===
Contributors: billerickson
Tags: widget, subpages, menu
Requires at least: 3.0
Tested up to: 5.5
Stable tag: 1.7
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Lists subpages of the current section

== Description ==

This widget will dynamically list a section's subpages. When on a page, it will find the section's top level page and list its children.

It can also include the current page's subpages in listing.

You can customize the listing with the following filters:
be_subpages_widget_args - modifies the arguments passed to wp_list_pages
be_subpages_widget_display_override - determine when the widget is displayed
be_subpages_widget_override_post - change the current post
be_subpages_widget_parents - customize the hierarchy used in querying subpages
be_subpages_widget_title - customize the widget title
be_subpages_page_title - customize the page title
be_subpages_widget_class - customize the classes applied to pages

Contributors:
- [billerickson](http://profiles.wordpress.org/billerickson)
- [scil](http://profiles.wordpress.org/scil/)
- [jb510](https://github.com/jb510)
- [fabiancz](https://github.com/fabiancz)

[View all plugins by Bill Erickson](http://www.billerickson.net/contributions/plugins/)

== Changelog ==

= 1.7 =
* Allow $post to be filtered

= 1.6 =
* Update widget to use PHP5 constructor

= 1.5 =
* Add filter for changing section parents
* Add unique class to menu items, menu-item-{id}
* Add hook for adding links to end of subpages listing

= 1.4 =
* Update widget formatting in backend
* Subpage titles are filterable

= 1.3 =
* Support for all hierarchical post types
* Only output HTML for classes if there are classes
* Only output subpages ul if there are subpages
* Allow second level subpages to be nested in li
* Czech translation

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
