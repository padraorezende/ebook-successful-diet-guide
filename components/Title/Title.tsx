import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export type TitleProps = {
    description: string
}

export const Title = (props: TitleProps) => {
    return (
        <div className="flex items-center my-2">
            <FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500 w-6" />
            <span className="text-sm">{props.description}</span>
        </div>
    )

}