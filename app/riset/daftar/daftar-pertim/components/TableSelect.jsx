import TableListing from './TableListing';
import TableSampel from './TableSampel';


const TableSelect = ({ selectedCategory, dataSampel, dataListing }) => {
    const renderTable = () => {
        if(selectedCategory == 'sampel'){
            return <TableSampel data={dataSampel}/>
        }
        return <TableListing data={dataListing}/>        
    };

    return <>{renderTable()}</>;
};

export default TableSelect;