exports.eMessage = async (message) => {
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Copywriting Services</title>
        </head>
        <body>
            <div>
            ${message}
            </div>
        </body>
        </html>
    `;

    return html;
}