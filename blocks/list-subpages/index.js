/**
 * Block dependencies
 */
//import './style.scss';
//import './editor.scss';
import listSubpages from './list-subpages';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const {
  registerBlockType,
  Editable
} = wp.blocks;

/**
 * Register block
 */
export default registerBlockType(
    'be/list-subpages',
    {
        title: __( 'List Subpages' ),
        category: 'widgets',
        icon: 'list-view',

        edit: props => {
          return (
            <div className={ props.className }>
				{ !! props.focus ? (
					<p>Focus</p>
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
