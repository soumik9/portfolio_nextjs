
import { selectItemType } from '@config/types/types';
import React from 'react'
import Select, { StylesConfig } from 'react-select';

type Props = {
    id?: string;
    value?: selectItemType;
    options?: selectItemType[];
    defaultValue?: selectItemType;
    label?: string;
    placeHolder?: string;
    isSearchable?: boolean;
    onChange: any;
    required?: boolean;
    isLoading?: boolean;
    error?: boolean;
}

const SelectCustom = ({ label, options, defaultValue, onChange, value, id, placeHolder, isSearchable, required, isLoading, error }: Props) => {

    const customStyle: StylesConfig<selectItemType, false> = {
        control: (provided, state) => ({
            ...provided,
            minHeight: '44px',
            border: state.menuIsOpen || state.isFocused ? error ? "2px solid #F04438" : "2px solid white" : error ? "2px solid #F04438" : "2px solid #E5E7EB",
            borderRadius: '8px',
            cursor: 'pointer',
            outline: 'none',
            '&:focus': {
                borderColor: error ? "#F04438" : '',
            },
            '&:hover': {
                borderColor: error ? "#F04438" : '#d7d9f3',
            },
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#AB93E1' : 'transparent',
            color: state.isSelected ? 'white' : '#6B7280',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: state.isSelected ? '#9A7EDC' : '#e5e7eb',
                color: state.isSelected ? 'white' : '#4B5563'
            }
        }),
        singleValue: (provided) => ({
            ...provided,
            color: "#6B7280",
        }),
        dropdownIndicator: base => ({
            ...base,
            '&:hover': {
                color: "#d7d9f3",
            }
        }),
    };

    return (
        <div className="mt-0.5 scrollbar w-full md:w-[300px]">
            <label
                htmlFor={id}
                className="text-sm font-semibold px-1 text-gray-600"
            >
                {label} {required ? <span className="text-error">*</span> : null}
            </label>
            <div className="mt-1">
                <Select
                    options={options}
                    defaultValue={defaultValue}
                    value={value}
                    onChange={onChange}
                    styles={customStyle}
                    isSearchable={isSearchable ? isSearchable : false}
                    placeholder={placeHolder}
                    className='w-full capitalize'
                    required={required}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default SelectCustom

