import React, { useEffect, useState } from 'react';

const { kakao } = window;

const Home = () => {
    const [information, setInformation] = useState('');

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
        const position = [
            {
                title: '베스킨 라빈스 31',
                latlng: new kakao.maps.LatLng(35.843628, 127.127320),
                content: '베스킨 라빈스 31'
            },
        ]
        const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
        for (let i = 0; i < position.length; i++) {
            let imageSize = new kakao.maps.Size(24, 35);
            let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
            let marker = new kakao.maps.Marker({
                map: map,
                position: position[i].latlng,
                title: position[i].title,
                image: markerImage
            });
            kakao.maps.event.addListener(marker, 'mouseover', MakeOverListener(position));
            function MakeOverListener(position) {
                setInformation(position[i].content);
            }
        }
    }, []);

    return (
        <div>
            <div id='myMap' style={{
                width: '500px',
                height: '500px'
            }}>
            </div>
            <div id="information">
                {information}
            </div>
        </div>
    );
}

export default Home;