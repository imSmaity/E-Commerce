import search from '../../Assets/Images/navbar-img/search.png';

export default function Search(){
    return (
        <form >
            <div className="input-group">
                <input type="text" className="form-control"  align="center" placeholder="Search..." aria-label="Search" aria-describedby="button-addon1"/>
                <button className="btn btn-primary btn-sm" type="button" id="button-addon1">
                    <img src={search} alt="..." />
                </button>
            </div>
        </form>
    )
}