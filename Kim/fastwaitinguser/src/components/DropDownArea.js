import { Component, useState } from 'react';
import './DropDownArea.css';

const DropDownArea = () => {
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedGu, setSelectedGu] = useState("");

    const handleRegionChange = (e) => {
        setSelectedRegion(e.target.value); //선택된 지역을 업데이트
        setSelectedGu(''); // 구 선택 메뉴 초기화
    };

    const handleGuChange = (e) => {
        setSelectedGu(e.target.value); //선택된 구를 업데이트
    };

    const getGusByRegion = (region) => {
        //선택된 지역의 구를 반환한다
        if(region == "서울") {
            return ["강남구", "강동구", "강북구", "강서구"];
        } else if (region == "경기") {
            return ["가평군", "고양시", "과천시", "광명시"];
        } else if (region == "인천") {
            return ["남동구", "동구", "서구", "부평구"];
        } else {
            return []; //선택된 지역이 없을 경우엔 빈 배열을 반환한다
        }
    };

    const gus = getGusByRegion(selectedRegion); //선택된 지역에 해당하는 구들을 가져온다

    return (
        <div className='DropDownArea-box'>
            <div className='CustomSelect-box'>
                <CustomSelect 
                    value = {selectedRegion}
                    onChange = {handleRegionChange}
                    options = {["서울", "경기", "인천"]}
                    className = "area-list"
                />
            </div>
            <div className='CustomSelectSub-box'>
                <CustomSelect 
                    value = {selectedGu}
                    onChange = {handleGuChange}
                    options = {gus}
                    //disabled={!selectedRegion} 지역이 선택되지 않았을 때 비활성화
                />
            </div>
            {selectedRegion && selectedGu && (
                <CustomSelectSub selectedGu = {selectedGu} />
            )}
        </div>
    );

};

const CustomSelect = ({label, value, onChange, options}) => {
    return (
        <div>
            <label>{label}</label>
            <select value={value} onChange={onChange} className='CustomSelect-list'>
                <option value="">지역을 선택해주세요</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

const CustomSelectSub = ({selectedGu}) => {
    //선택된 구에 대한 처리 로직을 작성하기
    return (
        <div>

        </div>
    );
};

export default DropDownArea;