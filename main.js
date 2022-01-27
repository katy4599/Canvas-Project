import canvas from 'canvas';
import fs from 'fs';

function save(picture) {
        const buffer = picture.toBuffer();
        fs.writeFileSync('./image.png', buffer);
}

function main() {
        const picture = canvas.createCanvas(400, 400);
        const context = picture.getContext('2d');
        const gradient = context.createLinearGradient(100,0, 300,0);
        

        gradient.addColorStop(0, 'green');
        gradient.addColorStop(.5, 'yellow');
        gradient.addColorStop(1, 'green');
        context.rotate(45 * Math.PI / 180);
        context.translate(200, 200);
        context.fillStyle = gradient;
        context.fillRect(-25, -300, 200, 200);
        save(picture);
}

main();
        