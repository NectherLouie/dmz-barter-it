import { Button } from '@mui/material';
import './style.css';

export default function ImageButton(props) {
    
    // const onButtonClicked = () => {
    //     console.log("ImageButton::onButtonClicked() ->");
    //     props.onClick();
    // }

    return (
        <>
            <Button key={props.btnKey} onClick={props.onClick} className="maps-list__item maps-item">
                <div className="maps-item__image">
                    <img src={props.imgSrc} alt="al-mazrah dmz"></img>   
                </div>
                <div className="maps-item__content">
                    <div className="maps-item__title">
                        {props.title}
                    </div>
                </div>
            </Button>
        </>
    )
}