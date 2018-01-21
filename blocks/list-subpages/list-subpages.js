/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { withAPIData } = wp.components;

function ListSubpages( { pages, className, parentId } ) {

//	const pageItems = get( pages, 'data', [] );

	const postsCollection = new wp.api.collections.Pages();
	const pageItems = postsCollection.fetch( {
		data: {
			per_page: 5,
			parent: parentId,
		},
	} );

	console.log( pageItems );

	return '<p>Test</p>';

}


/*
const applyWithAPIData = withAPIData( (props) => {
	const query = JSON.stringify( {
		per_page: 100,
		parent: props.parentId,
		exclude: props.parentId,
		_fields: [ 'title' ],
	} );
	return {
		pages: `/wp/v2/pages?${ query }`,
	};
} );
*/

export default ListSubpages;
