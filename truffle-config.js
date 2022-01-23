module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  environments: {
    /* ... other environments */

    development: {
      ipfs: {
        address: 'http://localhost:5001',
      }
    }
  }
};