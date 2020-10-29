import React from 'react'
import './category-list.css'

function CategoryList() {
    const categories = [
        {
            name: 'Sneakers Hommes',
            link: 'https://i.ibb.co/c2NKkKB/SNEAKER-DESK.jpg'
        },
        {
            name: 'Lisseurs',
            link: 'https://i.ibb.co/G33hLhp/LISSEUR-DESK.jpg'
        },
        {
            name: 'Ustensiles',
            link: 'https://i.ibb.co/C1p0CDh/CUISINE-DESK.jpg'
        },
        {
            name: 'Shorts Hommes',
            link: 'https://i.ibb.co/THbq6vw/SHORT-DESK.jpg'
        },
        {
            name: 'Robes',
            link: 'https://i.ibb.co/5rqLc1Z/hp-desktop-robe.png'
        },
        {
            name: 'Rasage',
            link: 'https://i.ibb.co/C8KMfJ1/RASAGE-DESK.jpg'
        },
        {
            name: 'Robot & Blender',
            link: 'https://i.ibb.co/VTSVPpb/BLENDER-DESK.jpg'
        },
        {
            name: 'Smartwatchs',
            link: 'https://i.ibb.co/wwB1kCB/SMARTWATCH-DESKs.jpg'
        },
        {
            name: 'T-Shirts Hommes',
            link: 'https://i.ibb.co/88MJj01/TSHIRT-DESK.jpg'
        },
        {
            name: 'Maquillage',
            link: 'https://i.ibb.co/VTSVPpb/BLENDER-DESK.jpg'
        },
        {
            name: 'Maillots Femmes',
            link: 'https://i.ibb.co/VTSVPpb/BLENDER-DESK.jpg'
        },
        {
            name: 'Crémes',
            link: 'https://i.ibb.co/VTSVPpb/BLENDER-DESK.jpg'
        },
    ]
    return (
        <div className="categories-list">
            <div className="container">
                <div className="row categories-list_rows">
                    {categories.map((category, index) => (
                        <div key={index} className="card categories-list_card">
                            <img className="card-img-top" src="https://via.placeholder.com/150x80" />
                            <div className="card-body p-2">
                                <p className="card-text">{category.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryList;
