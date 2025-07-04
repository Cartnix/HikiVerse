export default function FormApp() {
    return (
        <form action="#" method="POST">
            <h2 className="statValue">Feedback</h2>
            <div style={{
                display: 'flex', 
                flexDirection: 'column',
                gap: 20,
            }}>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password"/>
                <textarea name="message" placeholder="Enter your message..." rows="6"></textarea>
                <button style={{width: '30%', alignSelf: 'center'}}>POST</button>
            </div>
        </form>
    )
}