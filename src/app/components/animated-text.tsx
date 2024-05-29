'use client'

import { motion } from 'framer-motion'

interface IAnimatedText {
  text: string
  el?: keyof JSX.IntrinsicElements
  className?: string
}

const defaultAnimations = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function AnimatedText({
  text,
  el: Wrapper = 'p',
  className,
}: IAnimatedText) {
  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>

      <motion.span
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.05, delay: 0.4, ease: 'easeIn' }}
        aria-hidden
      >
        {text.split('').map((char, i) => (
          <motion.span
            className="inline-block"
            key={i}
            variants={defaultAnimations}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  )
}
