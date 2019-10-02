/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import getSelectedEditor from 'state/selectors/get-selected-editor';

export const isGutenbergOptOutEnabled = ( state, siteId ) => {
	// Opt in url will be falsey if the user is not allowed to switch editors:
	const optUrlExists = get( state, [ 'gutenbergOptIn', siteId ], false );
	return optUrlExists && getSelectedEditor( state, siteId ) !== 'classic';
};

export default isGutenbergOptOutEnabled;
