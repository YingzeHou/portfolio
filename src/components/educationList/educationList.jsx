import "./educationList.scss"

export default function EducationList({title, active, setSelected, id}) {
    const handleClick = (id) => {
        setSelected(id);
        
    }
    return (
        <li className={active ? "educationList active": "educationList"} onClick={()=>handleClick(id)}>
            {title}
        </li>
    )
}
