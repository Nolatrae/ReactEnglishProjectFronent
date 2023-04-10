import React from "react"
import ContentLoader from "react-content-loader"

export const UniqueCardLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={220}
    height={200}
    viewBox="0 0 266 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="180" y="98" rx="0" ry="0" width="0" height="5" /> 
    <rect x="18" y="20" rx="0" ry="0" width="220" height="200" />
  </ContentLoader>
)
