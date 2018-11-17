/** @format */

/**
 * External dependencies
 */

import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */

import { settings } from './settings.js';
import edit from './edit';
import save from './save';
import './style.scss';
import './editor.scss';

registerBlockType( settings.name, {
	title: settings.title,
	icon: settings.icon,
	category: settings.category,
	keywords: settings.keywords,
	attributes: settings.attributes,
	getEditWrapperProps( { align } ) {
		if ( settings.validAlignments.includes( align ) ) {
			return { 'data-align': align };
		}
	},
	edit,
	save,
} );
