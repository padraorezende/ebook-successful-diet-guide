
export type CardProps = {
  description: string
  name: string
  location: string
}

export const Card = (props: CardProps) => {
  return (
    <div className="md:w-1/3 mr-4 mb-4 md:mb-0">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-gray-700 mb-4">
          {props.description}
        </p>
        <p className="text-gray-600 font-medium">
          {`${props.name}, ${props.location}`}
        </p>
      </div>
    </div>
  )
}


