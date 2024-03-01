
import {NavLink, useLocation } from 'react-router-dom';



function BreadCrumb() {

    let currLink = ''
    const location = useLocation().pathname
    const breads = location.split('/').filter(x => x!=='')

   const breadCrumbs = breads.map((bread , indx) => {
        currLink += `/${bread}`
        if (indx === breads.length - 1) {
            return (
              <span key={indx} style={{ color: 'rgba(0,0,100,0.5)' }}>{bread}</span>
            )
          } else {
            return (
              <>
                <NavLink key={indx} to={currLink}>{bread}</NavLink>
                <span className='d-inline'>{' / '}</span>
              </>
            )
          }
        })

  return (
   <nav className='crumb d-inline-block' style={{left:'10px!important'}}>{breadCrumbs}</nav> 
  );
}

export default BreadCrumb;

{/*<Breadcrumb>
      {breads.map((bread, index) => (
        <Breadcrumb.Item
          key={index}
          to={`/${bread}`}
          linkAs={NavLink}
          active={index === breads.length - 1}
        >
          {bread}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>  */}

//     <Breadcrumb>
//     <Breadcrumb.Item as={NavLink} active={breads.length===1}>{`${breads[0]}`}</Breadcrumb.Item>
//     {breads.length>1 && <Breadcrumb.Item to={`${breads[1]}`} linkAs={NavLink} active={breads.length===2}>{`${breads[1]}`}</Breadcrumb.Item>}
//     {breads.length>2 && <Breadcrumb.Item to={`${breads[2]}`} linkAs={NavLink} active={breads.length===3}>{`${breads[2]}`}</Breadcrumb.Item>}
//     {breads.length>3 && <Breadcrumb.Item to={`${breads[3]}`} linkAs={NavLink} active={breads.length===4}>{`${breads[3]}`}</Breadcrumb.Item>}
//     <Breadcrumb.Item to={`products`} linkAs={NavLink} >last</Breadcrumb.Item>
//   </Breadcrumb>

    