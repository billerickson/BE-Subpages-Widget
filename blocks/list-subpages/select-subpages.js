/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls } = wp.blocks;
const { SelectControl } = InspectorControls;
const { Component } = wp.element;

/*
 * Declare variables
 *
 */
const parentOptions = [
	{ value: '1', label: __( 'Option 1' ) },
	{ value: '2', label: __( 'Option 2' ) },
];

/**
 * Returns a select menu with subpages
 *
 */

export default class SelectSubpages extends Component {

  constructor( props ) {
    super( ...arguments );
  }
  render() {

	return (
			<SelectControl
				label={ __( 'Display Subpages From' ) }
				options={parentOptions}
				onChange={ this.props.onChange }
				value={ this.props.inputValue }
			/>

	);
  }
}
