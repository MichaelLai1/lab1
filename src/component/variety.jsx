import React from "react";

const Variety = ({ name, imgSrc, url, description }) => {
    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
                display: "block",
                width: "300px",
                border: "1px solid #ccc",
                borderRadius: "12px",
                overflow: "hidden",
                textDecoration: "none",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s ease-in-out"
                
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
            <img 
                src={imgSrc} 
                alt={name} 
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "12px", color: "#333", backgroundColor: "#fff" }}>
                <h3 style={{ margin: 0 }}>{name}</h3>
                {description && (
                    <p style={{ marginTop: "4px", fontSize: "14px", color: "#777" }}>
                        {description}
                    </p>
                )}
            </div>
        </a>
    );
};

export default Variety;