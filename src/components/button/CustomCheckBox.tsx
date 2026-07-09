import { defaultTransition } from "@/animations"
import { AnimatePresence, motion, TargetAndTransition, ValueKeyframesDefinition } from "motion/react"
import { Fragment, useEffect, useState } from "react"

export default function CustomCheckBox({
    checked,
    onClick,
    variant = "transform"
}: {
    checked: boolean,
    onClick: () => void,
    variant?: "rotate" | "transform"
}) {
    const variantTransform = {
        scale: checked ? 1 : 1,
        backgroundColor: checked ? "#07fc03" : "#fc0303"
    }
    const variantRotate = {
        scaleX: checked ? 1 : -1,
        backgroundColor: checked ? "#07fc03" : "#fc0303"
    }
    const [variantState, setVariantState] = useState<TargetAndTransition>(variantTransform)

    useEffect(() => {
        switch (variant) {
            case "rotate":
                setVariantState(variantRotate);
                break;
            case "transform":
                setVariantState(variantTransform);
                break;
            default:
                setVariantState(variantTransform);
        }
    }, [variant, checked])

    return (
        <motion.div
            animate={variantState}
            viewport={{
                once: true,
            }}
            transition={defaultTransition}
            className="box relative border-2 hover:brightness-80 h-5 w-5 rounded-full"
            onClick={onClick}>
            <motion.span className="bg-white rounded-full absolute"
                animate={{
                    width: checked? [0, 8] : [0, 13],
                    height: 3,
                    originX: 0.5,
                    x: checked? -3 : 0,
                    y: checked? 2.5 : 0,
                    rotate: 45,
                    scaleX: variant === "rotate"? [0, 1] : 1
                }}
                viewport={{ once: true }}
                transition={defaultTransition}
            />
            <motion.span className="bg-white rounded-full absolute"
                animate={{
                    width: checked? [0, 12] : [0, 13],
                    originX: 0.5,
                    x: checked? 2 : 0,
                    y: checked? 1 : 0,
                    rotate: -45,
                    height: 3,
                    scaleX: variant === "rotate"? [0, 1] : 1
                }}
                viewport={{ once: true }}
                transition={defaultTransition}
            />
        </motion.div>
    )
}