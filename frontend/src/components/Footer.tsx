export default function Footer() {

    const date: Date = new Date()
    const displayDate: number = date.getFullYear();

    return (
        <>
            <footer style={{ textAlign:"center", width:"50%", borderTop: "2px solid gray"}}>
                <address>
                    <p>
                        Gavin W. &copy; { displayDate }
                    </p>
                </address>
            </footer>
        </>
    );
}