import react from 'react';
import { AiFillCaretDown, AiFillGithub, AiOutlineClose, AiOutlineDown, AiOutlineFileText } from 'react-icons/ai';
import { FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiBootstrap, SiExpress, SiRedux, SiTailwindcss, SiMysql } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';



export const JSIcon = () => {
    return <FaJs style={{ color: "yellow", fontSize: "1.5rem" }} />;
};

export const JSXIcon = () => {
    return <FaReact style={{ color: "lightblue", fontSize: "1.5rem" }} />
}

export const CloseIcon = () => {
    return <AiOutlineClose style={{ color: "whitesmoke", fontSize: "0.8rem", fontWeight: "bold" }} />
}

export const HTMLIcon = () => {
    return <FaHtml5 style={{ backgroundColor: "orange", fontSize: "1.5rem" }} />
}

export const TailwindIcon = () => {
    return <SiTailwindcss style={{ fontSize: "1.5rem", color: "lightblue" }} />
}

export const ReduxIcon = () => {
    return <SiRedux style={{ fontSize: "1.5rem", color: "violet" }} />
}

export const BootstrapIcon = () => {
    return <SiBootstrap style={{ fontSize: "1.5rem", color: "blueviolet" }} />
}

export const NodeJSIcon = () => {
    return <FaNodeJs style={{ fontSize: "1.5rem", color: "green" }} />
}

export const ExpressJSIcon = () => {
    return <SiExpress style={{ fontSize: "1.5rem", color: "green" }} />
}

export const MongoDBIcon = () => {
    return <DiMongodb style={{ fontSize: "1.5rem", color: "green" }} />
}

export const MySQLIcon = () => {
    return <SiMysql style={{ fontSize: "1.5rem", color: "smokewhite" }} />
}

export const GitHubIcon = () => {
    return <AiFillGithub style={{ fontSize: "1.5rem" }} />
};


export const TextFileIcon = () => {
    return <AiOutlineFileText style={{ fontSize: "1.5rem", color: "skyblue" }} />
}

export const DownIcon = () => {
    return <AiOutlineDown style={{ fontSize: "1.5rem", }} />
}