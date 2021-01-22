import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {Link} from "react-router-dom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";
import Tooltip from "@material-ui/core/Tooltip";

//Кнопка скролинга
//чтобы работала, нужно обернуть ею целый компонент
const useScrollButtonStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2)
    },
    //отключает стандартный размер в комбинации с variant={'dense'}
    toolbar: {
        minHeight: '1px'
    },
    tooltip: {
        padding: "10px 15px",
        minWidth: "130px",
        color: "#555555",
        lineHeight: "1.7em",
        background: "#FFFFFF",
        border: "none",
        borderRadius: "3px",
        boxShadow: "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
        maxWidth: "200px",
        textAlign: "center",
        fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
        fontSize: "0.875em",
        fontStyle: "normal",
        fontWeight: "400",
        textShadow: "none",
        textTransform: "none",
        letterSpacing: "normal",
        wordBreak: "normal",
        wordSpacing: "normal",
        wordWrap: "normal",
        whiteSpace: "normal",
        lineBreak: "auto"
    }
}))

function Scroll(props) {
    const {children, window} = props
    const classes = useScrollButtonStyles()

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    return (
        <Link to={'/'}>
            <Zoom in={trigger}>
            <div role="presentation" className={classes.root}>
                {children}
            </div>
            </Zoom>
        </Link>
    );
}

export default function BackButton(props) {
    const classes = useScrollButtonStyles()
    return (
        <React.Fragment>
            {props.children}
            <Scroll {...props}>
                <Tooltip id="back-to-home" title="Вернуться" placement="right" classes={{ tooltip: classes.tooltip }}>
                <Fab color="primary" size="large" variant="extended" aria-label="back to current page">
                    <KeyboardBackspaceIcon/>
                </Fab>
                </Tooltip>
            </Scroll>
        </React.Fragment>
    );
}
