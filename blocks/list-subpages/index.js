/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const {
  registerBlockType,
  Editable,
} = wp.blocks;
const {
	withInstanceId,
	withAPIData
} = wp.components;
const { buildTermsTree } = wp.utils;


/**
 * Internal dependencies
 */
//import './style.scss';
//import './editor.scss';
import listSubpages from './list-subpages';
import selectSubpages from './select-subpages';

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
          return (
            <div className={ props.className }>
				{ !! props.focus ? (
					selectSubpages()
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
