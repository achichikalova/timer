const input = process.argv.slice(2);

process.stdout.write('\x07');//sound
for (const sec of input) {
  if(sec >= 0 && !isNaN(sec)) {
    setTimeout(() => console.log(`. ${sec} s`), sec * 1000);
  }
}