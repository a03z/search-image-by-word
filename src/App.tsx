import React, { useState } from 'react'
import './App.css'
import '../node_modules/reseter.css/css/reseter.min.css'
import Form from './form/Form'
import unsplash from './API/api'
import Masonry from 'react-masonry-css'

interface SearchI {
    searchImage: string
}

function App() {
    const [images, setImages] = useState<
        Array<{ id: number; urls: { regular: string } }>
    >([])

    const onSubmit = async (data: SearchI) => {
        const res = await unsplash.get(
            `/search/photos?query=${data.searchImage}&per_page=35`
        )
        setImages(res.data.results)
    }

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    }
    return (
        <div className="App">
            <h1 className="mainHeading">Search image by keyword </h1>
            <Form onSubmit={onSubmit} />
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {images.map((img) => {
                    return <img key={img.id} src={img.urls.regular} />
                })}
            </Masonry>
        </div>
    )
}

export default App
