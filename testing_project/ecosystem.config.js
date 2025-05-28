module.exports = {
  apps: [
    {
      name: 'testing_project',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000',
      cwd: '/home/code/deploy/testing_project',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};