import TableListing from './TableListing';
import TableSampel from './TableSampel';


const TableSelect = ({ selectedCategory }) => {
    const renderTable = () => {
        if(selectedCategory == 'sampel'){
            return <TableSampel />
        }
        return <TableListing />        
    };

    return <>{renderTable()}</>;
};

export default TableSelect;