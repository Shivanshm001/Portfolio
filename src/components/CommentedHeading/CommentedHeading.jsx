import React from 'react'

export default function CommentedHeading({ title, style }) {
    return <h1 className={`text-green-600 border-b border-stone-600 py-4 ${style}`}>// {title}</h1>
}