import React, {useCallback, useReducer} from "react";
import './Header.css'
import {useNavigate} from "react-router-dom";
import style from "./style";


const Header = () => {
    const navigate = useNavigate()
    const goToPage = useCallback((path) => {
        navigate(path)
    }, [])


    function reduser(state, action) {
        switch (action.type) {
            case 'dark':
                return {background: style.dark.backgroundColor,color:style.dark.color};
            case 'light':
                return {background: style.light.backgroundColor,color:style.light.color}
            default:
                return {background: 'white'}
        }

    }

    const [state, dispatch] = useReducer(reduser, style);

    return (
        <header id="header" style={{background: state.background}}>
            <div className="container">
                <nav className="nav">
                    <ul className="nav__block">
                        <li className="nav__list" style={{color:state.color}} onClick={() => {
                            goToPage('')
                        }}>Home
                        </li>
                        <li className="nav__list" style={{color:state.color}} onClick={() => {
                            goToPage('about')
                        }}> About
                        </li>
                        <li className="nav__list" style={{color:state.color}} onClick={() =>
                            goToPage('testimonial')}>testimonial
                        </li>
                        <li className={'nav__list'} style={{color:state.color}} onClick={() => dispatch({type: 'dark'})}>Dark Them</li>
                        <li className={'nav__list'} style={{color:state.color}} onClick={() => dispatch({type: 'light'})}>Light Them</li>
                    </ul>

                </nav>
            </div>
        </header>
    )
}

export default Header