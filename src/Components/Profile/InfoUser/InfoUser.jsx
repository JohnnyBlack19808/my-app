import c from './InfoUser.module.css';
import avatar from './../avatar.jpg';

const InfoUser = (props) => {
    return (
            <div className={c.InfoUser}>
                <table>
                    <tr>
                        <td>
                            <div className={c.ImgBlockAva}>
                                <img className={c.img} src={avatar} alt='avatar' />
                            </div>
                        </td>
                        <td>
                            <div className={c.InfoBlock}>
                                <div className={c.Info}>Name: <span>{props.Name}</span></div>
                                <div className={c.Info}>Age: <span>{props.Age}</span> years</div>
                                <div className={c.Info}>City: <span>{props.City}</span></div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
    )
}

export default InfoUser;