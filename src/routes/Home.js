import React, { useEffect, useState } from 'react';

const { kakao } = window;

const Home = () => {
    const [title, setTitle] = useState('');
    const [information, setInformation] = useState("");

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
        if (navigator.geolocation) {

            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(function (position) {

                let lat = position.coords.latitude, // 위도
                    lon = position.coords.longitude; // 경도

                let locPosition = new kakao.maps.LatLng(lat, lon) // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다

                // 마커와 인포윈도우를 표시합니다
                displayMarker(locPosition);

            });

        } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

            let locPosition = new kakao.maps.LatLng(33.450701, 126.570667)

            displayMarker(locPosition);
        }


        // 지도에 마커와 인포윈도우를 표시하는 함수입니다
        function displayMarker(locPosition) {

            // 마커를 생성합니다
            let marker = new kakao.maps.Marker({
                map: map,
                position: locPosition
            });

            // 지도 중심좌표를 접속위치로 변경합니다
            map.setCenter(locPosition);
        }
        const position = [
            {
                title: '베스킨 라빈스 31',
                latlng: new kakao.maps.LatLng(35.843628, 127.127320),
                content: '맛있는 걸 먹었으면 시~원한 아이스크림 어떠세요??'
            },
            {
                title: '서래 갈매기',
                latlng: new kakao.maps.LatLng(35.842662, 127.128264),
                content: '서래 갈매기'
            },
            {
                title: '오늘김해뒷고기',
                latlng: new kakao.maps.LatLng(35.843023, 127.128489),
                content: '김뒷'
            },
            {
                title: '홍곱창',
                latlng: new kakao.maps.LatLng(35.842040, 127.128102),
                content: '홍곱창'
            }
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
            kakao.maps.event.addListener(marker, 'click', function () {
                setTitle(position[i].title);
                setInformation(position[i].content);
            });
        }
    }, []);

    return (
        <div>
            <div id='myMap' style={{
                width: '500px',
                height: '500px'
            }}>
            </div>
            <div >
                <div>
                    {title}
                </div>
                <div>
                    {information}
                </div>
            </div>
        </div>
    );
}

export default Home;