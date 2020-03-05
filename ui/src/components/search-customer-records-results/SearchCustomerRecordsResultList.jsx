import React from 'react';

import './search-customer-records-results.scss';

const SearchCustomerRecordsResultList = ({customerResults}) => (
    <div>
        {
            customerResults && customerResults.length ?
            <table className='search-customer-record-results'>
                <tbody>
                {
                    customerResults.map(customerResult => (
                        <tr className='search-customer-record-result'>
                            <td className='customer-name'>{customerResult.name}</td>
                            <td className='customer-telephone'>{customerResult.phone}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            :
            null
        }
    </div>
);

export default SearchCustomerRecordsResultList;
