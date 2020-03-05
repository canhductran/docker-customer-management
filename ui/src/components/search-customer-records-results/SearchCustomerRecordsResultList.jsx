import React from 'react';

import './search-customer-records-results.scss';

const SearchCustomerRecordsResultList = ({customerResults}) => (
    <div>
        {
            customerResults && customerResults.length ?
            <table className='search-customer-record-results'>
                <thead>
                    <tr className='search-customer-record-result'>
                        <th className='customer-name'>Customer Name</th>
                        <th className='customer-telephone'>Customer Phone</th>
                    </tr>
                </thead>
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
