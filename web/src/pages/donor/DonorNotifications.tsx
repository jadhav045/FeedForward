import useWebSocket from "../../hooks/useWebSocket";
export default function DonorNotifications () {
    const not=useWebSocket();
    return (
    <div>
        <h1>DonorNotifications</h1>
        <div>{not.map((n,i)=><div key={i}>{n}</div>)}</div>
    </div>
    );
}