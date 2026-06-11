import { Fragment } from "react/jsx-runtime";
import ModalProjetos from "./ModalProjetos";

export default function ContextProviders(props: { children: React.ReactNode }) {
    return (
        <Fragment>
            <ModalProjetos />
            {props.children}
        </Fragment>
    )
}