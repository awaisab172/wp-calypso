/**
 * External dependencies
 */
/* eslint-disable import/no-extraneous-dependencies */
import { keyBy, mapValues, get } from 'lodash';
/* eslint-enable import/no-extraneous-dependencies */

/**
 * WordPress dependencies
 */
/* eslint-disable import/no-extraneous-dependencies */
import { parse as parseBlocks } from '@wordpress/blocks';
/* eslint-enable import/no-extraneous-dependencies */

/**
 * Internal dependencies
 */
import replacePlaceholders from './replace-placeholders';

const { templates = [], siteInformation = {} } = window.starterPageTemplatesConfig;

let allTemplatesBlockBySlug = mapValues( keyBy( templates, 'slug' ), ( { content, title } ) => ( {
	blocks: [],
	content,
	count: 0,
	isEmpty: ! content,
	isParsing: !! content,
	title,
} ) );

// Dispatch a global event once all templates have been parsed.
setTimeout( () => {
	window.dispatchEvent(
		new CustomEvent( 'onTemplatesParse', {
			detail: {
				templates: allTemplatesBlockBySlug,
				isParsing: true,
			},
		} )
	);
}, 0 );

setTimeout( () => {
	allTemplatesBlockBySlug = mapValues( allTemplatesBlockBySlug, ( { content, title } ) => {
		const blocks = content ? parseBlocks( replacePlaceholders( content, siteInformation ) ) : [];
		return {
			blocks,
			count: blocks.length,
			isParsing: null,
			isEmpty: ! content,
			title,
		};
	} );

	// Dispatch a global event once all templates have been parsed.
	window.dispatchEvent(
		new CustomEvent( 'onTemplatesParse', {
			detail: {
				templates: allTemplatesBlockBySlug,
				isParsing: false,
			},
		} )
	);
}, 0 );

export const getAllTemplatesBlocks = () => allTemplatesBlockBySlug;

export const hasTemplates = () => !! templates.length;

export const getBlocksByTemplateSlug = slug =>
	get( allTemplatesBlockBySlug, [ slug, 'blocks' ], [] );

export const getTitleByTemplateSlug = slug => get( allTemplatesBlockBySlug, [ slug, 'title' ], [] );

export const getTemplateBySlug = slug => get( allTemplatesBlockBySlug, [ slug ], {} );

export const getFirstTemplateSlug = () => get( templates, [ 0, 'slug' ], null );

export const getTemplates = () => templates;

export default allTemplatesBlockBySlug;
