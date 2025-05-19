import React, { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export const KakaoMap: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=21aee1ad1a6c7b68b88f9d3fc7394a1f&autoload=false";
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        if (!container) return;

        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.9780),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(37.5665, 126.9780),
        });

        marker.setMap(map);
      });
    };

    script.onerror = (e) => {
      console.error("Failed to load Kakao Map script:", e);
    };

    document.head.appendChild(script);
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }} />;
};
