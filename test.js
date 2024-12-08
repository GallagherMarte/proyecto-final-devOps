const fs = require('fs');
const path = require('path');

test('Verificar contenido de index.html', () => {
    const filePath = path.join(__dirname, 'index.html');
    const htmlContent = fs.readFileSync(filePath, 'utf8');
    expect(htmlContent).toContain('<h1>Hola Mundo</h1>');
});
