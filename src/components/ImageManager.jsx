import React from 'react';

const ImageManager = ({ images, onUpload }) => {
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = (ev) => {
                const imageName = file.name;
                const imageSrc = ev.target.result;
                onUpload(imageName, imageSrc);
            };
            reader.readAsDataURL(file);
        });
    };

    return (
        <div className="relative">
            <h3 className='mb-1 text-lg font-bold text-slate-400'>Images</h3>
            <ul>
                {Object.keys(images).map((imageName) => (
                    <li
                        key={imageName}
                        className='pl-2'
                    >{imageName}</li>
                ))}
            </ul>
            <label htmlFor='imageInput'
                className='absolute text-2xl right-1 -top-1'
            >+</label>
            <input
                className='hidden'
                id='imageInput'
                type="file"
                onChange={handleImageUpload}
                multiple />
        </div>
    );
};

export default ImageManager;
