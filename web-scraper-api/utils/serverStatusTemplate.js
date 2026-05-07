const PRIMARY_COLOR = "#04aeaeff"; // Teal
const SECONDARY_COLOR = "#2c3e50";

/**
 * Server Status HTML Template
 */
const serverStatusTemplate = (port, env, appName = "Web Scraper API") => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${appName}  API - Server Status</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
        <style>
            :root {
                --primary: ${PRIMARY_COLOR};
                --secondary: ${SECONDARY_COLOR};
                --bg: #0f172a;
                --card-bg: rgba(30, 41, 59, 0.7);
                --text: #f8fafc;
                --text-muted: #94a3b8;
                --p-glow: rgba(4, 174, 174, 0.3);
            }

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: 'Outfit', sans-serif;
                background-color: var(--bg);
                color: var(--text);
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                overflow: hidden;
                position: relative;
            }

            /* Animated Background Blobs */
            .blob {
                position: absolute;
                width: 500px;
                height: 500px;
                background: linear-gradient(135deg, var(--primary) 0%, #3b82f6 100%);
                filter: blur(80px);
                border-radius: 50%;
                z-index: -1;
                opacity: 0.15;
                animation: float 20s infinite alternate;
            }

            .blob-1 { top: -10%; left: -10%; }
            .blob-2 { bottom: -10%; right: -10%; animation-delay: -10s; }

            @keyframes float {
                0% { transform: translate(0, 0) scale(1); }
                100% { transform: translate(50px, 50px) scale(1.1); }
            }

            .container {
                max-width: 600px;
                width: 90%;
                text-align: center;
                padding: 3rem;
                background: var(--card-bg);
                backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 24px;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 
                            0 0 20px var(--p-glow);
                animation: fadeIn 0.8s ease-out;
            }

            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }

            .logo {
                font-size: 3rem;
                font-weight: 700;
                margin-bottom: 1rem;
                background: linear-gradient(135deg, #fff 0%, var(--primary) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                letter-spacing: -1px;
            }

            .status-badge {
                display: inline-flex;
                align-items: center;
                padding: 0.5rem 1.25rem;
                background: rgba(4, 174, 174, 0.1);
                border: 1px solid var(--primary);
                border-radius: 9999px;
                color: var(--primary);
                font-weight: 600;
                font-size: 0.875rem;
                margin-bottom: 2rem;
            }

            .status-dot {
                width: 8px;
                height: 8px;
                background-color: var(--primary);
                border-radius: 50%;
                margin-right: 10px;
                box-shadow: 0 0 10px var(--primary);
                animation: pulse 2s infinite;
            }

            @keyframes pulse {
                0% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.5; transform: scale(1.2); }
                100% { opacity: 1; transform: scale(1); }
            }

            .info-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1.5rem;
                margin-top: 2rem;
                text-align: left;
            }

            .info-item {
                background: rgba(255, 255, 255, 0.03);
                padding: 1.25rem;
                border-radius: 16px;
                border: 1px solid rgba(255, 255, 255, 0.05);
            }

            .info-label {
                font-size: 0.75rem;
                color: var(--text-muted);
                text-transform: uppercase;
                letter-spacing: 0.05em;
                margin-bottom: 0.5rem;
            }

            .info-value {
                font-size: 1.125rem;
                font-weight: 600;
                color: var(--text);
            }

            .footer {
                margin-top: 3rem;
                font-size: 0.875rem;
                color: var(--text-muted);
            }

            .footer strong {
                color: var(--text);
            }

            @media (max-width: 480px) {
                .info-grid { grid-template-columns: 1fr; }
                .container { padding: 2rem; }
            }
        </style>
    </head>
    <body>
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>

        <div class="container">
            <h1 class="logo">${appName}</h1>
            <div class="status-badge">
                <span class="status-dot"></span>
                API Server is Running
            </div>
            
            <p style="color: var(--text-muted); margin-bottom: 2rem;">
                The backend infrastructure is active and ready to handle requests.
            </p>

            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">Port</div>
                    <div class="info-value">${port}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Environment</div>
                    <div class="info-value" style="text-transform: capitalize;">${env}</div>
                </div>
            </div>

            <div class="footer">
                &copy; ${new Date().getFullYear()} <strong>${appName}</strong>. All rights reserved.
            </div>
        </div>
    </body>
    </html>
  `;
};

module.exports = {
    serverStatusTemplate,
};
