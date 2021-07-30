import {useEffect} from 'react';
import Style from './style.module.scss';

const Loading = (props) => {

    useEffect(() => {
        const view = () => {
            let message = document.querySelector(`.${Style.message}`);
            if(props.view){
                message.classList.add(`${Style.sucess}`);
                return;
            }

                message.classList.remove(`${Style.sucess}`);
            
        }

        view();
    }, [props])
    return (
        <div className={Style.message}>
            <img src="/assets/Rolling-1s-200px.gif" alt="" />
        </div>
    )

}

export default Loading;