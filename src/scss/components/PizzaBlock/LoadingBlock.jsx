import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return (
          <ContentLoader 
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            
          >
            <circle cx="123" cy="132" r="122" /> 
            <rect x="134" y="169" rx="0" ry="0" width="9" height="7" /> 
            <rect x="23" y="272" rx="8" ry="8" width="202" height="23" /> 
            <rect x="167" y="307" rx="0" ry="0" width="15" height="5" /> 
            <rect x="12" y="322" rx="7" ry="7" width="228" height="63" /> 
            <rect x="163" y="406" rx="9" ry="9" width="74" height="31" /> 
            <rect x="23" y="408" rx="24" ry="24" width="32" height="26" />
          </ContentLoader>
        )
    
}

export default LoadingBlock;
