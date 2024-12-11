import React from "react";
import Card from "./card.jsx";

let content01 = 0;
let content02 = 0;
let content03 = 0;
let content04 = 0;
let content05 = 0;
let content06 = 0;

const SecondsCounter = (props) => {
    const nums = SeparateDigits(props.seconds);
    content01 = nums[nums.length - 1];

    if ((nums[nums.length - 2]) != undefined)
        content02 = nums[nums.length - 2];
    else
        content02 = 0;

    if ((nums[nums.length - 3]) != undefined)
        content03 = nums[nums.length - 3];
    else
        content03 = 0;

    if ((nums[nums.length - 4]) != undefined)
        content04 = nums[nums.length - 4];
    else
        content04 = 0;

    if ((nums[nums.length - 5]) != undefined)
        content05 = nums[nums.length - 5];
    else
        content05 = 0;

    if ((nums[nums.length - 6]) != undefined)
        content06 = nums[nums.length - 6];
    else
        content06 = 0;

    return (
        <div class="d-flex justify-content-center align-items-center p-3 bg-dark">
            <Card content={<i class="fa-regular fa-clock"></i>} />
            <Card content={content06} />
            <Card content={content05} />
            <Card content={content04} />
            <Card content={content03} />
            <Card content={content02} />
            <Card content={content01} />
        </div>
    );
};

function SeparateDigits(num) {
    const digitos = num.toString().split('');
    return digitos.map(digito => parseInt(digito, 10));
}

export default SecondsCounter;