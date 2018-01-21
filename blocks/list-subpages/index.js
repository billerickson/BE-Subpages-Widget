/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const {
  registerBlockType,
} = wp.blocks;



/**
 * Internal dependencies
 */
//import './style.scss';
//import './editor.scss';
import listSubpages from './list-subpages';
import SelectSubpages from './select-subpages';

/**
 * Register block
 */
export default registerBlockType(
    'be/list-subpages',
    {
        title: __( 'List Subpages' ),
        category: 'widgets',
        icon: 'list-view',
        attributes: {
          parentId: {
            source: 'text',
            type: 'int',
            selector: '.parent-id',
		  },
	    },

        edit: props => {
          const onChangeParent = ( value ) => {
            props.setAttributes( { parentId: value } );
          };

          return (
            <div className={ props.className }>
				{ !! props.focus ? (
					<SelectSubpages inputValue={props.attributes.parentId} onChange={ onChangeParent } />
				) : (
					listSubpages()
				)}
            </div>
          );
        },

        save: props => {
          return (
			  listSubpages()
          );
        },
    },
);
