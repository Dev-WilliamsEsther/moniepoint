import { motion} from 'framer-motion'

const ImagesSlide = ({children}) => {
  return (
    <motion.div
    initial={{opacity:0,x:50}}
    animate={{opacity:1,x:0}}
    transition={{duration:0.8, ease:[0.6, 0.01, 0.05, 0.95]}}
    viewport={{once:true}}
    >
        {children}
    </motion.div>
  )
}

export default ImagesSlide