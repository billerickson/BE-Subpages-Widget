/**
 * External dependencies
 */
import { get } from 'lodash';
import { stringify } from 'querystringify';


/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { buildTermsTree } = wp.utils;
const { withAPIData } = wp.components;
const { TermTreeSelect } = wp.blocks;

function SelectSubpages( { label, pages, noOptionLabel, parentId, onChange } ) {
	const pageItems = get( pages, 'data', [] );
	const pagesTree = buildTermsTree( pageItems.map( ( item ) => ( {
		id: item.id,
		parent: item.parent,
		name: item.title.rendered ? item.title.rendered : `#${ item.id } (${ __( 'no title' ) })`,
	} ) ) );

	return (
		<TermTreeSelect
			label={ label }
			noOptionLabel={ `(${ __( 'no parent' ) })` }
			termsTree={ pagesTree }
			selectedTerm={ parentId }
			onChange={ onChange }
		/>
	);
}

const applyWithAPIData = withAPIData( () => {
	const query = stringify( {
		context: 'edit',
		per_page: 100,
		orderby: 'menu_order',
		order: 'asc',
		_fields: [ 'id', 'parent', 'title' ],
	} );
	return {
		pages: `/wp/v2/pages?${ query }`,
	};
} );

export default applyWithAPIData( SelectSubpages );
