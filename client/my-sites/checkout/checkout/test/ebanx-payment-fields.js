/**
 * @format
 * @jest-environment jsdom
 */
/**
 * External dependencies
 */
import React from 'react';
import { shallow } from 'enzyme';
import { identity } from 'lodash';

/**
 * Internal dependencies
 */

import { EbanxPaymentFields } from '../ebanx-payment-fields';

// Gets rid of warnings such as 'UnhandledPromiseRejectionWarning: Error: No available storage method found.'
jest.mock( 'lib/user', () => () => {} );

const defaultProps = {
	countryCode: 'BR',
	countriesList: [
		{
			code: 'BR',
			name: 'Brazil',
		},
	],
	getErrorMessage: jest.fn(),
	getFieldValue: jest.fn(),
	handleFieldChange: jest.fn(),
	fieldClassName: 'ebanx-brazil',
	translate: identity,
};

describe( '<EbanxPaymentFields />', () => {
	test( 'should render', () => {
		const wrapper = shallow( <EbanxPaymentFields { ...defaultProps } /> );
		expect( wrapper ).toMatchSnapshot();
	} );

	test( 'should call this.props.handleFieldChange when updating field', () => {
		const wrapper = shallow( <EbanxPaymentFields { ...defaultProps } /> );
		const documentInput = wrapper.find( '[name="document"]' );
		const event = { target: { name: 'document', value: 'spam' } };
		documentInput.simulate( 'change', event );
		expect( defaultProps.handleFieldChange ).toBeCalledWith( 'document', 'spam' );
	} );

	test( 'should disable fields', () => {
		const wrapper = shallow( <EbanxPaymentFields { ...defaultProps } /> );
		expect(
			wrapper
				.find( 'Input' )
				.first()
				.props().disabled
		).toEqual( false );
		wrapper.setProps( { disableFields: true } );
		expect(
			wrapper
				.find( 'Input' )
				.first()
				.props().disabled
		).toEqual( true );
	} );
} );