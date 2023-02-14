import { useState, useEffect } from 'react';
import { getApi } from '../../service';
import StockScan from '../../components/StockScan/StockScan';
import { IStockScan } from './inetrface';

const StockScanList = () => {
  const [stockScans, setStockScans] = useState<IStockScan[]>([]);

  const getData = async () => {
    try {
      const res = await getApi<IStockScan[]>("https://jsonware.com/api/v1/json/402b9d6d-9862-4c19-b336-c456999258d6");
      setStockScans(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md md:min-w-[30vw] container">
      <ul className="divide-y divide-gray-200">
        {
          stockScans.map((stockScan) => <StockScan key={stockScan.id} data={stockScan} />)
        }
      </ul>
    </div>
  );
}

export default StockScanList;
