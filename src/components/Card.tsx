interface CardProps {
  title: string
  description: string
  image?: string
  technologies?: string[]
  className?: string
}

export default function Card({ title, description, image, technologies, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {image && (
        <div className="h-48 bg-gradient-to-r from-primary-400 to-primary-600 flex items-center justify-center">
          <span className="text-white text-4xl font-bold">{title.charAt(0)}</span>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}


