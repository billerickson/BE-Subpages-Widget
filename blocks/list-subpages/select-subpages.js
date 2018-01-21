/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { withAPIData } = wp.components;
const { buildTermsTree } = wp.utils;
const { SelectControl } = wp.blocks;

const applyWithAPIDataItems = withAPIData( ( props, { type } ) => {
	const { postTypeSlug, postId } = props;
	const queryString = stringify( {
		context: 'edit',
		per_page: 100,
		_fields: [ 'id', 'parent', 'title' ],
	} );
	return { items: `/wp/v2/${ type( postTypeSlug ) }?${ queryString }` };
} );

function setParentId( value ) {
	this.props.setAttributes( { parentId: value } );
}

/**
 * Returns a select menu with subpages
 *
 */

export default function selectSubpages() {

	const parentOptions = [
		{ value: '1', label: __( 'Option 1' ) },
		{ value: '2', label: __( 'Option 2' ) },
	];
	const parentId = 2;

	return (
		<SelectControl
			label={ __( 'Display subpages of' ) }
			value={ parentId }
			onChange={ setParentId }
			options={ parentOptions }
		/>

  );
}
