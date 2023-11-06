import React from "react";
import Modal from "../Modal";
import s from "./style.module.scss";
import Icon from "../Icon";

const About = ({ modalOpen, close }) => {
  return (
    <Modal modalOpen={modalOpen} close={close}>
      <h1 className={s.title}>ENCUESTA ALUMNI 2023</h1>
      <div className={s.body}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga magnam
          officiis omnis provident eum dolor porro nesciunt illum qui velit ea
          maiores voluptatibus hic, iste sequi. Praesentium omnis est voluptas
          cumque explicabo, quod molestiae ex fugit dicta architecto sit odio,
          veritatis sequi atque cum ab non doloremque, saepe accusantium labore!
        </p>
        <p>
          Aperiam maxime tempora, mollitia cumque omnis atque debitis accusamus
          amet dicta, molestias non aliquid, accusantium velit nobis officia
          suscipit optio soluta hic nesciunt totam quasi quod eaque
          consequuntur! Eos!
        </p>
        <h3 className={s.subtitle}>SOBRE LA VISUALIZACION</h3>
        <p>
          Cada esfera ilustra un exalumno que haya participado de la encuesta.
          Estas esferas se reorganizan de acuerdo con el criterio o pregunta
          seleccionada, la cual se puede actualizar al presionar el botón
          "Cambiar" y escoger una opción diferente. Los diversos patrones
          visibles en la textura de cada esfera simbolizan las distintas
          carreras de pregrado que los exalumnos cursaron. En el cuadro
          subsiguiente, se explica el significado de cada patrón:
        </p>
        <br />
        <div className={s.tabla}>
          <div className={s.row}>
            <div className={s.ingcom} />
            <span>INGENIERÍA COMERCIAL</span>
          </div>
          <div className={s.separator} />
          <div className={s.row}>
            <div className={s.ingdis} />
            <span>INGENIERÍA EN DISEÑO</span>
          </div>
          <div className={s.separator} />
          <div className={s.row}>
            <div className={s.dis} />
            <span>DISEÑO</span>
          </div>
          <div className={s.separator} />
          <div className={s.row}>
            <div className={s.ingcivil} />
            <span>INGENIERÍA CIVI</span>
          </div>
          <div className={s.separator} />
          <div className={s.row}>
            <div className={s.doble} />
            <span>DOBLE TITULACIÓN (ING. COMERCIAL e ING. EN DISEÑO)</span>
          </div>
          <div className={s.separator} />
          <div className={s.row}>
            <div className={s.otro} />
            <span>OTROS PROGRAMAS</span>
          </div>
        </div>
        <div className={s.blank} />
      </div>
    </Modal>
  );
};

export default About;
