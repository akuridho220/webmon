import React, {useId} from 'react';
import Select from 'react-select';

const ListingDropDown = ({ onSelect }) => {
    const options = [
        { value: 'blok sensus', label: 'Blok Sensus' },
        { value: 'desa/kelurahan', label: 'Desa/Kelurahan' },
        { value: 'kecamatan', label: 'Kecamatan' },
        { value: 'kabupaten', label: 'Kabupaten/Kota' },
        { value: 'keseluruhan', label: 'Keseluruhan' },
    ];

    const handleSelect = (selectedOption) => {
        onSelect(selectedOption.value);
    };
    const defaultOption = options[0];

    const customStyles = {
        control: (provided) => ({
            ...provided,
            borderRadius: '0.5rem',
            color: '#000',
        }),
        input: (provided) => ({
            ...provided,
            color: '#000',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? 'rgba(217, 63, 87, 1)' : 'transparent',
            borderRadius: '0.3rem',
            color: state.isSelected ? 'white' : 'black',
        }),
    };

    return (
        <>
        <div className="rounded-xl bg-[#d93f57] bg-opacity-50 ">
            <Select options={options} isSearchable={true} instanceId={useId()} placeholder="Pilih berdasarkan tingkar wilayah" onChange={handleSelect} styles={customStyles} defaultValue={defaultOption} />
        </div>
        </>
    );
};

export default ListingDropDown;
