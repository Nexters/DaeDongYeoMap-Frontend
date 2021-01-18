import React from 'react';
import styled from 'styled-components';

export const MainMood = styled.div`
    display: inline-block;
    position: absolute;
    top: 40px;
    right: 15px;
    z-index:3;
`

export const MoodButton = styled.button`
    border: none;
    outline: none;
    padding: 8px 16px;
    margin-right:10px;
    border: 1px solid #d0d0d0;
    border-radius: 16px;
    cursor: pointer;
    font-weight: 600;
    background-color: #fff;
    color: ${props => props.color || 'black'};
    &:hover {
        background: ${props => props.color || 'black'};
        color: #fff;
    };
    &:focus {
        background-color: ${props => props.color || 'black'};
        color: #fff;
    };
    &:active {
        background-color: ${props => props.color || 'black'};
        color: #fff;
    };
`
