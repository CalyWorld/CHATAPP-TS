import "../miniCard/loading.css";
export const renderLoadingAnimation = () => {
    const dots = [];
    for (let i = 0; i < 3; i++) {
        dots.push(
            <div key={i} className="loading-dot">.</div>
        );
    }
    return dots;
}