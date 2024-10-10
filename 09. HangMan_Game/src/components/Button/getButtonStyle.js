function getStyleType(styleType) {
  if (styleType == "Primary") return "bg-blue-500";
  else if (styleType == "Secondary") return "bg-gray-500";
  else if (styleType == "error") return "bg-red-500";
  else if (styleType == "success") return "bg-green-500";
  else if (styleType == "warning") return "bg-red-800";
}

export default getStyleType;
