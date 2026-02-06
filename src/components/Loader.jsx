export default function Loader() {
    return (
        <div style={styles.wrapper}>
            <div style={styles.spinner}></div>
        </div>
    );
}

const styles = {
    wrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
    },
    spinner: {
        width: "40px",
        height: "40px",
        border: "4px solid #ddd",
        borderTop: "4px solid #3498db",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
    },
};
