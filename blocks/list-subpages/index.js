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
import ListSubpages from './list-subpages';
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
            type: 'int',
		  },
	    },

        edit: props => {
          const onChangeParent = ( value ) => {
            props.setAttributes( { parentId: value } );
          };

          return (
            <div className={ props.className }>
				{ !! props.focus ? (
					<SelectSubpages
						label={ __( 'Display Subpages Of' ) }
						parentId={ props.attributes.parentId }
						onChange={ onChangeParent }
					/>
				) : (
					<ListSubpages parentId={ props.attributes.parentId} className={props.className} />
				)}
            </div>
          );
        },

        save: props => {
	        // Rendering in PHP
	        return null;
        },
    },
);
