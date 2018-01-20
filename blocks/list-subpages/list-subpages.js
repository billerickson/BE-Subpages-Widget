/**
 * Returns a Promise with the subpages or an error on failure.
 *
 * @param   {Number} parentId       Parent Post ID
 *
 * @returns {wp.api.collections.Posts} Returns a Promise with the subpages.
 */
export default function listSubpages( parentId = false ) {
	return <ul><li>Subpage 1</li><li>Subpage 2</li></ul>;
}
