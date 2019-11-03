import React from "react";
import { Link } from "gatsby"

const HeaderItem = ({ title }) => (
    <Link style={{
        fontSize: `12px`,
        color: `#000000`,
        letterSpacing: `3.5px`,
        fontWeiht: 500,
        textTransform: `uppercase`,
        padding: `15px`,
        textDecoration: `none`,
        opacity: `.5`,
        transition: `opacity .25s ease-in-out`,
        alignSelf: `flex-start`,
        fontFamily: `'Source Sans Pro', sans-serif`,
        float: `right`,
        lineHeight: `57px`,
        // Add hover after adding styled components
        // ':hover': {
        //     opacity: 1,
        //     color: `#000000`,
        // }
    }}>
        {title}
    </Link>
);

export default HeaderItem;