import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUtensils, faCoffee, faLandmark } from "@fortawesome/free-solid-svg-icons";


const { kakao } = window;

const Home = () => {
    const [title, setTitle] = useState('');
    const [information, setInformation] = useState("");
    const [kind, setKind] = useState("food");
    const food = [
        {
            title: '서래 갈매기',
            latlng: new kakao.maps.LatLng(35.842662, 127.128264),
            content: '항상 사람이 꽉~ 차있는 서래 갈매기. 갈매기 살에 뜨끈한 된장찌개까지 드셔보세요!!'
        },
        {
            title: '오늘김해뒷고기',
            latlng: new kakao.maps.LatLng(35.843023, 127.128489),
            content: '보다 저렴한 가격으로 뒷고기를 드시고 싶으시면 오늘김해뒷고기로 오셔서 드세요~ 볶음밥도 맛있답니다.'
        },
        {
            title: '홍곱창',
            latlng: new kakao.maps.LatLng(35.842040, 127.128102),
            content: '야채곱창 양이 1인분이 1인분이 아닙니다. 상당히 많고 비린내도 안나요~ 추천드립니다!'
        }
    ]
    const cafe = [
        {
            title: '베스킨 라빈스 31',
            latlng: new kakao.maps.LatLng(35.843628, 127.127320),
            content: '맛있는 걸 먹었으면 시~원한 아이스크림 어떠세요??'
        },
    ]
    const tour = [
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
    useEffect(() => {
        let position;
        if (kind === 'food') {
            position = food;
        } else if (kind === 'cafe') {
            position = cafe;
        } else if (kind === "tour") {
            position = tour;
        }
        const container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스.
        const options = {
            center: new kakao.maps.LatLng(35.844126, 127.131557), //지도의 중심좌표.
            level: 5 //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, options);
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
        setKind(name);
    }
    return (
        <div className="mapContainer">
            <div id='myMap'>
            </div>
            <div className="explain">
                <div>
                    {title}
                </div>
                <div>
                    {information}
                </div>
            </div>
            <div >
                <div>
                    <a className="waves-effect waves-light btn" onClick={onSelect} name="food">
                        <FontAwesomeIcon
                        icon={faUtensils}
                        color="blue"
                        size="1x"
                        style={{marginRight:10}}
                    />Food</a>
                    <a className="waves-effect waves-light btn" onClick={onSelect} name="cafe">
                        <FontAwesomeIcon
                            icon={faCoffee}
                            color="blue"
                            size="1x"
                            style={{ marginRight: 10 }}
                        />Cafe</a>
                    <a className="waves-effect waves-light btn" onClick={onSelect} name="tour">
                        <FontAwesomeIcon
                            icon={faLandmark}
                            color="blue"
                            size="1x"
                            style={{ marginRight: 10 }}
                        />Tour</a>
                </div>
            </div>
        </div>
    );
}

export default Home;