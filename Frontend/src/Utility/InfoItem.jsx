

const InfoItem = ({ label, value, isStatus = false }) => {
  if (!value) return null;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-gray-100 last:border-0">
      <span className="text-sm font-medium text-gray-500 uppercase w-full sm:w-1/3 mb-1 sm:mb-0">
        {label}
      </span>
      <div className="w-full sm:w-2/3 text-gray-900 font-medium text-base">
        {isStatus ? (
          <span
            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
              value.toLowerCase() === "active"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {value}
          </span>
        ) : (
          value
        )}
      </div>
    </div>
  )
}
export default InfoItem