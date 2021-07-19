
import Style from './style.module.scss';

const Duration =  (props) => {


  return (
    <section className={Style.duration}>
      <span>Duração:{props.time}</span>
      <span>Método: Selection sort {props.method}</span>
    </section>
  )

}

export default Duration;