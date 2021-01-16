import React from 'react';
import * as $ from './MainMoodView';

const MainMood: React.FC = () => {
    return (
        <>
            <$.MainMood>
                <$.ButtonOne>전체</$.ButtonOne>
                <$.ButtonTwo>로맨틱한</$.ButtonTwo>
                <$.ButtonThree>신나는</$.ButtonThree>
                <$.ButtonFour>시크한</$.ButtonFour>
                <$.ButtonFive>자유로운</$.ButtonFive>
            </$.MainMood>
        </>
    );
}

export default MainMood;
