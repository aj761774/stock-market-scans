import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CriteriaTypeEnum, CriteriaVariableTypeEnum, ICriteria, IStockScan } from '../StockScanList/inetrface';

const StockScanDetail = () => {
    const location = useLocation();
    const data = location.state as IStockScan;
    const navigate = useNavigate();

    const getText = (criteria: ICriteria) => {
        let textData = criteria.text;
        Object.keys(criteria.variable).forEach((keyName, ind) => {
            if (criteria.variable[keyName]?.type === CriteriaVariableTypeEnum.VALUE && Array.isArray(criteria.variable[keyName]?.values)) {
                if (textData.includes(keyName)) {
                    textData = textData.replaceAll(keyName, `<span class="text-indigo-600">${(criteria.variable[keyName]?.values as number[])[0]}</span>`);
                }

            } else if (criteria.variable[keyName]?.type === CriteriaVariableTypeEnum.INDICATOR) {
                textData = textData.replaceAll(keyName, `<span class="text-indigo-600">${criteria.variable[keyName]?.default_value}</span>`);
            }
        });
        return textData;
    }

    return (
        <div className='container'>
            <button className="inline-flex gap-2 items-center my-3" onClick={() => navigate("/")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path></svg>
                Go back
            </button>
            <div className="overflow-hidden bg-white shadow sm:rounded-md md:min-w-[30vw] px-4 py-5 sm:px-4 w-4ull">
                <h3 className="text-2xl font-medium leading-6 text-gray-900">{data.name}</h3>
                <div className="mt-3 flex flex-shrink-0"><p className={`bg-${data.color}-100 text-${data.color}-800 inline-flex rounded-full px-2 text-xs font-semibold leading-5`}>
                    {data.tag}
                </p>
                </div>
                <hr className="w-full border-[0.1px] border-gray-200 mt-5" />
                <ul className="divide-y divide-gray-200">
                    {
                        data.criteria.map((criteria) => {
                            if (criteria.type === CriteriaTypeEnum.PLAIN_TEXT) {
                                return (
                                    <li key={criteria.text} className="flex py-4">
                                        <p className="font-medium text-gray-900">
                                            {criteria.text}
                                        </p>
                                    </li>
                                )
                            } else if (criteria.type === CriteriaTypeEnum.VARIABLE) {
                                return (
                                    <li key={criteria.text} className="flex py-4">
                                        {
                                            <p className="font-medium text-gray-900 variable-text">
                                                <span dangerouslySetInnerHTML={{ __html: getText(criteria) }} />
                                            </p>

                                        }
                                    </li>
                                );
                            }
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default StockScanDetail;