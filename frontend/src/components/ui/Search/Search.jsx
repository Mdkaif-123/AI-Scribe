
function Search() {
    return (
        <>
            <div className="search mx-7">
                <div className="input-group">
                    <input type="search" className="input" id="search" name="search" placeholder="search" autoComplete='true'/>
                    <input className="button--submit btn" value="search" type="submit" />
                </div>
            </div>
        </>
    )
}

export default Search
