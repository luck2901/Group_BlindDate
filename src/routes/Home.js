import React, { useEffect } from 'react';

const { kakao } = window;

const Home = () => {

    useEffect(() => {
        const container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스.
        const options = {
            center: new kakao.maps.LatLng(35.844126, 127.131557), //지도의 중심좌표.
            level: 5 //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, options);
        const clusterer = new kakao.maps.MarkerClusterer({
            map: map,
            averageCenter: true,
            minlevel: 2,
            styles: [{
                width: '53px', height: '52px',
                background: 'url(cluster.png) no-repeat',
                color: '#fff',
                textAlign: 'center',
                lineHeight: '54px'
            }]
        });
        const marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(35.843628, 127.127320)
        })
        clusterer.addMarker(marker);

    }, []);

    return (
        <div id='myMap' style={{
            width: '500px',
            height: '500px'
        }}></div>
    );
}

export default Home;