import React from 'react'

const Filter = () => {

    function searchRegion() { }
    return (
        <div className='RegionType'>
            <select onChange={searchRegion}>
                <option defaultValue={"all"} value={"all"}>
                    Search By Region
                </option>
                <option value={"Asia"}>Asia</option>
                <option value={"Africa"}>Africa</option>
                <option value={"Oceania"}>Oceania</option>
                <option value={"Americas"}>Americas</option>
                <option value={"Europe"}>Europe</option>
                <option value={"Antarctic"}>Antarctic</option>
            </select>
        </div>
    )
}

export default Filter