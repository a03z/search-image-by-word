import React from 'react'
import Masonry from 'react-masonry-css'

interface PropsI {
    images: Array<{ id: number; urls: { regular: string } }>
}

let MappedImages = (props: PropsI) => {
    let mapImages = () => {
        if (props.images.length > 0) {
            let mappedImages = props.images.map((img) => {
                return <img key={img.id} src={img.urls.regular} />
            })
            return (
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {mappedImages}
                </Masonry>
            )
        } else {
            return 'No images found'
        }
    }

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    }

    return <>{mapImages()}</>
}

export default MappedImages
