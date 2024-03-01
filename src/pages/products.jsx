import { Outlet, useLocation } from "react-router-dom"
import ProdList from "../components/prodList"
import ProdTypeList from "../components/prodTypeList"



function Products() {
  const location = useLocation().pathname;

  return (<div>
    
    {location.endsWith('products') && <h1>Products page</h1>}
    <br></br>
    {location.endsWith('products') && <ProdTypeList/>}
    <Outlet/>
    {location.endsWith('products') && <p>List of all Product types</p>}
    
    </div>)
}

export default Products