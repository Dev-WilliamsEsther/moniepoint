import { motion} from 'framer-motion'

const FramerMotion = ({ children }) => {
  return (
    <motion.div
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{duration:1}}
    viewport={{once:true}}
    >
        {children}
    </motion.div>
  )
}

export default FramerMotion