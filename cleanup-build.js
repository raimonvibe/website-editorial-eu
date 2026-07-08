const fs = require('fs');
const path = require('path');

function removeTextFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      removeTextFiles(filePath);
    } else if (file.endsWith('.txt')) {
      fs.unlinkSync(filePath);
      console.log(`Removed: ${filePath}`);
    }
  });
}

const outDir = path.join(__dirname, 'out');
if (fs.existsSync(outDir)) {
  console.log('Cleaning up .txt files from build output...');
  removeTextFiles(outDir);
  console.log('Cleanup complete!');
} else {
  console.log('Output directory not found');
}
