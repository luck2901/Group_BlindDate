import React, { useEffect, useState } from 'react';

const { kakao } = window;

const Home = () => {
    const [title, setTitle] = useState('');
    const [information, setInformation] = useState("");
    const [kind, setKind] = useState("food");

    useEffect(() => {
        const container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스.
        const options = {
            center: new kakao.maps.LatLng(35.844126, 127.131557), //지도의 중심좌표.
            level: 5 //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, options);

        // if (navigator.geolocation) {

        //     // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        //     navigator.geolocation.getCurrentPosition(function (position) {

        //         let lat = position.coords.latitude, // 위도
        //             lon = position.coords.longitude; // 경도

        //         let locPosition = new kakao.maps.LatLng(lat, lon) // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다

        //         // 마커와 인포윈도우를 표시합니다
        //         displayMarker(locPosition);

        //     });

        // } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

        //     let locPosition = new kakao.maps.LatLng(33.450701, 126.570667)

        //     displayMarker(locPosition);
        // }


        // // 지도에 마커와 인포윈도우를 표시하는 함수입니다
        // function displayMarker(locPosition) {

        //     // 마커를 생성합니다
        //     let marker = new kakao.maps.Marker({
        //         map: map,
        //         position: locPosition
        //     });

        //     // 지도 중심좌표를 접속위치로 변경합니다
        //     map.setCenter(locPosition);
        // }
        let position;
        if (kind === 'food') {

            position = [
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
        } else if (kind === 'cafe') {
            position = [
                {
                    title: '베스킨 라빈스 31',
                    latlng: new kakao.maps.LatLng(35.843628, 127.127320),
                    content: '맛있는 걸 먹었으면 시~원한 아이스크림 어떠세요??'
                },
            ]
        } else if (kind === "tour") {
            position = [
                {
                    title: '한국소리문화의전당',
                    latlng: new kakao.maps.LatLng(35.855508, 127.138294),
                    content: '전국에서 여섯 번째로 문화행사와 공연이 많이 열리는 곳이며, 도시로 치면 서울과 부산 다음가는 수치를 보여주는 한국 소리문화의 전당입니다.'
                },
                {
                    title: '덕진체련공원',
                    latlng: new kakao.maps.LatLng(35.853134, 127.140868),
                    content: '덕진체련공원은 스포츠 시설로 축구 경기장, 테니스 경기장, 배드민턴 경기장이 갖춰져 있습니다. '
                },
                {
                    title: '전주동물원',
                    latlng: new kakao.maps.LatLng(35.857816, 127.144227),
                    content: '좋은 시설과 동물들의 자유, 생태 환경을 제공하는 전주동물원으로 오세요. 벚꽃이 피는 시기에는 야간개장도 열린답니다!'
                },

                {
                    title: '전북대학교 건지광장',
                    latlng: new kakao.maps.LatLng(35.846902, 127.129397),
                    content: '전통 누각과 지당, 병풍 조형물, 청운정, 원형수반 등 가장 한국적인 캠퍼스 전북대를 보러 오세요~'
                },
                {
                    title: '덕진공원',
                    latlng: new kakao.maps.LatLng(35.848963, 127.122888),
                    content: '전주 시민들의 낭만이 고스란히 담긴 덕진공원으로 당신을 초대합니다.'
                },

                {
                    title: '전북대학교 중앙도서관',
                    latlng: new kakao.maps.LatLng(35.848319, 127.131920),
                    content: '전북대학교를 둘러보다 쉬고싶을 때 중앙도서관으로 와보세요'
                },
                {
                    title: '전북대학교 신정문',
                    latlng: new kakao.maps.LatLng(35.841110, 127.131825),
                    content: '가장 한국적인 캠퍼스 전북대학교로 들어가는 한옥 정문입니다. 밤에 더 이뻐요'
                },
            ]
        }

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
    }, [kind]);

    const onSelect = (e) => {
        const { name } = e.target;
        if (name === '음식점') {
            setKind("food");
        } else if (name === "카페") {
            setKind("cafe");
        } else if (name === "관광지") {
            setKind("tour");
        }

    }
    return (
        <div className="mapContainer">
            <div id='myMap'>
            </div>
            <div >
                <div>
                    <button onClick={onSelect} name="음식점">음식점</button>
                    <button onClick={onSelect} name="카페">카페</button>
                    <button onClick={onSelect} name="관광지">관광지</button>
                </div>
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