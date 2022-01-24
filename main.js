import canvas from 'canvas';
import fs from 'fs';

function save(picture) {
        const buffer = picture.toBuffer();
        fs.writeFileSync('./image.png', buffer);
}

function main() {
        const picture = canvas.createCanvas(400, 400);
        const context = picture.getContext('2d');
        const gradient = context.createLinearGradient(30,100, 230, 175);
        
        gradient.addColorStop(0, 'green');
        gradient.addColorStop(.5, 'yellow');
        gradient.addColorStop(1, 'green');
        context.strokeStyle = gradient;
        context.strokeRect(30, 100, 200, 75);
        context.font = '30px Impact'
        context.rotate(0)
        context.fillStyle = 'Blue'
        context.fillText('Bonjour!', 80, 150)

        save(picture);
}

main();
        