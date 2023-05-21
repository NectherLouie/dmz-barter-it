import './style.css';

export default function ImageButton(props) {
    return (
        <>
            <a href={props.link} class="maps-list__item maps-item">
                <div class="maps-item__image">
                    <img src={props.imgSrc} alt="al-mazrah dmz"></img>   
                </div>
                <div class="maps-item__content">
                    <div class="maps-item__title">
                        {props.title}
                    </div>
                </div>
            </a>
        </>
    )
}