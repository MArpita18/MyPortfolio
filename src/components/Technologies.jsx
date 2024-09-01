import { RiReactjsLine } from "react-icons/ri";
import { FaJava,FaPython,FaDocker, FaJenkins, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs } from "react-icons/fa";
import { SiBootstrap,SiTailwindcss,SiOracle,SiSqlite, SiC,SiDjango,SiTerraform, SiAnsible, SiMongodb } from 'react-icons/si';
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: { 
        y: [10, -10], 
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: reverse,
        }
    },
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
        <motion.h1
         whileInView={{opacity: 1, y: 0}}
         initial={{ opacity: 0, y: -100 }}
         transition={{ duration: 0.5 }}
         className="my-20 text-center text-4xl pb-1">Technologies I have Worked With.. </motion.h1>
        {/* Languages */}
        <motion.h4
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -100 }}
         transition={{ duration:0.5 }}
         className="my-4 text-center text-3xl pb-2">Languages</motion.h4>
        <motion.div
         whileInView={{opacity: 1, x:0}}
         initial={{opacity: 0, x: 100}}
         transition={{duration: 0.5, delay: 0.5}}
         className="flex flex-wrap justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <SiC className="text-7xl text-blue-500" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <FaPython className="text-7xl text-yellow-600" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <FaJava className="text-7xl text-orange-500" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <FaJsSquare className="text-7xl text-yellow-400" />
            </div>
        </motion.div>
        
        {/* Web Technologies */}
        <motion.h4
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -100 }}
         transition={{ duration:0.5 }}
         className="my-4 text-center text-3xl pb-2">Web Technologies</motion.h4>
        <motion.div
         whileInView={{opacity: 1, x:0}}
         initial={{opacity: 0, x: 100}}
         transition={{duration: 0.5, delay: 0.5}}
         className="flex flex-wrap items-center justify-center gap-4 py-4">
            <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <FaHtml5 className="text-7xl text-orange-500" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <FaCss3Alt className="text-7xl text-blue-500" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <SiDjango className="text-7xl text-green-900" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <SiBootstrap className="text-7xl text-purple-800" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <FaNodeJs className="text-7xl text-green-500" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <SiTailwindcss className="text-7xl text-sky-400" />
            </div>
        </motion.div>
        {/* Database */}
        <motion.h4
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -100 }}
         transition={{ duration:0.5 }}
         className="my-4 text-center text-3xl pb-2">Databases</motion.h4>
        <motion.div
         whileInView={{opacity: 1, x:0}}
         initial={{opacity: 0, x: 100}}
         transition={{duration: 0.5, delay: 0.5}}
         className="flex flex-wrap items-center justify-center gap-4 py-4">
            <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <SiOracle className="text-7xl text-red-600" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <SiSqlite className="text-7xl text-blue-600" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <SiMongodb className="text-7xl text-green-500" />
            </div>
        </motion.div>
        {/* Devops */}
        <motion.h4
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -100 }}
         transition={{ duration:0.5 }}
         className="my-4 text-center text-3xl pb-2">DevOps Technologies</motion.h4>
        <motion.div
         whileInView={{opacity: 1, x:0}}
         initial={{opacity: 0, x: 100}}
         transition={{duration: 0.5, delay: 0.5}}
         className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <FaDocker className="text-7xl text-sky-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <FaJenkins className="text-7xl text-slate-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <SiAnsible className="text-7xl text-red-600" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-900 p-4">
                <SiTerraform className="text-7xl text-purple-500" />
            </div>
        </motion.div>
    </div>
  )
}

export default Technologies