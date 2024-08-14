import { useState } from "react";

export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState("black");

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: color,
        }}>
            <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
            <button>Generate Random Color</button>
        </div>
    );
}