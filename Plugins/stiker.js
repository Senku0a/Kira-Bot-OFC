const { downloadContentFromMessage } = require('@whiskeysockets/baileys') 
const { writeFile, readFile } = require('fs').promises; 
const webp = require('webp-converter')
const path = require('path')
const Jimp = require('jimp')
const ffmpeg = require('fluent-ffmpeg')

async function downloadMediaMessageS(mediaMessage) {
const stream = await downloadContentFromMessage(mediaMessage, 'image');
let buffer = Buffer.from([]);
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
return buffer;
}

async function convertToSticker(buffer) {
const inputPath = path.join(__dirname, '../tmp/input.jpg');
const outputPath = path.join(__dirname, '../tmp/output.webp');
await writeFile(inputPath, buffer);
const image = await Jimp.read(inputPath);
await image.resize(512, 512).writeAsync(inputPath);
await new Promise((resolve, reject) => {
ffmpeg(inputPath)
.outputOptions([
'-vcodec', 'libwebp',
'-vf', 'scale=512:512:force_original_aspect_ratio=decrease',
'-q:v', '80',
'-lossless', '1',
'-preset', 'default',
'-an', '-vsync', '0'
])
.output(outputPath)
.on('end', resolve)
.on('error', reject)
.run();
});
const stickerBuffer = await readFile(outputPath);
return stickerBuffer;
}

module.exports = { downloadMediaMessageS, convertToSticker }