"use client";
import React from 'react'
import Image from 'next/image';
import { CustomButtonProps } from '@/types';

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon }: CustomButtonProps) => {
    return (
        <button className={`custom-btn ${containerStyles}`} disabled={false} type={btnType || "button"} onClick={handleClick}>
            <span className={`flex-1 ${textStyles}`}>{title}</span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image src={rightIcon} fill alt='right-icon' className='object-contain' />
                </div>
            )}
        </button>
    )
}

export default CustomButton;