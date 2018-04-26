import React from 'react'
import {Link} from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

const SideBar = (props) => (

<Drawer
docked={false}
onRequestChange={props.onRequestSideBarChange}
open={props.isSideBarOpen}
>

<Link to={'/'}> <MenuItem>HOME </MenuItem></Link>
<Link to={'/header'}> <MenuItem>HEADER</MenuItem> </Link>
<Link to={'/counter'}> <MenuItem>Counter</MenuItem> </Link>
<Link to={'/mapping-array'}> <MenuItem>MappingArray</MenuItem> </Link>
<Link to={'/mapping-array-2'}> <MenuItem>MappingArray2</MenuItem> </Link>
<Link to={'/first'}> <MenuItem>Hello</MenuItem> </Link>
<Link to={'/add'}> <MenuItem>ADD</MenuItem> </Link>
<Link to={'/hello/Artur'}> <MenuItem>HELLO</MenuItem> </Link>

</Drawer>
)

export default SideBar