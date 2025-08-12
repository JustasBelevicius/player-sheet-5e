import { useCallback, useEffect, useState } from "react";

export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

     const updateIsMobile = useCallback(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileKeywords = [
            'android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry',
            'windows phone', 'mobile', 'tablet'
        ];
        
        const isMobileDevice = mobileKeywords.some(keyword => 
            userAgent.includes(keyword)
        );
        
        const isSmallScreen = window.innerWidth <= 768;
        
        setIsMobile(isMobileDevice || isSmallScreen);
    }, []);

    useEffect(() => {
        updateIsMobile();
        window.addEventListener('resize', updateIsMobile);
        return () => {
            window.removeEventListener('resize', updateIsMobile);
        };
    }, []);

    return isMobile;
}
