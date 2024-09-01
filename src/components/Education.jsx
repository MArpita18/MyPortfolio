import { EDUCATION } from "../constants"
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{duration: 0.5}}
        className="my-20 text-center text-5xl">Education</motion.h1>
        <div className="">
            {EDUCATION.map((education, index) => (
                <div key={index} className="flex flex-wrap lg: justify-center">
                    <motion.div
                     whileInView={{ opacity: 1, x:0 }}
                     initial={{ opacity: 0, x:-100 }}
                     transition={{duration:0.5}}
                     className="w-full lg:w-1/4">
                        <p>{education.year}</p>
                    </motion.div>
                    <motion.div
                     whileInView={{ opacity: 1, x:0 }}
                     initial={{ opacity: 0, x:100 }}
                     transition={{duration:0.5}}
                     className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{education.name} - <span className="text-sm text-white">{education.institute}</span></h6>
                        <p className="mb-4 text-neutral-200">{education.grade}</p>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Education