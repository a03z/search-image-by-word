import React, { useState } from 'react'
import './App.css'
import '../node_modules/reseter.css/css/reseter.min.css'
import Form from './form/Form'
import unsplash from './API/api'
import MappedImages from './components/MappedImages'

interface SearchI {
    searchImage: string
}

function App() {
    // prettier-ignore
    const [images, setImages] = useState<Array<{ id: number; urls: { regular: string } }>>([])

    const getPhotos = async (data: SearchI) => {
        const res = await unsplash.get(
            `/search/photos?query=${data.searchImage}&per_page=100`
        )
        setImages(res.data.results)
    }

    return (
        <div className="App">
            <h1 className="mainHeading">Search image by keyword </h1>
            <Form onSubmit={getPhotos} />
            <MappedImages images={images} />
        </div>
    )
}

export default App
