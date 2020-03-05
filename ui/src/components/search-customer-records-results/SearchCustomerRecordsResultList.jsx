import React from 'react';

import './search-customer-records-results.scss';

const SearchCustomerRecordsResultList = ({customerResults}) => (
    <table className='search-customer-record-results'>
        <tbody>
        {
            customerResults && customerResults.length ?
            customerResults.map(customerResult => (
                <tr className='search-customer-record-result'>
                    <td className='customer-name'>{customerResult.name}</td>
                    <td className='customer-telephone'>{customerResult.phone}</td>
                </tr>
            ))
            :
            null
        }
        </tbody>
    </table>
);

export default SearchCustomerRecordsResultList;
