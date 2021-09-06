import React from 'react'

const Category = ({ category, categoryCount }) => {
    return (
        <>
        <h3 className="font-serif text-white text-2xl font-medium block mt-16">
            {category}
        </h3>
        <span className="mt-3 text-sm text-white">{categoryCount}</span>
        </>
        )
}

export default Category
