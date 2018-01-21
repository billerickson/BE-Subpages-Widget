/**
 * External dependencies
 */
import { get } from 'lodash';
import { stringify } from 'querystringify';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { withAPIData } = wp.components;
const { Component } = wp.element;
const { decodeEntities } = wp.utils;


class ListSubpages extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {
		const pages = get( this.props.pages, 'data', [] );
		return [
				<ul
					className={ this.props.className }
				>
					{ pages.map( ( post, i ) =>
						<li key={ i }>
							<a href={ post.link } target="_blank">{ decodeEntities( post.title.rendered.trim() ) || __( '(Untitled)' ) }</a>
						</li>
					) }
				</ul>,
		];
	};
}

const applyWithAPIData = withAPIData( ( props ) => {
	const query = stringify( {
		per_page: 100,
		parent: props.parentId,
		orderby: 'menu_order',
		order: 'asc',
		_fields: [ 'id', 'parent', 'title' ],
	} );
	return {
		pages: `/wp/v2/pages?${ query }`,
	};
} );

export default applyWithAPIData( ListSubpages );
