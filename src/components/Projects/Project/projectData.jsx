import url_shortener_img from '../../../assets/url-shortener-img.png';
import miui_notes_clone from '../../../assets/miui-notes-clone.png';

const projectData = [
    {
        "id": 1,
        "title": "URL_Shortener",
        "subTitle": "Full Stack",
        "startYear": 2023,
        "endYear": null,
        "imageLink": url_shortener_img,
        "websiteLink": "https://urlshortener-gr27.onrender.com/",
        "details": [
            "Used React Hooks, Context API.",
            "Used PostgreSQL, ExpressJS, to perform 'Create','Read','Update','Delete', (CRUD) operations.",
            "Styled using Tailwindcss.",
            "Helps in shortening long URL paths."
        ]
    },

    {
        "id": 2,
        "title": "Notes",
        "subTitle": "Frontend",
        "startYear": 2023,
        "endYear": 2023,
        "imageLink": miui_notes_clone,
        "websiteLink": "https://minotesclone.onrender.com/",
        "details": [
            "A clone of the MIUI Notes application",
            "Used react hooks useRef useEffect useState and react-router-dom",
            "Used redux and react-redux for global state management",
            "Styled using tailwindcss and react-icons"
        ]
    }
]


export default projectData;