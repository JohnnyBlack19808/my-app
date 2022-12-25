import c from './InfoUser.module.css';
import avatar from './../avatar.jpg';

const InfoUser = (props) => {
    return (
        <div className={c.Block}>
            <div>
                <img className={c.avatar} src={avatar} alt='avatar'/>
            </div>
            <div>
                Name: {props.Name}<br />
                Age: {props.Age} years<br />
                City: {props.City}<br />
            </div>
        </div>
    )
}

export default InfoUser;