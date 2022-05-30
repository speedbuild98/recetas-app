import React from "react";

const SearchBar = ({
    handleSubmit,
    query,
    isLoading,
    setQuery
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={query}
                autocomplete="off"
                maxlength="120"
                className="form-control"
                placeholder="Buscar comidas, recetas y más..."
                name="query"
                disabled={isLoading}
                onChange={(event) => setQuery(event.target.value)}
            />  
            <input
                id="botonBuscar"
                disabled={isLoading || !query}
                type="submit"
                className="btn"
                value="🔎"
            />
        </form>
    )
};

export default SearchBar;