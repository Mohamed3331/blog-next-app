import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/max.jpg'
          alt='An image showing Mohamed'
          width={250}
          height={250}
        />
      </div>
      <h1>Hi, I'm Mohamed Salem</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Hero;
