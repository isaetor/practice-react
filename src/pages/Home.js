import { useToggle } from "../hooks/useToggle"

export const Home = ()=>{
    const [isVisible, toggle] = useToggle()
    return (
    <div>
        <button onClick={toggle}>{ isVisible ? "Hide" : "Show"}</button>
        {isVisible && <h1>This is my hidden text</h1>}
    </div>
    )
}