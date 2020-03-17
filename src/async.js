export function wait(delay=1000) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
}