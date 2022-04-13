import '../../Assets/Search.css';
function SearchBar({handleInput, handleSearch}) {
    return (
        <>
            <form className='SearchBar' onSubmit={handleSearch}>
                <input onChange={handleInput} type="text" />
                <input type="submit" value="Search" />
            </form>
        </>
    );
    
}
export default SearchBar;