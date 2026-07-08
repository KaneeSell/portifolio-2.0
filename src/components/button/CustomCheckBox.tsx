import { motion } from "motion/react"

export default function CustomCheckBox({ checked, onClick }: { checked: boolean, onClick: () => void }) {
    return (
        <motion.div
            animate={{
                scale: checked ? 1 : -1,
                backgroundColor: checked ? "green" : "red"
            }}
            viewport={{
                once: true,
            }}
            transition={{
                ease: "easeOut",
                duration: 0.3,
            }}
            className="flex relative border hover:brightness-80 px-1 py-2.5 rounded-full"
            onClick={onClick}>
            <motion.span
                className="bg-white absolute rounded-full"
                animate={{
                    width: checked ? 8 : 15,
                    height: 2,
                    rotate: checked ? 50 : 230,
                    x: checked ? -0.5 : 0,
                    y: checked ? 3.5 : 0
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    ease: "easeOut",
                    duration: 0.3,
                }}
            />
            <motion.span
                className="bg-white rounded-full"
                animate={{
                    width: checked ? 15 : 15,
                    height: 2,
                    rotate: checked ? -50 : -230,
                    x: checked ? 3 : 0
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    ease: "easeOut",
                    duration: 0.3,
                }}
            />
        </motion.div>
    )
}