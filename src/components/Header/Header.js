import './Header.css';

const Header = ({categories, filterProducts}) => (
    
    <nav className="product-filter">
        <h1>Jackets</h1>

        <div className="sort">
            <div className="collection-sort">
                <label>Filter by:</label>
                <select
                className="catalog" 
                onChange={(e) =>{
                    const filteredCategory = e.target.value;
                    filterProducts(filteredCategory)
                }
            }
                > 
                <option value={"all"}>all</option>
                {categories.map((category)=>{
                    return (
                    <option value={category}> {category} </option>
                )
            })
                };
                </select>
            </div>

            <div className="collection-sort">
                <label>Sort by:</label>
                <select>
                    <option value="/">Featured</option>
                    <option value="/">Best Selling</option>
                    <option value="/">Alphabetically, A-Z</option>
                    <option value="/">Alphabetically, Z-A</option>
                    <option value="/">Price, low to high</option>
                    <option value="/">Price, high to low</option>
                    <option value="/">Date, new to old</option>
                    <option value="/">Date, old to new</option>
                </select>
            </div>
        </div>
    </nav>

);
            
export default Header;

