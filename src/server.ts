import app from './app';
import config from './app/config';

const port = config.PORT || 5050;

// Connection Related Function
async function main() {
  // Listen Server
  app.listen(port, () => {
    console.log(`Freelancer Server Is Running On PORT ${port}👨‍💻`);
  });
}

main();
