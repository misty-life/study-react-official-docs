export default function Gallery() {
    return (
        <section>
            <h1>Beautiful View</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}

function Profile() {
    return (
        <img
            src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"
            alt="Preview"
            width="150"
        />
    );
}