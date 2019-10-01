/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import getSelectedEditor from 'state/selectors/get-selected-editor';

export const isGutenbergOptOutEnabled = ( state, siteId ) => {
	// Opt in url will not exist if the user is not allowed to switch to either editor.
	const optInUrlExists = get( state, [ 'gutenbergOptIn', siteId ], false );
	return optInUrlExists && getSelectedEditor( state, siteId ) !== 'classic';
};

export default isGutenbergOptOutEnabled;
