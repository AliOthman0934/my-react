import "./filterProduct.css"

function FilterProduct(props) {
    function onFiltercahnge(event){
        props.fiterProductSelected(event.target.value)
    }

    return (<div className="filter-area">
        <select name="isAvailable" onChange={onFiltercahnge}>
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
        </select>
    </div>)
}

export default FilterProduct;