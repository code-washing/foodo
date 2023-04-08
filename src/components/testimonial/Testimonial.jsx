//react
import { useRef } from 'react';

//styles
import styles from './Testimonial.module.css';

export default function Testimonial({
  imageSource = '',
  personName = '',
  oneLiner = '',
  details = '',
  rating = null,
  extraClass = [],
  extraInlineStyle = {},
}) {
  const testimonialRef = useRef();

  return (
    <div
      ref={testimonialRef}
      style={extraInlineStyle}
      className={`${styles['testimonial']} ${
        extraClass.length > 0 ? extraClass.join(' ') : 'default class'
      }`}
    >
      <div
        className={styles['testimonial__img']}
        style={{ background: `url(${imageSource})` }}
      ></div>

      <div className={styles['testimonial__text-container']}>
        <p className={styles['testimonial__text-container__one-liner']}>
          {`"${oneLiner}"`}
        </p>
        <p className={styles['testimonial__text-container__details']}>
          {details}
        </p>
        <p
          className={styles['testimonial__text-container__person-name']}
        >{`- ${personName}`}</p>
      </div>
    </div>
  );
}
